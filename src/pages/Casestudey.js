import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
import { FaRegUser } from "react-icons/fa";
function Casestudey ()  {

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
            <h3 class="text-white mb-2"> Case Study </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Case Study</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <FaRegUser style={{fontSize: "15px"}}/> Contact Us</Link> </div>
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
                  <h2>Case Study</h2>
                  <div class="sub-title text-right"> <span> Interesting info Case Study</span></div>
                </div>
              </div>
            <div class="col-md-12">
                <p>We are young, flexible and dynamic organization consists of a team of motivated professionals.Enthusiasm, openness, honesty, a personal approach and a love of what we do are key factors for all our employees.We are the top Event Manpower Company in Delhi-NCR. We are also one the of the Event Production Company  We also provide Event Equipment on Rent in india. We are also good in Event Fabrication.Hire4event.com provides the best Event Management Services and event volunteer in delhi. We Offer JBL VTX Line Array on rent, Mooving Head light on hire in delhi, Lucknow, Jaipur, Kanpur, Raipur, Ranchi etc. Mozo Barricading,Gazebo,JBL Speakers, X-Ray scanning Machines ,Line Array Speakers, Event Lightings in Delhi Ncr, Lucknow, Kanpur, Raipur, Jaipur etc. Carpets, Branding Vans,Hot air balloon,Masking on rent, Tin Fencing, Truss on rent. Camera Cranes,Waterproof tent Marquee on rent in Delhi Ncr. Portable, Walkies on rent in Power Gensets, Power Generators,Camera Drone Led Banners, Led Screens on Rent in Delhi, Stage Equipments,"exhibition stall designer fabricator in Greater Noida "and we also provide stall ,LED wall on rent,tv screen etc.</p>
                <p>You can say we are one stop solution for all event needs for every Event management companies in india  Event Management Services in Delhi-NCR. Event Planners and  Party planers.  lights on rent for events in Delhi. Corporate Events planner  NCR. Lucknow. Event management companies in Kanpur.Gurgaon. Catering Services in.Best Decorators in Delhi-NCR. Event Solutions in Goa. Event Planner Services in banglore Events in bhopal Corporate Events Chandigarh,companies Event organizers. Event organizers in India. lights on rent for  in Noida.  Martin speaker on rent for events in Delhi and NCR.  Jbl Line arrey sound on rent for events in rewari. Manpower provider in Delhi,Mumbai. German Hanger on rent in greater noida.gaziabad Moradabad, Gazebo on rent  Manpower provider in Manpower for Events in Chennai,ahmedabad,.Audio Equipments on rent in Delhi Ncr. Motivational speakers, conference speakers conference speakers conference speakers,executive coaching, executive workshops in Delhi.</p>
                <p>PA System hire, projector hire, conference AV, event services, live music equipment hire Mascot hire, rent a mascot, hire costumes, character hire, birthday character hire Event Services , Entertainment Services , DJ, Events Styling , Party Team Building, Extreme Sports, Corporate Events, Stag and Hen Party, Extreme Corporate Events,lead generation companies in all over india alog with Nepal Bhutan with all metro cities.</p>
                <p>Event management companies in Raipur ranchi,rurki,haridwar,.corporate Planners in Delhi,NOIDA FARIDABAD GURGAON Party planers,lights on rent for Corporate,Kanpur.bhilai durg Gurgaon goa,pune,hyderabad.Event Catering Services in Delhi-NCR.Best Decorators in Delhi-NCR. Event Solutions in Goa. Event organizers in India. .Outsource your customer and channel event management assignments, sales promotion design & execution, tele lead generation, field sales management, database validation & collection, Creative design & communication, corporate films, media planning, road shows and dealer Management to hire4event.com for impectable execution made possible through the use of detailed processes and technology.</p>
                <p>One of the leading BTL marketing and event management services organizations in India, hire4event.com is specializes in providing result oriented, innovative and cost effective marketing services to help you stay a few steps ahead.Manpower provider in Delhi-NCR. German Hanger on hire. Gazebo on rent in Delhi-NCR. Manpower provider in Manpower for Events in Delhi-NCR.Event management companies in greater noida.top event management company in greater noida,Event promoters in goa,Volunteers in goa,event staff ,promotion event staff promotional event goa,event staff promoters ,speakers on rent greater noida,corporate event management noida.Event management companies in Allahabad,event promoters in kanpur,event promoters in lucknow,eventpromotersinRaipur,eventpromoters,Bareilly,Gorakhpur, Jhansi,Agra,Mathura,Varanasi,banaras,Moradabad,we also provide services for rally,mall activation for brands in Kanpur Raipur ranchi mohali etc.</p>
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
export default Casestudey;
