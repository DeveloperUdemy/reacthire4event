import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { RotatingLines } from 'react-loader-spinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Equipmentcomponent = () => {
const Mainurl = 'https://hire4event.com/apppanel/';
const [equipmentDetails, setEquipmentDetails] = useState([]);
const [isLoader, setIsLoader] = useState(true);

function getEquipment() {
  const headers = {
    "Content-Type": "application/json"
  };
  const url = Mainurl+'api/equipment/list';
  axios.get(url, { headers })
  .then(resp => {
    setIsLoader(false);
    setEquipmentDetails(resp.data.equipmentList);
    //console.log(resp.data.equipmentList);
  })
  .catch(function(error) {
    setIsLoader(true);
    console.log(error);
  });
}
  useEffect(()=>{
    getEquipment();
  },[]);

    
  return ( 
    <>  
<section class="space-pb popup-gallery" style={{paddingBottom: "40px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>Book Event Equipment Here</h2>
          <div class="sub-title text-right"> <span> We can provide every equipment or services related to event</span></div>
        </div>
      </div>
    </div>
    <div class="row even">
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
    equipmentDetails.slice(0,12).map((getEquipmentData) => {
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
      <div class="col-md-4" style={{textAlign: "center"}}><Link to="/equipment" class="btn btn-primary">View More Equipment</Link></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>
</>
  )
}

export default Equipmentcomponent;