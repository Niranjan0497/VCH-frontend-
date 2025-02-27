
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageAssets } from "../../../assets/assests";


function ConsultationForm() {
  const location = useLocation();
  const { speciality, price } = location.state || { speciality: "General", price: "₹0" };
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const images = [
    { img: ImageAssets.verified_doctor, title: "Verified Doctor" },
    { img: ImageAssets.privacy_security, title: "Privacy & Security" },
    { img: ImageAssets.follow_up, title: "Free Follow-up" }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className="flex justify-center items-center min-h-screen w-screen 
                 bg-[url('https://wallpapercave.com/wp/wp2655106.jpg')] 
                 bg-cover bg-center px-4 sm:px-6 md:px-8"
    >
      <div className="bg-transparent-500 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row mx-auto">
        <div className="p-4 w-full">
          <button className="flex bg-blue-100 items-center text-blue-600 font-medium px-3 py-2 rounded-md" onClick={() => navigate('/  ')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Consult with a Doctor</h2>
          <div className="mt-4">
            <label className="block text-gray-700">Speciality</label>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md mt-1">
              <span className="font-medium">{speciality}</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded-md">{price}</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Patient name</label>
            <input type="text" placeholder="Enter patient name for prescriptions" className="w-full p-2 border border-gray-300 rounded-md mt-1" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Mobile number</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mt-1">
              <input type="text" placeholder="Enter mobile number" className="w-full p-2" />
            </div>
            <p className="text-sm text-gray-500 mt-1">A verification code will be sent to this number.</p>
          </div>
          <button className="w-full sm:w-1/2 bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600">Continue</button>
        </div>

        <div className="w-full flex flex-col items-center justify-center border-t lg:border-l lg:border-t-0 p-4">
          <div className="relative w-2/3 sm:w-1/2">
            <img src={images[current].img} alt="icon" className="w-full h-full object-cover" />
            <div className="absolute w-full text-center py-2">
              <b className="text-lg sm:text-xl">{images[current].title}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;

