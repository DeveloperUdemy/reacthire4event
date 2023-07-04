import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Parser } from 'html-to-react';
export default function Blogchild(props) {
     const [blogImage, setBlogImage] = useState();
     useEffect(()=>{
         const headers = {
           "Content-Type": "application/json"
         };
         const url = 'https://hire4event.com/blogs/wp-json/wp/v2/media/'+props.imagecode;
         axios.get(url,{headers})
         .then(resp => {
           setBlogImage(resp.data.guid.rendered);
           //console.log(resp.data);
         })
         .catch(function(error) {
           console.log(error.resp);
         });
        },[]);

  return (
    <>
        <div class="blog-post bg-overlay-half-bottom bg-holder mb-4" style={{backgroundImage: 'url('+blogImage+')'}}>
        <div class="blog-post-info">
        <div class="blog-post-category" style={{color: "white"}}>{props.date}</div>
        <h5 class="blog-post-title" style={{color: "white"}}>  {Parser().parse(props.title)}</h5>
        </div>
        </div>
    </>
  )
}
