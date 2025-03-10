import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { LiaFilePrescriptionSolid } from 'react-icons/lia';
import { RiChatFollowUpFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
function Content() {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div>
            <div className="w-full overflow-hidden bg-[#F8E9E6] pt-14">
              <div className="max-w-6xl mx-auto p-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Left Side Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-2xl lg:text-4xl font-bold">Skip the travel!</h1>
                  <h1 className="text-2xl lg:text-4xl font-bold py-1">Take Online Doctor Consultation</h1>
                  <p className="text-lg lg:text-xl py-3">Private consultation + Audio call · Starts at just ₹199</p>
      
                  {/* Doctor Images */}
                  <div className="flex justify-center lg:justify-start mt-3">
                    <img className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="Doctor 1" />
                  {/* Button */}
                  <button onClick={() => handleNavigate("/expertdetails/Cardiologist")} className="mt-6 px-6 py-2 text-md lg:text-lg text-white font-semibold rounded-md bg-[#2DAA9E]">
                    Consult Now
                  </button>
                  
                  </div> {/* Closing div for flex justify-center lg:justify-start mt-3 */}
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
