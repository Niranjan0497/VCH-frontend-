

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import bg_img from '../../../assets/sign_in/bg_image.png'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
<div className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-blue-800  bg-cover bg-center px-6`}>

      
      {/* Framer Motion Animation for Zoom In & Out */}
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        exit={{ scale: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-transparent shadow-2xl p-8 rounded-lg max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-4">
          <CiUser className='text-8xl text-amber-50 bg-slate-900 border border-none rounded-full px-5 py-6' />
        </div>
        <h2 className="text-white text-3xl font-bold mb-6 tracking-widest"
          style={{
            // "font-family": "Teko",
            "font-optical-sizing": "auto",
            "font-weight": "900",
            "font-style": "normal",
            "text-shadow": "1px 1px 1px #ffff"
          }}>
          LOG&nbsp;IN
        </h2>
        
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-5 text-white transition-all peer-focus:top-2" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="peer w-full pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-white focus:ring-0 focus:outline-none"
            />
            <label htmlFor="email" className={`absolute left-10 tracking-widest text-white text-sm transition-all ${formData.email ? 'top-2 text-sm' : 'top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:text-sm'}`}>
              Email ID
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-5 text-white transition-all peer-focus:top-2" />
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="peer w-full  pl-10 pr-4 pt-6 pb-2 border-b border-gray-300 bg-transparent text-white focus:ring-0 focus:outline-none"
            />
            <label htmlFor="password" className={`absolute tracking-widest left-10 text-white text-sm transition-all ${formData.password ? 'top-2 text-sm' : 'top-5 text-base peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm'}`}>
              Password
            </label>
          </div>

          <div className="flex items-center justify-between text-black text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300" />
              <span className="ml-2 tracking-wider font-semibold">Remember me</span>
            </label>
            <Link to="#" className="hover:underline italic font-semibold text-sm tracking-wide">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full tracking-wide py-2 rounded-md bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition"
          >
            SIGN&nbsp;&nbsp;IN
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white font-semibold">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold  text-gray-900 hover:text-blue-200">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;

