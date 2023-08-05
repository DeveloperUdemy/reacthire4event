import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import axios from 'axios';
import { useFormik } from 'formik';
import { Parser } from 'html-to-react';
import Artistphoto from './Artistphoto';
import Artistvideo from './Artistvideo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody} from 'mdb-react-ui-kit';
import { ArtistEnquiryValidation } from './schemas/ArtistEnquiryValidation';
import { Helmet } from 'react-helmet';

function Singleartist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    let { slug_url } = useParams();
    const [artistDetail, setArtistDetail] = useState([]);
    const navigate = useNavigate();
    function getArtistProfile() {
      const Mainurl = 'https://hire4event.com/apppanel/'; 
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/artist/singleartist/'+slug_url;
        axios.get(url, { headers })
       .then(resp => {
           setArtistDetail(resp.data.artistSingle);
           //console.log(resp.data.artistSingle);
       })
       .catch(function (error) {
        navigate('/');
       });
      }
      useEffect( () => {
        getArtistProfile();
      },[]);



      const [enquiryModal, setEnquiryModal] = useState(false);
      const popupShow = () => setEnquiryModal(!enquiryModal);
      const initialValues = {
        user_url: slug_url,
        user_name: "",
        user_mobile: "",
        user_email: "",
        user_description: "",
    }
      const [success, setSuccess] = useState();
      const [error, setError] = useState([]);
      const Mainurl = 'https://hire4event.com/apppanel/';
      const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
      initialValues : initialValues,
      validationSchema: ArtistEnquiryValidation,
      onSubmit : async (values, action) => {

      const headers = {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          };
          const url = Mainurl+'api/artist/enquiry';
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


    let newIMGShowImage = artistDetail.image;
    if (artistDetail.image) {
    let myIMG = artistDetail.image;
    let newIMG = myIMG.replace("https://www.hire4event.com/artistimage/", "");
    let newIMGShow = newIMG.replace("https://hire4event.com/artistimage/", "");
     newIMGShowImage = newIMGShow.replace("https://hire4event.com/artist/testimonial/", "");
    }


    return (
        <>
      <MDBModal tabIndex='-1' show={enquiryModal} setShow={setEnquiryModal} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{artistDetail.first_name} {artistDetail.last_name}</MDBModalTitle>
              <button type="button" class="close" onClick={popupShow}> <span aria-hidden="true">&times;</span> </button>
            </MDBModalHeader>
            <MDBModalBody>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form onSubmit={handleSubmit} class="form-row align-items-center" novalidate="novalidate">
                
            <div class="form-group col-sm-12"> 
            {success}   
            <input type="hidden" name="user_url" class="form-control" onChange={handleChange} value={values.user_url} />
            { errors.user_url && touched.user_url ? ( <div class="error">{errors.user_url}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="text" class="form-control" name="user_name" value={values.user_name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name*" autocomplete="off" />
            { errors.user_name && touched.user_name ? ( <div class="error">{errors.user_name}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="number" class="form-control" name="user_mobile" value={values.user_mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Phone Number*" autocomplete="off" />
            { errors.user_mobile && touched.user_mobile ? ( <div class="error">{errors.user_mobile}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="email" class="form-control" name="user_email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address*" autocomplete="off" />
            { errors.user_email && touched.user_email ? ( <div class="error">{errors.user_email}</div> ) : null }
            </div>
            
            <div class="form-group col-sm-12">
            <input type="text" class="form-control" name="user_description" value={values.user_description} onChange={handleChange} onBlur={handleBlur} placeholder="Description" autocomplete="off" />
            { errors.user_description && touched.user_description ? ( <div class="error">{errors.user_description}</div> ) : null }
            </div>
            
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
            <div class="col-sm-3"></div>
            </form>
            </div>
            </div>   


          </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
            <Helmet>
              <title>{'Book ' +artistDetail.first_name+' '+artistDetail.last_name+' for wedding, corporate event, College fest. ' +artistDetail.first_name +' '+ artistDetail.last_name+' contact, booking, charges are available on hire4event.'}</title>
              <meta name="description" content={'Book ' +artistDetail.first_name+' '+artistDetail.last_name+' for wedding, corporate event, College fest. ' +artistDetail.first_name +' '+ artistDetail.last_name+' contact, booking, charges are available on hire4event.'} />
              <meta name="keywords" content={artistDetail.keyword} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:title" content={'Book ' +artistDetail.first_name+' '+artistDetail.last_name+' for wedding, corporate event, College fest. ' +artistDetail.first_name +' '+ artistDetail.last_name+' contact, booking, charges are available on hire4event.'} />
              <meta property="og:description" content={'Book ' +artistDetail.first_name+' '+artistDetail.last_name+' for wedding, corporate event, College fest. ' +artistDetail.first_name +' '+ artistDetail.last_name+' contact, booking, charges are available on hire4event.'}/> 
              <meta property="og:image" content={Mainurl+'assets/artistimage/'+newIMGShowImage} />
              <link rel="canonical" href={window.location.href}/>
            </Helmet>

            <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{ background: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")', backgroundSize: "cover", backgroundPosition: "0px -146px" }}>
                <div class="container">
                    <div class="row align-content-center">
                        <div class="col-lg-9">
                            <div class="d-sm-flex d-block align-items-center"> 



                            <LazyLoadImage
              alt={artistDetail.first_name+' '+artistDetail.last_name}
              effect="blur"
              class={"img-fluid rounded-circle avatar avatar-xll"}
              src={Mainurl+'assets/artistimage/'+newIMGShowImage} />
                                <div class="ml-sm-4 ml-0 mt-3 mt-sm-0">
                                    <h3 class="text-white mb-2"> {artistDetail.first_name} {artistDetail.last_name}</h3>
                                    <div class="d-md-flex d-block">
                                        <span class="px-2 border text-success border-success border-radius d-inline-block mr-2">0.0</span> 
                                        <span style={{color: "white"}}><strong>Rating</strong></span>
                                        <span class="d-inline-block ml-md-3 ml-0 text-white">For those of you who are serious about having more.</span> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="#" onClick={popupShow}> <FaArrowRight style={{ fontSize: "13px;"}}/> Enquire Now</Link> </div>
                    </div>
                </div>
            </section>


<section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 mt-4 mt-lg-0 listing-detail-page">
        <div class="mt-4">
          <div class="tab-pane">
            <div class="row mb-4">
              <div class="col-12">
                <div class="section-title">
                  <h2>About {artistDetail.first_name} {artistDetail.last_name}</h2>
                  <div class="sub-title text-right"> <span> Book {artistDetail.first_name} {artistDetail.last_name} for wedding, corporate event, College fest. {artistDetail.first_name} {artistDetail.last_name} contact, booking, charges are available on hire4event.</span></div>
                </div>
              </div>

              <div class="col-12">
              
              {Parser().parse(artistDetail.description)}
              </div>

            </div>
           <a class="share btn btn-default" style={{backgroundColor: "#4267b2", color: "white"}} 
           href="#">
            <FacebookShareButton
        url={'http://www.facebook.com/sharer.php?u='+window.location.href+''}
        quote={'Book ' +artistDetail.first_name+' '+artistDetail.last_name+' for wedding, corporate event, College fest. ' +artistDetail.first_name +' '+ artistDetail.last_name+' contact, booking, charges are available on hire4event.'}
        hashtag={'#'+artistDetail.first_name+artistDetail.last_name}
      >
        <i class="fa fa-facebook" aria-hidden="true"></i> Share
      </FacebookShareButton>
            
            </a>
            
            
            <div class="listing-detail-box mb-3">
              <div class="detail-title">
                <h5>More details about {artistDetail.first_name} {artistDetail.last_name}</h5>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/duration.png" /> Performance Duration<br/>
                      <strong>{artistDetail.performance_duration} </strong></li>
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage//team-icon.png" /> Team Members<br/>
                      <strong>{artistDetail.team_members}</strong></li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/travel.png" /> Open to Travel<br/>
                      <strong>{artistDetail.open_to_travel}</strong></li>
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/language.png" /> Language<br/>
                      <strong>English/Hindi</strong></li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-0">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/music.png" /> Music/Genre<br/>
                      <strong>{artistDetail.music_genre}</strong></li>
                      <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/art-type.png" /> Artist Type / City<br/>
                      <strong>{artistDetail.category} | {artistDetail.city}</strong></li>
                  </ul>
                </div>
                <div class="col-lg-12">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">                   
                     <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/location1.png" /> Preferred Location<br/>
                      <strong>{artistDetail.location}</strong></li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Artistphoto  register_id={slug_url} />

          <Artistvideo register_id={slug_url} /> 

          <div class="tab-pane mt-5 artistpage">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title">
                  <h2>Preferred Events</h2>
                  <div class="sub-title text-right"> <span>Meet the outstanding performers in our industry-award-winning team of professionals</span></div>
                </div>
              </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon1.png" /> </div>
                    <div class="counter-content"> <span>Campus</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon2.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Charity</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon3.png" /> </div>
                    <div class="counter-content"> <span>Festival</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon4.png" /> </div>
                    <div class="counter-content"> <span>Corporate</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon5.png" /> </div>
                    <div class="counter-content"> <span>Exhibition</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon6.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Fashion show</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon7.png" /> </div>
                    <div class="counter-content"> <span>Inogration</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon8.png" /> </div>
                    <div class="counter-content"> <span>Kids Party</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon9.png" /> </div>
                    <div class="counter-content"> <span>Photo Shoot</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon10.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Private party</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon11.png" /> </div>
                    <div class="counter-content"> <span>Wedding</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon12.png" /> </div>
                    <div class="counter-content"> <span>Restaurent</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Review {artistDetail.first_name} {artistDetail.last_name}</h2>
                  <div class="sub-title text-right"> <span> Make a list of your achievements toward your long-term goal</span></div>
                </div>
              </div>
              
              
                              <div class="col-12">
                <div class="mt-0 mb-3">
                  <form>
                    <div class="form-row">
                    <div class="form-group col-md-12">
                    <label>Your Rating*</label>
                    <div style={{width: "100%;"}}> 
                    <div class="rating" data-toggle="modal" data-target="#loginModal">
                    <label>
                    <input type="radio" name="stars" value="1" required/>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="2" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="3" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>   
                    </label>
                    <label>
                    <input type="radio" name="stars" value="4" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="5" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    </div>                      
                    </div>
                    </div>
                      <div class="form-group col-md-12">
                        <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
                      </div>
                      <div class="col-md-12"> <a class="btn btn-primary" href="javascript:void(0);" data-toggle="modal" data-target="#loginModal">Submit Review</a> </div>
                    </div>
                  </form>
                </div>
              </div>
                            
              
              
              
              
              
              <div class="col-12" id="ReviewReturn">
                              </div>
            </div>
          </div>
          <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Disclaimer</h2>
                  <div class="sub-title text-right"></div>
                </div>
              </div>
              <div class="col-md-12">
                <p>Hire4event is one of the largest nonexclusive artist booking and event rental platforms in India. We have a multitude of various kinds of artists, celebrities, singers, bands, DJs, sports personalities, comedians, emcees, anchors, hosts/hostesses, motivational speakers, poets, etc who can be booked online. Any artist can create their profile on our portal and start getting bookings for a variety of events like corporate events, college fests, weddings, carnivals, and other kinds of social events. We hereby officially declare that we don't claim to be exclusive managers of any Artist. We keep artists’ and or their manager’s contact details for bookings at the backend. For any artists facing issues we are happy to support and provide resolutions over email. We are adept at and take pride in helping find the right Artist/Celebrity for events and shows. Our Customer Support Team will be delighted to furnish any related information or advice that you may need in making the best choices for artists or celebrities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </>
    )
}
export default Singleartist;