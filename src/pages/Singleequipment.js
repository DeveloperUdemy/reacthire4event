import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Parser } from 'html-to-react';
import axios from 'axios';
import Artistscomponent from './components/Artistscomponent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Singleequipment() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const Mainurl = 'https://hire4event.com/apppanel/';
    let { slug_url } = useParams();
    const [equipmentDetail, setEquipmentDetail] = useState([]);
    const navigate = useNavigate();
    function getEquipmentSingle() {
       
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/equipment/single/'+slug_url;
        axios.get(url, { headers })
       .then(resp => {
        setEquipmentDetail(resp.data.equipmentSingle);
           //console.log(resp.data.equipmentSingle);
       })
       .catch(function (error) {
        navigate('/');
       });
      }

      useEffect( () => {
        getEquipmentSingle();
      },[]);


  return (
    <Fragment>

 <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{ background: 'url("https://hire4event.com/images/bg/event-equip.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> {equipmentDetail.heading}</h3>
            <div class="d-md-flex d-block"> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <a class="btn btn-secondary" href="#"> <i class="far fa-user pr-2"></i> Book Now</a> </div>
    </div>
  </div>
</section>


<section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 mt-4 mt-lg-0 listing-detail-page">
        <div class="mt-4">
          <div class="tab-pane">
            <div class="row mb-4">
              <div class="col-12">
                <div class="section-title">
                  <h2>{equipmentDetail.heading}</h2>
                  <div class="sub-title text-right"> <span> We can provide every equipment or services related to event</span></div>
                </div>
              </div>
              <div class="col-md-4">

              <LazyLoadImage
              alt={equipmentDetail.heading}
              effect="blur"
              width={'100%'}
              src={Mainurl+'assets/equipments/'+equipmentDetail.image+''} />

                </div>
              <div class="col-md-8">
                
              {Parser().parse(equipmentDetail.content)}

              </div>
            </div>
            <div class="listing-detail-box mb-3">
              <div class="detail-title">
                <h5>More details about {equipmentDetail.heading}</h5>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/price.png'} /> Rental/Charges-<br />
                      <strong>{equipmentDetail.price}</strong></li>
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/music.png'} /> Suitable for<br />
                      <strong>{equipmentDetail.suitable_for}</strong></li>
                    
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/location1.png'} /> Available in Cities<br />
                      <strong>{equipmentDetail.available_in_cities}</strong></li>
                    <li class="mb-3"> <img src={Mainurl+'assets/primaryimage/brand.png'} /> Brand Name<br />
                      <strong>{equipmentDetail.brand_name}</strong></li>
                    
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Artistscomponent />

</Fragment>
  )
}

export default Singleequipment;