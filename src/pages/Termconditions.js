import React,{useEffect,Fragment} from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function Termconditions ()  {
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
            <h3 class="text-white mb-2"> Term & Conditions </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Term & Conditions</span> </div>
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
                  <h2>Term & Conditions</h2>
                  <div class="sub-title text-right"> <span> Interesting info Term & Conditions</span></div>
                </div>
              </div>
              <div class="col-md-12">
                          <p><strong>Payments & Bookings:</strong><br/>
1. As we are a core Event Production and Management company, the overall Production cost must be paid by the organiser, we do not rely on the sponsors.</p>

<p>2. The total projected amount must be paid in two phases i.e. 50% of the total Amount in advance for the lockingof services as a booking Amount and the remaining 50% One Week (seven days) before the main Event. For bookings made within Three weeks of an event the total event fee will be due on confirmation of the booking.</p>

<p>3. The Company will only accept a booking upon receipt of written confirmation and once this is received a contract will be deemed to have been made. Until the booking deposit is paid and contract signed and returned, the Company shall be free to offer the date in question to other parties.</p>

<p><strong>Sponsorship:</strong><br/>
4. We do not work for the Sponsorships. The sponsors must be brought by the organiser himself and all the benefits must be discussed.</p>

<p><strong>Cancellations:</strong><br/>
5. If for any reason the Contracting Party cancels the booking, the booking deposit of 50% of total invoice value will be forfeited. If for any reason the Contracting Party cancels the booking within Five Days prior to the event date, the Contracting Party shall be liable to pay the total price contracted for.</p>

<p><strong>Change in Event Date:</strong><br/>
6. Once the booking is confirmed and Event Booking Form signed any change of contracted event date instigated by the contracting party up to 5 days prior to the event date, will incur an administration fee of 10% of the total contracted event fee. The contracted event date cannot be changed within Five days of the event date without the full event fee being incurred.</p>
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
export default Termconditions;
