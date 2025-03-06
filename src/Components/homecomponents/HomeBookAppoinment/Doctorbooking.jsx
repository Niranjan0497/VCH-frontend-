// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Doctorbooking = () => {
//     const [doctor, setDoctor] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:4000/doctor/${id}`)
//             .then((res) => {
//                 setDoctor(res.data);  // Assuming API returns an object
//                 console.log(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [id]);

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 h-[200px]">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 flex w-[60%] h-[350px] ">
//                 {/* Left Section - Appointment Details */}
//                 <div className="w-1/2 border-r pr-6">
//                     <h2 className="text-lg font-semibold flex items-center">
//                         🏥 In-clinic Appointment
//                     </h2>
//                     <hr/>
//                     <div className="mt-4 flex justify-between items-center">
//                         <span className="text-sm text-gray-600">
//                             ⏰ <strong>On</strong> <span className="text-blue-600">Mar 03, 2025</span>
//                         </span>
//                         <span className="text-sm text-gray-600">
//                             ⏳ <strong>At</strong> <span className="text-blue-600">3:30 PM</span>
//                         </span>
//                     </div>
//                     <a href="#" className="text-blue-500 text-sm underline">
//                         Change Date & Time
//                     </a>
//                     <hr/>

//                     {/* Doctor Details */}
//                     <div className="mt-4 flex items-center">
//                         <img
//                             src="https://via.placeholder.com/50"
//                             alt="Doctor"
//                             className="w-12 h-12 rounded-full mr-4"
//                         />
//                         <div>
//                             {doctor ? (
//                                 <>
//                                     <h3 className="font-semibold">{doctor.name}</h3>
//                                     <p className="text-xs text-gray-600">{doctor.description}</p>
//                                 </>
//                             ) : (
//                                 <p className="text-gray-500 text-sm">Loading doctor details...</p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Clinic Details */}
//                     <div className="mt-4 flex items-center">
//                         <img
//                             src="https://via.placeholder.com/50"
//                             alt="Clinic Logo"
//                             className="w-12 h-12 mr-4"
//                         />
//                         <div>
//                             <h3 className="font-semibold">Prasad Infertility Solutions</h3>
//                             <p className="text-xs text-gray-600">
//                                 MIG-303, Road Number 4, KPHB Colony, Hyderabad
//                             </p>
//                             <a href="#" className="text-blue-500 text-sm underline">
//                                 Get Directions
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Mobile Number Input */}
//                 <div className="w-1/2 pl-6">
//                     <h2 className="text-lg font-semibold">Enter your mobile number</h2>
//                     <label className="block mt-4 text-sm font-medium">Mobile*</label>
//                     <input
//                         type="text"
//                         placeholder="Mobile Number"
//                         className="w-full p-2 border border-gray-300 rounded mt-1"
//                     />
//                     <p className="text-xs text-gray-600 mt-1">
//                         You will receive an OTP shortly. We will send appointment-related communications on this number.
//                     </p>
//                     <button className="w-full bg-gray-400 text-white py-2 mt-4 rounded cursor-not-allowed">
//                         Continue
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Doctorbooking;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctorbooking = () => {
    const [doctor, setDoctor] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/doctor/${id}`)
            .then((res) => {
                setDoctor(res.data); // Assuming API returns an object
                console.log(res.data);
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
                    <h2 className="text-lg font-semibold flex items-center">
                        🏥 In-clinic Appointment
                    </h2>
                    <hr />
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                            ⏰ <strong>On</strong> <span className="text-blue-600">Mar 03, 2025</span>
                        </span>
                        <span className="text-sm text-gray-600">
                            ⏳ <strong>At</strong> <span className="text-blue-600">3:30 PM</span>
                        </span>
                    </div>
                    <a href="#" className="text-blue-500 text-sm underline">
                        Change Date & Time
                    </a>
                    <hr />

                    {/* Doctor Details */}
                    <div className="mt-4 flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Doctor"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            {doctor ? (
                                <>
                                    <h3 className="font-semibold">{doctor.name}</h3>
                                    <p className="text-xs text-gray-600">{doctor.description}</p>
                                </>
                            ) : (
                                <p className="text-gray-500 text-sm">Loading doctor details...</p>
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
                                MIG-303, Road Number 4, KPHB Colony, Hyderabad
                            </p>
                            <a href="#" className="text-blue-500 text-sm underline">
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Mobile Number Input */}
                <div className="lg:w-1/2 pl-6">
                    <h2 className="text-lg font-semibold">Enter your mobile number</h2>
                    <label className="block mt-4 text-sm font-medium">Mobile*</label>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                        You will receive an OTP shortly. We will send appointment-related communications on this number.
                    </p>
                    <button className="w-full bg-gray-400 text-white py-2 mt-4 rounded cursor-not-allowed">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Doctorbooking;