import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const healthConcerns = [
  {
    id: 1,
    title: 'Cough & Cold?',
    price: '₹ 449',
    image: 'https://www.practo.com/consult/static/images/cough-cold-v1.jpg',
    alt: 'Person with Cough & Cold'
  },
  {
    id: 2,
    title: 'Period Problem?',
    price: '₹ 399',
    image: 'https://www.practo.com/consult/static/images/period-problems-v1.jpg',
    alt: 'Person with Period Plan'
  },
  {
    id: 3,
    title: 'Performance issues in bed?',
    price: '₹ 390',
    image: 'https://www.practo.com/consult/static/images/performance-issues-bed-v1.jpg',
    alt: 'Person considering diet options'
  },
  {
    id: 4,
    title: 'Skin Problems?',
    price: '₹ 499',
    image: 'https://www.practo.com/consult/static/images/skin-problems-v1.jpg',
    alt: 'Person with stomach pain'
  },
  {
    id: 5,
    title: 'Depression or Anxiety?',
    price: '₹ 399',
    image: 'https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg',
    alt: 'Person with stomach pain'
  },
  {
    id: 6,
    title: 'Want to lose Weight?',
    price: '₹ 399',
    image: 'https://www.practo.com/consult/static/images/lose-weight-v1.jpg',
    alt: 'Person considering diet options'
  },
  {
    id: 7,
    title: 'Stomach issues?',
    price: '₹ 499',
    image: 'https://www.practo.com/consult/static/images/stomach-issues-v1.jpg',
    alt: 'Person with stomach pain'
  },
  {
    id: 8,
    title: 'Vaginal infections',
    price: '₹ 599',
    image: 'https://www.practo.com/consult/static/images/vaginal-infections-v1.jpg',
    alt: 'Person with Vaginal infections'
  },
  {
    id: 9,
    title: 'Sick kidd?',
    price: '₹ 399',
    image: 'https://www.practo.com/consult/static/images/sick-kid-v1.jpg',
    alt: 'kids are sick'
  }
];

const HealthConcernCard = ({ concern }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden h-full mx-2">
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

function HealthCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const totalSlides = healthConcerns.length;
  const lastSlideIndex = totalSlides - slidesToShow;

  const showLeftArrow = currentSlide > 0;
  const showRightArrow = currentSlide < lastSlideIndex;

  const SingleDirectionPrevArrow = (props) => {
    const { onClick } = props;
    if (!showLeftArrow) return null;

    return (
      <button
        className="slick-arrow  absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow z-10"
        onClick={onClick}
        style={{ left: '-25px', zIndex: 1,marginLeft:'8px', }}
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
        className="slick-arrow  absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow z-10"
        onClick={onClick}
        style={{ right: '-25px', zIndex: 1,marginRight:'8px', }}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    );
  };

  const healthConcernSettings = {
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
  const navigate=useNavigate()
  return (
    <div>
      <div className="max-w-6xl overflow-hidden mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Common Health Concerns
            </h2>
            <p className="text-gray-600">
              Consult a doctor online for any health issue
            </p>
          </div>
          <button className="mt-4 sm:mt-0 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-[#2DAA9E] hover:text-white" onClick={()=>navigate("/newpage")}>
            See All Symptoms
          </button>
        </div>
        {/* Health Concerns Carousel with single direction navigation */}
        <div className="relative">
          <Slider {...healthConcernSettings}>
            {healthConcerns.map((concern) => (
              <div key={concern.id}>
                <HealthConcernCard concern={concern} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HealthCard;
