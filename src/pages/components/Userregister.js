import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
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
  
      const [success, setSuccess] = useState();
      const [error, setError] = useState([]);
      const Mainurl = 'https://hire4event.com/apppanel/';
      const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({

      initialValues : initialValues,
      validationSchema: SignUpUser,
      onSubmit : async (values, action) => {
        setError("");
      const headers = {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          };
          const url = Mainurl+'api/user/registration';
          const  response = await axios.post(url, values, { headers })
          .then(resp => {
          {/*console.log(resp);*/}
            setSuccess(resp.data.message);
            action.resetForm();
          })
          .catch(function(error) {
            if(error.response)
            {
              setError(error.response.data.message);
            }
            console.log(error.response.data.message);
          });
        // action.resetForm();
      },
    });
  return (
    <div>
        <form onSubmit={handleSubmit} class="form-row mt-4 mb-5 align-items-center">
              {<div>{success}</div>}    
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
                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
              </div>
              <div class="col-sm-3"></div>
            </form>
    </div>
  )
}
