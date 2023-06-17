import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";
export default function Usersidebar() {

  return (
    <div>
        
        <div class="sidebar">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"><Link to="/dashboard"><FaHouseUser style={{fontSize: "22px"}}/> My Dashboard </Link></h6>
            </div>
            <div class="widget-content dashboard-nav" style={{padding: "5px"}}>
              <div id='cssmenu'>
        <ul>
           
          <li class='has-sub'><Link to='/create-artist-profile'><span class="sidebar-icon"><i class="fa fa-user" aria-hidden="true"></i></span> Artist Profile</Link>
            <ul>
              <li><a href='https://hire4event.com/create-artist-profile/'><i class="fa fa-pencil" aria-hidden="true"></i> Create artist profile</a></li>
              <li><a href='https://hire4event.com/create-artist-profile/'><i class="fa fa-pencil" aria-hidden="true"></i> Edit artist profile</a></li>
              <li><a href='https://hire4event.com/artist/yameenkhan'><i class="fa fa-eye" aria-hidden="true"></i> View Artist Profile</a></li>
              <li><a href='https://hire4event.com/artist-photo/'><i class="fa fa-picture-o" aria-hidden="true"></i> Upload Photos</a></li>
              <li><a href='https://hire4event.com/artist-video/'><i class="fa fa-youtube" aria-hidden="true"></i> Upload Youtube Video</a></li>
            </ul>
          </li>  
            
          <li class='has-sub'><Link to='/create-venue'><span class="sidebar-icon"><i class="fa fa-bullseye"></i></span> List Your Venue</Link>
            <ul>
              <li><a href='https://hire4event.com/create-venue/'>Add New Venue</a></li>
              <li><a href='https://hire4event.com/user-venue-list/'>Your Venue List</a></li>
            </ul>
          </li>

        </ul>
        </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}
