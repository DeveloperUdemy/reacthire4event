import React, { useEffect, Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Parser } from 'html-to-react';
import Artistscomponent from './components/Artistscomponent';
import Inhouseservices from './Inhouseservices';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet';
function InhouseSingleservice() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

 const {slug_url} = useParams();

 const [serviceDetail, setServiceDetail] = useState([]);
 const navigate = useNavigate();
 const Mainurl = 'https://hire4event.com/apppanel/';
 function getServiceDetail() {
   const headers = {
     'Content-Type': 'application/json',
     'Content-Type': 'multipart/form-data'
   };
  const url = Mainurl + 'api/services/inhousesingle/'+slug_url;
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


      <Helmet>
        <title>{serviceDetail.title}</title>
        <meta name="description" content={serviceDetail.meta} />
        <meta name="keywords" content={serviceDetail.title} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={serviceDetail.title} />
        <meta property="og:description" content={serviceDetail.meta}/> 
        <meta property="og:image" content={Mainurl+'assets/service/'+serviceDetail.image+''} />
        <link rel="canonical" href={window.location.href}/>
      </Helmet>


    <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")'}}>
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
              
              <div class="col-md-4">
              <LazyLoadImage
              alt={serviceDetail.title}
              effect="blur"
              width={'100%'}
              src={'https://www.hire4event.com/apppanel/assets/service/'+serviceDetail.image+''} />
                </div>
              
              <div class="col-md-8">
              {Parser().parse(serviceDetail.content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

<Artistscomponent />

<Inhouseservices />

  </Fragment>
  )
}
export default InhouseSingleservice;
