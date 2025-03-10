import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const legalConcerns = [
    {
      id: 1,
      title: 'Property Disputes?',
      price: '₹ 999',
      image: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg',
      alt: 'Gavel on a legal document symbolizing property disputes'
    },
    {
      id: 2,
      title: 'Divorce & Family Matters?',
      price: '₹ 1199',
      image: 'https://images.pexels.com/photos/5699735/pexels-photo-5699735.jpeg',
      alt: 'Couple discussing legal separation with a lawyer'
    },
    {
      id: 3,
      title: 'Employment Issues?',
      price: '₹ 899',
      image: 'https://images.pexels.com/photos/5668492/pexels-photo-5668492.jpeg',
      alt: 'Person facing employment dispute in an office'
    },
    {
      id: 4,
      title: 'Criminal Defense?',
      price: '₹ 1499',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      alt: 'Lawyer defending a client in court'
    },
    {
      id: 5,
      title: 'Business Legal Advice?',
      price: '₹ 1299',
      image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg',
      alt: 'Business professionals discussing legal matters'
    },
    {
      id: 6,
      title: 'Intellectual Property?',
      price: '₹ 1399',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      alt: 'Person handling intellectual property rights'
    }
  ];
  

const LegalConcernCard = ({ concern }) => (
  <div className="bg-white rounded-lg overflow-hidden h-full mx-2">
    <div className="relative h-48">
      <img
        src={concern.image}
        alt={concern.alt}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-medium text-gray-800">{concern.title}</h3>
      <p className="text-gray-600 mt-1">{concern.price}</p>
      <button className="mt-4 text-blue-500 font-medium flex items-center">
        Consult Now
        <ChevronRight className="ml-1 w-4 h-4" />
      </button>
    </div>
  </div>
);

function LegalCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const totalSlides = legalConcerns.length;
  const lastSlideIndex = totalSlides - slidesToShow;

  const showLeftArrow = currentSlide > 0;
  const showRightArrow = currentSlide < lastSlideIndex;

  const SingleDirectionPrevArrow = (props) => {
    const { onClick } = props;
    if (!showLeftArrow) return null;

    return (
      <button
        className="slick-arrow absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full shadow z-10"
        onClick={onClick}
        style={{ left: '-25px', zIndex: 1, marginLeft: '8px' }}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
    );
  };

  const SingleDirectionNextArrow = (props) => {
    const { onClick } = props;
    if (!showRightArrow) return null;

    return (
      <button
        className="slick-arrow absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow z-10"
        onClick={onClick}
        style={{ right: '-25px', zIndex: 1, marginRight: '8px' }}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    );
  };

  const legalConcernSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SingleDirectionPrevArrow />,
    nextArrow: <SingleDirectionNextArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
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
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-6xl overflow-hidden mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Common Legal Concerns
            </h2>
            <p className="text-gray-600">
              Consult a lawyer online for any legal issue
            </p>
          </div>
          <button  
      onClick={() => navigate("/expertdetails/Corporate Law")} 
      className="mt-6 px-6 py-2 text-md lg:text-lg text-white font-semibold rounded-md bg-[#2DAA9E]"
    >
      See All Legal Issues
    </button>
        </div>
        {/* Legal Concerns Carousel with single direction navigation */}
        <div className="relative">
          <Slider {...legalConcernSettings}>
            {legalConcerns.map((concern) => (
              <div key={concern.id}>
                <LegalConcernCard concern={concern} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LegalCard;