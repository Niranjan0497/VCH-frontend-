import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin } from "react-feather";
const ExpertBooking = () => {
    const [expert, setExpert] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/experts/${id}`)
            .then((res) => setExpert(res.data))
            .catch((err) => console.log(err));

        // Retrieve selected date and slot from sessionStorage
        const storedDate = sessionStorage.getItem("selectedDate") || "Not Selected";
        const storedSlot = sessionStorage.getItem("selectedSlot") || "Not Selected";

        setSelectedDate(storedDate);
        setSelectedSlot(storedSlot);
    }, [id]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col lg:flex-row gap-8">
                
                {/* Left Section - Expert & Appointment Info */}
                <div className="lg:w-1/2 border-r border-gray-200 pr-6 lg:pr-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        🏥 In-clinic Appointment
                    </h2>
                    <hr className="mb-4" />
                    
                    <div className="space-y-3">
                        <p className="text-gray-700 font-medium flex items-center">
                            📅 <span className="ml-2 text-blue-600 font-semibold">{selectedDate}</span>
                        </p>
                        <p className="text-gray-700 font-medium flex items-center">
                            ⏳ <span className="ml-2 text-blue-600 font-semibold">{selectedSlot}</span>
                        </p>
                        <button
                            onClick={() => navigate(`/oneexpert/${id}`)}
                            className="text-blue-500 text-sm underline hover:text-blue-700 transition duration-200"
                        >
                            Change Date & Time
                        </button>
                        
                    </div>
                    <div className="flex items-center mt-4">
                        <MapPin className="w-5 h-5 mr-1 text-gray-600" />
                        <span className="text-gray-700">{expert?.location}</span>
                    </div>
                    
                    <hr className="mt-4 mb-4" />


                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/60" alt="Expert" className="w-14 h-14 rounded-full shadow-md" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{expert?.name}</h3>
                            <p className="text-sm text-gray-600">{expert?.specialization}</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Booking Form */}
                <div className="lg:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">📞 Enter your mobile number</h2>
                    <input
                        type="text"
                        placeholder="Enter your mobile number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200"
                    >
                        Continue ➝
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ExpertBooking;