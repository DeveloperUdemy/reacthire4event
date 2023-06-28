import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Artistvideo(props) {
    const Mainurl = 'https://hire4event.com/apppanel/';
    const [artistVideo, setArtistVideo] = useState([]);

    function getArtistVideos() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = Mainurl+'api/artist/videos/'+props.register_id;
      axios.get(url,{headers})
      .then(resp => {
        setArtistVideo(resp.data.videos);
        //console.log(resp.data.videos);
      })
      .catch(function(error) {
        console.log(error.resp);
      });
    }
      useEffect(()=>{
        getArtistVideos();
      },[]);



  return (
    <>
                <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Video Gallery</h2>                  
                  <div class="sub-title text-right"> <span> Make a list of your achievements toward your long-term goal</span></div>
                </div>
               </div>
              {
                artistVideo.map((getVideo) => {
                const {id,video} = getVideo;
                return (
                <>
                <div class="col-md-3 mb-3">
                <iframe width="100%" height="150" src={'https://www.youtube.com/embed/'+video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </>
                )
                })
                }
            </div>
          </div>
    </>
  )
}

export default Artistvideo