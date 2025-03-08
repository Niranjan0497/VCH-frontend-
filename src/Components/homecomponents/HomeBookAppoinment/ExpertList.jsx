import React, { useState } from "react";
import { MapPin, Phone } from "react-feather";
import { NavLink } from "react-router-dom";

const ExpertList = ({ experts = [], gender }) => {
  const [contactVisibility, setContactVisibility] = useState({});

  const toggleContact = (id) => {
    setContactVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter experts based on selected gender
  const filteredExperts = experts.filter(
    (expert) => !gender || expert.gender === gender
  );

  return (
    <div className="flex flex-col lg:flex-row mx-6">
      <div className="lg:w-full h-auto scrollbar-hide mb-4 lg:mb-0">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="flex flex-col p-4 mb-4 rounded-lg shadow-md cursor-pointer mt-5 border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex justify-between items-start">
                {/* Expert Profile */}
                <div className="flex">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-20 h-20 rounded-full border mr-4"
                  />
                  <div>
                    <NavLink to={`/oneexpert/${expert.id}`}>
                      <h2 className="text-xl font-semibold text-blue-900 hover:underline">
                        {expert.name}
                      </h2>
                    </NavLink>
                    <p className="text-gray-700">{expert.specialization}</p>
                    <p className="text-gray-500">{expert.experience} years experience</p>
                    <span className="flex font-semibold text-gray-800 mt-1">
                      <MapPin className="w-5 h-5 mr-1 text-gray-600" />
                      {expert.location} • {expert.office}
                    </span>
                  </div>
                </div>

                {/* Pricing & Rating */}
                <div className="ml-24 sm:ml-24 md:ml-20">
                  <p className="text-blue-600 font-medium">{expert.fee} Consultation fee</p>
                  <p className="text-green-600 font-bold">{expert.rating}</p>
                  <p className="text-blue-600 underline cursor-pointer">
                    {expert.reviews} Reviews
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row text-sm justify-between px-1 py-1 lg:relative lg:mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
                <NavLink to={`/oneexpert/${expert.category}/${expert.specialization}/${expert.id}`} className="w-full sm:w-auto">
                  <button className="bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center md:mb-2 md:ms-3 hover:bg-blue-700">
                    Book Consultation
                  </button>
                </NavLink>
                <button
                  className="flex items-center justify-center border border-blue-600 text-blue-600 w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-blue-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleContact(expert.id);
                  }}
                >
                  <Phone className="w-4 h-4 mr-1" /> Contact Office
                </button>
              </div>

              {/* Contact Info (Toggled) */}
              {contactVisibility[expert.id] && (
                <div className="mt-4 clear-both">
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="flex mt-4 text-gray-700 text-sm">📞 {expert.contact}</p>
                  <p className="text-xs text-gray-500">
                    By calling this number, you agree to the Terms & Conditions.
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg font-semibold">
            No experts found matching the filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpertList;
