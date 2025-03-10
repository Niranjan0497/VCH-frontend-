
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { motion } from "framer-motion";
import bg_img from "../../../assets/sign_in/bg_image.png";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Allow only numbers
      setFormData({ ...formData, phoneNumber: value.replace(/\D/g, "") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phoneNumber.length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.role === "user") {
      alert("OTP Sent to the Registered Email.");
      navigate("/otp", { state: formData });
    } else {
      navigate("/upload");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-blue-800 bg-cover bg-center px-6`}>
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        exit={{ scale: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
         className="bg-transparent shadow-2xl p-8 rounded-lg max-w-md w-full text-center"
      >
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <CiUser className="text-8xl text-amber-50 bg-slate-900 border-none rounded-full px-5 py-6" />
        </div>

        {/* Title */}
        <h2
          className="text-white text-3xl font-semibold mb-6 tracking-widest"
          style={{
            // fontFamily: "Teko",
            fontWeight: "800",
            textShadow: "1px 1px 2px #fff",
          }}
        >
           REGISTER
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute left-3 top-6 text-gray-200" />
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="peer w-full pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-white focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor="username"
              className={`absolute left-10 tracking-widest text-white text-sm transition-all ${
                formData.username
                  ? "top-2 text-sm"
                  : "top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              }`}
            >
              Username
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-6 text-gray-200" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="peer w-full pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-white focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor="email"
              className={`absolute left-10 tracking-widest text-white text-sm transition-all ${
                formData.email
                  ? "top-2 text-sm"
                  : "top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              }`}
            >
              Email ID
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-6 text-gray-200" />
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              maxLength="10"
              inputMode="numeric"
              pattern="[0-9]*"
              value={formData.phoneNumber}
              onChange={handleChange}
              onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} // Restrict input to numbers
              className="peer w-full pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-white focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor="phoneNumber"
              className={`absolute left-10 tracking-widest text-white text-sm transition-all ${
                formData.phoneNumber
                  ? "top-2 text-sm"
                  : "top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              }`}
            >
              Phone Number
            </label>
          </div>

          {/* Role Selection */}
          <div className="text-white text-md flex justify-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              User
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="expert"
                onChange={handleChange}
                className="accent-blue-500"
              />
              Expert
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition"
          >
            {formData.role === "user" ? "Submit" : "Next"}
          </button>
        </form>
        </motion.div>
      {/* </div> */}
    </div>
  );
}

export default Register;
