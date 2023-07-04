import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Parser } from 'html-to-react';
import axios from 'axios';
import { useFormik } from 'formik';
import Artistscomponent from './components/Artistscomponent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody} from 'mdb-react-ui-kit';
import { ArtistEnquiryValidation } from './schemas/ArtistEnquiryValidation';
import { Helmet } from 'react-helmet';
function Singleequipment() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const Mainurl = 'https://hire4event.com/apppanel/';
    let { slug_url } = useParams();
    const [equipmentDetail, setEquipmentDetail] = useState([]);
    const navigate = useNavigate();
    function getEquipmentSingle() {
       
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/equipment/single/'+slug_url;
        axios.get(url, { headers })
       .then(resp => {
        setEquipmentDetail(resp.data.equipmentSingle);
           //console.log(resp.data.equipmentSingle);
       })
       .catch(function (error) {
        navigate('/');
       });
      }

      useEffect( () => {
        getEquipmentSingle();
      },[]);


      const [enquiryModal, setEnquiryModal] = useState(false);
      const popupShow = () => setEnquiryModal(!enquiryModal);
      const initialValues = {
        user_url: slug_url,
        user_name: "",
        user_mobile: "",
        user_email: "",
        user_description: "",
    }
      const [success, setSuccess] = useState();
      const [error, setError] = useState([]);
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
            setSuccess(resp.data.message);
            action.resetForm();
          })
          .catch(function(error) {
            if(error.response)
            {
              setError(error.response.data.message);
            }
          });
      },
    });

  return (
    <Fragment>


<MDBModal tabIndex='-1' show={enquiryModal} setShow={setEnquiryModal} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{equipmentDetail.heading}</MDBModalTitle>
              <button type="button" class="close" onClick={popupShow}> <span aria-hidden="true">&times;</span> </button>
            </MDBModalHeader>
            <MDBModalBody>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form onSubmit={handleSubmit} class="form-row align-items-center" novalidate="novalidate">
                
            <div class="form-group col-sm-12"> 
            {success}   
            <input type="hidden" name="user_url" class="form-control" onChange={handleChange} value={values.user_url} />
            { errors.user_url && touched.user_url ? ( <div class="error">{errors.user_url}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="text" class="form-control" name="user_name" value={values.user_name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name*" autocomplete="off" />
            { errors.user_name && touched.user_name ? ( <div class="error">{errors.user_name}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="number" class="form-control" name="user_mobile" value={values.user_mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Phone Number*" autocomplete="off" />
            { errors.user_mobile && touched.user_mobile ? ( <div class="error">{errors.user_mobile}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="email" class="form-control" name="user_email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address*" autocomplete="off" />
            { errors.user_email && touched.user_email ? ( <div class="error">{errors.user_email}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="text" class="form-control" name="user_description" value={values.user_description} onChange={handleChange} onBlur={handleBlur} placeholder="Description" autocomplete="off" />
            { errors.user_description && touched.user_description ? ( <div class="error">{errors.user_description}</div> ) : null }
            </div>
            
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
            <div class="col-sm-3"></div>
            </form>
            </div>
            </div>   


          </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


        <Helmet>
        <title>{equipmentDetail.meta_title}</title>
        <meta name="description" content={equipmentDetail.meta_description} />
        <meta name="keywords" content={equipmentDetail.meta} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={equipmentDetail.meta_title} />
        <meta property="og:description" content={equipmentDetail.meta_description}/> 
        <meta property="og:image" content={Mainurl+'assets/equipments/'+equipmentDetail.image+''} />
        <link rel="canonical" href={window.location.href}/>
        </Helmet>



 <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{ background: 'url("https://hire4event.com/images/bg/event-equip.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> {equipmentDetail.heading}</h3>
            <div class="d-md-flex d-block"> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="#" onClick={popupShow}> <i class="fa fa-user pr-2"></i> Book Now</Link> </div>
    </div>
  </div>
</section>


<section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 mt-4 mt-lg-0 listing-detail-page">
        <div class="mt-4">
          <div class="tab-pane">
            <div class="row mb-4">
              <div class="col-12">
                <div class="section-title">
                  <h2>{equipmentDetail.heading}</h2>
                  <div class="sub-title text-right"> <span> We can provide every equipment or services related to event</span></div>
                </div>
              </div>
              <div class="col-md-4">

              <LazyLoadImage
              alt={equipmentDetail.heading}
              effect="blur"
              width={'100%'}
              src={Mainurl+'assets/equipments/'+equipmentDetail.image+''} />

                </div>
              <div class="col-md-8">
                
              {Parser().parse(equipmentDetail.content)}

              </div>
            </div>
            <div class="listing-detail-box mb-3">
              <div class="detail-title">
                <h5>More details about {equipmentDetail.heading}</h5>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/price.png'} /> Rental/Charges-<br />
                      <strong>{equipmentDetail.price}</strong></li>
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/music.png'} /> Suitable for<br />
                      <strong>{equipmentDetail.suitable_for}</strong></li>
                    
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/location1.png'} /> Available in Cities<br />
                      <strong>{equipmentDetail.available_in_cities}</strong></li>
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/brand.png'} /> Brand Name<br />
                      <strong>{equipmentDetail.brand_name}</strong></li>
                    
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Artistscomponent />

</Fragment>
  )
}

export default Singleequipment;