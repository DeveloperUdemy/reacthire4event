import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Parser } from 'html-to-react';
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

      const [personalCorporateDetail, setPersonalCorporateDetail] = useState([]);
      function getMetaSinglePersonalCorporate() {
        const headers = {
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
        };
       const url = Mainurl + 'api/enquiry/pagemeta/45';
          axios.get(url, { headers })
         .then(resp => {
          setPersonalCorporateDetail(resp.data.pageMeta);
         })
         .catch(function (error) {
          
         });
        }


      useEffect(()=>{
        getServices();
        getKeywords();
        getMetaSinglePersonalCorporate();
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
        {Parser().parse(personalCorporateDetail.content)}
      
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




