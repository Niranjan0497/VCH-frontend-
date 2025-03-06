import React, { useState, useEffect } from "react";

const doctors = [
    { name: "Dr. Hitesh Viradiya", specialty: "Dermatologist, Cosmetologist", experience: "9 years", consults: "51349 consults done", imageUrl: "https://www.practostatic.com/images1-fabric/doctor/589655/dr-hitesh-viradiya-610d46ab0cf9b.jpg" },
    { name: "Dr. Arpita", specialty: "Dermatologist", experience: "11 years", consults: "34829 consults done", imageUrl: "https://www.practostatic.com/images1-fabric/doctor/679165/dr-arpita-6791ca6fde5cd.jpg" },
    { name: "Dr. Tariq Ahmad Bhat", specialty: "Sexologist, Psychiatrist", experience: "12 years", consults: "32002 consults done", imageUrl: "https://www.practostatic.com/images1-fabric/doctor/915397/dr-tariq-ahmad-bhat-621b6a0c5ab20.jpg" },
    { name: "Dr. Zoya Rasheed", specialty: "Cosmetic/Aesthetic Dentist", experience: "11 years", consults: "15837 consults done", imageUrl: "https://www.practostatic.com/images1-fabric/doctor/1028425/dr-zoya-rasheed-642282965fa4a.jpg" },
    { name: "Dr. Kamal Kishore Verma", specialty: "Sexologist, Psychiatrist", experience: "16 years", consults: "98840 consults done", imageUrl: "https://www.practostatic.com/images1-fabric/doctor/647391/dr-kamal-kishore-verma-5d69f93f40699.jpg" },
    { name: "Dr. Aditi Sharma", specialty: "Gynecologist", experience: "15 years", consults: "50492 consults done", imageUrl: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?semt=ais_hybrid" },
    { name: "Dr. Rohit Mehra", specialty: "Orthopedic Surgeon", experience: "14 years", consults: "39728 consults done", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" },
    { name: "Dr. Sneha Kapoor", specialty: "Pediatrician", experience: "10 years", consults: "28935 consults done", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQIduniCzNle3gI5cFU-4b-GVG5rys8c8Wd3gZgB3fWUshUKfITSdnukOrFsHQtOufFU&usqp=CAU" }
];

const DoctorCard = ({ name, specialty, experience, consults, imageUrl }) => {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-3 w-[280px] hover:shadow-lg transition-shadow duration-300">
            <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full object-cover" />
            <div className="ml-3">
                <h2 className="text-sm font-semibold">{name}</h2>
                <p className="text-xs text-gray-500">{specialty}</p>
                <p className="text-[10px] text-gray-600">{experience}</p>
                <p className="text-[10px] text-gray-600">{consults}</p>
                <button className="mt-1 py-1 px-2 bg-[#FFB433] text-black text-xs rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300">Book Now</button>
            </div>
        </div>
    );
};

const Doctors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [doctorsPerPage, setDoctorsPerPage] = useState(4);

    useEffect(() => {
        const updateDoctorsPerPage = () => {
            if (window.innerWidth >= 1024) setDoctorsPerPage(4);
            else if (window.innerWidth >= 768) setDoctorsPerPage(3);
            else if (window.innerWidth >= 640) setDoctorsPerPage(2);
            else setDoctorsPerPage(1);
        };

        updateDoctorsPerPage();
        window.addEventListener("resize", updateDoctorsPerPage);
        return () => window.removeEventListener("resize", updateDoctorsPerPage);
    }, []);

    const totalSlides = Math.ceil(doctors.length / doctorsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div className="max-w-6xl overflow-hidden mx-auto p-4">
            <h1 className="text-3xl  text-gray-900 font-bold text-left mb-4 text-opacity-75">Our Doctors</h1>
            <div className="max-w-6xl mx-auto p-4 relative">
                {/* Slider Container */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="flex-shrink-0 flex w-full justify-center gap-3">
                                {doctors
                                    .slice(slideIndex * doctorsPerPage, (slideIndex + 1) * doctorsPerPage)
                                    .map((doctor, index) => (
                                        <DoctorCard key={index} {...doctor} />
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons - Closer to Cards */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                    ▶
                </button>
            </div>
        </div>

    );
};

export default Doctors;