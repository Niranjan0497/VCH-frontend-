

import { useEffect, useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const totalSlides = 4;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(intervalId);
  }, [current]);

  const slides = [
    {
      image: "https://wallpaperaccess.com/full/3464192.jpg",
      title: "Your Health, Our",
      highlight: "Priority",
      subtitle: "Expert Medical Care",
      discount: "Free Consultation Available!",
      description:
        "Get the best medical advice from experienced doctors. We provide personalized treatment plans for your health concerns.",
    },
    {
      image: "https://happay.com/blog/wp-content/uploads/sites/12/2023/04/what-is-financial-modelling.webp",
      title: "Smart",
      highlight: "Finance",
      subtitle: "For a Secure Future",
      discount: "Expert Financial Advice!",
      description:
        "Manage your wealth effectively with our expert financial planning services. Secure your future with confidence.",
    },
    {
      image: "https://lawtrend.in/wp-content/uploads/2022/04/Lawyer-Court-Advocate.jpg",
      title: "Reliable",
      highlight: "Legal",
      subtitle: "Solutions for You",
      discount: "Get Legal Consultation Now!",
      description:
        "Our experienced legal professionals provide guidance and support for all your legal concerns with trust and transparency.",
    },
    {
      image: "https://infocus.dellemc.com/wp-content/uploads/2014/02/Carousel-app-pic-2.5.141.png",
      title: "Innovative",
      highlight: "Technology",
      subtitle: "For a Better Tomorrow",
      discount: "Explore the Latest Tech!",
      description:
        "Stay ahead in the digital age with cutting-edge technology solutions designed to streamline your work and life.",
    },
    {
      image: "https://www.shutterstock.com/image-photo/wellness-concept-mind-body-balance-260nw-1766645732.jpg",
      title: "Holistic",
      highlight: "Wellness",
      subtitle: "For a Healthy Life",
      discount: "Join Our Wellness Program!",
      description:
        "Achieve mental and physical well-being with our customized wellness programs designed for a balanced lifestyle.",
    },
  ];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full min-h-screen flex-shrink-0 relative"
          >
            <img
              src={slide.image}
              alt="Slide"
              className="w-full h-screen object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-10 text-center">
              <div className="max-w-2xl text-white">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold">
                  {slide.discount}
                </span>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
                  {slide.title} <span className="text-green-400">{slide.highlight}</span> {slide.subtitle}
                </h1>

                <p className="mt-2 text-sm sm:text-lg md:text-xl opacity-90">
                  {slide.description}
                </p>

                <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm sm:text-lg font-semibold">
                    Learn More →
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-green-600 px-6 py-3 rounded-full text-sm sm:text-lg font-semibold">
                    Get Started →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-900"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-900"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;

