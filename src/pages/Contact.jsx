import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    if (!formData.name) {
      toast.error("Name is required!", { position: "top-right" });
      return false;
    }
    if (!formData.email) {
      toast.error("Email is required!", { position: "top-right" });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format!", { position: "top-right" });
      return false;
    }
    if (!formData.message) {
      toast.error("Message is required!", { position: "top-right" });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
      });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/05/04/69/19/240_F_504691993_ScrJx98EDBQECBCIXAHLFgTd8w0TxX7F.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-6 mt-12">
        {/* Left Side: Illustration and Text */}
        <div className="md:w-1/2 flex flex-col items-start justify-center text-left p-6">
          {/* Image moved to the left */}
          <img
            src="contactilluminations.png" // Replace with actual path
            alt="Customer Support Illustration"
            className="mb-4 w-full"
          />
          <h1 className="text-6xl md:text-5xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 w-md">
            Expert guidance and insightful strategies pave the way for
            meaningful solutions and lasting success.
          </p>
        </div>

        {/* Right Side: Contact Form with Blue Header */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md ml-auto overflow-hidden mr-9">
          {/* Blue Header */}
          <div className="bg-gray-200 text-white text-center py-3">
            <h2 className="text-2xl font-bold text-black">Make An Appointment</h2>
          </div>
          {/* Form Section */}
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-white/50"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-white/50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toastify container */}
    </div>
  );
};

export default Contact;