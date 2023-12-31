import React, { useState, useEffect, Fragment } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AllVenueList() {

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [categoryName, setCategoryName] = useState(params.category);
  const [locationCity, setLocationCity] = useState(params.location_city);
  const [isLoader, setIsLoader] = useState(true);

    const Mainurl = 'https://hire4event.com/apppanel/';
    const [venueDetails, setVenueDetails] = useState([]);
    const [visible, setVisible] = useState(32);
    const showMore = () => {
      setVisible((prevValue) => prevValue+30);
    }
    function getVenue() {
      const headers = {
        "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data'
      };
      const parameterPost = {
        'category_name' : categoryName,
        'location_city' : locationCity
      };
      const urlPost = Mainurl+'api/equipment/allvenue';
      axios.post(urlPost, parameterPost, { headers })
      .then(resp => {
        setVenueDetails(resp.data.venueList);
        setIsLoader(false);
      })
      .catch(function(error) {
        setIsLoader(true);
        console.log(error);
      });
    }


    const [metaDetail, setMetaDetail] = useState([]);
    function getMetaSingle() {
      const headers = {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      };
     const url = Mainurl + 'api/enquiry/pagemeta/24';
        axios.get(url, { headers })
       .then(resp => {
        setMetaDetail(resp.data.pageMeta);
       })
       .catch(function (error) {
        
       });
      }
      useEffect(()=>{
        window.scrollTo(0, 0);
        getVenue();
        getMetaSingle();
      },[]);


  return (
    <Fragment>

<Helmet>
        <title>{metaDetail.meta_title}</title>
        <meta name="description" content={metaDetail.meta_description} />
        <meta name="keywords" content={metaDetail.meta_keyword} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={metaDetail.meta_title} />
        <meta property="og:description" content={metaDetail.meta_description}/> 
        <meta property="og:image" content={Mainurl+'assets/primaryimage/logo.png'} />
        <link rel="canonical" href={window.location.href}/>
        </Helmet>

<section class="banner bg-holder bg-overlay-black-50" style={{backgroundImage: "url(images/bg/image.jpg)", padding: "150px 0 21px"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="text-white">Search Venue</h1>
        <p class="text-white banner-sub-title">Find the best Venue</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form class="home-search" method="get" id="venue_search" action="">
          <div class="row mt-1 mt-lg-2">
            <div class="col-sm-6 col-lg-5 col-xl-5">
              <div class="form-group"> <span>What?</span>
              <select class="form-control" name="category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
                <option value="">Choose type</option>  
                                <option value="guest-house" >Guest House</option>
                                <option value="club" >Club</option>
                                <option value="wedding--social-events" >Wedding & Social Events</option>
                                <option value="annual-festivals" >Annual Festivals</option>
                                <option value="sports-events" >Sports Events</option>
                                <option value="music-concert" >Music Concert</option>
                                <option value="exhibition--seminars" >Exhibition & Seminars</option>
                                <option value="corporate-events" >Corporate Events</option>
                                </select> 
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-5">
              <div class="form-group form-location"> <span>Where?</span>
                <input type="text" 
                                name="location_city" 
                                value={locationCity} 
                                onChange={(e) => setLocationCity(e.target.value)}
                                autoComplete='off' 
                class="form-control" placeholder="Enter city or location" />
              </div>
            </div>
            <div class="col-lg-3 col-xl-2">
                <input type="submit" name="search_venue" value="Search Venue" class="form-control btn-secondary" />
            </div>
          </div>
        </form>
        <p style={{color: "#fff", textAlign: "center"}}>Book venue for corporate events, weddings, fuction, in Delhi, Noida, Gurgaon, Bangalore, Mumbai, Jaipur, Chandigarh at best rates</p>
      </div>
    </div>
  </div>
</section>


<section class="space-pb popup-gallery" style={{paddingBottom: "40px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title" style={{marginTop: "20px"}}>
          <h2>Venue</h2>
          <div class="sub-title text-right"> <span> Make a list of your venue toward your long-term goal</span></div>
        </div>
      </div>
    </div>
    <div class="row even">
    {
    isLoader ? <>
    <div class="col-md-12 col-sm-3" style={{textAlign: "center"}}>
    <RotatingLines
    strokeColor="yellow"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
    /> 
    </div>
    </> :  
    venueDetails.slice(0, visible).map((getVenueData) => {
      const {venudetail_id,type_id,location_id,url,image,heading,title} = getVenueData;
      return (
        <>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="listing-item">
                    <div class="listing-image bg-overlay-half-bottom">
                    
                    <LazyLoadImage
              class="img-fluid"      
              alt={heading}
              effect="blur"
              height={"325px"}
              width={"100%"}
              src={Mainurl+'assets/venueimage/'+image+''} />
                    </div>
                    <div class="listing-details">
                    <div class="listing-details-inner">
                    <div class="listing-title">
                    <h6><Link to={'/venue-view/'+url}>{heading}</Link></h6>
                    </div>
                    <div class="listing-rating-call">
                    <Link class="listing-rating" to={'/venue-view/'+url}><i class="fa fa-map-marker"></i> {location_id}  </Link>
                    <Link class="listing-call" to={'/venue-view/'+url}><i class="fa fa-building"></i> {type_id}</Link>
                    </div>
                    <div class="listing-info mt-1">
                    <p class="mb-0">{title.slice(0, 80)}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
        </>
      )
    })
    }
    </div>
    <div class="row" style={{marginTop: "20px"}}>
      <div class="col-md-4"></div>
      <div class="col-md-4" style={{textAlign: "center"}}><button onClick={showMore} class="btn btn-primary">View More {'>>'} </button></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>


    </Fragment>
  )
}

export default AllVenueList