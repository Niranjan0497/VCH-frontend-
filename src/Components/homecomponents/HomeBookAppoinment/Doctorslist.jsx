import React, { useState } from "react";
import { MapPin, Phone } from "react-feather";
import { NavLink } from "react-router-dom";

const DoctorList = ({ doctors = [], gender }) => {
  const [contactVisibility, setContactVisibility] = useState({});

  const toggleContact = (id) => setContactVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  const filteredDoctors = doctors.filter((doctor) => !gender || doctor.gender === gender);

  return (
    <div className="flex flex-col lg:flex-row mx-6">
      {/* Doctor List Section */}
      <div className="lg:w-full h-auto scrollbar-hide mb-4 lg:mb-0">

        <div className="">

        
        {filteredDoctors.length ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col p-4 mb-4 rounded-lg shadow-md cursor-pointer mt-5" onClick={() => setSelectedLocation(doctor.mapLocation)}>

            <div className="md:flex justify-between  ">
              
              <div>
              <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full border float-left mr-4"/>
                <NavLink to={`/onedoctor/${doctor.id}`}>
                  <h2 className="text-xl font-semibold text-blue-900">{doctor.name}</h2>
                </NavLink>
                <p className="text-gray-700">{doctor.specialization}</p>
                {/* <NavLink to={`/onedoctor/${doctor.id}`}>
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 float-right">Book Clinic Visit</button>
                </NavLink> */}
                <p className="text-gray-500">{doctor.experience} experience</p>

                <span className="flex font-semibold text-gray-800">
                  <MapPin className="w-6 h-6 mr-1 text-gray-600" /> {doctor.location} • {doctor.clinic}
                </span>
                {/* <button className="flex border border-blue-600 text-blue-600 px-3 py-2 rounded-lg float-right" onClick={(e) => { e.stopPropagation(); toggleContact(doctor.id);}}>
                  <Phone className="w-4 h-4 mr-2 relative top-1" /> Contact Clinic
                </button> */}
                <div className=" ml-24 sm:ml-24 md:ml-20">
                <p className="text-blue-600 font-medium sm:ms-[7%] md:ms-[7%] lg:ms-[7%]">{doctor.fee} Consultation fee</p>
                <p className="text-green-600 font-bold sm:ms-[7%] md:ms-[7%] lg:ms-[7%]">{doctor.rating}</p>
                <p className="text-blue-600 underline cursor-pointer sm:ms-[7%] md:ms-[7%] lg:ms-[7%]">{doctor.reviews}</p>
                </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row text-sm justify-between px-1 py-1 sm:block lg:relative lg:mt-24 space-y-2 sm:space-y-0 sm:space-x-2">
  <NavLink to={`/onedoctor/${doctor.id}`} className="w-full sm:w-auto">
    <button className="bg-blue-600 text-white w-full sm:w-auto px-3 py-2 rounded-lg text-center md:mb-2 md:ms-3">
      Book Clinic Visit
    </button>
  </NavLink>
  <button 
    className="flex items-center justify-center border border-blue-600 text-blue-600 w-full sm:w-auto px-3 py-2 rounded-lg" 
    onClick={(e) => { e.stopPropagation(); toggleContact(doctor.id); }}
  >
    <Phone className="w-4 h-4 mr-1" /> Contact Clinic
  </button>
</div>

            </div>
              {contactVisibility[doctor.id] && (
                <div className="mt-4 clear-both">
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="flex mt-4 text-gray-700 text-sm">📞 {doctor.contact}</p>
                  <p className="text-xs text-gray-500">By calling this number, you agree to the Terms & Conditions. If you could not connect with the center, please write to support@practo.com</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No doctors found matching the filters.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default DoctorList;