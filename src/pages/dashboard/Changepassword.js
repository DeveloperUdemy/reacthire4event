
import React, { useState, useEffect, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { UserChangePassword } from '../schemas/Userchangepassword';
import axios from 'axios';
import Userheader from './Userheader';
import { FaUnlockAlt } from "react-icons/fa";

function Changepassword() {
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
    current_password: '',
    password: '',
    confirm_password: '',
    userid: userDetail.id,
  }

  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const Mainurl = 'https://hire4event.com/apppanel/';
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: UserChangePassword,
    onSubmit: async (values, action) => {
      setError("");
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl + 'api/user/changepassword';
       axios.post(url, values, { headers })
        .then(resp => {
          //setSuccess(resp.data.message);
          toast.success(resp.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

          action.resetForm();
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
            <ToastContainer />
              <div class="sidebar mb-0">
                <div class="widget">
                  <div class="widget-title bg-primary">
                    <h6 class="text-white mb-0"> <FaUnlockAlt style={{ fontSize: "22px" }} /> Change Password </h6>
                  </div>
                  <div class="widget-content">
                  {<div>{success}</div>}
                  {/* {<div>{error}</div>} */}
                  <form onSubmit={handleSubmit}>
                      
                      {<div>{error}</div>}
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Current Password*</label>
                          <input type="hidden" name="userid" value={values.userid} />
                          <input type="password" class="form-control" name="current_password" onChange={handleChange} onBlur={handleBlur} value={values.current_password} />
                          {errors.current_password && touched.current_password ? (<div class="error">{errors.current_password}</div>) : null}
                        </div>
                        <div class="form-group col-md-4">
                          <label>New Password*</label>
                          <input type="password" class="form-control" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                          {errors.password && touched.password ? (<div class="error">{errors.password}</div>) : null}
                        </div>
                        <div class="form-group col-md-4">
                          <label>Confirm Password*</label>
                          <input type="password" class="form-control" name="confirm_password" onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} />
                          {errors.confirm_password && touched.confirm_password ? (<div class="error">{errors.confirm_password}</div>) : null}
                        </div>
                        <div class="form-group col-md-5"></div>
                        <div class="form-group col-md-2">
                          <button type="submit" class="form-control btn btn-secondary">Submit</button>
                        </div>
                        <div class="form-group col-md-5"></div>
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
export default Changepassword;
