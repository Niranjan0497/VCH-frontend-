import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";
import { MdStar, MdPayment, MdCalendarMonth } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExpertsProfile = () => {
  const { id } = useParams();
  const [expert, setexperts] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Calendar related states
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  


  // Generate time slots based on selected date
  const generateTimeSlots = (date) => {
    // You can modify this logic to fetch real availability from your backend
    const dayOfWeek = date.getDay();
    
    // Different slots for weekdays vs weekends
    if (dayOfWeek === 0) { // Sunday
      return ["Closed"];
    } else if (dayOfWeek === 6) { // Saturday
      return ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
    } else { // Weekdays
      return ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"];
    }
  };

  const [availableSlots, setAvailableSlots] = useState(generateTimeSlots(selectedDate));

  // Get days in month for calendar
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get days of week for calendar header
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  // Change month
  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  // Format date for display
  const formatDateLabel = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  // Select a date from calendar
  const handleDateSelect = (day) => {
    if (!day) return;
    
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    setShowCalendar(false);
    setAvailableSlots(generateTimeSlots(newDate));
    setSelectedSlot(null); // Reset selected slot when date changes
  };

  const tabs = ["info", "stories"];
 
  useEffect(() => {
    axios.get(`http://localhost:4000/experts/${id}`)
      .then((res) => setexperts(res.data))
      .catch((err) => console.log("Error fetching experts data:", err));
  }, [id]);

  if (!expert) {
    return <p className="text-center text-gray-500">Experts are not Available</p>;
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
      review: "Expert was very helpful and provided a detailed explanation. Highly recommend.",
      time: "2 months ago"
    }
  ];

  // Check if date is in the past
  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };

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
                  className={`pb-2 px-4 font-semibold text-sm ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : ""}`}>
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

          {/* Date Selection with Calendar */}
          <div className="mt-4 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Select Date</p>
            <div 
              onClick={() => setShowCalendar(!showCalendar)} 
              className="flex items-center justify-between border p-3 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <span>{formatDateLabel(selectedDate)}</span>
              <MdCalendarMonth className="text-blue-600" />
            </div>

            {/* Calendar Popup */}
            {showCalendar && (
              <div className="mt-2 bg-white border rounded-lg shadow-lg p-3 absolute z-10">
                <div className="flex justify-between mb-2">
                  <button onClick={() => changeMonth(-1)} className="text-blue-600">
                    <ChevronLeft />
                  </button>
                  <h3 className="font-medium">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button onClick={() => changeMonth(1)} className="text-blue-600">
                    <ChevronRight />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {/* Calendar header */}
                  {daysOfWeek.map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 p-1">
                      {day}
                    </div>
                  ))}

                  {/* Calendar days */}
                  {generateCalendarDays().map((day, index) => (
                    <div 
                      key={index}
                      onClick={() => day && !isPastDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) && handleDateSelect(day)}
                      className={`
                        text-center p-2 text-sm rounded-md
                        ${!day ? 'text-transparent cursor-default' : 'cursor-pointer'}
                        ${day && isPastDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) ? 
                          'text-gray-300 cursor-not-allowed' : ''}
                        ${day && selectedDate.getDate() === day && 
                          selectedDate.getMonth() === currentDate.getMonth() && 
                          selectedDate.getFullYear() === currentDate.getFullYear() ? 
                          'bg-blue-600 text-white' : ''}
                        ${day && isToday(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) && 
                          !(selectedDate.getDate() === day && 
                            selectedDate.getMonth() === currentDate.getMonth() && 
                            selectedDate.getFullYear() === currentDate.getFullYear()) ? 
                          'border border-blue-600 text-blue-600' : ''}
                        ${day && !isPastDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) &&
                          !(selectedDate.getDate() === day && 
                            selectedDate.getMonth() === currentDate.getMonth() && 
                            selectedDate.getFullYear() === currentDate.getFullYear()) &&
                          !isToday(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) ?
                          'hover:bg-blue-100' : ''}
                      `}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Time Slots Selection */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Available Slots for {formatDateLabel(selectedDate)}</p>
            
            {availableSlots.length === 0 || availableSlots[0] === "Closed" ? (
              <p className="text-red-500 text-center py-4">No slots available for this date</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {availableSlots.map((slot) => (
                  <button 
                    key={slot} 
                    onClick={() => setSelectedSlot(slot)}
                    className={`border p-2 rounded-md text-sm text-center transition-colors ${
                      selectedSlot === slot ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <NavLink to={selectedSlot ? `/expertsbooking/${expert.id}?date=${selectedDate.toISOString()}&time=${selectedSlot}` : "#"}>
              <button 
                className={`px-6 py-2 rounded-md flex items-center ${
                  selectedSlot ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedSlot}
              >
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