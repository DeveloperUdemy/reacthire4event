import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Inhouseservices () {
  const Mainurl = 'https://hire4event.com/apppanel/';
  const [inhouseservicesDetails, setInhouseservicesDetails] = useState([]);
  function getinhouseServices() {
    const headers = {
      "Content-Type": "application/json"
    };
    const url = Mainurl+'api/services/inhouselist';
    axios.get(url, { headers })
    .then(res => 
    setInhouseservicesDetails(res.data.inhouseservicesList) 
        //console.log(res.data.inhouseservicesList)
    )
    .catch(function(error) {
      console.log(error);
    });
  }
  
  
    useEffect(()=>{
      getinhouseServices();
    },[]);

  return (
    <>
    <section class="space-pb popup-gallery">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>Hire4Event In House Service</h2>
          <div class="sub-title text-right"> <span> Make a list of your artist toward your long-term goal</span></div>
        </div>
      </div>
    </div>
    <div class="row">
    {
    inhouseservicesDetails.slice(0,6).map((post) => {
      const {url, name, title, image} = post;
      return (
      <div class="col-lg-6 col-sm-6 mb-4">
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <LazyLoadImage
              class={"img-fluid"}
              effect="blur"
              src={Mainurl+'assets/service/'+image+''}
              alt={name}
              width={"100%"}
              height={"380px"}
              />

          </div>
          <div class="">
            <div class="listing-details-inner">
              <div class="listing-title text-center" style={{padding: "15px"}}>
                <h6>{name}</h6>
                <p>{title}</p>
                <Link to={'/inhouse-service/'+url+''} class="btn btn-sm btn-warning">Know more</Link> </div>
            </div>
          </div>
        </div>
      </div>
      )
    })
    }
    </div>
  </div>
</section>
</>
  )
}

export default Inhouseservices;