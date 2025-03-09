import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";

import Login from "./Components/homecomponents/Admin/Login.jsx";
import Register from "./Components/homecomponents/Admin/Register.jsx";

import Specialities from "./Components/homecomponents/TopConsultants/TopConsultant.jsx";
import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";

import Bookappointmenthome from "../src/Components/homecomponents/HomeBookAppoinment/Bookappointmenthome.jsx";
import Doctorfilter from "./Components/homecomponents/HomeBookAppoinment/Doctorfilter.jsx";
import Doctorbooking from "./Components/homecomponents/HomeBookAppoinment/Doctorbooking.jsx";
import ExpertProfile from "./Components/homecomponents/HomeBookAppoinment/ExpertProfile.jsx";
import BlogCards from "./Components/homecomponents/article/BlogCards.jsx";
import ViewBlogCard from "./Components/homecomponents/article/ViewBlogCard.jsx";
import Articles from "./Components/homecomponents/article/Articles.jsx";
import OTPVerification from "./Components/homecomponents/Admin/OtpVerification.jsx";
import UploadPage from "./Components/homecomponents/Admin/Uploadform.jsx";
import Finance from "./Finance.jsx";
import MainContent from "./Components/videoconsult/MainContent.jsx";
import Contact from "./pages/Contact.jsx";
import ExpertFilter from "./Components/homecomponents/HomeBookAppoinment/ExpertFilter.jsx";
import ExpertDetails from "./Components/homecomponents/HomeBookAppoinment/ExpertDetalis.jsx";
import FAQPage from "../src/Components/homecomponents/Faq.jsx";
import Aboutus from "./Components/homecomponents/Aboutus.jsx";
import AdminDashboard from "./admin/index.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import CustomerService from "./admin/CustomerService.jsx";
import Settings from "./admin/Settings.jsx";
import FAQManager from "./admin/contentmangement/FAQsList.jsx";
import CategoryList from "./admin/contentmangement/Categories.jsx";
import UserManagement from "./admin/UserMangement.jsx";
import { useLocation } from "react-router-dom";
import ExpertManagment from "./admin/ExpertManagment.jsx";

function App() {

  const location = useLocation();
   // Check if the path starts with "/admin"
   const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
    
    {!isAdminRoute &&<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blogcards" element={<BlogCards />} />
        <Route path="/viewblogcard/:id" element={<ViewBlogCard />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="aboutus" element={<Aboutus />} />
        {/* Homebookappointment */}
        <Route path="/bookappointment" element={<Bookappointmenthome />}/>
        <Route path="/expertdetails/:title" element={<ExpertFilter />} />
        <Route path="/oneexpert/:id" element={< ExpertProfile/>}/>
        <Route path="/doctorbooking/:id" element={<Doctorbooking/>}/>
        <Route path="/finance" element={<Finance/>}/>
        <Route path="/expertdetails" element={<ExpertDetails/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

       
        {/* <Route path="/treatmentdetails/:title" element={<Doctorfilter />} /> */}
        {/* <Route path="/onedoctor/:id" element={<Onlyonedoctor />} /> */}
        <Route path="/doctorbooking/:id" element={<Doctorbooking />} />
        <Route path="/finance" element={<Finance />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}


        {/* <Route path="/treatmentdetails/:title" element={<Doctorfilter />} /> */}
        {/* <Route path="/onedoctor/:id" element={<Onlyonedoctor />} /> */}
        {/* <Route path="/doctorbooking/:id" element={<Doctorbooking />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/video-consult" element={<MainContent />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer-service" element={<CustomerService/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="faqs" element={<FAQManager />} />
          <Route path="categories" element={<CategoryList/>} />
          <Route path="experts-management" element={<ExpertManagment />} />
          <Route path="users-management" element={<UserManagement />} />
        </Route>
      </Routes>
      {!isAdminRoute &&<Footer />}
    </>
  );
}

export default App;