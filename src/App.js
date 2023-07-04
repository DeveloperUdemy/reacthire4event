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
function App() {
  return (
      <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
           <Route path="/" element={<MainHeaderFooter/>} >
           <Route index element={<Home/>} />
           <Route path="about/" element={<About/>} />
           <Route path="team/" element={<Ourteam/>} />
           <Route path="disclaimer/" element={<Disclaimerpage/>} />
           <Route path="term-condition/" element={<Termconditions/>} />
           <Route path="privacy-policy/" element={<Privacypolicy/>} />
           <Route path="why-us/" element={<Whyus/>} />
           <Route path="how_it_works/" element={<Howitwork/>} />
           <Route path="services/" element={<Services/>} />
           <Route path="case-study/" element={<Casestudey/>} />
           <Route path="our-service" element={<Ourservice/>} />
           <Route path="marketing_services/" element={<Marketingservice/>} />
           <Route path="project-management/" element={<Projectmanagement/>} />
           <Route path="consulting/" element={<Consultingservics/>} />
           <Route path="other/" element={<Otherservics/>} />
           <Route path="artists-management/" element={<Artistmanagement/>} />
           <Route path="plan-your-trip/" element={<Planyourtrip/>} /> 
           
           {/* Detail Page Start Here  */}
           <Route path="/artist/:slug_url" element={<Singleartist/>} />
           <Route path="/service/:slug_url" element={<Singleservicedetail/>} />
           <Route path="/:slug_url" element={<Singleequipment/>} />
           <Route path="/inhouse-service/:slug_url" element={<InhouseSingleservice/>} />
          
          <Route path="/book-an-artist" element={<AllArtistList />}  />
          <Route path="/equipment" element={<AllEquipmentList />}  />

           {/*  After Login User  */}
           <Route path="dashboard" element={<Protected Component={Profile}/>} />
           <Route path="create-artist-profile" element={<Protected Component={Artistprofile}/>} />
           <Route path="change-password" element={<Protected Component={Changepassword}/>} />
           <Route path="edit-email" element={<Protected Component={Editemail}/>} />
           <Route path="artist-profile" element={<Protected Component={Editartist}/>} />


           {/*  Enquiry All Form */}
           <Route path="contact/" element={<Contact/>} />
           <Route path="vendor-registration/" element={<RegisterVendor/>} />
           <Route path="volunteer-registration-for-event-and-sports" element={<RegisterVolunteer/>} />


           <Route path="*" element={<Error/>} /> 
           </Route>
        </Routes>
        
      </BrowserRouter> 
      </React.StrictMode>
  );
}
export default App;
