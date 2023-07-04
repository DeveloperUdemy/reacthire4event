import React, { useEffect, useState, Fragment, } from 'react';
import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';
import { PlanTripValidation } from './schemas/Plantripvalidation';
import axios from 'axios';
import swal from 'sweetalert';


const initialValues = {
  numberperson: "",
  triptype: "",
  location: "",
  duration: "",
  Activities: [],
  username: "",
  email: "",
  mobile: "",
  message: "",
}
function Planyourtrip ()  {
  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const Mainurl = 'https://hire4event.com/apppanel/';
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
  initialValues : initialValues,
  validationSchema: PlanTripValidation,
  onSubmit : async (values, action) => {
    setError("");
  const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
      const posturl = Mainurl+'api/enquiry/plan_your_trip';
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
        //console.log(error.response.data.message);
      });
  },
});


  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/20';
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


<section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundColor: "#dc123d"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="text-white">Plan A Destination Wedding / Event </h1>
        <p class="text-white">We are an Event Management Company which provides Corporate and Institutional Tour Planning and Packages. We have a list of great locations and activities to energise and refresh the tour participants, which is the most wanted term from an Outdoor tour. The arrangements are great and management is greatest at the most affordable prices.</p>
      </div>
    </div>
  </div>
</section>

<section class="space-pb mt-n5 position-relative z-index-1">
  <div class="container">
      <div class="">
            
      <div class="col-md-10 offset-md-1 bg-white">
        <div class="contact-form p-md-5 p-4">
          <h4 class="mb-4 text-primary" style={{textAlign: "center"}}>Let’s Apply Here!</h4>
          <form  onSubmit={handleSubmit} class="pt-3" >
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Number of person</label>
                <select class="form-control" name="numberperson" onChange={handleChange}>
                  <option value="">Select Number of person</option>
                  <option value="10 to 25">10 to 25</option>
                  <option value="25 to 50">25 to 50</option>
                  <option value="50 to 100">50 to 100</option>
                  <option value="More than 100">More than 100</option>
                </select>
                { errors.numberperson && touched.numberperson ? ( <div class="error">{errors.numberperson}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Trip Type</label>
                <select class="form-control" name="triptype" onChange={handleChange}>
                  <option value="">Select Trip Type</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Friends &amp; Family">Friends &amp; Family</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Destination Wedding">Destination Wedding</option>
                </select>
                { errors.triptype && touched.triptype ? ( <div class="error">{errors.triptype}</div> ) : null }
              </div>
              <div class="form-group col-md-6">
                <label>Select Location</label>
                <select class="form-control" name="location" onChange={handleChange}>
                  <option value="">Select Location</option>
                  <option value="AGRA"> AGRA</option>
                  <option value="GOA"> GOA</option>
                  <option value="SHIMLA"> SHIMLA</option>
                  <option value="MANALI"> MANALI</option>
                  <option value="RISHIKESH/HARIDWAR"> RISHIKESH/HARIDWAR</option>
                  <option value="NAINITAL"> NAINITAL</option>
                  <option value="JIM CORBETT/ RAJAJI NATIONAL PARK"> JIM CORBETT/ RAJAJI NATIONAL PARK</option>
                  <option value="JAIPUR"> JAIPUR</option>
                  <option value="JAISALMER"> JAISALMER</option>
                  <option value="MUSSORIE"> MUSSORIE</option>
                  <option value="RANIKHET"> RANIKHET</option>
                  <option value="OTHERS"> OTHERS</option>
                </select>
                { errors.location && touched.location ? ( <div class="error">{errors.location}</div> ) : null }
              </div>
             <div class="form-group col-md-6">
                <label>Duration</label>
                <select class="form-control" name="duration" onChange={handleChange}>
                  <option value="">Select Duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="1N-2D">1N-2D</option>
                  <option value="2N-3D">2N-3D</option>
                  <option value="3N-4D"> 3N-4D</option>
                </select>
                { errors.duration && touched.duration ? ( <div class="error">{errors.duration}</div> ) : null }
              </div>

              <div class="form-group col-md-12">
                <label><strong>Additional Activities</strong></label>
                { errors.Activities && touched.Activities ? ( <div class="error">{errors.Activities}</div> ) : null }
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check"  onChange={handleChange} onBlur={handleBlur} name="Activities" value="Team Building"/> <span>Team Building</span></p>
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" onChange={handleChange} onBlur={handleBlur} name="Activities" value="Adventure"/> <span>Adventure</span></p>
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" onChange={handleChange} onBlur={handleBlur} name="Activities" value="Entertainment Shows"/> <span>Entertainment Shows</span></p>
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" onChange={handleChange} onBlur={handleBlur} name="Activities" value="Wedding decor"/> <span>Wedding Decoration</span></p>
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" onChange={handleChange} onBlur={handleBlur} name="Activities" value="Artist"/> <span>Artist</span></p>
              </div>

              <div class="form-group col-md-6">
              <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" onChange={handleChange} onBlur={handleBlur} name="Activities" value="Others"/> <span>Others</span></p>
              </div>

              <div class="form-group col-md-4">
                <label>Name*</label>
                <input type="text" class="form-control" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                { errors.username && touched.username ? ( <div class="error">{errors.username}</div> ) : null }
              </div>

              <div class="form-group col-md-4">
                <label>Mobile*</label>
                <input type="number" class="form-control" name="mobile"  value={values.mobile} onChange={handleChange} onBlur={handleBlur}/>
                { errors.mobile && touched.mobile ? ( <div class="error">{errors.mobile}</div> ) : null }
              </div>

              <div class="form-group col-md-4">
                <label>Email*</label>
                <input type="email" class="form-control" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                { errors.email && touched.email ? ( <div class="error">{errors.email}</div> ) : null }
              </div>

              <div class="form-group col-md-12">
                <label>Message</label>
                <textarea class="form-control" rows="4" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder="Type your message" />
                { errors.message && touched.message ? ( <div class="error">{errors.message}</div> ) : null }
              </div>

              <div class="col-md-4 offset-md-4">
                <button class="btn btn-primary" type="submit" style={{width: "100%"}}> Send Message</button>
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
export default Planyourtrip;


