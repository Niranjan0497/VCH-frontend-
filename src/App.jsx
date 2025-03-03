import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import Specialities from "./Components/homecomponents/TopConsultants/TopConsultant.jsx";
import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";
import Bookappointmenthome from "../src/Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Bookappointmenthome.jsx"
import Doctorfilter from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Doctorfilter.jsx";
import Onlyonedoctor from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/Onlyonedoctor.jsx";
import Doctorbooking from "./Components/homecomponents/TopConsultants/HomeBookAppoinment/homepages/Doctorbooking.jsx";


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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
