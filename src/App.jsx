import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";


import Login from "./Components/homecomponents/Admin/Login.jsx";
import Register from "./Components/homecomponents/Admin/Register.jsx";

import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";

import Bookappointmenthome from "../src/Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Bookappointmenthome.jsx"
import Doctorfilter from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Doctorfilter.jsx";
import Onlyonedoctor from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/Onlyonedoctor.jsx";
import Doctorbooking from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Doctorbooking.jsx";


import BlogCards from "./Components/homecomponents/article/BlogCards.jsx";
import ViewBlogCard from "./Components/homecomponents/article/ViewBlogCard.jsx";

import Articles from "./Components/homecomponents/article/Articles.jsx";

import OTPVerification from "./Components/homecomponents/Admin/OtpVerification.jsx";
import UploadPage from "./Components/homecomponents/Admin/Uploadform.jsx";


function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/specialities" element={<Specialities />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        
        {/* Homebookappointment */}
        <Route path="/bookappointment" element={<Bookappointmenthome />}/>
        <Route path="/treatmentdetails/:title" element={<Doctorfilter/>}/>
        <Route path="/onedoctor/:id" element={<Onlyonedoctor/>}/>
        <Route path="/doctorbooking/:id" element={<Doctorbooking/>}/>
      

    
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      
          <Route path="/blogcards" element={<BlogCards />} />
          <Route path="/Article" element={<Articles />} />
          <Route path="/viewblogcard/:id" element={<ViewBlogCard />} />
          <Route path="/blogcards" element={<BlogCards />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/viewblogcard/:id" element={<ViewBlogCard />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <Footer />
    

    </>
  );
}

export default App;
