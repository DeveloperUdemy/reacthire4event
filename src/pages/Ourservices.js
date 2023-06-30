import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Ourservices = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Mainurl = 'https://hire4event.com/apppanel/';
  const [servicesDetails, setServicesDetails] = useState([]);
  function getServices() {
    const headers = {
      "Content-Type": "application/json"
    };
    const url = Mainurl+'api/services/list';
    axios.get(url, { headers })
    .then(res => 
    setServicesDetails(res.data.servicesList) 
        //console.log(res.data.servicesList)
    )
    .catch(function(error) {
      console.log(error);
    });
  }
  
  
    useEffect(()=>{
      getServices();
    },[]);

  return ( 
    <Fragment>  
<section class="space-pb popup-gallery overflowx-h" style={{marginTop: "20px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>OUR SERVICES</h2>
          <div class="sub-title text-right"> <span> Hire4event is a leading provider for all your Event Management needs in India,</span></div>
        </div>
      </div>
    </div>
    <div class="row servicess">
    {
    servicesDetails.slice(0,6).map((post) => {
      const {url, name, title, image, color} = post;
      return (
      <div class="col-6 mb-4"> <Link to={'/service/'+url+''}>
        <div style={{backgroundColor: color, float: "left", width: "100%"}}>
          <div class="cont" style={{paddingBottom: "15px"}}>
            <h6>{name}</h6>
            <p class="mb-0">{title.slice(0,400)}</p>
          </div>
          <div class="ims">
            <LazyLoadImage
              class={"img-fluid"}
              effect="blur"
              src={Mainurl+'assets/service/'+image+''}
              alt={name}
              />
            </div>
        </div>
        </Link> 
        </div>
      )
    })
    }
      

    </div>
  </div>
  </section>
  </Fragment>
  )
}

export default Ourservices;