import { Routes, Route } from "react-router-dom";
import Footer from "../src/Components/Footer.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Bookappointmenthome from "../src/homepages/Bookappointmenthome.jsx"


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookappointment" element={<Bookappointmenthome/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
