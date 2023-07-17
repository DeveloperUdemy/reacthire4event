import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserCog } from "react-icons/fa";
export default function Usersidebar() {

  const [artistCount, setArtistCount ] = useState(false); 
  const [artistDetail, setArtistDetail ] = useState([]); 
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
    setArtistDetail(resp.data.artistSingle);
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
        <div class="sidebar">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"><FaUserCog style={{fontSize: "22px"}}/> Artist Profile Menu</h6>
            </div>
            <div class="widget-content dashboard-nav" style={{padding: "5px"}}>
              <div id='cssmenu'>
        <ul>  
              {artistCount===true ?  
              <>   
              <li><Link to='/artist-profile'><i class="fa fa-pencil" aria-hidden="true"></i> Edit Artist Profile</Link></li> 
              <li><Link to='/artist-upload-photo-video'><i class="fa fa-picture-o" aria-hidden="true"></i> Upload Photos/Videos</Link></li>
              <li><Link to={'/artist/'+artistDetail.url+''}><i class="fa fa-eye" aria-hidden="true"></i> Public Artist Profile</Link></li>
              </>
              : 
              <>
              <li><Link to='/create-artist-profile'><i class="fa fa-pencil" aria-hidden="true"></i> Create Artist Profile</Link></li> 
              <li><Link to='#'><i class="fa fa-picture-o" aria-hidden="true"></i> Upload Photos/Videos</Link></li>
              <li><Link to='#'><i class="fa fa-eye" aria-hidden="true"></i> Public Artist Profile</Link></li>
              </>
              }    
              
              
              
              
        </ul>
        </div>
        </div>
        </div>
        </div> 
    </>
  )
}
