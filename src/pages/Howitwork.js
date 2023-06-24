import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
function Howitwork ()  {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> How It Works </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info How It Works</span> </div>
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
                  <h2>How it works</h2>
                  <div class="sub-title text-right"> <span> Interesting info How it works</span></div>
                </div>
              </div>
              <div class="col-md-12">
              <p class="text-center"><img src="https://hire4event.com/apppanel/assets/primaryimage/how-works.png" /></p>
<p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Our service offers you assistance from the beginning till your requirements closed.<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> Whenever you have a question or need help, we'll be there<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> Individual Coordinator for Each client to close all your requirement<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> We will secure the best rates available, without compromising on quality or service.<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> Cost savings are highlighted, so you can plan your budget, calculate return on investment and get the best value for   money.<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> Our procedures ensure an innovative and creative approach to venue finding, whilst matching your deadlines and   maintaining consistently high levels of operating standards.<br/>
<i class="fa fa-angle-double-right" aria-hidden="true"></i> We believe in providing a magical experience to our client's by delivering the finest and incredible services to them with loyalty, hard work and pro activeness.</p>
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
export default Howitwork;
