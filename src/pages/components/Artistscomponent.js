import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { FcApproval, FcSearch, FcPhone } from "react-icons/fc";
import { RotatingLines } from 'react-loader-spinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Artistscomponent = () => {

  
    const Mainurl = 'https://hire4event.com/apppanel/';
    const [artistDetails, setArtistDetails] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    function getArtist() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = Mainurl+'api/artist/listartist';
      axios.get(url,{headers})
      .then(resp => {
        setIsLoader(false);
        setArtistDetails(resp.data.artistList);
        //console.log(resp.data);
      })
      .catch(function(error) {
        setIsLoader(true);
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
    isLoader ? <>
    <div class="col-md-12 col-sm-3" style={{textAlign: "center"}}>
    <RotatingLines
      strokeColor="yellow"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    /> 
    </div>
    </> :  
    artistDetails.slice(0,8).map((getData) => {
      const {first_name,last_name, url, city, category, image, register_id} = getData;

      let myIMG = image;
      let newIMG = myIMG.replace("https://www.hire4event.com/artistimage/", "");
      let newIMGShow = newIMG.replace("https://hire4event.com/artistimage/", "");
      let newIMGShowImage = newIMGShow.replace("https://hire4event.com/artist/testimonial/", "");
      return (
        <>
      <div class="col-lg-3 col-sm-6 mb-4" key={register_id}> <Link to={'/artist/'+url+''}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <LazyLoadImage
              class={"img-fluid"}
              effect="blur"
              src={Mainurl+'assets/artistimage/'+newIMGShowImage}
              alt={first_name+' '+last_name}
              style={{
                height: "394px",
                width: "100%"
              }}
              visibleByDefault={'.../public/default-artist.webp'}
              />
            <div class="listing-quick-box"> 
            <Link class="category" to={'/artist/'+url+''}> <FcApproval /> {category} | {city}</Link> 
            <Link class="popup popup-single" data-toggle="tooltip" data-placement="top" title="Zoom"> <FcSearch /> {/*<i class="fas fa-search-plus"></i>*/} </Link> </div>
          </div>
          <div class="listing-details">
            <div class="listing-details-inner">
              <div class="listing-title">
                <h6>{first_name} {last_name}</h6>
              </div>
              <div class="listing-rating-call"> <Link class="listing-rating" to={'/artist/'+url+''}><span>0.0</span> Rating</Link> <Link class="listing-call" to={'artist/'+url+''}> <FcPhone />{/*<i class="fas fa-phone-volume"></i>*/} +91 xxx xxx xxxx</Link> </div>
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
      <div class="col-md-4" style={{textAlign: "center"}}><Link to="/book-an-artist" class="btn btn-primary">View More Artist</Link></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>
</>
  )
}

export default Artistscomponent;