
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaBriefcaseMedical } from "react-icons/fa6";
import "../../../../src/index.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    role: "user",
    specialities: "",
    experience: "",
    gender: "",
    location: "",
    qualification: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "phoneNumber" ? value.replace(/\D/g, "") : value,
    }));
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
    <div className="min-h-screen  flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-transparent shadow-2xl p-8 rounded-lg max-w-md w-full"
      >
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <CiUser className="text-8xl text-amber-50 bg-slate-900 border-none rounded-full px-5 py-6" />
        </div>

        {/* Dynamic Heading */}
        <h2
          className="text-black text-2xl uppercase font-semibold mb-6 tracking-widest text-center"
          style={{ fontWeight: "800", textShadow: "1px 1px 2px #fff" }}
        >
          {formData.role === "user"
            ? "User Registration"
            : "Expert Registration"}
        </h2>

        {/* Role Selection */}
        <div className="text-black text-md flex justify-center gap-4 mb-4">
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

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Common Fields */}
          <InputField
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            icon={<FaUser />}
            label="Username"
          />
          <InputField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<FaEnvelope />}
            label="Email ID"
          />
          <InputField
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            maxLength="10"
            value={formData.phoneNumber}
            onChange={handleChange}
            icon={<FaPhone />}
            label="Phone Number"
          />
          <div className="relative text-black">
            <label className="block text-sm font-semibold tracking-widest mb-2 mx-6">
              Gender
            </label>
            <div className="flex items-center gap-4 mx-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Other
              </label>
            </div>
          </div>

          {/* Expert Fields */}

          {formData.role === "expert" && (
            <>
              <InputField
                id="specialities"
                name="specialities"
                value={formData.specialities}
                onChange={handleChange}
                icon={<FaBriefcase />}
                label="Specialities"
              />
              <InputField
                id="experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                icon={<FaBriefcaseMedical />}
                label="Experience (Years)"
              />

              <InputField
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                icon={<FaMapMarkerAlt />}
                label="Location"
              />
              <InputField
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                icon={<FaGraduationCap />}
                label="Qualification"
              />
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-700 text-black font-semibold shadow-md hover:bg-blue-800 transition"
          >
            {formData.role === "user" ? "Submit" : "Next"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// InputField Component
const InputField = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  icon,
  label,
}) => {
  return (
    <div className="relative">
      <span className="absolute left-3 top-6 text-gray-800">{icon}</span>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        className="peer w-full pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-black focus:ring-0 focus:outline-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-10 tracking-widest text-black text-sm transition-all ${
          value
            ? "top-2 text-sm"
            : "top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Register;
