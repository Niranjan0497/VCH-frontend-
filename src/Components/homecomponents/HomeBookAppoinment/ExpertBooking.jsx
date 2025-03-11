import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const Expertbooking = () => {
    const [experts, setExperts] = useState();
    const [mobileNumber, setMobileNumber] = useState("");
    const [isValidMobile, setIsValidMobile] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get date and time from URL parameters
    const queryParams = new URLSearchParams(location.search);
    const dateParam = queryParams.get('date');
    const timeParam = queryParams.get('time');
    
    // Format the date for display
    const formatAppointmentDate = (dateString) => {
        if (!dateString) return "Date not selected";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric', 
            year: 'numeric'
        });
    };

    // Validate mobile number (10 digits)
    const validateMobileNumber = (number) => {
        const regex = /^[0-9]{10}$/;
        return regex.test(number);
    };

    const handleMobileChange = (e) => {
        const value = e.target.value;
        setMobileNumber(value);
        setIsValidMobile(validateMobileNumber(value));
    };

    const handleBackToProfile = () => {
        navigate(`/experts/${id}`);
    };

    const handleChangeDateTime = () => {
        navigate(`/experts/${id}`);
    };

    const handleContinue = () => {
        if (isValidMobile) {
            // Handle booking submission logic here
            alert(`Booking confirmed for ${formatAppointmentDate(dateParam)} at ${timeParam}. OTP sent to ${mobileNumber}`);
            // You could navigate to a confirmation page or payment page
        }
    };

    useEffect(() => {
        axios
            .get(`http://localhost:4000/experts/${id}`)
            .then((res) => {
                setExperts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col lg:flex-row">
                {/* Left Section - Appointment Details */}
                <div className="lg:w-1/2 border-r pr-6 lg:pr-12 mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                        <button 
                            onClick={handleBackToProfile} 
                            className="text-blue-600 hover:text-blue-800 mr-2"
                        >
                            <FaArrowLeft />
                        </button>
                        <h2 className="text-lg font-semibold flex items-center">
                            🏥 In-clinic Appointment
                        </h2>
                    </div>
                    <hr />
                    <div className="mt-4 flex flex-col">
                        <div className="flex items-center mb-2">
                            <FaCalendarAlt className="text-blue-600 mr-2" />
                            <span className="text-sm text-gray-600">
                                <strong>On</strong> <span className="text-blue-600">
                                    {formatAppointmentDate(dateParam)}
                                </span>
                            </span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaClock className="text-blue-600 mr-2" />
                            <span className="text-sm text-gray-600">
                                <strong>At</strong> <span className="text-blue-600">
                                    {timeParam || "Time not selected"}
                                </span>
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={handleChangeDateTime} 
                        className="text-blue-500 text-sm py-1 px-2 rounded border border-blue-500 inline-block mt-2 hover:bg-blue-50"
                    >
                        Change Date & Time
                    </button>
                    <hr className="my-4" />

                    {/* Doctor Details */}
                    <div className="mt-4 flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Expert"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            {experts ? (
                                <>
                                    <h3 className="font-semibold">{experts.name}</h3>
                                    <p className="text-xs text-gray-600">
                                        {experts.specialization || experts.description?.substring(0, 50) + "..."}
                                    </p>
                                </>
                            ) : (
                                <p className="text-gray-500 text-sm">Loading expert details...</p>
                            )}
                        </div>
                    </div>

                    {/* Clinic Details */}
                    <div className="mt-4 flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Clinic Logo"
                            className="w-12 h-12 mr-4"
                        />
                        <div>
                            <h3 className="font-semibold">Prasad Infertility Solutions</h3>
                            <p className="text-xs text-gray-600">
                                {experts.location}
                            </p>
                            <div className="flex items-center text-blue-500 text-sm mt-1 cursor-pointer hover:underline">
                                <FaMapMarkerAlt className="mr-1" />
                                <span>Get Directions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Mobile Number Input */}
                <div className="lg:w-1/2 lg:pl-6">
                    <h2 className="text-lg font-semibold">Patient Details</h2>
                    
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Mobile Number*</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-gray-500">+91</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter 10 digit number"
                                value={mobileNumber}
                                onChange={handleMobileChange}
                                className={`w-full p-2 pl-12 border rounded ${
                                    mobileNumber && !isValidMobile 
                                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                                maxLength={10}
                            />
                        </div>
                        {mobileNumber && !isValidMobile && (
                            <p className="text-red-500 text-xs mt-1">
                                Please enter a valid 10-digit mobile number
                            </p>
                        )}
                        <p className="text-xs text-gray-600 mt-1">
                            You will receive an OTP shortly. We will send appointment-related 
                            communications on this number.
                        </p>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Full Name*</label>
                        <input
                            type="text"
                            placeholder="Enter patient's full name"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter email (optional)"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <p className="text-xs text-gray-600 mt-1">
                            We'll email your appointment details for reference
                        </p>
                    </div>

                    <div className="mt-6">
                        <button 
                            onClick={handleContinue}
                            className={`w-full py-2 rounded font-medium text-white ${
                                isValidMobile 
                                    ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
                                    : 'bg-gray-400 cursor-not-allowed'
                            }`}
                            disabled={!isValidMobile}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertbooking;