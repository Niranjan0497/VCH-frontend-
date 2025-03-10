import React, { useState, useEffect } from "react";

const TestimonialCard = ({ name, isAnonymous, testimonial, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col flex-shrink-0 w-full sm:w-72 h-auto sm:h-44">
      <div className="flex items-center mb-3">
        <img
          src={avatar || "/api/placeholder/48/48"}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">
            {isAnonymous ? "Anonymous" : ""}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-4">{testimonial}</p>
    </div>
  );
};

const UserExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const testimonials = [
    {
      name: "Anamika Bajpai",
      isAnonymous: true,
      testimonial:
        "Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!",
      avatar: "https://photosvibe.in/wp-content/uploads/girl-dp86.jpg",
    },
    {
      name: "Maitreyi Purohit",
      isAnonymous: true,
      testimonial:
        "I got answers to all my medical queries. I'll definitely recommend online consultations on Practo to others.",
      avatar:
        "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Mr. Biswas",
      isAnonymous: true,
      testimonial:
        "The consultation on Practo was fantastic. I'm very happy with the experience and would encourage people to consult online for minor issues.",
      avatar:
        "https://www.shutterstock.com/image-photo/portrait-cheerful-indian-retired-old-260nw-1811789638.jpg",
    },
    {
      name: "Rajat Sharma",
      isAnonymous: true,
      testimonial:
        "Quick and effective consultation. The doctor was very attentive and provided clear instructions for my treatment.",
      avatar: "https://thumbs.dreamstime.com/b/loving-uncle-nephew-1632510.jpg",
    },
    {
      name: "Priya Mehta",
      isAnonymous: true,
      testimonial:
        "I was skeptical about online consultations but Practo changed my mind. The process was seamless and the doctor was excellent.",
      avatar:
        "https://photosbulk.com/wp-content/uploads/2024/08/attractive-instagram-hidden-face-dp-for-girls_124.webp",
    },
    {
      name: "Arjun Kapoor",
      isAnonymous: true,
      testimonial:
        "As a busy professional, this service is a life-saver. I got medical advice without taking time off work.",
      avatar:
        "https://i.pinimg.com/originals/1c/9f/9a/1c9f9add75d994886cf7b92702ed6154.jpg",
    },
  ];

  // Clone first few testimonials to the end for smooth infinite scrolling
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, cardsPerView),
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset the index without transition when reaching cloned items
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Short delay to allow transition effect
    }
  }, [currentIndex]);

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-hidden">
      <h2 className="text-3xl font-bold text-left mb-8">
        What our users say about their online consultation experience
      </h2>
      <div className="relative">
        <div className="overflow-hidden mx-12">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
