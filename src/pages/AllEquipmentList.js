import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AllEquipmentList() {
  const Mainurl = 'https://hire4event.com/apppanel/';
  const [equipmentDetails, setEquipmentDetails] = useState([]);
  const [visible, setVisible] = useState(24);
  const showMore = () => {
    setVisible((prevValue) => prevValue+40);
  }
  function getEquipment() {
    const headers = {
      "Content-Type": "application/json"
    };
    const url = Mainurl+'api/equipment/alllist';
    axios.get(url, { headers })
    .then(resp => {
      setEquipmentDetails(resp.data.equipmentList);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
    useEffect(()=>{
      getEquipment();
    },[]);


  return (
    <Fragment>

<section class="banner bg-holder bg-overlay-black-50" style={{backgroundImage: "url(images/bg/image.jpg)", padding: "150px 0 21px"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="text-white">Search Event Equipment</h1>
        <p class="text-white banner-sub-title">Find the event equipment</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form class="home-search" method="get" id="equipment_search" action="">
          <div class="row mt-1 mt-lg-2">
            <div class="col-sm-4 col-lg-4 col-xl-5">
            <div class="form-group form-location"> <span>What?</span>
            <input type="text" class="form-control" name="product_name" placeholder="Search Equipment" value="" />
            </div>
            </div>
            <div class="col-sm-5 col-lg-5 col-xl-4">
              <div class="form-group form-location"> <span>Where?</span>
                <input type="text" name="location_city" value="" class="form-control" placeholder="Enter city or location" />
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-xl-3">
                <input type="submit" name="search_equipment" value="Search Equipment" class="form-control btn-secondary" />
            </div>
          </div>
        </form>
        <p style={{color: "#fff", textAlign: "center"}}>Event sound on rent in Noida, Sound on hire in Delhi, DJ for corporate event</p>
      </div>
    </div>
  </div>
</section>


<section class="space-pb popup-gallery" style={{paddingBottom: "40px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title" style={{marginTop: "20px"}}>
          <h2>Event Equipment</h2>
          <div class="sub-title text-right"> <span> We can provide every equipment or services related to event</span></div>
        </div>
      </div>
    </div>
    <div class="row even">
    {
    equipmentDetails.slice(0, visible).map((getEquipmentData) => {
      const {heading,url,image,id} = getEquipmentData;
      return (
        <>
      <div class="col-lg-3 col-sm-3 mb-4" key={id} > <Link to={'/'+url}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <LazyLoadImage
              alt={heading}
              effect="blur"
              height={"265"}
              width={"100%"}
              src={Mainurl+'assets/equipments/'+image+''} />
    </div>
          <div class="listing-details">
            <div class="listing-details-inner">
              <div class="listing-title">
                <h6>{heading}</h6>
              </div>
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
      <div class="col-md-4" style={{textAlign: "center"}}><button onClick={showMore} class="btn btn-primary">Load More {'>>'} </button></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>


    </Fragment>
  )
}

export default AllEquipmentList