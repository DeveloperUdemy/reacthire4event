import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Emailsubscriber from './components/Emailsubscriber';
export default function Footer() {


    const Mainurl = 'https://hire4event.com/apppanel/';
    const [footerServices, setFooterServices] = useState([]);
    function getServices() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = Mainurl+'api/services/listfooter';
      axios.get(url, { headers })
      .then(res => 
        setFooterServices(res.data.servicesList) 
          //console.log(res.data.servicesList)
      )
      .catch(function(error) {
        console.log(error);
      });
    }

    const [footerKeyword, setFooterKeyword] = useState([]);
    function getKeywords() {
        const headers = {
          "Content-Type": "application/json"
        };
        const url = Mainurl+'api/services/keyword';
        axios.get(url, { headers })
        .then(res => {
            setFooterKeyword(res.data.keywordList) 
            //console.log(res.data.keywordList)
        })
        .catch(function(error) {
          console.log(error);
        });
      }


      useEffect(()=>{
        getServices();
        getKeywords();
      },[]);
  



return (
    <>
<div style={{position: "fixed",
    bottom: "11px",
    right: "15px",
    zIndex: "9999"}}> <a class="hidden-xs hidden-sm" target="_blank" href="https://wa.me/919718941111?text=Hi, I am interested in your services."> <img src="/images/GAC_Whatsapp-chat-icon-EN.png" alt="whatsapp" style={{height: "105px"}} /> </a> </div>
    <footer class="footer border-top space-ptb" style={{paddingBottom: "20px"}}>
        <div class="container">
            <div class="row">
                
        <div class="col-sm-12 col-md-6 col-lg-6 mb-4 mb-lg-0 pr-5 pt-5 pb-3" style={{borderRight: "solid 1px #ececec;", paddingBottom: "62px !important;"}}>
        <h5 class="text-primary mb-2 mb-sm-4">Hire4Event - Your Personal Corporate Event Organizer</h5>
        <div class="scrollHireAbout">
         <p>Are you in search of top-notch event organizers, experienced event planners, or a reliable event management company in Delhi, Noida, or Gurgaon? Look no further! Our team of professionals specializes in crafting unforgettable events tailored to your unique requirements. With a proven track record of successful events and a passion for creating exceptional experiences, we are your trusted partners in turning your vision into reality.
</p>
<h4>Event Organizers in Delhi, Noida, and Gurgaon:</h4>
<p>When it comes to event organizing, our company stands out as a leader in Delhi, Noida, and Gurgaon. We understand that every event is different, whether it's a corporate gathering, a wedding celebration, or a grand product launch. Our dedicated team takes the time to comprehend your objectives and ensures that every detail is meticulously planned and executed to perfection.
</p>
<h4>Experienced Event Planners:</h4>
<p>Our experienced event planners possess the creativity, expertise, and industry knowledge to transform your event into an extraordinary affair. We collaborate closely with you, incorporating your ideas and preferences while offering valuable suggestions to enhance your event's overall impact. From conceptualization and theme development to vendor coordination and logistics management, our event planners have you covered at every step of the journey.
</p>
<h4>Event Management Company in Delhi, Noida, and Gurgaon:</h4>
<p>As a leading event management company in Delhi, Noida, and Gurgaon, we take pride in delivering seamless event experiences. Our dedicated team ensures smooth operations, allowing you to enjoy the event stress-free. We meticulously handle venue selection, stage setup, audiovisual requirements, lighting arrangements, catering services, entertainment, and much more. With our attention to detail and commitment to excellence, we strive to exceed your expectations.
</p>
<h4>Why Choose Us:</h4>

<p><strong>Expertise and Experience:</strong> With years of experience in the industry, we have a deep understanding of event management and the ability to handle diverse event types and scales.
</p>
<p><strong>Personalized Approach:</strong> We believe in personalized event experiences. Our team takes the time to understand your vision and objectives, ensuring that your event reflects your unique style and requirements.
</p>
<p><strong>Attention to Detail:</strong> We leave no stone unturned when it comes to event planning and execution. Every aspect, big or small, is meticulously managed to create a seamless and unforgettable experience.
</p>
<p><strong>Professional Network:</strong> Over the years, we have developed a strong network of trusted vendors, suppliers, and industry professionals. This allows us to provide you with the best services, ensuring the success of your event.
</p>
<p><strong>Cost-Effective Solutions:</strong> We understand the importance of working within your budget. Our team offers cost-effective solutions without compromising on quality, helping you maximize your investment.
</p>
<h4>Conclusion:</h4>
<p>When it comes to organizing exceptional events in Delhi, Noida, and Gurgaon, our event organizers, planners, and management company are your ideal choice. From meticulous planning to flawless execution, we strive to create memorable experiences that leave a lasting impression. Contact us today to discuss your upcoming event and let us bring your vision to life.
  </p> 
      
    </div>   
      </div>




                <div class="col-sm-12 col-md-6 col-lg-6 mb-4 mb-lg-0 pt-5 pl-5">

                    
                    <div class="footer-contact-info lett">
                        
                        <Emailsubscriber />

                        <div class="contact-address mt-2 footer-link">
                            <h4 style={{fontSize: "17px", fontWeight: "500"}}>Connect us to Get best Deals</h4>
                            <ul class="list-unstyled mb-4">
                                <li> <a class="text-dark" href="tel:+91-9811312005"><i class="fa fa-phone" aria-hidden="true"></i>24*7 sales support- +91-9811312005</a> <a class="text-dark ml-3" href="mailto:sales@hire4event.com"><i class="fa fa-envelope-o" aria-hidden="true"></i>sales@hire4event.com </a> </li>
                            </ul>
                        </div>
                        <ul class="list-unstyled mb-3 social-icon">
                            <li><a href="#" style={{fontSize: "14px", fontWeight: "600", color: "#000", fontWeight: "bold"}}>Follow us on:</a></li>
                            <li><a href="https://www.facebook.com/hire4eventofficial" target="_blank" style={{color: "#3b5998"}}><i class="fa fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/hire4eventcom" target="_blank" style={{color: "#26a4f0"}}><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/hire4event-com/" target="_blank" style={{color: "#017bb8"}}><i class="fa fa-linkedin-in"></i></a></li>
                            <li><a href="https://in.pinterest.com/hire4event/" target="_blank" style={{color: "#db473e"}}><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="https://www.instagram.com/hire4event/?hl=en" target="_blank" style={{color: "#9118ab"}}><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCO30G7y5-QlJnQv0cVEv7_Q" target="_blank" style={{color: "#f62424"}}><i class="fa fa-youtube"></i></a></li>
                        
                        </ul>
                        <Link to="vendor-registration" class="btn btn-danger" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Register as a Vendor</Link> 
                        <Link to="contact/" class="btn btn-primary" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Submit Requirement</Link> 
                        <Link to="contact/" class="btn btn-success" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Contact us</Link> 
                        </div>

                </div>
            </div>
        </div>
        <hr style={{marginTop: "0px"}}/>
            <div class="container pt-4">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">HOME</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/"> Home</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/about/"> About Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/why-us/"> Why Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/services/"> Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/gallery"> Gallery</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/case-study/"> Case study</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/our-service"> Our Service</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/marketing_services/"> Marketing Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/project-management/"> Project Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/consulting/"> Consulting Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/other/"> Other Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/artists-management/">Artist Management</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">OCCASIONS</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/corporate-events">Corporate Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/exhibition-seminars">Exhibition & Seminars</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/music-concert">Music Concert</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/sports-events">Sports Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/annual-festivals">Annual Festivals</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/wedding-social-events">Wedding & Social Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/book-an-artist">Book artist online for corporate event</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/venue-listing">Event venues</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/event-management-company-in-delhi-ncr">Event planner in Noida</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Corporate-Events-&-Award-Ceremonies">Corporate event company in Delhi Ncr</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/award-ceremonies-and-product-launches-organiser-Delhi-NCR">Best event Company in Delhi </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/equipment">Best Our Equipments for Events </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">SERVICES</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/event-organiser">Event Organiser</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/sound-system-on-rent">Sound System on Rent</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Event-Production-and-Equipment-Rental/">Event Production & Equipment Rental </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Brand-Promotion-&-Product-Activation/">Brand Promotion & Product Activation</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Sports-Management/">Sports Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Corporate-Events-&-Award-Ceremonies/">Corporate Events & Award Ceremonies</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Trip-Planning-and-Management/">Trip Planning and Management </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/event-manpower-and-team-management/">Event Manpower & Team Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/Waste-Management-Services/">Waste Management Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/School-activities-Summer-camp-organiser/">School activities and Summer Camp Organiser</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/event-fabrication-and-venue-branding/">Event Fabrication and Venue Branding</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/award-ceremonies-and-product-launches-organiser-Delhi-NCR/">Award Ceremonies and Product Launches</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">QUICK LINKS</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                            <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="https://hire4event.com/blogs/" target="_blank">Trending Blogs</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/contact/"> Contact Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/disclaimer/">Disclaimer</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/term-condition/">Terms & Condition</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="/privacy-policy/">Privacy Policy</Link></li>
                                {
                                footerServices.map((post) => {
                                const {url, name} = post;
                                return (
                                <>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to={'/service/'+url+''}> {name} </Link></li>
                                </>
                                )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop: "20px"}}/>
                <div class="container pt-4">
                    <div class="row">


                {
                footerKeyword.map((post) => {
                const {url, keyword} = post;
                return (
                <>
                        <div class="col-sm-12 col-md-4 col-lg-4  mb-4 mb-lg-0">
                            <div class="footer-link">
                                <ul class="list-unstyled mb-0">
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href={'/page/'+url}> {keyword}</a></li>
                                </ul>
                            </div>
                        </div>
                </>
                )
                })
                }






                        

                    </div>
                    <div class="row align-items-center mt-lg-5 ">
                        <div class="col-md-12 text-center mt-2">
                            <p class="mb-0">©Copyright 2022 <a href="">Global Magic Consulting Pvt Ltd</a> All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            </>
            );
}




