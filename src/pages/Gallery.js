import React, { useState, useEffect, Fragment } from 'react';
import { Link} from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Gallery() {
    const [isLoader, setIsLoader] = useState(true);
    const Mainurl = 'https://hire4event.com/apppanel/';
    const [allGallery, setAllGallery] = useState([]);
    const [visible, setVisible] = useState(32);
    const showMore = () => {
      setVisible((prevValue) => prevValue+32);
    }
    function getGallery() {
      const headers = {
        "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data'
      };
      const urlPost = Mainurl+'api/artist/gallery';
     const Getresponse = axios.get(urlPost, {headers})
      .then(resp => {
        setAllGallery(resp.data.galleryList);
        setIsLoader(false);
        //console.log(resp.data);
      })
      .catch(function(error) {
        setIsLoader(true);
        console.log(error.resp);
        
      });
    }

  const [metaDetail, setMetaDetail] = useState([]);
  function getMetaSingle() {
    const headers = {
      'Content-Type': 'application/json'
    };
   const url = Mainurl + 'api/enquiry/pagemeta/43';
      axios.get(url, { headers })
     .then(resp => {
      setMetaDetail(resp.data.pageMeta);
     })
     .catch(function (error) {
      
     });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getMetaSingle();
        getGallery();
      }, []);

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

        <section class="page-title bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/event-equip.jpg")'}}>
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
        <h1 class="text-white">Gallery</h1>
        <p class="text-white lead">There are basically six key areas to higher achievement. Some people will tell you there.</p>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Gallery</li>
        </ol>
        </nav>
        </div>
        </div>
        </div>
        </section>
     

        <section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 mt-lg-0 listing-detail-page">
       
        
            <div class="tab-pane">
            <div class="row">
              <div class="col-md-12">
                <div class="masonry">

                {
                isLoader ? <>
                <div style={{textAlign: "center"}}>
                <RotatingLines
                strokeColor="yellow"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                /> 
                </div>
                </> :
                allGallery.slice(0, visible).map((getData) => {
                const {p_image} = getData;
                return (
                <>
                <div class="item">
<a class="fancybox" href="#" data-fancybox-group="gallery">

    <LazyLoadImage
              alt="Hire4event Gallery"
              effect="blur"
              height={"200px"}
              width={"100%"}
              src={Mainurl+'assets/project/'+p_image} />

    </a>
</div>
                </>
                )
                })
                }

                </div>
              </div>
            </div>

            <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4" style={{textAlign: "center"}}><button onClick={showMore} class="btn btn-primary">Load More {'>>'}</button></div>
            <div class="col-md-4"></div>
            </div>


            </div>
      </div>
    </div>
  </div>
</section>
</Fragment>
  )
}

export default Gallery;