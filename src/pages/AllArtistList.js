import React, { useState, useEffect, Fragment } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FcApproval, FcSearch, FcPhone } from "react-icons/fc";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function AllArtistList() {

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [categoryName, setCategoryName] = useState(params.category);
  const [locationCity, setLocationCity] = useState(params.location_city);




  const Mainurl = 'https://hire4event.com/apppanel/';
  const [artistDetails, setArtistDetails] = useState([]);
  const [visible, setVisible] = useState(32);
  const showMore = () => {
    setVisible((prevValue) => prevValue+32);
  }
  function getArtist() {
    const headers = {
      "Content-Type": "application/json",
      'Content-Type': 'multipart/form-data'
    };
    const parameterPost = {
      'category_name' : categoryName,
      'location_city' : locationCity
    };
    const urlPost = Mainurl+'api/artist/allartist';
   const Getresponse = axios.post(urlPost, parameterPost, {headers})
    .then(resp => {
      setArtistDetails(resp.data.artistList);
      //console.log(resp.data);
    })
    .catch(function(error) {
      console.log(error.resp);
    });
  }

  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/23';
      axios.get(url, { headers })
     .then(resp => {
      setMetaDetail(resp.data.pageMeta);
     })
     .catch(function (error) {
      
     });
    }


    useEffect(()=>{
      window.scrollTo(0, 0);
      getArtist();
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
        <h1 class="text-white">Search An Artist</h1>
        <p class="text-white banner-sub-title">Find the best Artist</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form class="home-search" method="get" action="">
          <div class="row mt-1 mt-lg-2">
            <div class="col-sm-6 col-lg-5 col-xl-5">
              <div class="form-group"> <span>What?</span>
              <select class="form-control" name="category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
              <option value="">Choose</option>
              <option >Sketch Artist </option>
              <option >Painter</option>
              <option >Magician</option>
              <option >Singer</option>
              <option >Folk Singer</option>
              <option >Dancer</option>
              <option >Group Dancer</option>
              <option >Comedian</option>
              <option >Anchor</option>
              <option >Host</option>
              <option >Hostess</option>
              <option >Emcee</option>
              <option >DJ</option>
              <option >Spiritual Person</option>
              <option >Belly Dancer</option>
              <option >Makeup Artist</option>
              <option >Model</option>
              <option >Speaker</option>
              <option >Bollywood Dance</option>
              <option >Bhangra Group</option>
              <option >Traditional Dance Group</option>
              <option >Traditional Singing Group</option>
              <option >Instrumentalist</option>
              <option >Band</option>
              <option >Actor/Actress </option>
              <option >Photographer</option>
              <option >Dancetroupe</option>
              <option >Motivational speaker</option>
              <option >Poet</option>
              <option >Celebrity</option>
              <option >Unique act performer</option>
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
                <input type="submit" name="search_artist" value="Search Artist" class="form-control btn-secondary" />
            </div>
          </div>
        </form>
        <p style={{color: "#fff", textAlign: "center"}}>BOOK BAND , DJ, COMEDIAN, SINGER , HIRE MAGICIAN, MOTIVATIONAL SPEAKER, POET ETC FOR EVENT AND WEDDING ACROSS THE WORLD</p>
      </div>
    </div>
  </div>
</section>
     

<section class="space-pb popup-gallery">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title" style={{marginTop: "20px"}}>
          <h2>Artist</h2>
          <div class="sub-title text-right"> <span> Make a list of your artist toward your long-term goal</span></div>
        </div>
      </div>
    </div>
    <div class="row">
    {
    artistDetails.slice(0, visible).map((getData) => {
      const {first_name, url, city, category, image, register_id} = getData;
      return (
        <>
      <div class="col-lg-3 col-sm-4 mb-4" key={register_id}> <Link to={'/artist/'+url+''}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <LazyLoadImage
              class={"img-fluid"}
              effect="blur"
              src={image}
              alt={first_name}
              style={{
                height: "394px",
                width: "100%"
              }}
              visibleByDefault={'.../public/default-artist.webp'}
              />
            <div class="listing-quick-box"> 
            <Link class="category" to={'/artist/'+url+''}> <FcApproval /> {category} | {city}</Link> 
            <Link class="popup popup-single" data-toggle="tooltip" data-placement="top" title="Zoom"> <FcSearch /> {/*<i class="fas fa-search-plus"></i>*/} </Link> </div>
          </div>
          <div class="listing-details">
            <div class="listing-details-inner">
              <div class="listing-title">
                <h6>{first_name}</h6>
              </div>
              <div class="listing-rating-call"> <Link class="listing-rating" to={'/artist/'+url+''}><span>0.0</span> Rating</Link> <Link class="listing-call" to={'artist/'+url+''}> <FcPhone />{/*<i class="fas fa-phone-volume"></i>*/} +91 xxx xxx xxxx</Link> </div>
            </div>
          </div>
        </div>
        </Link> 
      </div>
      </>
      )
      })
      }
    </div>


    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4" style={{textAlign: "center"}}><button onClick={showMore} class="btn btn-primary">Load More {'>>'}</button></div>
      <div class="col-md-4"></div>
    </div>


  </div>
</section>


    </Fragment>
  )
}

export default AllArtistList