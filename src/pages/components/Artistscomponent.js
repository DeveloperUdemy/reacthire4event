import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcApproval, FcSearch, FcPhone } from "react-icons/fc";
import axios from "axios";

const Artistscomponent = () => {
    const Mainurl = 'https://hire4event.com/apppanel/';
    const [artistDetails, setArtistDetails] = useState([]);
    function getArtist() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = Mainurl+'api/artist/listartist';
      axios.get(url,{headers})
      .then(resp => {
        setArtistDetails(resp.data.artistList);
        //console.log(resp.data);
      })
      .catch(function(error) {
        console.log(error.resp);
      });
    }
      useEffect(()=>{
        getArtist();
      },[]);
    
  return (  
    <> 
<section class="space-pb popup-gallery">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>Book an Artist</h2>
          <div class="sub-title text-right"> <span> Make a list of your artist toward your long-term goal</span></div>
        </div>
      </div>
    </div>
    <div class="row">
    {
    artistDetails.slice(0,9).map((getData) => {
      const {first_name, url, city, category, image, register_id} = getData;
      return (
        <>
      <div class="col-lg-4 col-sm-6 mb-4" key={register_id}> <Link to={'artist/'+url+''}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> <img class="img-fluid" src={image} alt={first_name} style={{height:"394px", width:"100%"}} />
            <div class="listing-quick-box"> 
            <Link class="category" to={'artist/'+url+''}> <FcApproval />{/*<i class="fa fa-check" aria-hidden="true"></i>*/} {category} | {city}</Link> 
            <Link class="popup popup-single" data-toggle="tooltip" data-placement="top" title="Zoom"> <FcSearch /> {/*<i class="fas fa-search-plus"></i>*/} </Link> </div>
          </div>
          <div class="listing-details">
            <div class="listing-details-inner">
              <div class="listing-title">
                <h6>{first_name}</h6>
              </div>
              <div class="listing-rating-call"> <Link class="listing-rating" to={'artist/'+url+''}><span>0.0</span> Rating</Link> <Link class="listing-call" to={'artist/'+url+''}> <FcPhone />{/*<i class="fas fa-phone-volume"></i>*/} +91 xxx xxx xxxx</Link> </div>
            </div>
          </div>
        </div>
        </Link> 
      </div>
      </>
      )
      })
      }
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4" style={{textAlign: "center"}}><a href="book-an-artist" class="btn btn-primary">View More Artist</a></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>
</>
  )
}

export default Artistscomponent;