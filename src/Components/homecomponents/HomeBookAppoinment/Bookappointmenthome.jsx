import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import img2 from "../../../assets/BookappointmentImages/dent.jpg";
import img3 from "../../../assets/BookappointmentImages/gynecologist.jpg";
import img4 from "../../../assets/BookappointmentImages/dental.jpg";
import img5 from "../../../assets/BookappointmentImages/cardiology.jpg";
import img6 from "../../../assets/BookappointmentImages/Cardiology-scaled.jpg";

const doctors = [
  { id: 1, title: "Dentist", description: "Teething troubles? Schedule a dental checkup", image: img4 },
  { id: 2, title: "Gynecologist", description: "Explore for women’s health, pregnancy, and infertility treatments", image: img3 },
  { id: 3, title: "Dietitian", description: "Get guidance on eating right, weight management, and sports nutrition", image: img2 },
  { id: 4, title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist", image: img3 },
  { id: 5, title: "Cardiologist", description: "Heart issues? Get a cardiac checkup", image: img5 },
  { id: 6, title: "Dermatologist", description: "Skin problems? Consult a dermatologist", image: img3 },
  { id: 7, title: "Neurologist", description: "Brain and nerve care from specialists", image: img6 },
  { id: 8, title: "Pediatrician", description: "Expert care for your child's health", image: img3 },
  { id: 9, title: "ENT Specialist", description: "Ear, nose, and throat treatments", image: img2 },
  { id: 10, title: "Orthopedic", description: "Bone and joint specialist consultations", image: img3 },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-25px] z-10 top-1/2 transform -translate-y-1/2 sm:left-[-35px] md:left-[-25px] lg:left-[-35px] "
    onClick={onClick}
    style={{  marginTop: "-40px"}}
  >
    <ChevronLeft className="w-8 h-8 text-gray-700 hover:text-blue-500 " />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-25px] z-10 top-1/2 transform -translate-y-1/2 sm:right-[-35px] md:right-[-25px] lg:right-[-35px]"
    onClick={onClick}
    style={{  marginTop: "-40px"}}
  >
    <ChevronRight className="w-8 h-8 text-gray-700 hover:text-blue-500" />
  </button>
);

function Bookappointmenthome() {
  const specialtySettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className=" w-[93%] mx-auto px-4 md:px-6 lg:px-8 py-6 mb-10 ">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Book an appointment for an in-clinic consultation</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">Find experienced doctors across all specialties</p>
      </div>
      
      <Slider {...specialtySettings} className="relative">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="px-2">
            <NavLink to={`/expertdetails/${doctor.title}`} className="block text-inherit no-underline hover:text-blue-500">
              <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-md">
                <img src={doctor.image} alt={doctor.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-lg md:text-xl">{doctor.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{doctor.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Bookappointmenthome;
