import React, { useState, useEffect } from 'react';
import axios from "axios";
import Blogchild from './Blogchild';

export default function Ourblogs() {
    const [blogDetails, setBlogDetails] = useState([]);
    function getArtist() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = 'https://hire4event.com/blogs/wp-json/wp/v2/posts?per_page=4&order=desc';
      axios.get(url,{headers})
      .then(resp => {
        setBlogDetails(resp.data);
        //console.log(resp.data);
      })
      .catch(function(error) {
        console.log(error.resp);
      });
    }

      useEffect(()=>{
        getArtist();
      },[]);
  return (
    <>
  <section class="space-pb" style={{marginTop: "25px"}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>Latest Blogs</h2>
          <div class="sub-title text-right"> <span> Reflect and experiment until you find the right combination.</span></div>
        </div>
      </div>
    </div>
    <div class="row">
        {
        blogDetails.slice(0,4).map((getData) => {
        const {title, featured_media, date, link} = getData;
        let fromDate = new Date(date);
        let dateChange = new Date(fromDate).toDateString("DD-MMM-YYYY");
        return (
        <>
        <div class="col-lg-6">
        <a href={link} target="_blank">
        <Blogchild  title={title.rendered} date={dateChange} imagecode={featured_media}/>
        </a>
        </div>
        </>
        )
        })
        }


    </div>
  </div>
</section>

    </>
  )
}