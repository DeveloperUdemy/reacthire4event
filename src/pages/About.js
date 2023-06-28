import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function About ()  {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> About Us </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info About Us</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <i class="far fa-user pr-2"></i>Contact Us</Link> </div>
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
                  <h2>About Us</h2>
                  <div class="sub-title text-right"> <span> Interesting info About Us</span></div>
                </div>
              </div>
              <div class="col-md-12">
               
               <h1 style={{ textAlign: "center"}}>Comming Soon Content Here!</h1>
               
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
export default About;
