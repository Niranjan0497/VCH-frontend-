
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageAssets } from "../../../assets/assests";


function Specialities() {
  const specialities =  [
        { 
          image: ImageAssets.periods_pregnancy, 
          title: "Period doubts or Pregnancy",
          speciality: "Gynaecology",
          price: "₹499"
        },
        { 
          image: ImageAssets.skin_issues,
          title: "Acne, pimple or skin issues",
          speciality: "Dermatology",
          price: "₹399"
        },
        { 
          image: ImageAssets.bed_issue,
          title: "Performance issues in bed",
          speciality: "Sexology",
          price: "₹599"
        },
        { 
          image: ImageAssets.cold_cough,
          title: "Cold, cough or fever",
          speciality: "General Physician",
          price: "₹299"
        },
        { 
          image: ImageAssets.notFeeling_well,
          title: "Child not feeling well",
          speciality: "Pediatrics",
          price: "₹449"
        },
        { 
          image: ImageAssets.depression_anxiety,
          title: "Depression or anxiety",
          speciality: "Psychiatry",
          price: "₹699"
        },
      ];
  const navigate = useNavigate();

  const handleNavigate = (speciality, price) => {
    navigate("/consultation", { state: { speciality, price } });
  };

  return (
    <div className="specialities mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-6 bg-white w-full">
        <h2 className="text-2xl font-semibold text-gray-900 text-center sm:text-3xl">
          Consult top doctors online for any health concern
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl">
          Private online consultations with verified doctors in all specialties
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 w-full">
          {specialities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center p-4 rounded-xl cursor-pointer"
              onClick={() => handleNavigate(item.speciality, item.price)}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-blue-100 flex items-center justify-center rounded-full">
                <img src={item.image} alt="Speciality" className="w-full h-full rounded-full" />
              </div>
              <p className="mt-3 text-gray-800 font-medium text-center text-sm sm:text-base">
                {item.title}
              </p>
              <span className="text-blue-500 mt-2 text-xs sm:text-sm font-semibold">
                CONSULT NOW
              </span>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 text-sm sm:text-base"
        >
          View All Specialities
        </motion.button>
      </div>
    </div>
  );
}

export default Specialities;

