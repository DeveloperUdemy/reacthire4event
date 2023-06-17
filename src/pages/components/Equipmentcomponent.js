import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Equipmentcomponent = () => {
const Mainurl = 'https://hire4event.com/apppanel/';
const [equipmentDetails, setEquipmentDetails] = useState([]);
function getEquipment() {
  const headers = {
    "Content-Type": "application/json"
  };
  const url = Mainurl+'api/equipment/list';
  axios.get(url, { headers })
  .then((res) => 
      setEquipmentDetails(res.data.equipmentList) 
      //console.log(res.data.equipmentList)
  )
  .catch(function(error) {
    console.log(error);
  });
}
  useEffect(()=>{
    getEquipment();
  },[]);

    
  return (   
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
    equipmentDetails.slice(0,12).map((getEquipmentData) => {
      const {heading,url,image,appimage} = getEquipmentData;
      return (
      <div class="col-lg-3 col-sm-3 mb-4"> <Link to={url}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <img class="img-fluid" src={Mainurl+'assets/equipments/'+image+''} alt={heading} style={{height: "265px",
    width: "100%"}} /> </div>
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
      )
    })
    }
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4" style={{textAlign: "center"}}><Link to="equipment" class="btn btn-primary">View More Equipment</Link></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>
  )
}

export default Equipmentcomponent;