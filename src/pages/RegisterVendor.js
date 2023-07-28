import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Parser } from 'html-to-react';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import { VendorValidation } from './schemas/Vendorvalidation';
import swal from 'sweetalert';

const initialValues = {
  contact_person: "",
  business_name: "",
  type_of_work: "",
  location: "",
  experience: "",
  contact_number: "",
  contact_email: "",
  document: ""
}
function RegisterVendor() {
  const Mainurl = 'https://hire4event.com/apppanel/';
  const {values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue} = useFormik({
  initialValues : initialValues,
  validationSchema: VendorValidation,
  onSubmit : async (values, action) => {
  const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const posturl = Mainurl+'api/enquiry/vendor';
      const  response = await axios.post(posturl, values, { headers })
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
        if(error.response)
        {
          swal({
            title: "Failed!",
            text: error.response.data.message,
            icon: "warning",
            button: "Close",
          });
        }
      });
  },
});

const [metaDetail, setMetaDetail] = useState([]);
function getMetaSingle() {
  const headers = {
    'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data'
  };
 const url = Mainurl + 'api/enquiry/pagemeta/18';
    axios.get(url, { headers })
   .then(resp => {
    setMetaDetail(resp.data.pageMeta);
   })
   .catch(function (error) {
    
   });
  }
useEffect(() => {
  window.scrollTo(0, 0);
  getMetaSingle();
}, []);


  return (
    <Fragment>

<Helmet>
        <title>{metaDetail.meta_title}</title>
        <meta name="description" content={metaDetail.meta_description} />
        <meta name="keywords" content={metaDetail.meta_keyword} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={metaDetail.meta_title} />
        <meta property="og:description" content={metaDetail.meta_description}/> 
        <meta property="og:image" content={Mainurl+'assets/primaryimage/logo.png'} />
        <link rel="canonical" href={window.location.href}/>
        </Helmet>

<section class="page-title bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")'}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
        <h1 class="text-white">{metaDetail.heading}</h1>
        <div class="text-white lead">{Parser().parse(metaDetail.content)}</div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Vendor Registration</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="space-pb position-relative z-index-1">
  <div class="container">
    <div class="row">
       
      <div class="col-lg-8 offset-md-2">
        <div class="contact-form bg-white shadow p-md-5 p-4">
          <form class="pt-2" onSubmit={handleSubmit} encType='multipart/form-data'>
              <div id="error_Contact"></div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Contact Person*</label>
                <input type="text" class="form-control" name="contact_person" value={values.contact_person} onChange={handleChange} onBlur={handleBlur} placeholder="Full Name"/>
                { errors.contact_person && touched.contact_person ? ( <div class="error">{errors.contact_person}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Business Name*</label>
                <input type="text" class="form-control" name="business_name" value={values.business_name} onChange={handleChange} onBlur={handleBlur} placeholder="Business Name"/>
                { errors.business_name && touched.business_name ? ( <div class="error">{errors.business_name}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Type Of Work*</label>
                <input type="text" class="form-control" name="type_of_work" value={values.type_of_work} onChange={handleChange} onBlur={handleBlur} placeholder="Type Of Work"/>
                { errors.type_of_work && touched.type_of_work ? ( <div class="error">{errors.type_of_work}</div> ) : null } 
              </div>
              <div class="form-group col-md-6">
                <label>Location*</label>
                <input type="text" class="form-control" name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} placeholder="Location"/>
                { errors.location && touched.location ? ( <div class="error">{errors.location}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Experience*</label>
                <input type="text" class="form-control" name="experience" value={values.experience} onChange={handleChange} onBlur={handleBlur} placeholder="Experience"/>
                { errors.experience && touched.experience ? ( <div class="error">{errors.experience}</div> ) : null }
              </div>
             <div class="form-group col-md-6">
                <label>Contact Number*</label>
                <input type="number" class="form-control" name="contact_number" value={values.contact_number} onChange={handleChange} onBlur={handleBlur} placeholder="Contact Number"/>
                { errors.contact_number && touched.contact_number ? ( <div class="error">{errors.contact_number}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Email Address*</label>
                <input type="email" class="form-control" name="contact_email" value={values.contact_email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address"/>
                { errors.contact_email && touched.contact_email ? ( <div class="error">{errors.contact_email}</div> ) : null }
              </div>
              
              <div class="form-group col-md-6">
                <label>Upload Document</label>
                <input type="file" class="form-control" name="document" onChange={(event) => {
                  setFieldValue("document", event.target.files[0]);
                }} />
              </div>
            
              <div class="col-md-12">
                <button class="btn btn-primary" type="submit" style={{width: "100%"}}> Submit</button>
              </div>
            </div>
          </form>
          
         
        </div>
      </div>
      
    </div>
  </div>
</section>



    </Fragment>
  )
}

export default RegisterVendor;