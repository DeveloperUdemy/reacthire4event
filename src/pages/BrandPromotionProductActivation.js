import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Parser } from 'html-to-react';
import { Helmet } from 'react-helmet';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function BrandPromotionProductActivation ()  {

  const Mainurl = 'https://hire4event.com/apppanel/';
  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/37';
      axios.get(url, { headers })
     .then(resp => {
      setMetaDetail(resp.data.pageMeta);
     })
     .catch(function (error) {
      
     });
    }
  useEffect(() => {
    window.scrollTo(0, 0);
    getMetaSingle();
  }, []);

  return (
    <Fragment>

        <Helmet>
        <title>{metaDetail.meta_title}</title>
        <meta name="description" content={metaDetail.meta_description} />
        <meta name="keywords" content={metaDetail.meta_keyword} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={metaDetail.meta_title} />
        <meta property="og:description" content={metaDetail.meta_description}/> 
        <meta property="og:image" content={Mainurl+'assets/primaryimage/logo.png'} />
        <link rel="canonical" href={window.location.href}/>
        </Helmet>

  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Brand Promotion & Product Activation </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Brand Promotion & Product Activation</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <i class="fa fa-user pr-2"></i>Contact Us</Link> </div>
    </div>
  </div>
</section>
<section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 mt-4 mt-lg-0 listing-detail-page">
        <div class="mt-4">
          <div class="tab-pane">
            <div class="row mb-4 dsts">
              <div class="col-12">
                <div class="section-title">
                  <h1>{metaDetail.heading}</h1>
                  <div class="sub-title text-right"> <span> Interesting info Brand Promotion & Product Activation</span></div>
                </div>
              </div>
              <div class="col-md-12">

              {Parser().parse(metaDetail.content)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Artistscomponent/>
<Equipmentcomponent />
</Fragment>
)
}
export default BrandPromotionProductActivation;
