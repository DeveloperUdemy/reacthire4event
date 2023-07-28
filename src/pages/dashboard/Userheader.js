import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RiLockPasswordLine, RiEditLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";


export default function Userheader() {

 const [userDetail, setUserDetail ] = useState([]); 
  //  props.userDetailGET(userDetail);
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


 const [artistCount, setArtistCount ] = useState(false); 
 useEffect ( () => {
let userID = (JSON.parse(localStorage.getItem('loginAuth')));
const Mainurl = 'https://hire4event.com/apppanel/'; 
const headers = {
 'Content-Type': 'application/json',
 'Content-Type': 'multipart/form-data'
};
const values = {
 'register_id': userID.userProfile.id,
};
const url = Mainurl + 'api/artist/singleartist';
 axios.post(url, values, { headers })
 .then(resp => {
  setArtistCount(resp.data.status);
 })
 .catch(function (error) {
   if (error.response) {
    setArtistCount(false); 
   }
   //console.log(error.response.data);
 });
},[]);




  return (
    <>
        <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")'}}>
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-4">
        <div class="d-flex align-items-center"> <img class="img-fluid rounded-circle avatar avatar-xll" src="https://hire4event.com/apppanel/assets/primaryimage/icons-user-profile-man-icon.png" alt=""/>
        <div class="ml-4">
        <h3 class="text-white mb-2"> 
        {userDetail.name}
        </h3>
        <div class="d-flex"> <span class="d-inline-block text-white">
        {userDetail.email}
          <Link to="/edit-email"><RiEditLine style={{fontSize: "20px"}}/></Link></span> </div>
        </div>
        </div>
        </div>
        <div class="col-lg-8 text-md-right mt-3 mt-md-0 userMenu"> 
        <Link class="btn btn-secondary btn-md" to="/dashboard"> <FaRegUserCircle style={{fontSize: "20px"}}/> My Profile</Link> 
         { artistCount===true ? 
         <>
         <Link class="btn btn-secondary btn-md" to="/artist-profile"> <FaRegUserCircle style={{fontSize: "20px"}}/> Artist Profile </Link>
         </>
         : 
         <>
         <Link class="btn btn-secondary btn-md" to="/create-artist-profile"> <FaRegUserCircle style={{fontSize: "20px"}}/> Artist Profile </Link>
         </>
        }
         
       
        <Link class="btn btn-secondary btn-md" to="/change-password"> Change Password <RiLockPasswordLine style={{fontSize: "20px"}}/></Link> 
        </div>
        </div>
        </div>
        </section>
    </>
  )
}
