
// import React from "react";
// // import { ChevronRight, ChevronLeft } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from "react-router-dom";
// import img2 from "../../../assets/BookappointmentImages/dent.jpg";
// import img3 from "../../../assets/BookappointmentImages/gynecologist.jpg";
// import img4 from "../../../assets/BookappointmentImages/dental.jpg";
// import img5 from "../../../assets/BookappointmentImages/cardiology.jpg";
// import img6 from "../../../assets/BookappointmentImages/Cardiology-scaled.jpg";

// const doctors = [
//   { id: 1, title: "Dentist", description: "Teething troubles? Schedule a dental checkup", image: img4 },
//   { id: 2, title: "Gynecologist", description: "Explore for women’s health, pregnancy, and infertility treatments", image: img3 },
//   { id: 3, title: "Dietitian", description: "Get guidance on eating right, weight management, and sports nutrition", image: img2 },
//   { id: 4, title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist", image: img3 },
//   { id: 5, title: "Cardiologist", description: "Heart issues? Get a cardiac checkup", image: img5 },
//   { id: 6, title: "Dermatologist", description: "Skin problems? Consult a dermatologist", image: img3 },
//   { id: 7, title: "Neurologist", description: "Brain and nerve care from specialists", image: img6 },
//   { id: 8, title: "Pediatrician", description: "Expert care for your child's health", image: img3 },
//   { id: 9, title: "ENT Specialist", description: "Ear, nose, and throat treatments", image: img2 },
//   { id: 10, title: "Orthopedic", description: "Bone and joint specialist consultations", image: img3 },
// ];


// function Bookappointmenthome() {
//   const specialtySettings = {
//     dots:true,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed: 1500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className=" w-[93%] mx-auto px-4 md:px-6 lg:px-8 py-6 mb-10 ">
//       <div className="mb-8">
//         <h2 className="capitalize text-xl md:text-2xl font-bold text-blue-500">Book an appointment for an in-clinic consultation</h2>
//         <p className="text-gray-600 text-sm md:text-base mt-2">Find experienced doctors across all specialties</p>
//       </div>
      
//       <Slider {...specialtySettings} className="relative">
//         {doctors.map((doctor) => (
//           <div key={doctor.id} className="px-2 mb-5">
//             <NavLink to={`/treatmentdetails/${doctor.title}`} className="block text-inherit no-underline hover:text-blue-500">
//               <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-md ">
//                 <img src={doctor.image} alt={doctor.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="mt-3">
//                 <h3 className="font-semibold text-lg md:text-xl">{doctor.title}</h3>
//                 <p className="text-gray-600 text-sm md:text-base">{doctor.description}</p>
//               </div>
//             </NavLink>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Bookappointmenthome;



import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/BookappointmentImages/financialplanning1.jpg"
import img2 from "../../../assets/BookappointmentImages/tax.webp"
import img3 from "../../../assets/BookappointmentImages/WealthManagement1.jpg"
import img4 from "../../../assets/BookappointmentImages/RetirementPlanning1.webp"
import img5 from "../../../assets/BookappointmentImages/CorporatePlanning1.jpg"
import img6 from "../../../assets/BookappointmentImages/EstatePlanning1.jpg"
import img7 from "../../../assets/BookappointmentImages/IntellectualProperty1.webp"
import img8 from "../../../assets/BookappointmentImages/Litigation1.jpg"
import img9 from "../../../assets/BookappointmentImages/ITConsulting1.jpg"
import img10 from "../../../assets/BookappointmentImages/SoftwareDevelopment1.jpg"
import img11 from "../../../assets/BookappointmentImages/Cybersecurity1.jpg"
import img12 from "../../../assets/BookappointmentImages/CloudServices1.webp"
import img13 from "../../../assets/BookappointmentImages/MentalHealth1.png"
import img14 from "../../../assets/BookappointmentImages/FitnessCoaching1.avif"
import img15 from "../../../assets/BookappointmentImages/NutritionCounseling1.jpg"
import img16 from "../../../assets/BookappointmentImages/LifestyleMedicine1.avif"

const doctors = [
  { id: 1, title: "Financial Planning,", description: "Managing money wisely to achieve financial security and future goals.", image: img1 },
  { id: 2, title: "Tax Advisory", description: "Expert guidance on tax planning, compliance, optimization, and financial efficiency.", image: img2 },
  { id: 3, title: "Wealth Management", description: "Strategic planning for asset growth, financial security, and investment success.", image: img3 },
  { id: 4, title: "Retirement Planning", description: "Securing financial stability for a comfortable and stress-free retirement.", image: img4 },
  { id: 5, title: "Corporate Planning", description: "Strategic decision-making for business growth, efficiency, and long-term success.", image: img5 },
  { id: 6, title: "Estate Planning", description: "Organizing asset distribution for security, wealth transfer, and legal efficiency.", image: img6 },
  { id: 7, title: "Intellectual Property", description: "Protecting creations through patents, trademarks, copyrights, and legal rights.", image: img7 },
  { id: 8, title: "Litigation", description: "Legal process for resolving disputes through courts and legal actions.", image: img8 },
  { id: 9, title: "IT Consulting", description: "Expert advice on technology solutions, strategy, and business optimization.", image: img9 },
  { id: 10, title: "Software Development", description: "Designing, coding, testing, and deploying software for various applications.", image: img10 },
  { id: 11, title: "Cybersecurity", description: "Protecting systems, networks, and data from cyber threats and attacks.", image: img11 },
  { id: 12, title: "Cloud Services", description: "Delivering computing resources, storage, and applications over the internet.", image: img12 },
  { id: 13, title: "Mental Health", description: "Emotional, psychological, and social well-being for a balanced life.", image: img13 },
  { id: 14, title: "Fitness Coaching", description: "Guiding individuals to achieve health, strength, and wellness goals.", image: img14 },
  { id: 15, title: "Nutrition Counseling", description: "Personalized guidance on healthy eating, diet planning, and wellness", image: img15 },
  { id: 16, title: "Lifestyle Medicine ", description: "Preventing and managing diseases through healthy habits and lifestyle changes.", image: img16 },
];

function Bookappointmenthome() {
  const specialtySettings = {
    infinite: true,
    arrows:false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  

  return (
    <div className=" w-[93%] mx-auto px-4 md:px-6 lg:px-8 py-6 mb-10 ">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl  font-bold ">Book an appointment for Experts</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">Find experienced Experts across all specialties</p>
      </div>
      
      <Slider {...specialtySettings} className="relative">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="px-2">
            <NavLink to={`/expertdetails/${doctor.title}`} className="block text-inherit no-underline hover:text-blue-500">
              <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-md">
                <img src={doctor.image} alt={doctor.title} className="w-full h-full object-cover" />
              </div>
              <div className="my-3">
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