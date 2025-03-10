import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import DatePicker from "react-datepicker";
import { MapPin } from "react-feather";
import "react-datepicker/dist/react-datepicker.css";

const ExpertsProfile = () => {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");

  const availableSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"
  ];

  useEffect(() => {
    axios.get(`http://localhost:4000/experts/${id}`)
      .then((res) => setExpert(res.data))
      .catch((err) => console.log("Error fetching expert data:", err));

    // Retrieve previous selections if available
    const storedDate = sessionStorage.getItem("selectedDate");
    const storedSlot = sessionStorage.getItem("selectedSlot");

    if (storedDate) setSelectedDate(new Date(storedDate));
    if (storedSlot) setSelectedSlot(storedSlot);
  }, [id]);

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    sessionStorage.setItem("selectedDate", date.toISOString().split("T")[0]); // Store in sessionStorage
  };

  // Handle slot selection
  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
    sessionStorage.setItem("selectedSlot", slot); // Store slot in sessionStorage
  };

  if (!expert) {
    return <p className="text-center text-gray-500">Experts are not Available</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-lg bg-white">
          <div className="flex gap-4 items-start">
            <img src="https://via.placeholder.com/90" alt="expert" className="w-20 h-20 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{expert?.name || "No Name Available"}</h2>
              <p className="text-gray-600">{expert?.specialization || "No Specialization"}</p>
              <p className="text-gray-500">{expert?.experience} Years Experience</p>
              <div className="flex items-center text-green-600 font-semibold mt-1">
                <FaCheckCircle className="mr-1" /> Registration Verified
              </div>
              <p className="text-green-600 font-bold mt-1 flex items-center">
                <MdStar className="text-yellow-500" /> {expert?.rating || 0}
              </p>
               <span className="flex font-semibold text-gray-800 mt-1">
                                    <MapPin className="w-5 h-5 mr-1 text-gray-600" />
                                    {expert.location} • {expert.office}
                                  </span>
              <div>
                    
                    <div className="flex items-center mt-1">
                     
                    </div>
                    
                    <p className="text-blue-500 font-semibold mt-2 cursor-pointer">Get Directions</p>
                  </div>
              
              <p className="text-gray-700">
                {showFullDescription ? expert?.description : `${expert?.description?.substring(0, 100) || ""}...`}
                {expert?.description && expert.description.length > 100 && (
                  <button onClick={() => setShowFullDescription(!showFullDescription)} className="text-blue-600 ml-2">
                    {showFullDescription ? "Show Less" : "More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-lg font-semibold text-center">Book Appointment</h2>

          <div className="my-3 text-center">
            <p className="font-semibold text-gray-700">Select Date</p>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="border p-2 rounded-md w-full text-center mt-2"
            />
          </div>

          <p className="text-sm font-semibold text-gray-700 mt-4">Available Slots</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleSlotChange(slot)}
                className={`border p-2 rounded-md text-sm text-center hover:bg-blue-100 ${selectedSlot === slot ? "bg-blue-500 text-white" : ""}`}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <NavLink to={`/expertsbooking/${expert.id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center hover:bg-blue-700">
                <FaBolt className="mr-1" /> Book Appointment
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsProfile;
