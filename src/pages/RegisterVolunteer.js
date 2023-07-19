import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Parser } from 'html-to-react';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import { VolunteerValidation } from './schemas/Volunteervalidation';
import swal from 'sweetalert';

const initialValues = {
  name: "",
  fathername: "",
  phone: "",
  whatsappnumber: "",
  email: "",
  name_of_college: "",
  aadharnumber: "",
  state: "",
  pincode: "",
  photo: ""
}
function RegisterVolunteer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Mainurl = 'https://hire4event.com/apppanel/';
  const {values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue} = useFormik({
  initialValues : initialValues,
  validationSchema: VolunteerValidation,
  onSubmit : async (values, action) => {
  const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const posturl = Mainurl+'api/enquiry/volunteer';
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
 const url = Mainurl + 'api/enquiry/pagemeta/19';
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

<section class="page-title bg-holder bg-overlay-black-50" style={{backgroundColor: "rgb(220, 18, 61)"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
      <h1 class="text-white">{metaDetail.heading}</h1>
        <div class="text-white lead">{Parser().parse(metaDetail.content)}</div> 
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="https://hire4event.com/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Volunteer Registration</li>
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
            
          <h4 class="text-primary">Volunteer  Details</h4>
          <form class="pt-2" onSubmit={handleSubmit}>
              <div id="error_Contact"></div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Name*</label>
                <input type="text" class="form-control" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name"/>
                { errors.name && touched.name ? ( <div class="error">{errors.name}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Father Name*</label>
                <input type="text" class="form-control" name="fathername" value={values.fathername} onChange={handleChange} onBlur={handleBlur} placeholder="Father Name"/>
                { errors.fathername && touched.fathername ? ( <div class="error">{errors.fathername}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Mobile Number*</label>
                <input type="text" class="form-control" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Mobile Number"/>
                { errors.phone && touched.phone ? ( <div class="error">{errors.phone}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Whatsapp Number*</label>
                <input type="text" class="form-control" name="whatsappnumber" value={values.whatsappnumber} onChange={handleChange} onBlur={handleBlur} placeholder="Whatsapp Number"/>
                { errors.whatsappnumber && touched.whatsappnumber ? ( <div class="error">{errors.whatsappnumber}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Your email*</label>
                <input type="email" class="form-control" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Your email"/>
                { errors.email && touched.email ? ( <div class="error">{errors.email}</div> ) : null }
              </div>
              
             <div class="form-group col-md-6">
                <label>Name of College</label>
                <input type="text" class="form-control" name="name_of_college" value={values.name_of_college} onChange={handleChange} onBlur={handleBlur} placeholder="Name of College"/>
                { errors.name_of_college && touched.name_of_college ? ( <div class="error">{errors.name_of_college}</div> ) : null }
              </div>
              <div class="form-group col-md-12">
                <label>Aadhar Card Number</label>
                <input type="text" class="form-control" name="aadharnumber" value={values.aadharnumber} onChange={handleChange} onBlur={handleBlur} placeholder="Aadhar Card Number"/>
                { errors.aadharnumber && touched.aadharnumber ? ( <div class="error">{errors.aadharnumber}</div> ) : null }
              </div>
              <div class="form-group col-md-12">
                <label>Permanent Address</label>
                <input type="text" class="form-control" name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} placeholder="Permanent Address"/>
                { errors.address && touched.address ? ( <div class="error">{errors.address}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>State</label>
                <input type="text" class="form-control" name="state" value={values.state} onChange={handleChange} onBlur={handleBlur} placeholder="State"/>
                { errors.state && touched.state ? ( <div class="error">{errors.state}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Pin Code</label>
                <input type="number" class="form-control" name="pincode" value={values.pincode} onChange={handleChange} onBlur={handleBlur} placeholder="Pin Code"/>
                { errors.pincode && touched.pincode ? ( <div class="error">{errors.pincode}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Upload Photo</label>
                <input type="file" class="form-control" name="photo" onChange={(event) => {
                  setFieldValue("photo", event.target.files[0]);
                }}/>
                { errors.photo && touched.photo ? ( <div class="error">{errors.photo}</div> ) : null }
              </div>
            
              <div class="col-md-12">
                <button class="btn btn-primary" type="submit" style={{width:"100%"}}> Submit</button>
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

export default RegisterVolunteer