import React, { useState } from "react";
import { MapPin, Phone } from "react-feather";
import { NavLink } from "react-router-dom";

const DoctorList = ({ doctors = [], gender }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [contactVisibility, setContactVisibility] = useState({});
  
  const toggleContact = (id) => setContactVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  const filteredDoctors = doctors.filter((doctor) => !gender || doctor.gender === gender);
  
  return (
    <div className="flex mx-6">
      <div className="w-2/3 h-[700px] overflow-y-scroll scrollbar-hide">
        {filteredDoctors.length ? filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedLocation(doctor.mapLocation)}>
            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full border float-left mr-4" />
            <div>
            <NavLink to={`/onedoctor/${doctor.id}`}>
              <h2 className="text-xl font-semibold text-blue-900">{doctor.name}</h2>
              </NavLink>
              <p className="text-gray-700">{doctor.specialization}</p>
              <NavLink to={`/onedoctor/${doctor.id}`}>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 float-right">Book Clinic Visit</button>
              </NavLink>
              <p className="text-gray-500">{doctor.experience} experience</p>
              <p className="font-semibold flex items-center text-gray-800"><MapPin className="w-4 h-4 mr-1 text-gray-600" /> {doctor.location} • {doctor.clinic}</p>
              <button className="flex border border-blue-600 text-blue-600 px-3 py-2 rounded-lg float-right" onClick={(e) => { e.stopPropagation(); toggleContact(doctor.id); }}><Phone className="w-4 h-4 mr-2 relative top-1" /> Contact Clinic</button>
              <p className="text-blue-600 font-medium ms-[11%]">{doctor.fee} Consultation fee</p>
              <p className="text-green-600 font-bold ms-[11%]">{doctor.rating}</p>
              <p className="text-blue-600 underline cursor-pointer ms-[11%]">{doctor.reviews}</p>
            </div>
            {contactVisibility[doctor.id] && (
              <div className="mt-4 clear-both">
                <hr className="my-2 border-t border-gray-300" />
                <p className="flex mt-4 text-gray-700 text-sm">📞{doctor.contact}</p>
                <p className="text-xs text-gray-500">By calling this number, you agree to the Terms & Conditions. If you could not connect with the center, please write to support@practo.com</p>
              </div>
            )}
          </div>
         
        )) : <p className="text-center text-gray-700">No doctors found matching the filters.</p>}
      </div>
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-2">Location</h2>
        <iframe title="Doctor Location" className="w-full h-[500px] rounded-lg shadow-md" src={`https://www.google.com/maps?q=${encodeURIComponent(selectedLocation)}&output=embed`} />
      </div>
    </div>
  );
};

export default DoctorList;
