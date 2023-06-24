import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Contact ()  {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
  
<section class="page-title bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <h1 class="text-white">Contact Us</h1>
        <p class="text-white lead">There are basically six key areas to higher achievement. Some people will tell you there.</p>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="space-pb mt-n5 position-relative z-index-1">
  <div class="container">
    <div class="row no-gutters bg-white shadow">
      <div class="col-lg-7 bg-white">
        <div class="contact-form p-md-5 p-4">
          <h4 class="mb-4 text-primary">Let’s Get In Touch!</h4>
          <form class="pt-3" id="Hire4event-Contact">
              <div id="error_Contact"></div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Your name*</label>
                <input type="text" class="form-control" name="name" placeholder="Your name" />
              </div>
              <div class="form-group col-md-6">
                <label>Your phone*</label>
                <input type="text" class="form-control" name="phone" placeholder="Your phone" />
              </div>
              <div class="form-group col-md-12">
                <label>Your email*</label>
                <input type="email" class="form-control" name="email" placeholder="Your email" />
              </div>
             <div class="form-group col-md-12">
                <label>Address</label>
                <input type="text" class="form-control" name="address" placeholder="Address" />
              </div>
              <div class="form-group col-md-12">
                <label>Your message</label>
                <textarea class="form-control" rows="4" name="message" placeholder="Your message"></textarea>
              </div>
              <div class="form-group col-md-12">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" />
                  <label class="custom-control-label pr-5" for="customCheck1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary" type="submit" id="Hire4event_Contact" name="Hire4event_Contact" style={{width: "100%"}}> Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-5 bg-primary p-md-5 p-4">
        <h4 class="text-white mb-4">Contact information</h4>
        <div class="contact-address pt-3">
          <div class="d-flex mb-3">
            <div class="contact-address-icon">
              <i class="flaticon-location text-white fa-3x"></i>
            </div>
            <div class="ml-3">
              <h6 class="text-white">Address</h6>
              <p class="text-white">21 SNG Plaza Golf link-1, Greater Noida</p>
            </div>
          </div>
          <div class="d-flex mb-3">
            <div class="contact-address-icon">
              <i class="flaticon-mail text-white fa-3x"></i>
            </div>
            <div class="ml-3">
              <h6 class="text-white">Email</h6>
              <p class="text-white">sales@hire4event.com</p>
            </div>
          </div>
          <div class="d-flex mb-3">
            <div class="contact-address-icon">
              <i class="flaticon-call text-white fa-3x"></i>
            </div>
            <div class="ml-3">
              <h6 class="text-white">Phone Number</h6>
              <a class="text-white mb-2" href="tel:9718941111, 9811312005">9718941111, 9811312005</a>
            </div>
          </div>
          <div class="d-flex mb-3">
            <div class="contact-address-icon">
              <i class="flaticon-call text-white fa-3x"></i>
            </div>
            <div class="ml-3">
              <h6 class="text-white">Fax</h6>
              <a class="text-white mb-2" href="tel:(456) 478-2589">(456) 478-2589</a>
            </div>
          </div>
          <div class="social-icon-02 mt-4 mt-md-5">
            <div class="d-flex align-items-center">
              <h6 class="mr-3 mb-0 text-white">Social :</h6>
              <ul class="list-unstyled mb-0 d-flex">
                <li><a href="https://www.facebook.com/hire4eventofficial" target="_blank" class="text-white mr-3"> <i class="fab fa-facebook-f"></i> </a></li>
                <li><a href="https://twitter.com/hire4eventcom" target="_blank" class="text-white mr-3"> <i class="fab fa-twitter"></i> </a></li>
                <li><a href="https://www.linkedin.com/company/hire4event-com/" target="_blank" class="text-white mr-3"> <i class="fab fa-linkedin"></i> </a></li>
                <li><a href="https://in.pinterest.com/" target="_blank" class="text-white mr-3"> <i class="fab fa-pinterest"></i> </a></li>
                <li><a href="https://www.instagram.com/?hl=en" target="_blank" class="text-white mr-3"> <i class="fab fa-instagram"></i> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="map">
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-sm-12">
        <div class="map h-500">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28061.942316270357!2d77.502752!3d28.457169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42bda5ed9fe8f585!2sSound%20system%20on%20rent%20in%20Delhi!5e0!3m2!1sen!2sin!4v1612432619733!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

</Fragment>
)
}
export default Contact;
