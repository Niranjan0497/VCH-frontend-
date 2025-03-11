import { motion } from "framer-motion";
import { Lightbulb, Zap, Move, MousePointerClick } from "lucide-react";
import img from "../../assets/BookappointmentImages/LifestyleMedicine1.avif";

export default function Howitswork() {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-gray-100  relative">
      <h1 className="text-2xl sm:text-3xl font-serif italic">How DUMMY works</h1>
      <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-lg">
        No complicated user settings. No app. No Bluetooth. Simply press and restore.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 max-w-6xl items-center">
        <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-right items-center md:items-end">
          <div className="flex flex-col items-center text-center p-3">
            <Move className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-1" />
            <h3 className="text-base sm:text-lg font-semibold">Feature 1</h3>
            <p className="text-xs sm:text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <MousePointerClick className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-1" />
            <h3 className="text-base sm:text-lg font-semibold">Feature 2</h3>
            <p className="text-xs sm:text-sm text-gray-600">Simple one-press activation.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.img 
            src={img} 
            alt="Dummy Product" 
            className="w-40 sm:w-52 md:w-64 lg:w-80 aspect-square rounded-full shadow-lg shadow-black cursor-pointer object-cover"
          />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left items-center md:items-start">
          <div className="flex flex-col items-center text-center p-3">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-1" />
            <h3 className="text-base sm:text-lg font-semibold">Feature 3</h3>
            <p className="text-xs sm:text-sm text-gray-600">Optimized for every user.</p>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-1" />
            <h3 className="text-base sm:text-lg font-semibold">Feature 4</h3>
            <p className="text-xs sm:text-sm text-gray-600">Smart stimulation technology.</p>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <button className="text-white w-[140px] sm:w-[160px] rounded-md h-[50px] font-bold bg-gray-800 transition duration-200">
          Buy now
        </button>
      </div>
    </div>
  );
}