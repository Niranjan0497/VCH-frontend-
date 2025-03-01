import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import ConsultationForm from "./Components/homecomponents/TopConsultants/TopConsultantForm.jsx";
import BlogCards from "./Components/homecomponents/article/BlogCards.jsx";
import ViewBlogCard from "./Components/homecomponents/article/ViewBlogCard.jsx";
import Articles from "./Components/homecomponents/article/Articles.jsx";

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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
