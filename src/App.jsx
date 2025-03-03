import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";


import Login from "./Components/homecomponents/Admin/Login.jsx";
import Register from "./Components/homecomponents/Admin/Register.jsx";

import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";
import BlogCards from "./Components/homecomponents/article/BlogCards.jsx";
import ViewBlogCard from "./Components/homecomponents/article/ViewBlogCard.jsx";

import Articles from "./Components/homecomponents/article/Articles.jsx";

import OTPVerification from "./Components/homecomponents/Admin/OtpVerification.jsx";
import UploadPage from "./Components/homecomponents/Admin/Uploadform.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/blogcards" element={<BlogCards />} />
          <Route path="/Article" element={<Articles />} />
          <Route path="/viewblogcard/:id" element={<ViewBlogCard />} />

          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/blogcards" element={<BlogCards />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/viewblogcard/:id" element={<ViewBlogCard />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
