import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { LiaFilePrescriptionSolid } from 'react-icons/lia';
import { RiChatFollowUpFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


function Content() {
  const handleNavigate = useNavigate();
  return (
    <div>
            <div className="w-full overflow-hidden bg-[#F8E9E6] pt-14">
              <div className="max-w-6xl mx-auto p-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Left Side Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-2xl lg:text-4xl font-bold">Skip the travel!</h1>
                  <h1 className="text-2xl lg:text-4xl font-bold py-1">Take Online Expert Consultation</h1>
                  <p className="text-lg lg:text-xl py-3">Private consultation + Audio call · Starts at just ₹199</p>
      
                  {/* Doctor Images */}
                  <div className="flex justify-center lg:justify-start mt-3">
                    <img className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="Doctor 1" />
                    <img className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white ml-[-8px]" src="https://www.freestock.com/450/freestock_41742406.jpg" alt="Doctor 2" />
                    <img className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white ml-[-8px]" src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Doctor 3" />
                    <h5 className="text-sm lg:text-md mt-2 ml-2"> +120 Experts are online </h5>
                  </div>
      
                  {/* Button */}
                  <button className="mt-6 px-6 py-2 text-md lg:text-lg text-white font-semibold rounded-md bg-[#2DAA9E]">
                    <Link to="/expertdetails/Dentist" className="text-white">Consult Now</Link>
                    

                  </button>
      
                  {/* Features */}
                  <div className="flex flex-wrap lg:flex-row items-center gap-4 mt-6">
                    <p className="flex items-center gap-2">
                      <RiVerifiedBadgeFill /> Verified Doctors
                    </p>
                    <p className="flex items-center gap-2">
                      <LiaFilePrescriptionSolid /> Digital Prescription
                    </p>
                    <p className="flex items-center gap-2">
                      <RiChatFollowUpFill /> Free Followup
                    </p>
                  </div>
                </div>
      
                {/* Right Side Image */}
                <div className="flex-1 hidden lg:block">
                  <figure className="h-[318px] w-full lg:w-[667px]">
                    <img
                      src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png"
                      alt="Doctor Consultation"
                      className="h-full w-full object-contain"
                    />
                  </figure>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Content
