import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
export class Owlslider extends Component {
    render()
    {
  return (
    <section class="py-4 border-bottom" style={{marginBottom: "50px"}}>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-2 mb-lg-0 mb-2">
        <div class="d-flex align-items-center">
          <h6>Or browse the highlights</h6>
          <i class="h1 flaticon-next text-primary ml-2"></i> </div>
      </div>
      <div class="col-lg-10">
        <OwlCarousel  items={5} margin={8} autoplay ={true}>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide7.jpg)"}} href="sound-system-on-rent/"> </a> <span class="mb-0 position-relative">Sound Rental</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide5.jpg)"}} href="javascript:void(0);"></a> <span class="mb-0 position-relative">Event Decoration</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide3.jpg)"}} href="book-an-artist"></a> <span class="mb-0 position-relative">Book Artist</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide4.jpg)"}} href="event-management-company-in-delhi-ncr.php"></a> <span class="mb-0 position-relative">Event Planner</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide6.jpg)"}} href="book-an-artist?category=DJ&location_city=&search_artist=Search+Artist"></a> <span class="mb-0 position-relative">DJ Hire</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide2.jpg)"}} href="book-an-artist?category=Band&location_city=&search_artist=Search+Artist"></a> <span class="mb-0 position-relative">Band for Event</span> </div>
          <div class="item text-center" style={{marginBottom: "0"}}> <a class="category-item bg-holder bg-overlay-black-50 text-center" style={{backgroundImage: "url(images/slide1.jpg)"}} href="book-an-artist?category=Singer&location_city=&search_artist=Search+Artist"></a><span class="mb-0 position-relative">Book Singer</span> </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</section>
  )
}
}
export default Owlslider