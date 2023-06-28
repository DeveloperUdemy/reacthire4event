import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Artistphoto(props) {
    const Mainurl = 'https://hire4event.com/apppanel/';
    const [artistPhotos, setArtistPhotos] = useState([]);

    function getArtistPhotos() {
      const headers = {
        "Content-Type": "application/json"
      };
      const url = Mainurl+'api/artist/photos/'+props.register_id;
      axios.get(url,{headers})
      .then(resp => {
        setArtistPhotos(resp.data.photos);
        //console.log(resp.data.photos);
      })
      .catch(function(error) {
        console.log(error.resp);
      });
    }
      useEffect(()=>{
        getArtistPhotos();
      },[]);


  return (
    <>
                <div class="tab-pane mt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Photo Gallery</h2>
                  <div class="sub-title text-right"> <span> Make a list of your achievements toward your long-term goal</span></div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="masonry">
                {
                artistPhotos.map((getPhoto) => {
                const {id,image} = getPhoto;
                return (
                <>
                <div class="item"><a class="fancybox" href="" data-fancybox-group="gallery"><img src={'https://hire4event.com/apppanel/assets/artistimage/artistphoto/'+image} /></a></div>
                </>
                )
                })
                }
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Artistphoto;