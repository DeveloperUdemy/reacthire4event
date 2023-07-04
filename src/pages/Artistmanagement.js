import React, {useEffect, useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Artistscomponent from './components/Artistscomponent';
import Ourservices from './Ourservices';
function Artistmanagement ()  {

  const Mainurl = 'https://hire4event.com/apppanel/';
  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/13';
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
            <h3 class="text-white mb-2"> Artist Management </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Artist Management</span> </div>
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
                  <h2>Artist Management</h2>
                  <div class="sub-title text-right"> <span> Meet the amazing team behind hire4event & find out more about how we work.</span></div>
                </div>
                
              </div>
              
    <div class="row align-items-center">
      <div class="col-lg-4">
        <a href="https://hire4event.com/artist-booking">  
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>01</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Artist Booking</h5>
            <p>Event Management is one such task that requires not just simple execution, but the courage and far sightedness to take things forward with ease. Hosting a successful event comes handy only</p>
          </div>
        </div>
        </a>
      </div>
      <div class="col-lg-4">
        <a href="https://hire4event.com/artist-scouting"> 
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>02</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Artist Scouting</h5>
            <p>Artist Scouting: Prove your worth Talent is an amazing thing. Some are born with it; some develop these skills with sheer hard work and discipline. Every artist wants recognition; they want</p>
          </div>
        </div>
        </a>
      </div>
      <div class="col-lg-4">
        <a href="https://hire4event.com/artist-management">  
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>03</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Artist Management</h5>
            <p>We are an online platform of artists that helps other artists to come and create a profile and fill details to be promoted over google. Hire4event is an established name in the field of artist management</p>
          </div>
        </div>
        </a>
      </div>
    </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Artistscomponent/>


<section class="space-ptb bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title-light">
          <h2>Different Organizer, Different Needs</h2>
          <div class="sub-title text-right bg-transparent"> <span> Meet the amazing team behind hire4event & find out more about how we work.</span></div>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-4">
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>01</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Create Single Or Series Of Events</h5>
            <p>When you need a good event, you can hire the professional team who is willing to do the things smoothly. In fact, the series of events have been taken from the...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>02</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Marketing And Promotions</h5>
            <p>Based on our marketing and promotions, the event may organize well and thus have a familiar platform for everyone. So, this brings forth attention to reliable event planner...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="feature-info-02 mb-lg-5 mb-4">
          <div class="feature-icon">
            <span>03</span>
          </div>
          <div class="feature-content">
            <h5 class="feature-title">Lots Of Payment Methods</h5>
            <p>When you hire the event planner, they discover decent payment methods. Some of the methods are simple so that one can let a good event organizer for your need and...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Ourservices/>
</Fragment>
)
}
export default Artistmanagement;
