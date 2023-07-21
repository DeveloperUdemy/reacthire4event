import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FcCustomerSupport,FcManager,FcBusinessman,FcRight} from "react-icons/fc";
import { Userregister } from './components/Userregister';
import { Loginwithfacebook } from './components/Loginwithfacebook';
import { Userlogin } from './components/Userlogin';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';


export default function Header() {
  const [popoverModal, setPopoverModal] = useState(false);
  const loginShow = () => setPopoverModal(!popoverModal);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => { 
   let StoreDataUser = JSON.parse(localStorage.getItem('loginAuth'));
   setCurrentUser(StoreDataUser);
    },[]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loginAuth");
    setCurrentUser(null);
    navigate('/');
  };


  return (
    <>
      <MDBModal tabIndex='-1' show={popoverModal} setShow={setPopoverModal} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle></MDBModalTitle>
              <button type="button" class="close" onClick={loginShow}> <span aria-hidden="true">&times;</span> </button>
            </MDBModalHeader>
            <MDBModalBody>
        <ul class="nav nav-tabs nav-tabs-02 justify-content-center" id="myTab" role="tablist">
          <li class="nav-item"> <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false"> <span> Login</span></a> </li>
          <li class="nav-item"> <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="true"><span>Register</span></a> </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            {/*  User Login Form Start Here  */}
            <Userlogin/>
             {/*  User Login Form End Here  */}
             {/*  Login With Social Media Start Here  */}
             <Loginwithfacebook/>   
              {/*  Login With Social Media End Here  */}
          </div>
          <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
              {/*  User Register Form Start Here  */}
              <Userregister />
              {/*  User Register Form End Here  */}
              {/*  Login With Social Media Start Here  */}
              <Loginwithfacebook/>   
              {/*  Login With Social Media End Here  */}
          </div>
        </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
    
  <header class="header header-sticky">
  <div class="topbar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 top-contact"> 
        <a href="mailto:sales@hire4event.com"><i class="fa fa-envelope-open-o" aria-hidden="true"></i>sales@hire4event.com</a> 
        <a href="tel:+91-9718941111"><FcCustomerSupport style={{fontSize: "20px"}}/> {/*i class="fa fa-headphones" aria-hidden="true"></i>*/} +91-9811312005</a> 
        </div>
        <div class="col-md-6 col-12">
          <div class="d-block d-md-flex align-items-center text-center">
            <div class="mr-3 d-inline-block"> </div>
            <div class="mr-auto d-inline-block"> </div>
            <div class="social d-inline-block">
              
              <ul class="list-unstyled">
                <li><a href="https://www.facebook.com/hire4eventofficial" target="_blank"> <i class="fa fa-facebook-f"></i> </a></li>
                <li><a href="https://twitter.com/hire4eventcom" target="_blank"> <i class="fa fa-twitter"></i> </a></li>
                <li><a href="https://www.linkedin.com/company/hire4event-com/" target="_blank"> <i class="fa fa-linkedin"></i> </a></li>
                <li><a href="https://in.pinterest.com/hire4event/" target="_blank"> <i class="fa fa-pinterest"></i> </a></li>
                <li><a href="https://www.instagram.com/hire4event/?hl=en" target="_blank"> <i class="fa fa-instagram"></i> </a></li>
                <li><a href="https://www.youtube.com/channel/UCO30G7y5-QlJnQv0cVEv7_Q" target="_blank"> <i class="fa fa-youtube"></i> </a></li>
              </ul>
            </div>
            <div class="login d-inline-block"> 

            {currentUser === null && (
            <>
            <Link onClick={loginShow}> <FcManager style={{fontSize: "20px"}}/>My Dashboard</Link> 
            <Link to="/vendor-registration"> <FcBusinessman style={{fontSize: "20px"}}/> Vendor Registration</Link>
            <Link to="/volunteer-registration-for-event-and-sports"> <FcBusinessman style={{fontSize: "20px"}}/> Volunteer Registration</Link> 
            </>
            )}
            {currentUser !== null && (
            <>
            <Link to="/dashboard"> <img src="https://www.hire4event.com/apppanel/assets/primaryimage/icons-user-profile-man-icon.png" style={{height:"25px", width:"25px",borderRadius: "50%"}}/> {currentUser.userProfile.name}</Link>
            <Link onClick={handleLogout} > <i class="fa fa-sign-out pl-2" aria-hidden="true"></i> Logout</Link> 
            </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-static-top navbar-expand-lg">
    <div class="container-fluid">
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-align-left"></i></button>
      <Link class="navbar-brand" to="/"> <img class="img-fluid" src="/images/logo.png" alt="logo" /> </Link>
      <div class="navbar-collapse collapse justify-content-start">
      <ul class="nav navbar-nav ml-auto">
        {currentUser === null && (
        <>
        <li class="nav-item"> <Link onClick={loginShow} class="nav-link"><i class="fa fa-user-circle-o" aria-hidden="true"></i> create artist profile</Link></li>
        <li class="nav-item"> <Link onClick={loginShow} class="nav-link"><i class="fa fa-building-o" aria-hidden="true"></i> List your Venue</Link></li>
        </>
        )}
        {currentUser !== null && (
        <>
        <li class="nav-item"> <Link to="/create-artist-profile" class="nav-link"><i class="fa fa-user-circle-o" aria-hidden="true"></i> create artist profile</Link></li>
        <li class="nav-item"> <Link to="/create-venue" class="nav-link"><i class="fa fa-building-o" aria-hidden="true"></i> List your Venue</Link></li>
        </>
        )}

          <li class="nav-item"> <Link class="nav-link" to="/plan-your-trip/"><i class="fa fa-map-marker" aria-hidden="true"></i>plan a destination  wedding/event</Link></li>
          <li class="nav-item"> <a class="nav-link" href="https://hire4event.com/blogs/" target="_blank"><i class="fa fa-file" aria-hidden="true"></i>Blog</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</>
  )
}
