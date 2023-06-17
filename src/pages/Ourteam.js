import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";


function Ourteam ()  {
  return (
    <div>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Team </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Why Us</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <FaRegUser style={{fontSize: "15px"}}/>Contact Us</Link> </div>
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
                  <h2>Our Team</h2>
                  <div class="sub-title text-right"> <span> Interesting info Why Us</span></div>
                </div>
              </div>
              
              
              <div class="col-md-12">
              <div class="row">
             <div class="col-md-2"><img src="https://hire4event.com/images/verma.png" style={{width: "100%", float: "right"}} />     </div>     
             <div class="col-md-9">
                 <h3>Mr. G.C. Verma</h3>
             <p>Mr. Verma is an Advisor (Vice President) with us under whose able guidance we have been able to flourish miles in our effort to be the preferred choice in this segment of the industry. He comes with 40+ years of immense experience served & retired as the Deputy Director in the Reasearch Designs & Standards Organisation of Indian Railways, Government of India.</p>
             </div>
             
              </div>
              </div>
              <div class="col-md-12"><hr/> </div>
              <div class="col-md-12">
               <div class="row">
             <div class="col-md-2"><img src="https://hire4event.com/images/Abhishek.png" style={{width: "100%", float: "right"}} />     </div>     
             <div class="col-md-10">
                 <h3>Mr. Abhishek Verma</h3>
             <p>Mr. Abhishek serves as an Advisor (Vice President) to us whose pragmatic & flamboyant personality has helped the company on all spheres to grow exponentially. He comes with around 11+ years of industry experience having served with top notch firms like IBM & Wipro.</p>
             </div>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
)
}
export default Ourteam;
