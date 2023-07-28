import React, {Fragment, useState, useRef, useEffect} from 'react';
import { Formik, Form, Field, FieldArray, useFormik } from 'formik';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import { FaRegUserCircle, FaUpload, FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function ArtistPhotoVideo() {
    const Mainurl = 'https://hire4event.com/apppanel/';
    const navigate = useNavigate();
    let userID = (JSON.parse(localStorage.getItem('loginAuth')));
    const fileRef= useRef(null);

    const [artistVideo, setArtistVideo] = useState([]); 
    function getArtistVideo() {
      let userID = (JSON.parse(localStorage.getItem('loginAuth')));
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/artist/videos_account/'+userID.userProfile.id;
        axios.get(url, { headers })
       .then(resp => {
        console.log(resp.data.videos);
        setArtistVideo(resp.data.videos);
       })
       .catch(function (error) {
        
       });
      }


      function removeVideo(id) {
        let userID = (JSON.parse(localStorage.getItem('loginAuth')));
        const headers = {
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
        };
       const values = {
         'register_id': userID.userProfile.id,
         'id': id,
       };
       const url = Mainurl + 'api/artist/videos_remove';
          axios.post(url, values, { headers })
         .then(resp => {
          // console.log(resp.data.videos);
          setArtistVideo(resp.data.videos);
         })
         .catch(function (error) {
          
         });
        }



      const [artistGallery, setArtistGallery] = useState([]); 
      function getArtistGallery() {
        let userID = (JSON.parse(localStorage.getItem('loginAuth')));
        const headers = {
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
        };
       const values = {
         'register_id': userID.userProfile.id,
       };
       const url = Mainurl + 'api/artist/photos_account/'+userID.userProfile.id;
          axios.get(url, values, { headers })
         .then(resp => {
          //console.log(resp.data.photos);
          setArtistGallery(resp.data.photos);
         })
         .catch(function (error) {
          
         });
        }


        function removeGallery(id) {
          let userID = (JSON.parse(localStorage.getItem('loginAuth')));
          const headers = {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          };
         const values = {
           'register_id': userID.userProfile.id,
           'id': id,
         };
         const url = Mainurl + 'api/artist/photos_remove';
            axios.post(url, values, { headers })
           .then(resp => {
            // console.log(resp.data.photos);
            setArtistGallery(resp.data.photos);
           })
           .catch(function (error) {
            
           });
          }


    useEffect( () => {
      window.scrollTo(0, 0);
      getArtistGallery();
      getArtistVideo();
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
              <h6 class="text-white mb-0"> <FaRegUserCircle style={{fontSize: "22px"}}/> Artist Profile Photos/Videos</h6>
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
          navigate('/artist-profile');
        })
        .catch(function (error) {
          if (error.response) {
          }
          //console.log(error.response.data.message);
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
            
            <div class="col-md-12"><hr/></div>



            <div class="row">
            <div class="masonry">
                {
                artistGallery.map((getPhoto) => {
                const {id,image} = getPhoto;
                return (
                <>
                <div class="item" style={{position: "relative"}}>
                <span class="RemoveUserGallery" title="Remove Gallery Image" onClick={() => removeGallery(id)}><FaRegTrashAlt style={{color: "white"}} title="Remove Image"/></span>
                  <a class="fancybox" href="" data-fancybox-group="gallery">
                    <img src={'https://hire4event.com/apppanel/assets/artistimage/artistphoto/'+image} />
                    </a>
                </div>
                </>
                )
                })
                }
            </div>
            </div>
            <div class="col-md-12"><hr/></div>
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
                <div class="row">
                {
                artistVideo.map((getVideo) => {
                const {id,video} = getVideo;
                return (
                <>
                <div class="col-md-4 mb-3">
                <div style={{position: "relative"}}>
                <span class="RemoveUserGallery" title="Remove Video" onClick={() => removeVideo(id)}><FaRegTrashAlt style={{color: "white"}} title="Remove Video"/></span>
                <iframe width="100%" height="150" src={'https://www.youtube.com/embed/'+video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                </>
                )
                })
                }
                </div>
                <div class="col-md-12"><hr/></div>
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