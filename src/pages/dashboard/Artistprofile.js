import React from 'react';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import { FaRegUserCircle } from "react-icons/fa";
function Artistprofile ()  {
    return (
    <div>
        <Userheader/>
        <section class="space-ptb bg-light">
        <div class="container">
        <div class="row">
        <div class="col-lg-2 col-md-4">
      
        </div>


<div class="col-lg-8 col-md-8">
        <div class="sidebar mb-0">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"> <FaRegUserCircle style={{fontSize: "22px"}}/> Artist Profile </h6>
            </div>
            <div class="widget-content">
              <form method="POST" id="Hire4event-ArtistProfile" enctype="multipart/form-data" novalidate="novalidate">
                  <div id="error_artistprofile"></div>
              <div class="form-row">
                <div class="col-md-3">
                <div class="text-center"> <img src="https://www.hire4event.com/artistimage/1646214658star-web-maker.png" class="avatar img-circle" id="ArtistPic" alt="" style={{width:"100%",height: "200px", marginBottom: "15px"}} />
                <p>Upload a different photo...</p>
                <input type="file" name="user_image" id="chooseArtist" accept="image/*" class="form-control" /> </div>
                </div>  
                  
                <div class="col-md-9">
                <div class="row">      
                <div class="form-group col-md-6">
                  <label>First name*</label>
                  <input type="text" required="" class="form-control" name="artist_firstname" value="Yameen" />
                </div>
                <div class="form-group col-md-6">
                  <label>Last name*</label>
                  <input type="text" required="" class="form-control" name="artist_lastname" value="Khan" />
                </div>
                <div class="form-group col-md-6">
                  <label>Email Address*</label>
                  <input type="text" class="form-control" name="artist_email" value="y.khan@starwebmaker.com" />
                </div>
                <div class="form-group col-md-6">
                  <label>Mobile No*</label>
                  <input type="number" class="form-control" name="artist_mobile" value="8826070942" />
                </div>
                
                <div class="form-group col-md-6">
                  <label>Category*</label>
                 <select class="form-control" name="artist_category">
                    <option value="">Select Categories</option>
                    <option>Painter</option>
                    <option>Sketch Artist</option>
                    <option>Magician</option>
                    <option>Singer</option>
                    <option>Folk Singer</option>
                    <option>Dancer</option>
                    <option>Group Dancer</option>
                    <option>Comedian</option>
                    <option selected="">Anchor</option>
                    <option>Host</option>
                    <option>Hostess</option>
                    <option>Emcee</option>
                    <option>DJ</option>
                    <option>Spiritual Person</option>
                    <option>Belly Dancer</option>
                    <option>Makeup Artist</option>
                    <option>Model</option>
                    <option>Speaker</option>
                    <option>Bollywood Dance</option>
                    <option>Bhangra Group</option>
                    <option>Traditional Dance Group</option>
                    <option>Traditional Singing Group</option>
                    <option>Instrumentalist</option>
                    <option>Band</option>
                    <option>Actor/Actress </option>
                    <option>Photographer</option>
                    <option>Dance Troupe</option>
                    <option>Motivational speaker</option>
                    <option>Poet</option>
                    <option>Celebrity</option>
                    <option>Unique act performer</option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                  <label>City*</label>
                  <input type="text" class="form-control" name="artist_city" value="NORTH EAST DELHI" />
                </div>
                
                <div class="form-group col-md-6">
                  <label>Performance Duration*</label>
                  <input type="text" class="form-control" name="performance_duration" value="2 houre" />
                </div>
                
                <div class="form-group col-md-6">
                  <label>Open To Travel*</label>
                  <input type="text" class="form-control" name="open_to_travel" value="Only Delhi" />
                </div>
                
                <div class="form-group col-md-6">
                  <label>Music/Genre*</label>
                  <input type="text" class="form-control" name="music_genre" value="testing" />
                </div>
                
                <div class="form-group col-md-6">
                  <label>Team Members*</label>
                  <input type="text" class="form-control" name="team_members" value="1" />
                </div>
                
                <div class="form-group col-md-12">
                  <label>Location*</label>
                  <input type="text" class="form-control" name="location" value="Noida" />
                </div>
                
                <div class="form-group col-md-12">
                  <label>Keywords*</label>
                  <input type="text" class="form-control" name="artist_keyword" value="Anchor in Delhi"/>
                </div>
                
                <div class="form-group col-md-12">
                  <label>Description*</label>
                    <div id="tinymce-form">
                    <fieldset class="form-group">
                    
                    </fieldset>
                    </div>
                </div>
                
                <div class="form-group col-md-4">
                  <button type="submit" class="form-control btn btn-secondary" name="Hire4event_ArtistProfile" id="Hire4event_ArtistProfile" value="Submit">Continue</button>
                </div>
                </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4">
      
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
export default Artistprofile;
