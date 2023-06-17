import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../context/noteContext';
import { RiLockPasswordLine, RiEditLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";


export default function Userheader() {
const userDetail = useContext(NoteContext); 
//console.log(userDetail);






  return (
    <div>
      
        <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-4">
        <div class="d-flex align-items-center"> <img class="img-fluid rounded-circle avatar avatar-xll" src="https://hire4event.com/apppanel/assets/primaryimage/icons-user-profile-man-icon.png" alt=""/>
        <div class="ml-4">
        <h3 class="text-white mb-2"> {userDetail.userProfile.name}</h3>
        <div class="d-flex"> <span class="d-inline-block text-white">{userDetail.userProfile.email} <Link to="/edit-email"><RiEditLine style={{fontSize: "20px"}}/></Link></span> </div>
        </div>
        </div>
        </div>
        <div class="col-lg-8 text-md-right mt-3 mt-md-0"> 
        <Link class="btn btn-secondary btn-md" to="/dashboard"> <FaRegUserCircle style={{fontSize: "20px"}}/> My Profile</Link> 
        <Link class="btn btn-secondary btn-md" to="/create-artist-profile"> <FaRegUserCircle style={{fontSize: "20px"}}/> Artist Profile </Link> 
        {/* <Link class="btn btn-secondary btn-md" to="/myvenue"> <FaList style={{fontSize: "20px"}}/> My Venue Post</Link>  */}
        <Link class="btn btn-secondary btn-md" to="/change-password"> Change Password <RiLockPasswordLine style={{fontSize: "20px"}}/></Link> 
        </div>
        </div>
        </div>
        </section>
        
        
    </div>
  )
}
