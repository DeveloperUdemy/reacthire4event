import React, { useState, useEffect, Fragment } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AllEquipmentList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [productName, setProductName] = useState(params.product_name);
  const [locationCity, setLocationCity] = useState(params.location_city);
  const [isLoader, setIsLoader] = useState(true);
  // const product_name = searchParams.get('product_name');
  // const location_city = searchParams.get('location_city');

  const Mainurl = 'https://hire4event.com/apppanel/';
  const [equipmentDetails, setEquipmentDetails] = useState([]);
  const [visible, setVisible] = useState(24);
  const showMore = () => {
    setVisible((prevValue) => prevValue+40);
  }
  function getEquipment() {
    const headers = {
      "Content-Type": "application/json",
      'Content-Type': 'multipart/form-data'
    };
    const parameterPost = {
      'product_name' : productName,
      'location_city' : locationCity
    };
    const urlpost = Mainurl+'api/equipment/alllist';
    axios.post(urlpost, parameterPost, { headers })
    .then(resp => {
      setEquipmentDetails(resp.data.equipmentList);
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
   const url = Mainurl + 'api/enquiry/pagemeta/22';
      axios.get(url, { headers })
     .then(resp => {
      setMetaDetail(resp.data.pageMeta);
     })
     .catch(function (error) {
      
     });
    }


    useEffect(()=>{
      window.scrollTo(0, 0);
      getEquipment();
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
        <h1 class="text-white">Search Event Equipment</h1>
        <p class="text-white banner-sub-title">Find the event equipment</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form class="home-search" method="get">
          <div class="row mt-1 mt-lg-2">
            <div class="col-sm-4 col-lg-4 col-xl-5">
            <div class="form-group form-location"> <span>What?</span>
            <input type="text" class="form-control" 
            name="product_name" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)}  
            autoComplete='off'
            placeholder="Search Equipment" />
            </div>
            </div>
            <div class="col-sm-5 col-lg-5 col-xl-4">
              <div class="form-group form-location"> <span>Where?</span>
                <input type="text" 
                name="location_city" 
                value={locationCity} 
                onChange={(e) => setLocationCity(e.target.value)}
                autoComplete='off'  
                class="form-control" placeholder="Enter city or location" />
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-xl-3">
                <input type="submit" name="search_equipment" value="Search Equipment" class="form-control btn-secondary" />
            </div>
          </div>
        </form>
        <p style={{color: "#fff", textAlign: "center"}}>Event sound on rent in Noida, Sound on hire in Delhi, DJ for corporate event</p>
      </div>
    </div>
  </div>
</section>


<section class="space-pb popup-gallery" style={{paddingBottom: "40px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title" style={{marginTop: "20px"}}>
          <h2>Event Equipment</h2>
          <div class="sub-title text-right"> <span> We can provide every equipment or services related to event</span></div>
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
    equipmentDetails.slice(0, visible).map((getEquipmentData) => {
      const {heading,url,image,id} = getEquipmentData;
      return (
        <>
      <div class="col-lg-3 col-sm-3 mb-4" key={id} > <Link to={'/'+url}>
        <div class="listing-item">
          <div class="listing-image bg-overlay-half-bottom"> 
          <LazyLoadImage
              alt={heading}
              effect="blur"
              height={"265"}
              width={"100%"}
              src={Mainurl+'assets/equipments/'+image+''} />
    </div>
          <div class="listing-details">
            <div class="listing-details-inner">
              <div class="listing-title">
                <h6>{heading}</h6>
              </div>
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
      <div class="col-md-4" style={{textAlign: "center"}}><button onClick={showMore} class="btn btn-primary">Load More {'>>'} </button></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</section>


    </Fragment>
  )
}

export default AllEquipmentList