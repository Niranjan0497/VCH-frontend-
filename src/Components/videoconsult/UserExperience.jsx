import React, { useState } from 'react';

const TestimonialCard = ({ name, isAnonymous, testimonial, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-72 h-44 flex flex-col flex-shrink-0">
      <div className="flex items-center mb-3">
        <img
          src={avatar || "/api/placeholder/48/48"}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{isAnonymous ? "Anonymous" : ""}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-4">{testimonial}</p>
    </div>
  );
};

const UserExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const testimonials = [
    {
      name: "Anamika Bajpai",
      isAnonymous: true,
      testimonial: "Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!",
      avatar: "https://photosvibe.in/wp-content/uploads/girl-dp86.jpg"
    },
    {
      name: "Maitreyi Purohit",
      isAnonymous: true,
      testimonial: "I got answers to all my medical queries. I'll definitely recommend online consultations on Practo to others.",
      avatar: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Mr. Biswas",
      isAnonymous: true,
      testimonial: "The consultation on Practo was fantastic. I'm very happy with the experience and would encourage people to consult online for minor issues.",
      avatar: "https://www.shutterstock.com/image-photo/portrait-cheerful-indian-retired-old-260nw-1811789638.jpg"
    },
    {
      name: "Rajat Sharma",
      isAnonymous: true,
      testimonial: "Quick and effective consultation. The doctor was very attentive and provided clear instructions for my treatment.",
      avatar: "https://thumbs.dreamstime.com/b/loving-uncle-nephew-1632510.jpg"
    },
    {
      name: "Priya Mehta",
      isAnonymous: true,
      testimonial: "I was skeptical about online consultations but Practo changed my mind. The process was seamless and the doctor was excellent.",
      avatar: "https://photosbulk.com/wp-content/uploads/2024/08/attractive-instagram-hidden-face-dp-for-girls_124.webp"
    },
    {
      name: "Arjun Kapoor",
      isAnonymous: true,
      testimonial: "As a busy professional, this service is a life-saver. I got medical advice without taking time off work.",
      avatar: "https://i.pinimg.com/originals/1c/9f/9a/1c9f9add75d994886cf7b92702ed6154.jpg"
    },
    {
      name: "Sunita Patel",
      isAnonymous: true,
      testimonial: "The follow-up service was impressive. The doctor checked on my progress twice after the consultation.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8-uqybK6xEWqc03Siuo9g10_7ez5n9KncDESXo3H89gJ2b1a1JJK79F3Zvvn-n64M44&usqp=CAU"
    },
    {
      name: "Dr. Rohan Gupta",
      isAnonymous: false,
      testimonial: "As a healthcare professional, I'm impressed with the quality of care provided through this platform. The technology is reliable and secure.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ4O7ub0YY_Nje-0QSq7Qp7PNCyVK2QPfiSElyXsiKBgE_BPl6cw7NKiajvE44HDPulI&usqp=CAU"
    }
  ];

  // Check if we can move forward or backward
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex + cardsPerView < testimonials.length;

  // Functions to move the carousel
  const moveLeft = () => {
    if (canMoveLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (canMoveRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // For proper spacing calculation
  const cardWidth = 288; // 72 * 4 = 288px
  const cardGap = 24; // 6 * 4 = 24px
  const cardWithGap = cardWidth + cardGap;

  return (
    <div className='max-w-6xl overflow-hidden mx-auto p-4'>

      <h2 className="text-3xl font-bold text-left mb-8">
        What our users say about their online consultation experience
      </h2>
      <div className="w-full max-w-6xl mx-auto py-8">
        <div className="relative">
          {/* Left Navigation Button - Only visible when we can move left */}
          {canMoveLeft && (
            <button
              onClick={moveLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="See previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Right Navigation Button - Only visible when we can move right */}
          {canMoveRight && (
            <button
              onClick={moveRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="See more testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {/* Carousel Container with Overflow Control */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWithGap}px)`,
                gap: `${cardGap}px`
              }}
            >
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={index}
                  name={item.name}
                  isAnonymous={item.isAnonymous}
                  testimonial={item.testimonial}
                  avatar={item.avatar}
                />
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.min(6, Math.ceil((testimonials.length - cardsPerView) / 1) + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(Math.min(index, testimonials.length - cardsPerView))}
                className={`w-2 h-2 rounded-full ${index === Math.min(currentIndex, testimonials.length - cardsPerView) ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;