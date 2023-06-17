import React from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
import Ourservices from './Ourservices';
function Services ()  {
  return (
    <div>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Our Services </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Our Services</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <i class="far fa-user pr-2"></i>Contact Us</Link> </div>
    </div>
  </div>
</section>

<Ourservices/>
<Equipmentcomponent />
<Artistscomponent/>
</div>
)
}
export default Services;
