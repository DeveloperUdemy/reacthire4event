
import React, { useState, useEffect, useRef, Fragment } from 'react';

import { CKEditor } from 'ckeditor4-react';
import { useNavigate } from 'react-router-dom';
import { Formik, FieldArray, useFormik, Field } from 'formik';

import { EditArtistFormValidation } from '../schemas/EditArtistProfile';
import axios from 'axios';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import { FaRegUserCircle, FaUpload, FaRegTrashAlt } from "react-icons/fa";
import Previewimage from './Previewimage';


function Editartist() { 
    const [artistDetail, setArtistDetail] = useState([]);
    const [artistPrimaryImage, setArtistPrimaryImage] = useState('');
    const navigate = useNavigate();

    function getArtistProfile() {
      let userID = (JSON.parse(localStorage.getItem('loginAuth')));
      const Mainurl = 'https://hire4event.com/apppanel/'; 
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const values = {
       'register_id': userID.userProfile.id,
     };
     const url = Mainurl + 'api/artist/singleartist';
        axios.post(url, values, { headers })
       .then(resp => {
           setArtistDetail(resp.data.artistSingle);
           setArtistPrimaryImage(resp.data.artistSingle.image);
           //console.log(resp.data.artistSingle);
       })
       .catch(function (error) {
        navigate('/create-artist-profile');
       });
      }
      useEffect( () => {
        window.scrollTo(0, 0);
        getArtistProfile();
      },[])


  let userID = (JSON.parse(localStorage.getItem('loginAuth'))); 
  const postParamValues = {
    user_image: "",
    first_name: artistDetail.first_name,
    last_name: artistDetail.last_name,
    email: artistDetail.email,
    mobile: artistDetail.mobile,
    category: artistDetail.category,
    city: artistDetail.city,
    performance_duration: artistDetail.performance_duration,
    open_to_travel: artistDetail.open_to_travel,
    music_genre: artistDetail.music_genre,
    team_members: artistDetail.team_members,
    location: artistDetail.location,
    artist_keyword: artistDetail.keyword,
    description: artistDetail.description,
    register_id: userID.userProfile.id
  }
  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const Mainurl = 'https://hire4event.com/apppanel/';
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues: postParamValues,
    enableReinitialize: true,
    validationSchema: EditArtistFormValidation,
    onSubmit: async (values, action) => {
       //console.log(values);
       setError("");

      //  Start Form Value To API 
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl + 'api/Artist/addupdate';
       axios.post(url, values, { headers })
        .then(resp => {
          setSuccess(resp.data.message);
          navigate('/artist-upload-photo-video');
        })
        .catch(function (error) {
          if (error.response) {
            setError(error.response.data.message);
          }
          console.log(error.response.data.message);
        });
        //  Stop Form Value To API 
    },
  });
    const fileRef= useRef(null);
    let newIMGShow = artistPrimaryImage;
    if (artistPrimaryImage) {
    let myIMG = artistPrimaryImage;
    let newIMG = myIMG.replace("https://www.hire4event.com/artistimage/", "");
     newIMGShow = newIMG.replace("https://hire4event.com/artistimage/", "");
    }
    return (
      
    <Fragment>
        <Userheader />
        <section class="space-ptb bg-light">
        <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-4">
         <Usersidebar />
        </div>


<div class="col-lg-9 col-md-8">
        <div class="sidebar mb-0">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"> <FaRegUserCircle style={{fontSize: "22px"}}/> My Artist Profile </h6>
            </div>
            <div class="widget-content">
              
              
              <form  onSubmit={handleSubmit} enctype="multipart/form-data">
              <div class="form-row">
                <div class="col-md-3">
                <div class="text-center"> 
                {values.user_image ? <Previewimage file={values.user_image} /> : <img src={Mainurl+'assets/artistimage/'+newIMGShow} class="avatar img-circle" id="ArtistPic" alt="Artist Profile" style={{width:"100%",height: "200px", marginBottom: "15px"}} /> }
                <input type="file" name="user_image" ref={fileRef} hidden onChange={(event) => {
                  setFieldValue("user_image", event.target.files[0]);
                }} onBlur={handleBlur} class="form-control" />
                 <div onClick={() => {
                  fileRef.current.click();
                 }} class="form-control btn btn-secondary"><FaUpload style={{ fontSize: "20px" }}/> Upload Photo</div>
                {errors.user_image && touched.user_image ? (<div class="error">{errors.user_image}</div>) : null}
                </div>
                </div>  
                  
                <div class="col-md-9">
                <div class="row">      
                <div class="form-group col-md-6">
                  <label>First name*</label>
                  <input type="text" required="" placeholder='Enter first name' class="form-control" name="first_name" onChange={handleChange} onBlur={handleBlur} value={values.first_name} />
                  {errors.first_name && touched.first_name ? (<div class="error">{errors.first_name}</div>) : null}
                </div>
                <div class="form-group col-md-6">
                  <label>Last name*</label>
                  <input type="text" required="" placeholder='Enter last name' class="form-control" name="last_name" onChange={handleChange} onBlur={handleBlur} value={values.last_name} />
                  {errors.last_name && touched.last_name ? (<div class="error">{errors.last_name}</div>) : null}
                </div>
                <div class="form-group col-md-6">
                  <label>Email Address*</label>
                  <input type="text" class="form-control" placeholder='Enter email address' name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                  {errors.email && touched.email ? (<div class="error">{errors.email}</div>) : null}
                </div>
                <div class="form-group col-md-6">
                  <label>Mobile No*</label>
                  <input type="number" class="form-control" placeholder='Enter mobile number' name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                  {errors.mobile && touched.mobile ? (<div class="error">{errors.mobile}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>Category*</label>
                 <select class="form-control" value={values.category} onChange={handleChange} name="category">
                    <option value="">Select Categories</option>
                    <option>Painter</option>
                    <option>Sketch Artist</option>
                    <option>Magician</option>
                    <option>Singer</option>
                    <option>Folk Singer</option>
                    <option>Dancer</option>
                    <option>Group Dancer</option>
                    <option>Comedian</option>
                    <option selected="">Anchor</option>
                    <option>Host</option>
                    <option>Hostess</option>
                    <option>Emcee</option>
                    <option>DJ</option>
                    <option>Spiritual Person</option>
                    <option>Belly Dancer</option>
                    <option>Makeup Artist</option>
                    <option>Model</option>
                    <option>Speaker</option>
                    <option>Bollywood Dance</option>
                    <option>Bhangra Group</option>
                    <option>Traditional Dance Group</option>
                    <option>Traditional Singing Group</option>
                    <option>Instrumentalist</option>
                    <option>Band</option>
                    <option>Actor/Actress </option>
                    <option>Photographer</option>
                    <option>Dance Troupe</option>
                    <option>Motivational speaker</option>
                    <option>Poet</option>
                    <option>Celebrity</option>
                    <option>Unique act performer</option>
                    </select>
                    {errors.category && touched.category ? (<div class="error">{errors.category}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>City*</label>
                  <input type="text" class="form-control" placeholder='Eg: Delhi,Noida,Gurugram etc.' name="city" onChange={handleChange} onBlur={handleBlur} value={values.city} />
                  {errors.city && touched.city ? (<div class="error">{errors.city}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>Performance Duration*</label>
                  <input type="text" class="form-control" placeholder='Eg: 2 Houres' name="performance_duration" onChange={handleChange} onBlur={handleBlur} value={values.performance_duration} />
                  {errors.performance_duration && touched.performance_duration ? (<div class="error">{errors.performance_duration}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>Open To Travel*</label>
                  <input type="text" class="form-control" placeholder='Eg: Yes/No' name="open_to_travel" onChange={handleChange} onBlur={handleBlur} value={values.open_to_travel} />
                  {errors.open_to_travel && touched.open_to_travel ? (<div class="error">{errors.open_to_travel}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>Music/Genre*</label>
                  <input type="text" class="form-control" placeholder='Eg: Bollywood, Hollywood, Punjabi etc.' name="music_genre" onChange={handleChange} onBlur={handleBlur} value={values.music_genre} />
                  {errors.music_genre && touched.music_genre ? (<div class="error">{errors.music_genre}</div>) : null}
                </div>
                
                <div class="form-group col-md-6">
                  <label>Team Members*</label>
                  <input type="text" class="form-control" placeholder='Eg: 2' name="team_members" onChange={handleChange} onBlur={handleBlur} value={values.team_members} />
                  {errors.team_members && touched.team_members ? (<div class="error">{errors.team_members}</div>) : null}
                </div>
                
                <div class="form-group col-md-12">
                  <label>Location*</label>
                  <input type="text" class="form-control" placeholder='Eg: Delhi, Noida, Gurugram etc' name="location" onChange={handleChange} onBlur={handleBlur} value={values.location} />
                  {errors.location && touched.location ? (<div class="error">{errors.location}</div>) : null}
                </div>
                
                <div class="form-group col-md-12">
                  <label>Keywords*(Max 55 chatactors)</label>
                  <input type="text" class="form-control" placeholder='Eg: Book YOUR NAME for event, College fest. etc' name="artist_keyword" onChange={handleChange} onBlur={handleBlur} value={values.artist_keyword}/>
                  {errors.artist_keyword && touched.artist_keyword ? (<div class="error">{errors.artist_keyword}</div>) : null}
                </div>
                
                <div class="form-group col-md-12">
                  <label>Description*(Min 200 charactors)</label>

                  
                  {/* <CKEditor name="description" initData={'<p>'+values.description+'</p>'} /> */}

                <textarea class="form-control" placeholder='Please enter about your information' name="description" style={{height: "140px"}} onChange={handleChange} onBlur={handleBlur} value={values.description} />
                {errors.description && touched.description ? (<div class="error">{errors.description}</div>) : null}
                
                </div>                
                <div class="form-group col-md-4"></div>
                <div class="form-group col-md-4">
                  <button type="submit" class="form-control btn btn-secondary">Save & Continue</button>
                </div>
                <div class="form-group col-md-4"></div>
                <div class="form-group col-md-12">{success}</div>
                </div>
                </div>
              </div>
              </form>


              
            

            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</section>
    </Fragment>
  )
}
export default Editartist;
