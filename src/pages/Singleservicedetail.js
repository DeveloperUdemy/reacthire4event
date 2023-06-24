import React, { useEffect, Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

 function Singleservicedetail() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

 const {slug_url} = useParams();

 const [serviceDetail, setServiceDetail] = useState([]);
 const navigate = useNavigate();
 function getServiceDetail() {
   const Mainurl = 'https://hire4event.com/apppanel/'; 
   const headers = {
     'Content-Type': 'application/json',
     'Content-Type': 'multipart/form-data'
   };
  const url = Mainurl + 'api/services/single/'+slug_url;
     axios.get(url, { headers })
    .then(resp => {
        setServiceDetail(resp.data.serviceSingle);
        console.log(resp.data.serviceSingle);
    })
    .catch(function (error) {
     navigate('/');
    });
   }
   useEffect( () => {
    getServiceDetail();
   },[]);
  return (
    <Fragment>
    <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
    <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> {serviceDetail.name}</h3>
            <span class="d-inline-block ml-md-3 ml-0 text-white">{serviceDetail.title}</span> </div>
          </div>
        </div>
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
                  <h2>{serviceDetail.name}</h2>
                  <div class="sub-title text-right"> <span> {serviceDetail.title} </span></div>
                </div>
              </div>
              
              
              <div class="col-md-4"><img src={'https://www.hire4event.com/apppanel/assets/service/'+serviceDetail.image+''} style={{width: "100%"}} /></div>
              <div class="col-md-8">
               
              {serviceDetail.content}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </Fragment>
  )
}
export default Singleservicedetail;
