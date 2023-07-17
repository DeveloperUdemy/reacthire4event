import React, {Fragment, useState, useRef, useEffect} from 'react';
import { Formik, Form, Field, FieldArray, useFormik } from 'formik';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import { FaRegUserCircle, FaUpload, FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function ArtistPhotoVideo() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState();
    const [error, setError] = useState([]);
    let userID = (JSON.parse(localStorage.getItem('loginAuth')));
    const fileRef= useRef(null);

    useEffect( () => {
      window.scrollTo(0, 0);
    },[])

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
              <h6 class="text-white mb-0"> <FaRegUserCircle style={{fontSize: "22px"}}/> Artist Profile Photos</h6>
            </div>
            <div class="widget-content">
    <Formik
      initialValues={{ videos: [], gallerys:[], register_id: userID.userProfile.id }}
      onSubmit={ (values, action) =>
      setTimeout(() => {
      //console.log(values); 
      //  Start Form Value To API 
      const Mainurl = 'https://hire4event.com/apppanel/'; 
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl + 'api/Artist/photovideo';
       axios.post(url, values, { headers })
        .then(resp => {
          setSuccess(resp.data.message);
          navigate('/artist-profile');
        })
        .catch(function (error) {
          if (error.response) {
            setError(error.response.data.message);
          }
          console.log(error.response.data.message);
        });
        //  Stop Form Value To API 
        }, 500)
      }
      render={({ values, handleSubmit, setFieldValue }) => (
        <Form encType='multipart/form-data' onSubmit={handleSubmit}>
            <div class="form-row">

            <div class="form-group col-md-6">
                <h5>Artist Gallery</h5>
            </div>

            <div class="form-group col-md-6">
            <input type="file" name="gallerys" ref={fileRef} multiple onChange={(e) => {
                  setFieldValue("gallerys", e.target.files);
                }} accept='image/*' hidden class="form-control" />

                <span class="btn btn-secondary" onClick={() => {
                  fileRef.current.click();
                 }} style={{float: "right"}}> <FaUpload /> Upload Gallery Images</span>

            </div>




            <FieldArray
             name="videos"
             render={arrayHelpers => (
               <>
                <div class="form-group col-md-6">
                <h5>Artist Video</h5>
                </div>
                <div class="form-group col-md-6">
                <span class="btn btn-secondary" onClick={() => arrayHelpers.push({ url: ''})} style={{float: "right"}}> + Add More Video</span>
                </div>
                {values.videos && values.videos.length > 0 ? (
                values.videos.map((video, index) => (
                
                <div class="row" style={{width: "100%"}}> 
                <div class="form-group col-md-10">
                <label>Youtube Video Url*</label>  
                <Field
                required
                class="form-control"
                type="url"
                name={`videos[${index}].url`}
                key={index}
                value={video.url}
                />
                </div>
                <div class="form-group col-md-2" style={{marginTop: "30px"}}>  
                <span onClick={() => arrayHelpers.remove(index)}><FaRegTrashAlt style={{color: "red"}} title="Remove"/></span>
                </div>
                </div>
                
                   ))
                 ) : (
                    <>
                    </>
                 )}
               </>
             )}
            /> 
<div class="form-group col-md-5"></div>
                 <div class="form-group col-md-2">
                   <button type="submit" class="form-control btn btn-secondary">Submit</button>
                 </div>
                 <div class="form-group col-md-5"></div>
        </div> 
        </Form>
      )}
    />
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
export default ArtistPhotoVideo;