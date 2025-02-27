import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationForm />} />

      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
