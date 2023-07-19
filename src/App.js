import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ourteam from "./pages/Ourteam";
import Disclaimerpage from "./pages/Disclaimerpage";
import Termconditions from "./pages/Termconditions";
import Privacypolicy from "./pages/Privacypolicy";
import Whyus from "./pages/Whyus";
import Howitwork from "./pages/Howitwork";
import Services from "./pages/Services";
import Casestudey from "./pages/Casestudey";
import Ourservice from "./pages/Ourservice";
import Marketingservice from "./pages/Marketingservice";
import Error from "./pages/Error";
import MainHeaderFooter from "./pages/MainHeaderFooter";
import Projectmanagement from "./pages/Projectmanagement";
import Consultingservics from "./pages/Consultingservices";
import Otherservics from "./pages/Otherservices";
import Artistmanagement from "./pages/Artistmanagement";
import Planyourtrip from "./pages/Planyourtrip";
import Protected from "./pages/Protected";
import Profile from "./pages/dashboard/Profile";
import Artistprofile from "./pages/dashboard/Artistprofile";
import Changepassword from "./pages/dashboard/Changepassword";
import Editemail from "./pages/dashboard/Editemail";
import Editartist from "./pages/dashboard/Editartist";
import Singleartist from "./pages/Singleartist";
import Singleservicedetail from "./pages/Singleservicedetail";
import Singleequipment from "./pages/Singleequipment";
import RegisterVendor from "./pages/RegisterVendor";
import RegisterVolunteer from "./pages/RegisterVolunteer";
import InhouseSingleservice from "./pages/InhouseSingleservice";
import AllArtistList from "./pages/AllArtistList";
import AllEquipmentList from "./pages/AllEquipmentList";
import AllVenueList from "./pages/AllVenueList";
import SingleVenueDetail from "./pages/SingleVenueDetail";
import ArtistPhotoVideo from "./pages/dashboard/ArtistPhotoVideo";
import EventManagementCompanyInDelhiNcr from "./pages/EventManagementCompany";
import SoundSystem from "./pages/SoundSystemOnRent";
import CorporateEvents from "./pages/CorporateEvents";
import ExhibitionSeminars from "./pages/ExhibitionSeminars";
import MusicConcert from "./pages/MusicConcert";
import SportsEvents from "./pages/SportsEvents";
import AnnualFestivals from "./pages/AnnualFestivals";
import WeddingSocialEvents from "./pages/WeddingSocialEvents";
import CorporateEventsAwardCeremonies from "./pages/CorporateEventsAwardCeremonies";
import AwardCeremoniesProductLaunchesParties from "./pages/AwardCeremoniesProductLaunchesParties";
import EventOrganizer from "./pages/EventOrganizer";
import EventProductionEquipmentRental from "./pages/EventProductionEquipmentRental";
import BrandPromotionProductActivation from "./pages/BrandPromotionProductActivation";
import SportsManagement from "./pages/SportsManagement";
import TripPlanningManagement from "./pages/TripPlanningManagement";
import EventManpowerTeamManagement from "./pages/EventManpowerTeamManagement";
import WasteManagementServices from "./pages/WasteManagementServices";
import SchoolactivitiesSummercamporganiser from "./pages/SchoolactivitiesSummercamporganiser";
import EventFabricationVenueBranding from "./pages/EventFabricationVenueBranding";
function App() {
  return (
      <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
           <Route path="/" element={<MainHeaderFooter/>} >
           <Route index element={<Home/>} />
           <Route path="/about/" element={<About/>} />
           <Route path="/team/" element={<Ourteam/>} />
           <Route path="/disclaimer/" element={<Disclaimerpage/>} />
           <Route path="/term-condition/" element={<Termconditions/>} />
           <Route path="/privacy-policy/" element={<Privacypolicy/>} />
           <Route path="/why-us/" element={<Whyus/>} />
           <Route path="/how_it_works/" element={<Howitwork/>} />
           <Route path="/services/" element={<Services/>} />
           <Route path="/case-study/" element={<Casestudey/>} />
           <Route path="/our-service" element={<Ourservice/>} />
           <Route path="/marketing_services/" element={<Marketingservice/>} />
           <Route path="/project-management/" element={<Projectmanagement/>} />
           <Route path="/consulting/" element={<Consultingservics/>} />
           <Route path="/other/" element={<Otherservics/>} />
           <Route path="/artists-management/" element={<Artistmanagement/>} />
           <Route path="/plan-your-trip/" element={<Planyourtrip/>} /> 
           <Route path="/event-management-company-in-delhi-ncr" element={<EventManagementCompanyInDelhiNcr/>} /> 
           <Route path="/sound-system-on-rent/" element={<SoundSystem/>} /> 
           <Route path="/corporate-events" element={<CorporateEvents/>} /> 
           <Route path="/exhibition-seminars" element={<ExhibitionSeminars/>} /> 
           <Route path="/music-concert" element={<MusicConcert/>} /> 
           <Route path="/sports-events" element={<SportsEvents/>} /> 
           <Route path="/annual-festivals" element={<AnnualFestivals/>} />
           <Route path="/wedding-social-events" element={<WeddingSocialEvents/>} /> 
           <Route path="/Corporate-Events-&-Award-Ceremonies" element={<CorporateEventsAwardCeremonies/>} /> 
           <Route path="/award-ceremonies-and-product-launches-organiser-Delhi-NCR" element={<AwardCeremoniesProductLaunchesParties/>} /> 
           <Route path="/event-organiser" element={<EventOrganizer/>} /> 
           <Route path="/Event-Production-and-Equipment-Rental/" element={<EventProductionEquipmentRental/>} /> 
           <Route path="/Brand-Promotion-&-Product-Activation/" element={<BrandPromotionProductActivation/>} /> 
           <Route path="/Sports-Management/" element={<SportsManagement/>} /> 
           <Route path="/Trip-Planning-and-Management/" element={<TripPlanningManagement/>} /> 
           <Route path="/event-manpower-and-team-management/" element={<EventManpowerTeamManagement/>} /> 
           <Route path="/Waste-Management-Services/" element={<WasteManagementServices/>} /> 
           <Route path="/School-activities-Summer-camp-organiser/" element={<SchoolactivitiesSummercamporganiser/>} /> 
           <Route path="/event-fabrication-and-venue-branding/" element={<EventFabricationVenueBranding/>} /> 
           

           {/* Detail Page Start Here  */}
           <Route path="/artist/:slug_url" element={<Singleartist/>} />
           <Route path="/service/:slug_url" element={<Singleservicedetail/>} />
           <Route path="/:slug_url" element={<Singleequipment/>} />
           <Route path="/inhouse-service/:slug_url" element={<InhouseSingleservice/>} />
           <Route path="/venue-view/:slug_url" element={<SingleVenueDetail/>} />
          <Route path="/book-an-artist" element={<AllArtistList />}  />
          <Route path="/equipment" element={<AllEquipmentList />}  />
          <Route path="/venue-listing" element={<AllVenueList />}  />

           {/*  After Login User  */}
           <Route path="/dashboard" element={<Protected Component={Profile}/>} />
           <Route path="/create-artist-profile" element={<Protected Component={Artistprofile}/>} />
           <Route path="/change-password" element={<Protected Component={Changepassword}/>} />
           <Route path="/edit-email" element={<Protected Component={Editemail}/>} />
           <Route path="/artist-profile" element={<Protected Component={Editartist}/>} />
           <Route path="/artist-upload-photo-video" element={<Protected Component={ArtistPhotoVideo}/>} />

           


           {/*  Enquiry All Form */}
           <Route path="/contact/" element={<Contact/>} />
           <Route path="/vendor-registration/" element={<RegisterVendor/>} />
           <Route path="/volunteer-registration-for-event-and-sports" element={<RegisterVolunteer/>} />


           <Route path="*" element={<Error/>} /> 
           </Route>
        </Routes>
        
      </BrowserRouter> 
      </React.StrictMode>
  );
}
export default App;
