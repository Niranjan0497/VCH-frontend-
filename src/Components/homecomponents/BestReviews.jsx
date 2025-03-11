import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import ReactStars from "react-stars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import img1 from "../../assets/BestReviewsImages/FinanceImage.webp";
import img2 from "../../assets/BestReviewsImages/LegalImage.webp";
import img3 from "../../assets/BestReviewsImages/TechnologyImage.webp";
import img4 from "../../assets/BestReviewsImages/WellnessImage.webp";
import img5 from "../../assets/BestReviewsImages/MentalHealthImage.webp";

const slides = [
  { image: img1, title: "Best Quality", button: "Finance", description: "Manage your wealth wisely with expert financial insights and smart investment strategies.", rating: 4 },
  { image: img2, title: "Top Rated", button: "Legal", description: "Stay informed with the latest legal updates, expert advice, and essential rights awareness.", rating: 3 },
  { image: img3, title: "Trending", button: "Technology", description: "Explore cutting-edge innovations, AI breakthroughs, and the future of digital transformation.", rating: 4 },
  { image: img4, title: "Customer Favorite", button: "Wellness", description: "Enhance your well-being with self-care routines, fitness tips, and healthy lifestyle choices.", rating: 4 },
  { image: img5, title: "Exclusive Offer", button: "Mental Health", description: "Prioritize your mental well-being with stress management techniques and mindfulness practices.", rating: 3 },
];

const BestReviews = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white px-2 py-10">
      {/* Testimonials Header */}
      <div className="text-center mb-10 text-black">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-black">What our Clients Say</span>
        </h2>
      </div>

      {/* Slick Slider */}
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            let scale = 0.60
            let opacity = 0.40;

            if (index === currentSlide) {
              scale = 1.15;
              opacity = 1;
            } else if (
              index === currentSlide - 1 ||
              index === currentSlide + 1 ||
              (currentSlide === 0 && index === slides.length - 1) ||
              (currentSlide === slides.length - 1 && index === 0)
            ) {
              scale = 0.80;
              opacity = 0.85;
            }

            return (
              <div key={index} className="p-4">
                <motion.div
                  className="relative rounded-xl overflow-hidden h-64"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: scale,
                    opacity: opacity,
                    transition: { duration:0.5},
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image Container */}
                  <motion.img
                    src={slide.image}
                    className="absolute w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                    alt={slide.title}
                  />

                  {/* Description Container */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-600 text-white p-6 rounded-lg transition-opacity duration-500"
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    <p className="text-sm">{slide.description}</p>
                    <div className="flex justify-center mt-2">
                      <ReactStars count={5} value={slide.rating} size={20} edit={false} color2={"#ffd700"} />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BestReviews;