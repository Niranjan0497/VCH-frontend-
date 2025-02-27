import React, { useState, useEffect } from "react";
import { Card } from "../homepages/Card";
import { Button } from "../homepages/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import img2 from "../assets/Diet.jpg";
import img3 from "../assets/Physio.jpg";

const doctors = [
  { title: "Dentist", description: "Teething troubles? Schedule a dental checkup", image: img2 },
  { title: "Gynecologist/Obstetrician", description: "Explore for women’s health, pregnancy and infertility treatments", image: img3 },
  { title: "Dietitian/Nutrition", description: "Get guidance on eating right, weight management and sports nutrition", image: img2 },
  { title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist", image: img3 },
  { title: "Cardiologist", description: "Heart issues? Get a cardiac checkup", image: img2 },
  { title: "Dermatologist", description: "Skin problems? Consult a dermatologist", image: img3 },
  { title: "Neurologist", description: "Brain and nerve care from specialists", image: img2 },
  { title: "Pediatrician", description: "Expert care for your child's health", image: img3 },
  { title: "ENT Specialist", description: "Ear, nose, and throat treatments", image: img2 },
  { title: "Orthopedic", description: "Bone and joint specialist consultations", image: img3 },
];

export default function Bookappointmenthome() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const autoScrollInterval = 300000; // 3 seconds

  useEffect(() => {
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
      setStartIndex(0); // Loop back to the start
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex(doctors.length - visibleCards); // Loop back to the end
    }
  };

  return (
    <div className="container mx-auto px-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="py-6">
            <h2 className="text-2xl font-bold">Book an appointment for an in-clinic consultation</h2>
            <p className="text-gray-600">Find experienced doctors across all specialties</p>
          </div>

          <div className="relative flex items-center justify-center">
            {startIndex > 0 && (
              <div className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10">
                <ChevronLeft size={40} className="text-gray-700 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-200" onClick={handlePrev} />
              </div>
            )}

            <div className="flex space-x-4 overflow-hidden w-full justify-center transition-transform ease-in-out duration-1000">
              {doctors.slice(startIndex, startIndex + visibleCards).map((doctor, index) => (
                <NavLink to={`/treatmentdetails/${doctor.title}`} key={index} className="text-inherit no-underline">
                  <Card className="flex-1 min-w-[250px] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <img src={doctor.image} alt={doctor.title} className="w-full object-cover transition-opacity duration-300 hover:opacity-80" />
                  </Card>
                  <h3 className="font-semibold text-lg mt-3">{doctor.title}</h3>
                  <p className="text-gray-600 text-sm">{doctor.description}</p>
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
