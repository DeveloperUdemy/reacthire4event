
import React, { useState, useEffect, Fragment } from 'react';
import { useFormik } from 'formik';
import { EditprofileEmailvalidation } from '../schemas/EditprofileEmailValidation';
import axios from 'axios';
import Userheader from './Userheader';
import { FaEdit } from "react-icons/fa";

function Editemail() {
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
    email: userDetail.email,
    userid: userDetail.id,
  }

  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const Mainurl = 'https://hire4event.com/apppanel/';
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, enableReinitialize } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: EditprofileEmailvalidation,
    onSubmit: async (values, action) => {
      setError("");
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl + 'api/user/updateemail';
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
                    <h6 class="text-white mb-0"> <FaEdit style={{ fontSize: "22px" }} /> Edit Email Address </h6>
                  </div>
                  <div class="widget-content">
                  {<div>{success}</div>}
                    <form onSubmit={handleSubmit}>
                      
                      {<div>{error}</div>}
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input type="hidden" name="userid" value={values.userid} />
                          <input type="text" class="form-control" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                          {errors.email && touched.email ? (<div class="error">{errors.email}</div>) : null}
                        </div>
                        <div class="form-group col-md-2">
                          <button type="submit" class="form-control btn btn-secondary">Submit</button>
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
export default Editemail;
