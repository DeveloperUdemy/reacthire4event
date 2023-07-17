
import React, { useState, useEffect, Fragment } from 'react';
import { useFormik } from 'formik';
import { Editprofilevalidation } from '../schemas/EditprofileValidation';
import axios from 'axios';
import Userheader from './Userheader';
import { FaRegUserCircle } from "react-icons/fa";

function Profile() {
const [userDetail,setUserDetail] = useState([]);
useEffect ( () => {
  let userID = (JSON.parse(localStorage.getItem('loginAuth')));
  const Mainurl = 'https://hire4event.com/apppanel/'; 
  const headers = {
   'Content-Type': 'application/json',
   'Content-Type': 'multipart/form-data'
 };
 const values = {
   'userid': userID.userProfile.id,
 };
 const url = Mainurl + 'api/user/profile';
    axios.post(url, values, { headers })
   .then(resp => {
     setUserDetail(resp.data.userProfile);
   })
   .catch(function (error) {
     if (error.response) {
       
     }
     //console.log(error.response.data.message);
   });
  },[]);




  const initialValues = {
    name: userDetail.name,
    mobile: userDetail.contact,
    city: userDetail.city,
    pincode: userDetail.pincode,
    address: userDetail.address,
    userid: userDetail.id,
  }

  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const Mainurl = 'https://hire4event.com/apppanel/';
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Editprofilevalidation,
    onSubmit: async (values, action) => {
      setError("");
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl + 'api/user/update';
       axios.post(url, values, { headers })
        .then(resp => {
          setSuccess(resp.data.message);
        })
        .catch(function (error) {
          if (error.response) {
            setError(error.response.data.message);
          }
          console.log(error.response.data.message);
        });
      // action.resetForm();
    },
  });

  return (
    <Fragment>
      <Userheader />
      <section class="space-ptb bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-2">
            
            </div>
            <div class="col-lg-8 col-md-8">

                 

              <div class="sidebar mb-0">
                <div class="widget">
                  <div class="widget-title bg-primary">
                    <h6 class="text-white mb-0"> <FaRegUserCircle style={{ fontSize: "22px" }} /> My Account Information </h6>
                  </div>
                  <div class="widget-content">
                  {<div>{success}</div>}
                    <form onSubmit={handleSubmit}>
                      
                      {<div>{error}</div>}
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Full name*</label>
                          <input type="hidden" name="userid" value={values.userid} />
                          <input type="text" class="form-control" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                          {errors.name && touched.name ? (<div class="error">{errors.name}</div>) : null}
                        </div>
                        <div class="form-group col-md-4">
                          <label>Phone number*</label>
                          <input type="number" class="form-control" name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                          {errors.mobile && touched.mobile ? (<div class="error">{errors.mobile}</div>) : null}
                        </div>
                        <div class="form-group col-md-4">
                          <label>City</label>
                          <input type="text" class="form-control" name="city" onChange={handleChange} onBlur={handleBlur} value={values.city} />
                          {errors.city && touched.city ? (<div class="error">{errors.city}</div>) : null}
                        </div>
                        <div class="form-group col-md-4">
                          <label>Pincode</label>
                          <input type="number" class="form-control" name="pincode" onChange={handleChange} onBlur={handleBlur} value={values.pincode} />
                          {errors.pincode && touched.pincode ? (<div class="error">{errors.pincode}</div>) : null}
                        </div>
                        <div class="form-group col-8">
                          <div class="d-flex align-items-center">
                            <label>Address*</label>
                          </div>
                          <input type="text" class="form-control" onChange={handleChange} onBlur={handleBlur} name="address" value={values.address} />
                          {errors.address && touched.address ? (<div class="error">{errors.address}</div>) : null}
                        </div>
                        <div class="form-group col-md-2">
                          <button type="submit" class="form-control btn btn-secondary">Save Profile</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2">

            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Profile;
