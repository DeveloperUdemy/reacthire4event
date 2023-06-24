import React, { useState } from 'react'
import { useFormik } from 'formik'
import {SignInUser} from '../schemas/Loginformvalidation';
import axios from 'axios';
const initialValues = {
  email: "",
  password: ""
}
export const Userlogin = () => {
  const [popoverModal, setPopoverModal] = useState(true);
  const loginShow = () => setPopoverModal(!popoverModal);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const Mainurl = 'https://hire4event.com/apppanel/';
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({

  initialValues : initialValues,
  validationSchema: SignInUser,
  onSubmit : async (values, action) => {
  setError("");
  const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const url = Mainurl+'api/user/login';
      const  responses = await axios.post(url, values, { headers })
      .then(resp => {
        //console.log(resp);
        setSuccess(resp.data.message);
        localStorage.setItem('loginAuth',JSON.stringify(resp.data));
        action.resetForm();
        window.location.reload();
        // console.log(resp.data);
      })
      .catch(function(error) {
        if(error.response)
        {
          setError(error.response.data.message);
          //console.log(error.response);
        }
        
      });
  },
});


  return (
    <>
        <form onSubmit={handleSubmit} class="form-row mt-4 align-items-center">
              <div class="col-sm-12">
                <div>{error}</div>
              </div>
              <div class="form-group col-sm-12">
                <input type="email" name="email" class="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address*" />
                { errors.email && touched.email ? ( <div class="error">{errors.email}</div> ) : null }
              </div>
              <div class="form-group col-sm-12">
                <input type="password" name="password" class="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password*" />
                { errors.password && touched.password ? ( <div class="error">{errors.password}</div> ) : null }
              </div>
              <div class="col-sm-6">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <div class="col-sm-6">
                <ul class="list-unstyled d-flex mb-1 mt-sm-0 mt-3" style={{float: "right"}}>
                  <li class="mr-1"><a class="text-dark" href="#">Lost your password?</a></li>
                </ul>
              </div>
            </form>
    </>
  )
}
