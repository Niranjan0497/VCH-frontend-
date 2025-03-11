
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { FaBars, FaTimes, FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import vch_logo from "../assets/vch_logo.png";

import {  FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {FaChevronLeft,FaChevronDown } from "react-icons/fa";


import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); 
  const [profileData, setProfileData] = useState({
    name: '',
    email: ''
  });

  const mobileMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const profileTriggerRef = useRef(null);

  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data:', profileData);
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  // Navbar bg-change
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // Improved click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      // For mobile menu
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.menu-trigger')
      ) {
        setIsMenuOpen(false);
      }

      // For profile dropdown
      if (
        isProfileOpen &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target) &&
        !profileTriggerRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isProfileOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Toggle parent dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setOpenNestedDropdown(null); // Close nested dropdowns when parent dropdown is toggled
  };

  // Toggle nested dropdown
  const toggleNestedDropdown = (dropdown) => {
    setOpenNestedDropdown(openNestedDropdown === dropdown ? null : dropdown);
  };

  return (

    <nav className={`${sticky ? 'bg-slate-900' : 'bg-slate-900'} shadow-md sticky top-0 left-0 right-0 z-50 py-2`}>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and main links */}
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
            <Link to="/" className="flex-shrink-0">
              <img
                src={vch_logo}
                alt="VCH"
                className="h-16 sm:h-14 md:h-20"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {/* Services Dropdown */}

              <div className="relative group">
                <button className="flex items-center text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-emerald-400">
                  Find Experts <FaChevronDown className="ml-1 h-3 w-3" />

                </button>
                <div className="flex dropdown-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-0 mt-2 w-130 bg-white rounded-md shadow-lg py-2 z-20">
                  {/* Finance Link with Nested Dropdown */}
                  <div className="relative group/finance px-4 py-2">
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 rounded group-hover/finance:bg-gray-100 cursor-pointer">
                      <span className='px-4 py-1'>Finance</span>
                      <FaChevronDown />
                    </div>
                    <div className="absolute down-full top-0 w-56 mt-10 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/finance:opacity-100 group-hover/finance:visible transition-all duration-200">
                      <Link to="/services/finance/planning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Financial Planning
                      </Link>
                      <Link to="/services/finance/tax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Tax Advisory
                      </Link>
                      <Link to="/services/finance/wealth" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Wealth Management
                      </Link>
                      <Link to="/services/finance/retirement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Retirement Planning
                      </Link>
                    </div>
                  </div>

                  {/* Legal Link with Nested Dropdown */}
                  <div className="relative group/legal px-4 py-2">
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 rounded group-hover/legal:bg-gray-100 cursor-pointer">
                      <span className='px-4 py-1'>Legal</span>
                      <FaChevronDown />
                    </div>
                    <div className="absolute down-full top-0 w-56 mt-10 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/legal:opacity-100 group-hover/legal:visible transition-all duration-200">
                      <Link to="/services/legal/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Corporate Law
                      </Link>
                      <Link to="/services/legal/estate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Estate Planning
                      </Link>
                      <Link to="/services/legal/intellectual" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Intellectual Property
                      </Link>
                      <Link to="/services/legal/litigation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Litigation
                      </Link>
                    </div>
                  </div>

                  {/* Technology Link with Nested Dropdown */}
                  <div className="relative group/technology px-4 py-2">
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 rounded group-hover/technology:bg-gray-100 cursor-pointer">
                      <span className='px-4 py-1'>Technology</span>
                      <FaChevronDown />
                    </div>
                    <div className="absolute down-full top-0 w-56 mt-10 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/technology:opacity-100 group-hover/technology:visible transition-all duration-200">
                      <Link to="/services/technology/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        IT Consulting
                      </Link>
                      <Link to="/services/technology/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Software Development
                      </Link>
                      <Link to="/services/technology/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cybersecurity
                      </Link>
                      <Link to="/services/technology/cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cloud Services
                      </Link>
                    </div>
                  </div>

                  {/* Wellness Link with Nested Dropdown */}
                  <div className="relative group/wellness px-4 py-2">
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 rounded group-hover/wellness:bg-gray-100 cursor-pointer">
                      <span className='px-4 py-1'>Wellness</span>
                      <FaChevronDown />
                    </div>
                    <div className="absolute down-full top-0 w-56 mt-10 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/wellness:opacity-100 group-hover/wellness:visible transition-all duration-200">
                      <Link to="/services/wellness/mental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Mental Health
                      </Link>
                      <Link to="/services/wellness/fitness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Fitness Coaching
                      </Link>
                      <Link to="/services/wellness/nutrition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Nutrition Counseling
                      </Link>
                      <Link to="/services/wellness/lifestyle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Lifestyle Medicine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/video-consult"

                className={`text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-rose-400 ${
                  isActive('/services') ? 'text-blue-500 border-practo-blue font-medium' : ''

                }`}
                style={{ fontFamily: '"Lato", "Open Sans", sans-serif' }}
              >
                Video Consult
              </Link>

              <Link
                to="/contacts"

                className={`text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-sky-400 ${
                  isActive('/contacts') ? 'text-blue-500 border-practo-blue font-medium' : ''

                }`}
                style={{ fontFamily: '"Lato", "Open Sans", sans-serif' }}
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right side - Dropdowns and Profile */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
            {/* Hamburger Menu (Mobile & Tablet view) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 transition-colors hover:bg-blue-100 menu-trigger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5 text-blue-600" />
              ) : (
                <FaBars className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Profile Section - Desktop and Tablet */}
            <div
              ref={profileTriggerRef}
              className="relative profile-trigger"
            >

              <button
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >

                <BsPersonCircle className='text-white h-9 w-9' />
              </button>

              {isProfileOpen && (

                <div
                  ref={profileMenuRef}
                  className={"absolute right-0 mt-2 w-48 h-19 text-center bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden "}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="justify-between">
                    <Link to="/login" className="block text-lg py-1 text-gray-600 hover:text-black hover:bg-blue-300 hover:rounded-md" onClick={(e) => e.stopPropagation()}>
                      Login
                    </Link>
                    <Link to="/register" className="block text-lg py-1 text-gray-600 hover:text-black hover:bg-blue-300 hover:rounded-md" onClick={(e) => e.stopPropagation()}>
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg overflow-y-auto z-50"
            style={{ maxHeight: 'calc(100vh - 4rem)', height: 'auto' }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {/* Find Experts Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => toggleDropdown('find-experts')}
                >
                  <span>Find Experts</span>
                  <FaChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'find-experts' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'find-experts' && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                    {/* Finance Dropdown */}
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full text-sm text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                        onClick={() => toggleNestedDropdown('finance')}
                      >
                        <span>Finance</span>
                        <FaChevronDown className={`h-4 w-4 transition-transform ${openNestedDropdown === 'finance' ? 'rotate-180' : ''}`} />
                      </button>

                      {openNestedDropdown === 'finance' && (
                        <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                          <Link to="/services/finance/planning" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Financial Planning
                          </Link>
                          <Link to="/services/finance/tax" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Tax Advisory
                          </Link>
                          <Link to="/services/finance/wealth" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Wealth Management
                          </Link>
                          <Link to="/services/finance/retirement" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Retirement Planning
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Legal Dropdown */}
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full text-sm text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                        onClick={() => toggleNestedDropdown('legal')}
                      >
                        <span>Legal</span>
                        <FaChevronDown className={`h-4 w-4 transition-transform ${openNestedDropdown === 'legal' ? 'rotate-180' : ''}`} />
                      </button>

                      {openNestedDropdown === 'legal' && (
                        <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                          <Link to="/services/legal/corporate" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Corporate Law
                          </Link>
                          <Link to="/services/legal/estate" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Estate Planning
                          </Link>
                          <Link to="/services/legal/intellectual" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Intellectual Property
                          </Link>
                          <Link to="/services/legal/litigation" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Litigation
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Technology Dropdown */}
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full text-sm text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                        onClick={() => toggleNestedDropdown('technology')}
                      >
                        <span>Technology</span>
                        <FaChevronDown className={`h-4 w-4 transition-transform ${openNestedDropdown === 'technology' ? 'rotate-180' : ''}`} />
                      </button>

                      {openNestedDropdown === 'technology' && (
                        <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                          <Link to="/services/technology/consulting" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            IT Consulting
                          </Link>
                          <Link to="/services/technology/development" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Software Development
                          </Link>
                          <Link to="/services/technology/security" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Cybersecurity
                          </Link>
                          <Link to="/services/technology/cloud" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Cloud Services
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Wellness Dropdown */}
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full text-sm text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                        onClick={() => toggleNestedDropdown('wellness')}
                      >
                        <span>Wellness</span>
                        <FaChevronDown className={`h-4 w-4 transition-transform ${openNestedDropdown === 'wellness' ? 'rotate-180' : ''}`} />
                      </button>

                      {openNestedDropdown === 'wellness' && (
                        <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                          <Link to="/services/wellness/mental" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Mental Health
                          </Link>
                          <Link to="/services/wellness/fitness" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Fitness Coaching
                          </Link>
                          <Link to="/services/wellness/nutrition" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Nutrition Counseling
                          </Link>
                          <Link to="/services/wellness/lifestyle" className="block py-2 px-3 text-gray-700 hover:text-blue-600">
                            Lifestyle Medicine
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              

              <Link
                to="/video-consult"
                className={`text-black flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
                  isActive('/video-consult')
                    ? 'bg-blue-500 text-white font-medium'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Video Consult
              </Link>

              <Link
                to="/contacts"
                className={`text-black flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
                  isActive('/contacts')
                    ? 'bg-blue-500 text-white font-medium'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
