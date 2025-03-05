import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import img2 from "../../../../../assets/BookappointmentImages/dent.jpg";
import img3 from "../../../../../assets/BookappointmentImages/gynecologist.jpg";
import img4 from "../../../../../assets/BookappointmentImages/dental.jpg";
import img5 from "../../../../../assets/BookappointmentImages/cardiology.jpg";
// import axios from "axios"

const doctors = [
  {id:1, title: "Dentist", description: "Teething troubles? Schedule a dental checkup", image: img4 },
  {id:2, title: "Gynecologist", description: "Explore for women’s health, pregnancy and infertility treatments", image: img3 },
  {id:3, title: "Dietitian", description: "Get guidance on eating right, weight management and sports nutrition", image: img2 },
  {id:4, title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist", image: img3 },
  {id:5, title: "Cardiologist", description: "Heart issues? Get a cardiac checkup", image: img4 },
  {id:6, title: "Dermatologist", description: "Skin problems? Consult a dermatologist", image: img3 },
  {id:7, title: "Neurologist", description: "Brain and nerve care from specialists", image: img5 },
  {id:8, title: "Pediatrician", description: "Expert care for your child's health", image: img3 },
  {id:9, title: "ENT Specialist", description: "Ear, nose, and throat treatments", image: img2 },
  {id:10, title: "Orthopedic", description: "Bone and joint specialist consultations", image: img3 },
];

export default function Bookappointmenthome() {
  // const [doctors,setDoctor]=useState([])
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const autoScrollInterval = 300000; // 3 seconds

  useEffect(() => {

    // axios.get("http://localhost:4000/Bookappointment")
    // .then((res)=>{
    //  setDoctor(res.data);
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })

    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [startIndex]);

  const handleNext = () => {
    if (startIndex < doctors.length - visibleCards) {
      setStartIndex((prevIndex) => prevIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex(doctors.length - visibleCards); 
    }
  };

  return (
    <div className="container mx-auto px-1 my-5 w-[95%] ">
      <div className="row">
        <div className="col-lg-1"></div>
          <div className="col-lg-10">
             <div className="py-3">
               <h2 className="text-2xl font-bold">Book an appointment for an in-clinic consultation</h2>
               <p className="text-gray-600 my-2">Find experienced doctors across all specialties</p>
             </div>

             <div className="relative flex items-center justify-center mb-5 h-[300px]">
                 {startIndex > 0 && (
                     <div className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10">
                        <ChevronLeft size={40} className="text-gray-700 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-200" onClick={handlePrev} />
                     </div>
                  )}

                     <div className="flex space-x-4 overflow-hidden w-full justify-center">
                       {doctors.slice(startIndex, startIndex + visibleCards).map((doctor, index) => (
                          <NavLink to={`/treatmentdetails/${doctor.title}`} key={index} className="text-inherit no-underline hover:text-sky-400">
                               <div className="flex-1 w-[355px] h-[250px] rounded-lg overflow-hidden ">
                                    <img src={doctor.image} alt={doctor.title} className="w-full h-full object-cover" />
                               </div>
                               <div>
                                    <h3 className="font-semibold text-lg">{doctor.title}</h3>
                                    <p className="text-gray-600 text-sm ">{doctor.description}</p>
                               </div>
                          </NavLink>
                        ))}
                     </div> 

                  {startIndex < doctors.length - visibleCards && (
                     <div className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10">
                        <ChevronRight size={40} className="text-gray-700 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-200" onClick={handleNext} />
                     </div>
                   )}
              </div>
           </div>
        </div>
     </div>
  );
}
