import React, {Fragment,useEffect, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import Owlslider from './Owlslider';
import Ourservices from './Ourservices';
import Inhouseservices from './Inhouseservices';
import Ourblogs from './components/Ourblogs';
import { Parser } from 'html-to-react';
import { FcCheckmark } from "react-icons/fc";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet';
import  axios  from 'axios';
const Artistscomponent = React.lazy(() => import('./components/Artistscomponent'));
const Equipmentcomponent = React.lazy(() => import('./components/Equipmentcomponent'));

const Home = () => {
  const Mainurl = 'https://hire4event.com/apppanel/';
  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/1';
      axios.get(url, { headers })
     .then(resp => {
      setMetaDetail(resp.data.pageMeta);
     })
     .catch(function (error) {
      
     });
    }


    const [eventcompanyDetail, setEventcompanyDetail] = useState([]);
    function getMetaSingleEventManagement() {
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/enquiry/pagemeta/44';
        axios.get(url, { headers })
       .then(resp => {
        setEventcompanyDetail(resp.data.pageMeta);
       })
       .catch(function (error) {
        
       });
      }


  useEffect(() => {
    window.scrollTo(0, 0);
    getMetaSingle();
    getMetaSingleEventManagement();
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

  <section class="banner bg-holder bg-overlay-black-50" style={{backgroundImage: "url(images/bg/home-banner-hiree4event.png)"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="text-white">Equipment Rental, Artist Booking, Venue Hire</h1>
        <p class="text-white banner-sub-title">Find the best Artist, Light & Sound system, Event venue, for conferences, Exhibitions, Weddings.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <ul class="nav nav-tabs nav-tabs-02 justify-content-center" id="myTab" role="tablist">
          <li class="nav-item"> <a class="nav-link active" id="Equipment-tab" data-toggle="tab" href="#Equipment" role="tab" aria-controls="Equipment" aria-selected="false"> <span> Equipment</span></a> </li>
          <li class="nav-item"> <a class="nav-link" id="Artist-tab" data-toggle="tab" href="#Artist" role="tab" aria-controls="Artist" aria-selected="true"><span>Artist</span></a> </li>
          <li class="nav-item"> <a class="nav-link" id="Venue-tab" data-toggle="tab" href="#Venue" role="tab" aria-controls="Venue" aria-selected="true"><span>Venue</span></a> </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="Equipment" role="tabpanel" aria-labelledby="Equipment-tab">
            <form class="home-search" action="equipment" method="get">
              <div class="row mt-1 mt-lg-2">
                <div class="col-sm-4 col-lg-5 col-xl-5">
                  <div class="form-group"> <span>What?</span>
                    <input type="text" name="product_name" class="form-control" placeholder="Search Equipment" />
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-xl-4">
                  <div class="form-group form-location"> <span>Where?</span>
                    <input type="text" name="location_city" class="form-control" placeholder="Enter city or location" />
                  </div>
                </div>
                <div class="col-sm-4 col-lg-3 col-xl-3">
                  <input type="submit" name="search_equipment" value="Search Equipment" class="form-control btn-secondary" />
                </div>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" id="Artist" role="tabpanel" aria-labelledby="Artist-tab">
            <form class="home-search" action="book-an-artist" method="get">
              <div class="row mt-1 mt-lg-2">
                <div class="col-sm-6 col-lg-5 col-xl-5">
                  <div class="form-group"> <span>What?</span>
                    <select class="form-control" name="category">
                      <option value="">Choose</option>
                      <option>Sketch Artist </option>
                      <option>Painter</option>
                      <option>Magician</option>
                      <option>Singer</option>
                      <option>Folk Singer</option>
                      <option>Dancer</option>
                      <option>Group Dancer</option>
                      <option>Comedian</option>
                      <option>Anchor</option>
                      <option>Host</option>
                      <option>Hostess</option>
                      <option>Emcee</option>
                      <option>DJ</option>
                      <option>Spiritual Person</option>
                      <option>Belly Dancer</option>
                      <option>Makeup Artist</option>
                      <option>Model</option>
                      <option>Speaker</option>
                      <option>Bollywood Dance</option>
                      <option>Bhangra Group</option>
                      <option>Traditional Dance Group</option>
                      <option>Traditional Singing Group</option>
                      <option>Instrumentalist</option>
                      <option>Band</option>
                      <option>Actor/Actress </option>
                      <option>Photographer</option>
                      <option>Dancetroupe</option>
                      <option>Motivational speaker</option>
                      <option>Poet</option>
                      <option>Celebrity</option>
                      <option>Unique act performer</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xl-4">
                  <div class="form-group form-location"> <span>Where?</span>
                    <input type="text" class="form-control" name="location_city" placeholder="Enter city or location" />
                  </div>
                </div>
                <div class="col-lg-3 col-xl-3">
                  <input type="submit" name="search_artist" value="Search Artist" class="form-control btn-secondary" />
                </div>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" id="Venue" role="tabpanel" aria-labelledby="Venue-tab">
            <form class="home-search" action="venue-listing" method="get">
              <div class="row mt-1 mt-lg-2">
                <div class="col-sm-5 col-lg-5 col-xl-5">
                  <div class="form-group"> <span>What?</span>
                    <select class="form-control" name="category">
                      <option value="">Choose type</option>
                      <option value="guest-house" >Guest House</option>
                      <option value="club" >Club</option>
                      <option value="wedding--social-events" >Wedding & Social Events</option>
                      <option value="annual-festivals" >Annual Festivals</option>
                      <option value="sports-events" >Sports Events</option>
                      <option value="music-concert" >Music Concert</option>
                      <option value="exhibition--seminars" >Exhibition & Seminars</option>
                      <option value="corporate-events" >Corporate Events</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-xl-4">
                  <div class="form-group form-location"> <span>Where?</span>
                    <input type="text" class="form-control" name="location_city" placeholder="Enter city or location" />
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-xl-3">
                  <input type="submit" name="search_venue" value="Search Venue" class="form-control btn-secondary" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <p style={{ color:"#fff", textAlign: "center" }}>Sound rental, Artist, DJ, Band booking, Venue Hire, Wedding Decor</p>
      </div>
    </div>
  </div>
</section>

<Suspense fallback={<div> Loading… </div>}><Owlslider /></Suspense> 

<Suspense fallback={<div> Loading… </div>}><Artistscomponent /></Suspense>

<Suspense fallback={<div> Loading… </div>}><Equipmentcomponent /></Suspense>

<Suspense fallback={<div> Loading… </div>}><Ourservices /></Suspense>

<Suspense fallback={<div> Loading… </div>}><Inhouseservices /></Suspense>

<section class="space-pb">
  <div class="container">
    <div class="row">
      

    <div class="col-lg-7">
        <div class="section-title">
          <h2>EVENT MANAGEMENT COMPANY</h2>
          <div class="sub-title text-right bg-transparent"> <span> in delhi NCR</span></div>
        </div>
        <div class="event-anagement">
         {Parser().parse(eventcompanyDetail.content)}
        </div>
        
          <Link to="/event-management-company-in-delhi-ncr" class="btn btn-primary">Know More</Link>
      </div>

      
      <div class="col-lg-5">
        <div class="position-relative"> 
        <LazyLoadImage
              class={"img-fluid border-radius w-100"}
              alt={'Event Management Company'}
              effect="blur"
              width={'100%'}
              src={'images/05.jpg'} />
        </div>
      </div>
    </div>
  </div>
</section>


<section style={{backgroundImage: "url(images/funfact_bg.jpg)"}}>
  <div class="container">
    <div class="p-5">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="counter">
            <div class="counter-icon"> <i class="flaticon-happy fa-3x text-primary"></i> </div>
            <div class="counter-content"> <span class="timer text-white" data-to="2456" data-speed="10000">2456</span>
              <label class="text-white">Happy Clients</label>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="counter">
            <div class="counter-icon"> <i class="flaticon-customer fa-3x text-primary"></i> </div>
            <div class="counter-content align-self-center"> <span class="timer text-white" data-to="5564" data-speed="10000">5564</span>
              <label class="text-white">Listed Artist</label>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="counter">
            <div class="counter-icon"> <i class="flaticon-like-1 fa-3x text-primary"></i> </div>
            <div class="counter-content"> <span class="timer text-white" data-to="491" data-speed="10000">491</span>
              <label class="text-white">In-house Equipments</label>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="counter">
            <div class="counter-icon"> <i class="flaticon-megaphone fa-3x text-primary"></i> </div>
            <div class="counter-content"> <span class="timer text-white" data-to="2790" data-speed="10000">2790</span>
              <label class="text-white">Event Done</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Suspense fallback={<div> Loading… </div>}><Ourblogs /></Suspense>

<section class="ts-intro-sponsors space-ptb">
    <div class="container">
      <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2 class="text-black" style={{color: "#000"}}>Companies that trust our work.</h2>
          <div class="sub-title text-right"> <span> Reflect and experiment until you find the right combination.</span></div>
        </div>
      </div>
    </div>
        <div class="col-lg-12">
          <div class="sponsors-logo text-center"> 
          <div class="row">
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/25.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/26.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/27.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/28.jpg" /></div>
              <div class="col-md-2 col-6 "> <img src="https://hire4event.com/apppanel/assets/client/31.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/36.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/37.jpg" /></div>
              
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/38.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/39.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/40.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/41.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/42.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/43.jpg" /></div>
              
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/44.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/45.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/46.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/47.jpg" /></div>
              <div class="col-md-2 col-6"> <img src="https://hire4event.com/apppanel/assets/client/48.jpg" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</Fragment>
  );
};
export default Home;
