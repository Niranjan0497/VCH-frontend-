import React from 'react';

const Step = ({ description }) => {
  return (
    <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105">
      <p className="text-gray-700 text-base font-medium ">{description}</p>
    </div>
  );
};

function HowitWorks() {
  return (
    <div className="max-w-6xl overflow-hidden mx-auto p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-10 text-opacity-75 ">How it Works</h2>
        <div className="flex flex-wrap justify-center gap-6 ">
          <Step description="Select a specialty or symptom"  />
          <Step description="Audio/video call with a verified doctor" />
          <Step description="Get a digital prescription & a free follow-up" />
        </div>
      </div>
    </div>
  );
}

export default HowitWorks;
