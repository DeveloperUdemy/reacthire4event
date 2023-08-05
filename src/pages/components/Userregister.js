import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SignUpUser} from '../schemas/Registrationformvalidation';
import axios from 'axios';

const initialValues = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirm_password: "",
}

export const Userregister = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
      const [error, setError] = useState([]);
      const Mainurl = 'https://hire4event.com/apppanel/';
      const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({

      initialValues : initialValues,
      validationSchema: SignUpUser,
      onSubmit : async (values, action) => {
        setIsSubmitting(true); 
        setError("");
      const headers = {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          };
          const url = Mainurl+'api/user/registration';
          const  response = await axios.post(url, values, { headers })
          .then(resp => {

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

            localStorage.setItem('loginAuth',JSON.stringify(resp.data));
            action.resetForm();
            window.location.replace('/dashboard');
          })
          .catch(function(error) {
            if(error.response)
            {
              setIsSubmitting(false);
              //setError(error.response.data.message);
              toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
            //console.log(error.response.data.message);
          });
        // action.resetForm();
      },
    });
  return (
    <>
        <ToastContainer /> 
        <form onSubmit={handleSubmit} class="form-row mt-4 mb-5 align-items-center">   
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Full Name*" />
                 { errors.name && touched.name ? ( <div class="error">{errors.name}</div> ) : null }
              </div>
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="mobile" value={values.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Mobile No*" />
                { errors.mobile && touched.mobile ? ( <div class="error">{errors.mobile}</div> ) : null }
              </div>
              <div class="form-group col-sm-12">
                <input type="email" name="email" class="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address*" />
                { errors.email && touched.email ? ( <div class="error">{errors.email}</div> ) : null }
              </div>
              <div class="form-group col-sm-12">
                <input type="password" name="password" class="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password*" />
                { errors.password && touched.password ? ( <div class="error">{errors.password}</div> ) : null }
              </div>
              <div class="form-group col-sm-12">
                <input type="password" name="confirm_password" class="form-control" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} placeholder="Confirm Password*" />
                { errors.confirm_password && touched.confirm_password ? ( <div class="error">{errors.confirm_password}</div> ) : null }
              </div>

              <div class="col-sm-12">{ <div>{error}</div> }</div>
              <div class="col-sm-3">
              </div>
              <div class="col-sm-6">
                <button type="submit" disabled={isSubmitting} class="btn btn-primary btn-block">Sign Up</button>
              </div>
              <div class="col-sm-3"></div>
            </form>
    </>
  )
}
