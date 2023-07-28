import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Parser } from 'html-to-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArtistEnquiryValidation } from './schemas/ArtistEnquiryValidation';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
function SingleVenueDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const Mainurl = 'https://hire4event.com/apppanel/';
    let { slug_url } = useParams();
    const [venueDetail, setVenueDetail] = useState([]);
    const navigate = useNavigate();
    function getVenueSingle() {
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/equipment/singlevenue/'+slug_url;
        axios.get(url, { headers })
       .then(resp => {
        setVenueDetail(resp.data.venueSingle);
       })
       .catch(function (error) {
        navigate('/');
       });
      }
      useEffect( () => {
        getVenueSingle();
      },[]);




      const initialValues = {
        user_url: slug_url,
        user_name: "",
        user_mobile: "",
        user_email: "",
        user_description: "",
    }
      const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
      initialValues : initialValues,
      validationSchema: ArtistEnquiryValidation,
      onSubmit : async (values, action) => {
      const headers = {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          };
          const url = Mainurl+'api/equipment/enquiry';
          const  response = await axios.post(url, values, { headers })
          .then(resp => {
            swal({
                title: "Success!",
                text: resp.data.message,
                icon: "success",
                button: "Close",
              });
            action.resetForm();
          })
          .catch(function(error) {
            swal({
                title: "Failed!",
                text: error.response.data.message,
                icon: "warning",
                button: "Close",
              });
          });
      },
    });

  return (
    <Fragment>

        <Helmet>
        <title>{venueDetail.title}</title>
        <meta name="description" content={venueDetail.description} />
        <meta name="keywords" content={venueDetail.keyword} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={venueDetail.title} />
        <meta property="og:description" content={venueDetail.description}/> 
        <meta property="og:image" content={Mainurl+'assets/venueimage/'+venueDetail.image+''} />
        <link rel="canonical" href={window.location.href}/>
        </Helmet>


<section class="page-title bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")', padding: "150px 0 21px" }}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <h1 class="text-white">{venueDetail.heading} </h1>
        <p class="text-white lead">{venueDetail.location_id} {venueDetail.type_id}</p>
        <nav aria-label="breadcrumb"> </nav>
      </div>
    </div>
  </div>
</section>

<section class="space-ptb bg-light">
  <div class="container">
    <div class="row mb-4">
      <div class="col-md-10">
        <h2>{venueDetail.heading} <i class="fa fa-check-circle text-success pl-3"></i></h2>
        <a class="listing-loaction text-dark mb-3 d-block" href="#"> 
        <i class="fa fa-map-marker pr-2 text-primary"></i> {venueDetail.location_id}, {venueDetail.type_id}
        </a> 
        </div>
      <div class="col-md-2 text-md-right mt-3 mt-md-0"> <a class="btn btn-success" href="#" style={{padding: "6px 11px", marginBottom: "15px"}}> <i class="fa fa-check-circle pr-2"></i> Verified Listing</a>
        <div class="d-sm-flex d-block" style={{float: "right"}}> <span class="px-2 border text-success border-success border-radius d-inline-block mr-2">4.0</span>
          <ul class="list-unstyled d-flex mb-0 my-3 my-sm-0">
            <li><i class="fa fa-star text-warning"></i></li>
            <li><i class="fa fa-star text-warning"></i></li>
            <li><i class="fa fa-star text-warning"></i></li>
            <li><i class="fa fa-star text-warning"></i></li>
            <li><i class="fa fa-star text-light"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="listing-detail-page lisss">
          <div class="listing-detail-box mb-3"> 
          
          
          <LazyLoadImage
              class="img-fluid"      
              alt={venueDetail.heading}
              effect="blur"
              src={Mainurl+'assets/venueimage/'+venueDetail.image+''} />
          
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="sidebar mb-0">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"> <i class="fa fa-calendar-alt"></i> Enquire Now </h6>
            </div>
            <div class="widget-content">
              <form onSubmit={handleSubmit}>
              <div class="pb-3">
              <input type="hidden" name="user_url" class="form-control" onChange={handleChange} value={values.user_url} />
              { errors.user_url && touched.user_url ? ( <div class="error">{errors.user_url}</div> ) : null }
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" class="form-control" name="user_name" value={values.user_name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
                    </div>
                    { errors.user_name && touched.user_name ? ( <div class="error">{errors.user_name}</div> ) : null }
                  
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" class="form-control" name="user_mobile" value={values.user_mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Phone Number" />
                    </div>
                    { errors.user_mobile && touched.user_mobile ? ( <div class="error">{errors.user_mobile}</div> ) : null }
                  
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" class="form-control" name="user_email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} placeholder="Emial Address" />
                    </div>
                    { errors.user_email && touched.user_email ? ( <div class="error">{errors.user_email}</div> ) : null }
            
                  
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <textarea type="text" class="form-control" name="user_description" value={values.user_description} onChange={handleChange} onBlur={handleBlur} placeholder="Description" style={{height: "90px"}} />
                    </div>
                    { errors.user_description && touched.user_description ? ( <div class="error">{errors.user_description}</div> ) : null }
            
                
                </div>
                <button class="btn btn-secondary btn-block" type="submit">Request Booking</button> </div>
                </form>
            </div>

          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="listing-detail-page lisss">
          <div class="listing-detail-box mb-3">
            <div class="mt-0">
              <div class="detail-title">
                <h5>Listing Description</h5>
              </div>
              <div>
              {Parser().parse(venueDetail.detail)}
              </div>   
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
export default SingleVenueDetail