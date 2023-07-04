import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function Consultingservics ()  {
  const Mainurl = 'https://hire4event.com/apppanel/';
  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/11';
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

  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Consulting Services </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Consulting Services</span> </div>
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
            <div class="row mb-4">
              <div class="col-12">
                <div class="section-title">
                  <h2>Consulting Services</h2>
                  <div class="sub-title text-right"> <span> Interesting info Consulting Services</span></div>
                </div>
              </div>
              
        <div class="col-md-12">
          <p>As consultants, Global Magic Consulting Private Limited respects our client's high expectations and proceed keeping that in mind. We can assure you that our service put immediate effects on results and begins a profitable professional relationship. Our unique experience with the various disciplines of senior housing and elderly care services enables Global Magic Consulting Private Limited the ability to provide our clients with the necessary direction, solutions, and understanding to succeed in this competitive and rapidly changing industry. We are confident that whether it's pursuing solutions or strategies for maximizing value for an individual property or at the company level that our experience will be apparent to your organization and your success.event management technology use to manage events.</p>
        
        <p>A number of factors involved in a successful community must be considered in this service intensive industry. Each aspect of effective management, planning, financial control, and consumer orientation, is core for long-term success for any project or company. Global Magic Consulting Private Limited believes that all are equally important, and can offer expertise based on experience and proven success in one or all of these areas based on your organization's interests. We pursue the best and most cost-effective strategies to meet our client's needs.</p>

        <p>We would like to introduce ourselves as one of the leading Delhi NCR based event & promotional company in the North East region of the country with a presence in all major cities in the region. We offer crystal clear communication and dedicated services to our clients. We have been in this business for 7 years and we can proudly say that we have grown our client base because of our relentless drive to meet our client's needs.</p>
        
        <p><strong>Global Magic Consulting Private Limited professional consulting services include the following:</strong><br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Strategic business planning  <br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Portfolio review<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Design of operating and marketing reporting<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Acquisition and disposition of assets<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Management effectiveness<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Operating and marketing review<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Liability evaluation etc.</p>

<p>Global Magic Consulting Private Limited believes that with your company's success, we will be enhancing ourselves indirectly. We keep our reputation as a base and build stairs of success for you and for us on it.</p>
 
<p>For more information in regards to our consulting services, please visit <strong><a href="http://www.GlobalMagic.org" target="_blank">http://www.GlobalMagic.org</a></strong>      </p>
        
        </div>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Equipmentcomponent />
<Artistscomponent/>
</Fragment>
)
}
export default Consultingservics;
