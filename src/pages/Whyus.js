import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function Whyus ()  {
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
            <h3 class="text-white mb-2"> Why Us </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Why Us</span> </div>
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
                  <h2>Why Us</h2>
                  <div class="sub-title text-right"> <span> Interesting info Why Us</span></div>
                </div>
              </div>
              <div class="col-md-12">
             <img src="https://hire4event.com/apppanel/assets/primaryimage/why-us.png" style={{width: "300px", float: "right", marginLeft: "20px"}} />        
             <p>These days Companies are finding online project management systems and strategies used to manage multiple projects and to lower costs. We help you succeed by implementing these solutions and services that allow you to manage your Events and Exhibitions more efficiently and effectively. The difference with hire4event.com is our cultural dedication to Client Satisfaction and to our Community. We work hard each and everyday to build bridges of trust and loyalty with clients and companies. These bridges of trust and loyalty help us to retain the brightest associates, to improve satisfaction of our clients, to earn repetitive business, to maintain profit, and to always giving back to our community.</p> <p>Selecting equipment and materials used to be a tough job. But hire4event.com brings online portal for you to select your needed things with a single click. No need to visit those dark and smelly warehouses anymore because now you can select or have a look at the equipment on your laptop or smartphone.</p><p><strong>What Are the Services Offered by Event Management Companies?</strong>
             <br/>Generally, a party or an event will not get full filled if is not entailed with proper arranged. The arrangements are not the schedule that we are making it's all about the correct equipment that could coincide with the event. Most of the event managers may not know the exact place to rent all the types of equipment so they leave the equipment arrangement process.</p><p><strong>Notable Services Offered by Event Management Companies:</strong>
             <br/>The event consists of numerous activities and management all should be done in an advanced manner only by the professional one. Surely they will follow the upcoming services,</p><p><strong>Managing an event:</strong>
             <br/>Presence of mind and alternative thinking is the main concept in the event management. The reason is anything will happen at any time for those constraints the event manager must corporate. Then only any types of event like a trade show, product launch, wedding, cocktail party, awards ceremony or a sit-down gala dinner and many will get a blast with fun and happiness.</p><p><strong>Making all into an event:</strong>
             <br/>The thing which plays the first priority is visitor's choice as per their involvement only an event will happen in the correct flow. So the event manager will closely watch the visitor's and arrange for their preferable moments.</p><p><strong>Have to deliver good togetherness:</strong>
             <br/>Togetherness is nothing but the coordination, the event coordinator is the responsible person for the coordination of the theme that is lighting, décor, theming, styling, catering, sound, vision, and entertainment. If these arrangements are perfectly engaged only the joy, entertainment, and many other delightful activities will find its way.</p><p><strong>Splitting the arrangement:</strong>
             <br/>The Event Management Companies will have to nab the help of the other service companies like décor hire services because they will be experts in the field so they can assign a bridge to the event.</p><p><strong>Getting out the theme:</strong>
             <br/>The work of the Event Management Companies is not arranging equipment and planning apart from that they will intensively put effort to bring out the actual intention of an event. So they make every single step to carefully get the programming of content that is</p><p><strong>Extra services:</strong>
             <br/>The Event Management Companies can assign the beautiful centrepieces, comfortable linens, stunning floral arrangements and funky entertainment on the event for the entire guest.</p><p><strong>Main factor:</strong>
             <br/>The Event Management Companies will keep on track for the entertainment facts the professional and the reputational event planners will look for the Brisbane, Sydney or Melbourne because these are all the awaited moments for most of the visitors.</p><p>If you need all of these services to get lapped on your event then fill your party with all such fun which will get triggered out by the event types of equipment and the management we the Hire4event online firm. We are ready to rent all the Event management and production methods in the correct way. Just give a call or book your event on the blog we will organize the event with cent percent exhibition.</p>
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
export default Whyus;
