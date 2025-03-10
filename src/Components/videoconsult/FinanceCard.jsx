import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const financialConcerns = [
  {
    id: 1,
    title: 'Tax Filing Assistance?',
    price: '₹ 999',
    image: 'https://images.unsplash.com/photo-1587613755834-068f8234c7cc',
    alt: 'Person filing taxes'
  },
  {
    id: 2,
    title: 'Investment Planning?',
    price: '₹ 1199',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
    alt: 'Financial advisor discussing investments'
  },
  {
    id: 3,
    title: 'Loan Consultation?',
    price: '₹ 899',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
    alt: 'Person discussing loan options'
  },
  {
    id: 4,
    title: 'Retirement Planning?',
    price: '₹ 1499',
    image: 'https://images.unsplash.com/photo-1504355080015-bba52674577b',
    alt: 'Senior couple discussing retirement'
  },
  {
    id: 5,
    title: 'Business Finance Advice?',
    price: '₹ 1299',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    alt: 'Business professionals discussing finances'
  },
  {
    id: 6,
    title: 'Credit Score Improvement?',
    price: '₹ 1399',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437c7',
    alt: 'Person checking credit score'
  }
];

const FinancialConcernCard = ({ concern }) => (
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

function FinancialCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const totalSlides = financialConcerns.length;
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

  const financialConcernSettings = {
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
              Common Financial Concerns
            </h2>
            <p className="text-gray-600">
              Get expert financial advice online
            </p>
          </div>
          <button 
      onClick={() => navigate("/expertdetails/Financial Planning")} 
      className="mt-6 px-6 py-2 text-md lg:text-lg text-white font-semibold rounded-md bg-[#2DAA9E]"
    >
      See All Finance Issues
    </button>
        </div>
        <div className="relative">
          <Slider {...financialConcernSettings}>
            {financialConcerns.map((concern) => (
              <div key={concern.id}>
                <FinancialConcernCard concern={concern} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FinancialCard;
