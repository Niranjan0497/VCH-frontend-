import React, { useState } from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const specialties = [
    {
      id: 1,
      title: 'Gynaecology',
      price: 499,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <path d="M40,70 Q50,80 60,65 Q70,75 60,45 Q50,30 40,40 Q30,50 40,70" fill="#7B5EA7" />  	
        <path d="M45,55 Q55,65 65,55 Q75,80 45,80 Q30,75 45,55" fill="#FB9A9A" />
      </svg>
    },
    {
      id: 2,
      title: 'Sexology',
      price: 499,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <path d="M35,65 L45,55 L55,65 L65,55" stroke="#FB9A9A" strokeWidth="4" fill="none" />
        <circle cx="40" cy="45" r="15" stroke="#FB9A9A" strokeWidth="4" fill="none" />
        <circle cx="60" cy="45" r="15" stroke="#6366F1" strokeWidth="4" fill="none" />
        <path d="M70,35 L80,25" stroke="#6366F1" strokeWidth="4" fill="none" />
      </svg>
    },
    {
      id: 3,
      title: 'General physician',
      price: 399,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <path d="M30,40 C40,30 60,30 70,40 C80,50 70,70 50,70 C30,70 20,50 30,40Z" stroke="#9333EA" strokeWidth="4" fill="none" />
        <path d="M50,70 L50,85" stroke="#9333EA" strokeWidth="4" />
      </svg>
    },
    {
      id: 4,
      title: 'Dermatology',
      price: 449,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <path d="M30,40 Q45,20 70,40 Q85,55 70,70 Q55,80 30,65 Q20,55 30,40Z" fill="#6D4BA0" />
        <circle cx="40" cy="50" r="3" fill="#F8D7A8" />
        <circle cx="55" cy="45" r="2" fill="#F8D7A8" />
        <circle cx="60" cy="55" r="4" fill="#F8D7A8" />
      </svg>
    },
    {
      id: 5,
      title: 'Psychiatry',
      price: 499,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <rect x="30" y="30" width="40" height="40" rx="5" fill="#FB9A9A" />
        <text x="50" y="55" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle">+</text>
        <circle cx="65" cy="70" r="15" fill="#D1D9F0" />
        <path d="M60,70 Q65,65 70,70" stroke="#6D4BA0" strokeWidth="2" fill="none" />
        <path d="M58,65 L62,65" stroke="#6D4BA0" strokeWidth="2" />
        <path d="M68,65 L72,65" stroke="#6D4BA0" strokeWidth="2" />
      </svg>
    },
    {
      id: 6,
      title: 'Stomach and digestion',
      price: 399,
      icon: <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#D1D9F0" />
        <path d="M40,30 Q30,40 35,60 Q40,80 60,75 Q80,70 70,50 Q65,30 40,30Z" fill="#FDB48B" />
        <path d="M45,40 Q55,45 55,55 Q50,70 60,65" stroke="#DE7E44" strokeWidth="2" fill="none" />
      </svg>
    }
  ];

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev"
        onClick={onClick}
        style={{ left: '-25px', zIndex: 1 ,marginTop:'2px',marginLeft:'8px', }}
      >
        <ChevronLeft className="w-6 h-6 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-next"
        onClick={onClick}
        style={{ right: '-25px',marginTop:'2px',marginRight:'8px' }}
      >
        <ChevronRight className="w-6 h-6 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </button>
    );
};

const SpecialtyCard = ({ icon, title, price, onClick }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 text-center mb-1">{title}</h3>
      <p className="text-gray-600 font-medium mb-3">₹{price}</p>
      <button
        onClick={onClick}
        className="text-blue-500 font-medium flex items-center"
      >
        Consult now <ChevronRight className="ml-1 w-4 h-4" />
      </button>
    </div>
);

function BookAppointment() {
  const navigate=useNavigate()
  const handleConsult = (specialty) => {
    alert(`Consulting for ${specialty.title}`);
  };

  const specialtySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl overflow-hidden mx-auto p-4">
      <div className="mb-12">
        {/* Specialties Carousel */}
        <Slider {...specialtySettings}>
          {specialties.map(specialty => (
            <div key={specialty.id} className="px-2">
              <SpecialtyCard
                icon={specialty.icon}
                title={specialty.title}
                price={specialty.price}
                onClick={() => handleConsult(specialty)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BookAppointment;
