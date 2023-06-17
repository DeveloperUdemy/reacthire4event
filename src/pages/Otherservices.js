import React from 'react';
import { Link } from 'react-router-dom';
import Artistscomponent from './components/Artistscomponent';
import Equipmentcomponent from './components/Equipmentcomponent';
import { FaRegUser } from "react-icons/fa";
function Otherservics ()  {
  return (
  <div>
  <section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row align-content-center">
      <div class="col-lg-9">
        <div class="d-sm-flex d-block align-items-center">
          <div class="ml-0 mt-3 mt-sm-0">
            <h3 class="text-white mb-2"> Other Services </h3>
            <div class="d-md-flex d-block"> 
              <span class="d-inline-block ml-md-3 ml-0 text-white">Interesting info Other Services</span> </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-lg-center mt-3"> <Link class="btn btn-secondary" to="/contact"> <FaRegUser style={{fontSize: "15px"}}/> Contact Us</Link> </div>
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
                  <h2>Other Services</h2>
                  <div class="sub-title text-right"> <span> Interesting info Other Services</span></div>
                </div>
              </div>
              
        <div class="col-md-12">
        <p>Being an event company we are one of the leading sound rental company in delhi ncr, Noida, Gurgaon, Faridabad ,Agra, Kanpur,provide complete audio production services to our clients. We rent out top brand sound system like JBL and RCF with complete solution like trussing, Mixing, visual production like displays and stage lighting with latest technologies.Hire4event use latest technologies and most updated hardware in events for quality audio visual solution. We provide sound system for bellow events-</p>
        
        <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Festivals,<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Conferences,<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Ceremonies,<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Formal parties,<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Concerts or conventions.<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Road shows<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Seminars<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Training Programs<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Webinars<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Thought Leadership Talks<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Conferences<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Product launches<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Channel Meets<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Promo events<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Exhibitions<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Off sites and Family Events<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Large events with 5000+ attendees<br/> 
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> Customized events based on objectives</p>

        <p>We are among the best event management companies in Noida catering to the entire India.Whether it is a fashion event or a corporate event, we are available for everything.Delhi and NCR region has a plethora of event management companies however it takes more to find a company that will give you the best services. It's not easy to find a company that gives you the best services in entire India for best event management but here's how to start with us At Hire4event, we plan the most sophisticated events and with the expertise we have developed, we have become highly reliable and high quality.We are among the best event management companies in Noida and provide event management services pan-India.We believe in delivering maximum performance and high energy events depending on theirtype and nature. We cater to the corporate, fashion, education and a lot of other industries.We handle exhibitions, sports, conferences, ceremonies, seminars, annual festivals, promotions, etc.You can rely on our team of experienced professionals who have grown vastly handling these different fields as project managers, It heads, operational and management heads, etc. We have sufficient and impressive manpower to handle all aspects of the events ranging from project management, planning, execution, to IT support, ticket sales, and event branding and revenue management.The best way to vouch for ourselves is that we tell you the truth: We happen to be a nicheplayer and when it comes to exhibitions, marketing and promotions events, fashion and women related events, hospitality, etc. The best support we provide is in the fields of space management, data collection from visitors and prospects, Product display and awareness, etc.In the field of marketing and promotional events, we provide extensive coverage for events for Product, Services, food chains, Restaurants, brands, Gyms, etc launches. You can anticipate smooth, hassle-free ground operation, sales, food and beverage counters, ticketing management, etc services from our versatile team. Take a look at the vast services we offer:</p>
        
        <p><strong>Promotional and Corporate Events  </strong><br/> 
As mentioned above, we offer extensive event planning and execution services for the promotional and corporate events. Moreover, we also offer manpower services and our experienced Hostesses provide all sorts of assistance for the events personnel and clients.Not only do they receive and greet guests at social, corporate and personal events, they also manager the registration work and provide help with presentations depending on the needs.We offer both male and female hostesses who offer all onsite and offsite support to the clientsand guests like helping them with check-ins, during travelling, managing their food and snack needs.In addition to hosts and hostesses, we offer promotional boys and girl's team, promoters,conference and exhibition staff, anchors, models, artists, celebrities, etc. However, for suitable manpower solutions, we need to be booked beforehand.In addition to the manpower, we also offer equipment on rent so event planners can also use our hardware for a wide variety of hardware and products.Other services we offer include stage equipment, lighting equipment, audio equipment, visual equipment, Gazebos and tents, barricades and fabrication, security equipment, GreenLavatories, hot air balloons, etc.We keep our equipment updated and we follow the trends closely so whatever is in fashion,
you will find it with us to make your event better than happening. </p>

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
export default Otherservics;
