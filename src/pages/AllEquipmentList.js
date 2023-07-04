import React,{Fragment} from 'react'

function AllEquipmentList() {
  return (
    <Fragment>

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
        <form class="home-search" method="get" id="equipment_search" action="">
          <div class="row mt-1 mt-lg-2">
            <div class="col-sm-4 col-lg-4 col-xl-5">
            <div class="form-group form-location"> <span>What?</span>
            <input type="text" class="form-control" name="product_name" placeholder="Search Equipment" value="" />
            </div>
            </div>
            <div class="col-sm-5 col-lg-5 col-xl-4">
              <div class="form-group form-location"> <span>Where?</span>
                <input type="text" name="location_city" value="" class="form-control" placeholder="Enter city or location" />
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

    </Fragment>
  )
}

export default AllEquipmentList