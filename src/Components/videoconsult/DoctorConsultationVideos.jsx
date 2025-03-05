import React, { useState } from 'react';

const DoctorConsultationVideos = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: "#HelloDoctor Consult a doctor online from home",
      url: "https://www.youtube.com/embed/gaMrnhFILJc",
      description: "Mother and child consultation"
    },
    {
      id: 2,
      title: "#HelloDoctor Consult a doctor online from home",
      url: "https://www.youtube.com/embed/ufpWDgsG_rs",
      description: "Young woman with phone consultation"
    },
    {
      id: 3,
      title: "Video Consult with Top Doctors Online",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Doctor and patient video call"
    },
    {
      id: 4,
      title: "Specialist Video Consultation",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      description: "Doctor providing medical advice online"
    }
  ];
  
  const visibleCount = 3;
  
  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? videos.length - visibleCount : prev - 1));
  };
  
  const nextSlide = () => {
    setStartIndex((prev) => (prev === videos.length - visibleCount ? 0 : prev + 1));
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getVisibleVideos = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % videos.length;
      result.push(videos[index]);
    }
    return result;
  };

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Experience online doctor consultations
        </h2>
        
        <div className="relative hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleVideos().map((video) => (
              <div key={video.id} className="flex flex-col">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <iframe 
                    src={video.url} 
                    title={video.title} 
                    className="w-full h-48 rounded-lg" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div className="relative mb-4 rounded-lg overflow-hidden">
              <iframe 
                src={videos[mobileIndex].url} 
                title={videos[mobileIndex].title} 
                className="w-full h-56 rounded-lg" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {videos[mobileIndex].title}
            </h3>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevMobile}
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-500 rounded-full"
                  style={{ width: `${(mobileIndex + 1) / videos.length * 100}%` }}
                ></div>
              </div>
              <button 
                onClick={nextMobile}
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultationVideos;
