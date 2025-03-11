import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Specialities() {
  const categories = [
    { title: "Finance", icon: "💰", link: "/expertdetails/Financial Planning" },
    { title: "Legal", icon: "⚖", link: "/expertdetails/Corporate Law" },
    { title: "Technology", icon: "🖥", link: "/expertdetails/IT Consulting" },
    { title: "Wellness", icon: "🩺", link: "/expertdetails/Cardiologist" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="specialities mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      <div className="flex flex-col items-center py-10 w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl mb-2">
          Explore Our Expert Services
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl text-lg mb-8">
          Get professional advice from certified experts in various fields.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center p-6 rounded-2xl cursor-pointer"
              onClick={() => handleNavigate(item.link)}
            >
              <motion.div
                className="w-28 h-28 sm:w-32 sm:h-32 bg-blue-100 flex items-center justify-center rounded-full text-6xl shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.div>
              <p className="mt-4 text-gray-800 font-semibold text-center text-base sm:text-lg">
                {item.title}
              </p>
              <span className="text-blue-600 mt-2 text-sm sm:text-base font-medium flex items-center gap-1 group">
                EXPLORE NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Specialities;