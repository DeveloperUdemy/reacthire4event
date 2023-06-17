import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    
return (
    <div>
<div style={{position: "fixed",
    bottom: "11px",
    right: "15px",
    zIndex: "9999"}}> <a class="hidden-xs hidden-sm" target="_blank" href="https://wa.me/919718941111?text=Hi, I am interested in your services."> <img src="images/GAC_Whatsapp-chat-icon-EN.png" alt="whatsapp" style={{height: "105px"}} /> </a> </div>
    <footer class="footer border-top space-ptb" style={{paddingBottom: "20px"}}>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 mb-4 mb-lg-0 pr-5 pt-5 pb-3" style={{borderRight: "solid 1px #ececec", paddingBottom: "62px !important"}}>
                    <h5 class="text-primary mb-2 mb-sm-4">Hire4Event - Your Personal Wedding Planner</h5>
                    <p class="text-left"><strong>Plan your Event with Us</strong><br />
                        Hire4event is Delhi NCR based India's first online equipment and party supply service managed by Global magic consulting Pvt.Ltd. We provide Sound system on rent, PA System hire, Event and tour sound, stage, Lights, production, Online artist booking, Venue on hire, etc. Hire4event have an experienced team for Event management, fabrication and Venue Branding, special effect and fireworks, Venue decoration and theme creation. </p>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 mb-4 mb-lg-0 pt-5 pl-5">
                    <div class="footer-contact-info lett">
                        <h4 style={{fontSize: "17px", fontWeight: "500"}}>Subscribe to Newsletter</h4>
                        <form id="Hire4event-Subscribe" method="post">
                            <div class="row">
                                <div class="col-md-8">
                                    <input type="email" name="email" class="form-control" placeholder="Email Address...." />
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-primary" id="Hire4event_Subscribe" name="Hire4event_Subscribe">Subscribe</button>
                                </div>
                            </div>
                            <div id="error_subscribe"></div>
                        </form>
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
                        <a href="vendor-registration" class="btn btn-danger" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Register as a Vendor</a> 
                        <a href="contact/" class="btn btn-primary" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Submit Requirement</a> 
                        <a href="contact/" class="btn btn-success" style={{fontSize: "14px", padding: "7px 19px", borderRadius: "3px", fontWeight: "600"}}>Contact us</a> </div>
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
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="about/"> About Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="why-us/"> Why Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="how_it_works/"> How it Works</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="services/"> Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="javascript:void(0);"> Gallery</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="case-study/"> Case study</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="our-service"> Our Service</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="marketing_services/"> Marketing Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="project-management/"> Project Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="consulting/"> Consulting Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="other/"> Other Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="artists-management/">Artist Management</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">OCCASIONS</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="corporate-events">Corporate Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="exhibition-seminars">Exhibition & Seminars</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="music-concert">Music Concert</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="sports-events">Sports Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="annual-festivals">Annual Festivals</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="wedding-social-events">Wedding & Social Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="sound-system-on-rent">Sound system on rent in Delhi ncr</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="sound-system-on-rent">PA system on hire in Delhi, </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="weatherproof-german-hanger">German hanger on rent in Noida</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="stage-platform">Stage on rent in Gurgaon</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="book-an-artist">Book artist online for corporate event</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="venue-listing">Event venues in Delhi NCR</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="venue-listing">Venues for conference in Gurgaon</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="event-management-company-in-delhi-ncr">Event planner in Noida</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Corporate-Events-&-Award-Ceremonies">Corporate event company in Delhi Ncr</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="sound-system-on-rent">Book Sound  for conference in Bangalore</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="award-ceremonies-and-product-launches-organiser-Delhi-NCR">Best event Company in Delhi </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="event-organiser">Top event organiser in Gurgaon</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">SERVICES</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="event-organiser.php">Event Organiser</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="sound-system-on-rent">Sound System on Rent</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Event-Production-and-Equipment-Rental/">Event Production & Equipment Rental </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Brand-Promotion-&-Product-Activation/">Brand Promotion & Product Activation</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Sports-Management/">Sports Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Corporate-Events-&-Award-Ceremonies/">Corporate Events & Award Ceremonies</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Trip-Planning-and-Management/">Trip Planning and Management </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Event-Manpower-&-Team-Management/">Event Manpower & Team Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="Waste-Management-Services/">Waste Management Services</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="artists-management/">Artist Management</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="School-activities-Summer-camp-organiser/">School activities and Summer camp organiser</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="event-fabrication-and-venue-branding/">Event Fabrication and Venue Branding</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="award-ceremonies-and-product-launches-organiser-Delhi-NCR/">Award Ceremonies and Product Launches Organiser</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3  mb-4 mb-lg-0">
                        <h5 class="text-primary mb-2 mb-sm-4">QUICK LINKS</h5>
                        <div class="footer-link">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="javascript:void(login);" data-toggle="modal" data-target="#loginModal">Login</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="javascript:void(login);" data-toggle="modal" data-target="#loginModal">Register</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="contact/"> Contact Us</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="blogs/" target="_blank">Blogs</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="disclaimer/">Disclaimer</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="term-condition/">Terms & Condition</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="privacy-policy/">Privacy Policy</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/singer/">singer </Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/entertainment/">Entertainment</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/exhibition/">Exhibition</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/corporate-events/">Corporate Events</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/sports/">Sports</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/corporate-annual-family-day-dealer-meet-sales-meet/">Corporate Annual Family day, Dealer meet, Sales Meet</Link></li>
                                <li><i class="fa fa-angle-right" aria-hidden="true"></i> <Link to="service/brand-promotion-and-product-launch-event/">Brand Promotion and Product Launch Event</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop: "20px"}}/>
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4  mb-4 mb-lg-0">
                            <div class="footer-link">
                                <ul class="list-unstyled mb-0">
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book artist for wedding in Gurgaon, Delhi, Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Artist for wedding in Noida, Gurgaon, Faridabad</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Wedding Dj in Bangalore, Pune, Mumbai</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top wedding decorator in Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Wedding dance choreographer in Delhi, Noida Gurugram</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top band for wedding entertainment in Gurgoan, Bangalore, Mumbai</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Corporate event management company in Delhi NCR</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Sound system on rent for wedding</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Sound rental company in Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Sound system on rent in in Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">PA System on hire in Guragon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Best conference organiser in Delhi, Noida, Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Top event management company in Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Event Planners in Delhi, Gurgaon, Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Event organiser for wedding in Delhi, Gurugram, Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Top wedding entertainment company in Delhi ncr</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Wedding artist booking company in Delhi ncr</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Wedding stage singer, DJ Booking service in Delhi, Noida Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Best artist wedding in Chennai, Pune, Mumbai</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4  mb-4 mb-lg-0">
                            <div class="footer-link">
                                <ul class="list-unstyled mb-0">
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="">Top Wedding planning company in Delhi, Noida, Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Which are best event company in Delhi for corporate event</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Product launch event organiser in Delhi, Noida, Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Exhibition stall design company</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Artist management agency</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> German hanger on hire</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Destination wedding planner in Noida, Gurgaon, Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Event organiser for corporate event and dealer Meet</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Party organiser in Noida, Gurgaon, Delhi, Faridabad</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Event production company Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book Artist for event in Delhi Noida, Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book Singer for event in Lucknow, Patna, Agra</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book DJ for event in Bangalore, Chennai, Hyderabad</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book Dance groupe for event in Pune, Mumbai, Bhopal</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Artist booking agency in Kolkata</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Artist Booking for college fest in Greater Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top artist for corporate event </a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top exhibition management company in Delhi</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4  mb-4 mb-lg-0">
                            <div class="footer-link">
                                <ul class="list-unstyled mb-0">
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Wedding event organiser in Jaipur</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top wedding entertainment company in Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Wedding artist booking company in Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Wedding DJ in Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top conference Organizers in Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book artist for event in Bangalore</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Book Artist for event in Pune</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Band for wedding in India</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> List of wedding Fera Singer in India</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Wedding singer/Band in Mumbai</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Wedding DJ in Noida</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best Wedding Dance group in Gurgaon</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> German Hanger on hire</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Top DJ on Rent in Delhi NCR</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Best sound on rent in Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Hire Decorater for Wedding in New Delhi</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href=""> Wedding / Corporate event Planner</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center mt-lg-5 ">
                        <div class="col-md-12 text-center mt-2">
                            <p class="mb-0">©Copyright 2022 <a href="">Global Magic Consulting Pvt Ltd</a> All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
            );
}
