import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import { Parser } from 'html-to-react';
import Artistphoto from './Artistphoto';
import Artistvideo from './Artistvideo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Singleartist() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    let { slug_url } = useParams();

    const [artistDetail, setArtistDetail] = useState([]);
    const navigate = useNavigate();
    function getArtistProfile() {
      const Mainurl = 'https://hire4event.com/apppanel/'; 
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/artist/singleartist/'+slug_url;
        axios.get(url, { headers })
       .then(resp => {
           setArtistDetail(resp.data.artistSingle);
           //console.log(resp.data.artistSingle);
       })
       .catch(function (error) {
        navigate('/');
       });
      }

      useEffect( () => {
        getArtistProfile();
      },[]);

   
    return (
        <>
            <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{ background: 'url("https://hire4event.com/images/banner2.jpg")', backgroundSize: "cover", backgroundPosition: "0px -146px" }}>
                <div class="container">
                    <div class="row align-content-center">
                        <div class="col-lg-9">
                            <div class="d-sm-flex d-block align-items-center"> 
                            <LazyLoadImage
              alt={artistDetail.first_name}
              effect="blur"
              class={"img-fluid rounded-circle avatar avatar-xll"}
              src={artistDetail.image} />
                                <div class="ml-sm-4 ml-0 mt-3 mt-sm-0">
                                    <h3 class="text-white mb-2"> {artistDetail.first_name} {artistDetail.last_name}</h3>
                                    <div class="d-md-flex d-block">
                                        <span class="px-2 border text-success border-success border-radius d-inline-block mr-2">0.0</span> 
                                        <span style={{color: "white"}}><strong>Rating</strong></span>
                                        <span class="d-inline-block ml-md-3 ml-0 text-white">For those of you who are serious about having more.</span> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-lg-center mt-3"> <a class="btn btn-secondary" href="javascript:void(0);"> <FaArrowRight style={{ fontSize: "13px;"}}/> Enquire Now</a> </div>
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
                  <h2>About {artistDetail.first_name} {artistDetail.last_name}</h2>
                  <div class="sub-title text-right"> <span> Book {artistDetail.first_name} {artistDetail.last_name} for wedding, corporate event, College fest. {artistDetail.first_name} {artistDetail.last_name} contact, booking, charges are available on hire4event.</span></div>
                </div>
              </div>

              <div class="col-12">
              
              {Parser().parse(artistDetail.description)}
              </div>

            </div>
            <a class="share btn btn-default" style={{backgroundColor: "#4267b2", color: "white"}} href="http://www.facebook.com/sharer.php?u=https://hire4event.com/artist/djyogii" target="_blank" ><i class="fa fa-facebook" aria-hidden="true"></i> Share</a>
            
            
            <div class="listing-detail-box mb-3">
              <div class="detail-title">
                <h5>More details about {artistDetail.first_name} {artistDetail.last_name}</h5>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/duration.png" /> Performance Duration<br/>
                      <strong>{artistDetail.performance_duration} </strong></li>
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage//team-icon.png" /> Team Members<br/>
                      <strong>{artistDetail.team_members}</strong></li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/travel.png" /> Open to Travel<br/>
                      <strong>{artistDetail.open_to_travel}</strong></li>
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/language.png" /> Language<br/>
                      <strong>English/Hindi</strong></li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="artis list-unstyled mb-0">
                    <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/music.png" /> Music/Genre<br/>
                      <strong>{artistDetail.music_genre}</strong></li>
                      <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/art-type.png" /> Artist Type / City<br/>
                      <strong>{artistDetail.category} | {artistDetail.city}</strong></li>
                  </ul>
                </div>
                <div class="col-lg-12">
                  <ul class="artis list-unstyled mb-lg-0 mb-3">                   
                     <li class="mb-3"> <img src="https://hire4event.com/apppanel/assets/primaryimage/location1.png" /> Preferred Location<br/>
                      <strong>{artistDetail.location}</strong></li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Artistphoto  register_id={slug_url} />

          <Artistvideo register_id={slug_url} /> 

          <div class="tab-pane mt-5 artistpage">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title">
                  <h2>Preferred Events</h2>
                  <div class="sub-title text-right"> <span>Meet the outstanding performers in our industry-award-winning team of professionals</span></div>
                </div>
              </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon1.png" /> </div>
                    <div class="counter-content"> <span>Campus</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon2.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Charity</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon3.png" /> </div>
                    <div class="counter-content"> <span>Festival</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon4.png" /> </div>
                    <div class="counter-content"> <span>Corporate</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon5.png" /> </div>
                    <div class="counter-content"> <span>Exhibition</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon6.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Fashion show</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon7.png" /> </div>
                    <div class="counter-content"> <span>Inogration</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon8.png" /> </div>
                    <div class="counter-content"> <span>Kids Party</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon9.png" /> </div>
                    <div class="counter-content"> <span>Photo Shoot</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon10.png" /> </div>
                    <div class="counter-content align-self-center"> <span>Private party</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon11.png" /> </div>
                    <div class="counter-content"> <span>Wedding</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-6 col-lg-2">
                  <div class="counter">
                    <div class="counter-icon"> <img src="https://hire4event.com/apppanel/assets/primaryimage/icon12.png" /> </div>
                    <div class="counter-content"> <span>Restaurent</span>
                      <label class="text-dark">Events</label>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Review {artistDetail.first_name} {artistDetail.last_name}</h2>
                  <div class="sub-title text-right"> <span> Make a list of your achievements toward your long-term goal</span></div>
                </div>
              </div>
              
              
                              <div class="col-12">
                <div class="mt-0 mb-3">
                  <form>
                    <div class="form-row">
                    <div class="form-group col-md-12">
                    <label>Your Rating*</label>
                    <div style={{width: "100%;"}}> 
                    <div class="rating" data-toggle="modal" data-target="#loginModal">
                    <label>
                    <input type="radio" name="stars" value="1" required/>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="2" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="3" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>   
                    </label>
                    <label>
                    <input type="radio" name="stars" value="4" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    <label>
                    <input type="radio" name="stars" value="5" required/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    </label>
                    </div>                      
                    </div>
                    </div>
                      <div class="form-group col-md-12">
                        <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
                      </div>
                      <div class="col-md-12"> <a class="btn btn-primary" href="javascript:void(0);" data-toggle="modal" data-target="#loginModal">Submit Review</a> </div>
                    </div>
                  </form>
                </div>
              </div>
                            
              
              
              
              
              
              <div class="col-12" id="ReviewReturn">
                              </div>
            </div>
          </div>
          <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Disclaimer</h2>
                  <div class="sub-title text-right"></div>
                </div>
              </div>
              <div class="col-md-12">
                <p>Hire4event is one of the largest nonexclusive artist booking and event rental platforms in India. We have a multitude of various kinds of artists, celebrities, singers, bands, DJs, sports personalities, comedians, emcees, anchors, hosts/hostesses, motivational speakers, poets, etc who can be booked online. Any artist can create their profile on our portal and start getting bookings for a variety of events like corporate events, college fests, weddings, carnivals, and other kinds of social events. We hereby officially declare that we don't claim to be exclusive managers of any Artist. We keep artists’ and or their manager’s contact details for bookings at the backend. For any artists facing issues we are happy to support and provide resolutions over email. We are adept at and take pride in helping find the right Artist/Celebrity for events and shows. Our Customer Support Team will be delighted to furnish any related information or advice that you may need in making the best choices for artists or celebrities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </>
    )
}
export default Singleartist;