import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";
import { MdStar, MdPayment } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExpertsProfile = () => {
  const { id } = useParams();
  const [expert, setexperts] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allDates = [
    { label: "Today", slots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"] },
    { label: "Tomorrow", slots: ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM"] },
    { label: "Wed, 5 Mar", slots: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"] },
      { label: "Thu, 6 Mar", slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"] },
      { label: "Fri, 7 Mar", slots: ["03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"] },
      { label: "Sat, 8 Mar", slots: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"] },
  ];
  const [selectedDate, setSelectedDate] = useState(allDates[0]);
  const visibleDates = allDates.slice(currentIndex, currentIndex + 3);

  const nextDates = () => {
    if (currentIndex + 3 < allDates.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevDates = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const tabs = ["info", "stories"];
 
  useEffect(() => {
    axios.get(`http://localhost:4000/experts/${id}`)
      .then((res) => setexperts(res.data))
      .catch((err) => console.log("Error fetching experts data:", err));
      console.log("experts", expert);
  }, [id]);

  if (!expert) {
    return <p className="text-center text-gray-500">expertss are not Available</p>;
  }


  const dummyStories = [
    {
      id: 1,
      name: "Verified Patient",
      visitReason: "Visited For Gynae Problems",
      review: "The way she approaches and responds, and explaining in details is great. Hospital hygiene is maintained well.",
      time: "a month ago"
    },
    {
      id: 2,
      name: "Amit (Verified)",
      visitReason: "Visited For Vaginal Infection Treatment",
      review: "experts was very helpful and provided a detailed explanation. Highly recommend.",
      time: "2 months ago"
    }
  ];

  
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-100">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* experts Details */}
        <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-lg bg-white">
          <div className="flex gap-4 items-start">
            <img src="https://via.placeholder.com/90" alt="experts" className="w-20 h-20 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{expert?.name || "No Name Available"}</h2>
              <p className="text-gray-600">{expert?.specialization || "No Specialization"}</p>
              <p className="text-gray-500">{expert?.experience} Years Experience</p>
              <div className="flex items-center text-green-600 font-semibold mt-1">
                <FaCheckCircle className="mr-1" /> Registration Verified
              </div>
              <p className="text-green-600 font-bold mt-1 flex items-center">
                <MdStar className="text-yellow-500" /> 
                
                {expert?.rating || 0}
              </p>
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

          {/* Tabs Section */}
          <div className="py-5">
            <div className="flex border-b text-gray-600">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-4 font-semibold text-sm ${activeTab === tab ? "border-blue-500 text-blue-600" : ""}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
             {/* Tab Content */}
            {activeTab === "info" && (
              <div>

                {showFullDescription ? expert?.description : `${expert?.location}`}
                <h3 className="text-lg font-semibold mt-4"></h3>
                <div className="flex justify-between items-start text-sm text-gray-700 mt-4 border-b pb-3">
                  {/* Clinic Name, Rating, Address */}
                  <div>
                    <p className="text-blue-600 font-bold">Prasad Infertility Solutions</p>
                    <div className="flex items-center mt-1">
                      <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-md flex items-center">
                        5.0 <FaStar className="ml-1 text-xs" /> <FaStar className="text-xs" /> 
                        <FaStar className="text-xs" /> <FaStar className="text-xs" /> <FaStar className="text-xs" />
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      MIG-303, Road Number 4, KPHB Colony,
                      <p>Landmark: Beside Global Edge School, Hyderabad</p>
                    </p>
                    <p className="text-blue-500 font-semibold mt-2 cursor-pointer">Get Directions</p>
                  </div>

                  {/* Timings */}
                  <div className="text-center">
                    <p className="font-bold">Mon - Sat</p>
                    <p className="text-gray-600">01:00 PM - 04:00 PM</p>
                  </div>

                  {/* Fees & Payment */}
                  <div className="text-right">
                    <p className="font-semibold sm:float-left md:float-left lg:float-left">₹700</p><br/>
                    <p className="flex items-center text-gray-600">
                      <MdPayment className="mr-1" /> Online Payment Available
                    </p>
                  </div>
                </div>

                <span className="text-purple-600 font-semibold mt-2 flex items-center">
                  <FaCheckCircle className="mr-1" /> Prime Verified details
                </span>
              </div>
            )}

            {activeTab === "stories" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Patient Stories</h3>
                {dummyStories.map((story) => (
                  <div key={story.id} className="border-b pb-4 mb-4">
                    <p className="font-bold">{story.visitReason}</p>
                    <p className="text-gray-500 text-sm mb-2">{story.name} - {story.time}</p>
                    <p className="text-gray-700">{story.review}</p>
                   </div>
                   ))}
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Booking Slots - Side on lg+, Below on sm, md */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-lg font-semibold text-center">Book Appointment</h2>

          <div className="flex items-center justify-between my-3">
            <ChevronLeft className="cursor-pointer" onClick={prevDates} />
            {visibleDates.map((date) => (
              <div key={date.label} onClick={() => setSelectedDate(date)}
                className={`text-center px-2 py-1 rounded-md cursor-pointer ${
                  selectedDate.label === date.label ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                }`}>
                <p className="text-sm font-medium">{date.label}</p>
                <p className="text-xs text-green-600">{date.slots.length} Slots Available</p>
              </div>
            ))}
            <ChevronRight className="cursor-pointer" onClick={nextDates} />
          </div>

          <p className="text-sm font-semibold text-gray-700">Available Slots</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {selectedDate.slots.map((slot) => (
              <button key={slot} className="border p-2 rounded-md text-sm text-center hover:bg-blue-100">{slot}</button>
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