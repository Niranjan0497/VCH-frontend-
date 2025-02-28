import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";
import BlogCards from "./Components/homecomponents/article/BlogCards.jsx";
import HomePage from "./Components/homecomponents/article/HomePage.jsx";
import ViewBlogCard from "./Components/homecomponents/article/ViewBlogCard.jsx";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/blogcards" element={<BlogCards/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/viewblogcard/:id" element={<ViewBlogCard/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
