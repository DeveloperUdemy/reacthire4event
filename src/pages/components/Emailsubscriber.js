import React,{useState} from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { EmailsubscriberValid } from '../schemas/Emailsubscribervalidation';

const postValue = {
    email: "",
}
export default function Emailsubscriber() {
    const [success, setSuccess] = useState();
    const [error, setError] = useState([]);
    const Mainurl = 'https://hire4event.com/apppanel/';
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues : postValue,
    validationSchema: EmailsubscriberValid,
    onSubmit : async (values, action) => {
      setError("");
    const headers = {
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
        };
        const url = Mainurl+'api/user/subscribed';
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
    <>
    <h4 style={{fontSize: "17px", fontWeight: "500"}}>Subscribe to Newsletter</h4>
                        
                        <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-md-8 col-9">
                                    <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} class="form-control" placeholder="Email Address...." />
                                    { errors.email && touched.email ? ( <div class="error">{errors.email}</div> ) : null }
                                </div>
                                <div class="col-md-4 col-3">
                                    <button type="submit" class="btn btn-primary">Subscribe</button>
                                </div>
                            </div>
                            <div>{success} {error}</div>
                        </form>
    </>
  )
}
