import React from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function Marketingservice ()  {
  return (
  <div>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Marketing Services </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Marketing Services</span> </div>
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
                  <h2>Marketing Services</h2>
                  <div class="sub-title text-right"> <span> Interesting info Marketing Services</span></div>
                </div>
              </div>
              
        <div class="col-md-12">
        <p>Hire4Event.com provides total Marketing solution to our clients. Hire4Event.com can be considered as one of the leading Marketing Services Company or Marketing Company for different cities in India. We provide both The Conventional Marketing such as BTL, TTL, ATL and The Non-Conventional Marketing known as Digital Marketing these days. Both the Marketing Approaches are efficient in different manner. One cannot differentiate between them on the basis of efficiency, but they do provide different results in different situations.</p>
        <p>Generally Marketing is incomplete without the proper drafting of Positioning and Targetting Strategiesand for this one needs an experenced group of marketters. We have a team of experenced and qualified personnals for the drafting of such sttrategies. As Marketing is not a free of cost process, the output is expected to be the most. Our team of professionals work to make you achieve your target. We have separate team of professionals dedicated towards both the Marketing approaches, Conventional an Non-Coventional as well. One team is assigned with only one client and the dedication level is high. They are experienced enough to arrange potential customers or clients for you and to increase the interest in your existing customers or clients towards you. They have a good hold on all the Marketing activities like BTL, TTL, ATL and Digital Marketing i.e. twitter, Linkedin and other Social Networking Portals.</p>
        <p>Being an Event Management Company we do not have to rush for vendors as we have all the needed Equipments and other services in our hand. Our charges are very minimal against our offered services. We fetch out the maximum possible outcome from our marketing.</p>
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
</div>
)
}
export default Marketingservice;
