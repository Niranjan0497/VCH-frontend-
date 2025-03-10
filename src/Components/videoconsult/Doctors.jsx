import React, { useState, useEffect, useRef } from "react";

const doctors = [
  {
    name: "Dr. Hitesh Viradiya",
    specialty: "Dermatologist, Cosmetologist",
    experience: "9 years",
    consults: "51349 consults done",
    imageUrl:
      "https://www.practostatic.com/images1-fabric/doctor/589655/dr-hitesh-viradiya-610d46ab0cf9b.jpg",
  },
  {
    name: "Dr. Arpita",
    specialty: "Dermatologist",
    experience: "11 years",
    consults: "34829 consults done",
    imageUrl:
      "https://www.practostatic.com/images1-fabric/doctor/679165/dr-arpita-6791ca6fde5cd.jpg",
  },
  {
    name: "Dr. Tariq Ahmad Bhat",
    specialty: "Sexologist, Psychiatrist",
    experience: "12 years",
    consults: "32002 consults done",
    imageUrl:
      "https://www.practostatic.com/images1-fabric/doctor/915397/dr-tariq-ahmad-bhat-621b6a0c5ab20.jpg",
  },
  {
    name: "Dr. Zoya Rasheed",
    specialty: "Cosmetic/Aesthetic Dentist",
    experience: "11 years",
    consults: "15837 consults done",
    imageUrl:
      "https://www.practostatic.com/images1-fabric/doctor/1028425/dr-zoya-rasheed-642282965fa4a.jpg",
  },
  {
    name: "Dr. Kamal Kishore Verma",
    specialty: "Sexologist, Psychiatrist",
    experience: "16 years",
    consults: "98840 consults done",
    imageUrl:
      "https://www.practostatic.com/images1-fabric/doctor/647391/dr-kamal-kishore-verma-5d69f93f40699.jpg",
  },
];

const DoctorCard = ({ name, specialty, experience, consults, imageUrl }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-3 w-[90%] max-w-xs hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="ml-3">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-xs text-gray-500">{specialty}</p>
        <p className="text-[10px] text-gray-600">{experience}</p>
        <p className="text-[10px] text-gray-600">{consults}</p>
        <button className="mt-1 py-1 px-2 bg-[#FFB433] text-black text-xs rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const slideRef = useRef(null);

  // Dynamically update number of visible cards based on screen width
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Duplicate doctors list to create a seamless loop
  const extendedDoctors = [...doctors, ...doctors];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= doctors.length) {
      setTimeout(() => {
        setCurrentIndex(0);
        slideRef.current.style.transition = "none";
      }, 500);
      setTimeout(() => {
        slideRef.current.style.transition = "transform 0.5s ease-in-out";
      }, 600);
    }
  }, [currentIndex]);

  return (
    <div className="max-w-6xl overflow-hidden mx-auto p-4">
      <h1 className="text-3xl text-gray-900 font-bold text-left mb-4 text-opacity-75">
        Our Doctors
      </h1>
      <div className="max-w-6xl mx-auto p-4 relative">
        <div className="overflow-hidden relative">
          <div
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {extendedDoctors.map((doctor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 flex justify-center"
              >
                <DoctorCard {...doctor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
