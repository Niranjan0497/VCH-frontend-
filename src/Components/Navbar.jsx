import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {  FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {FaChevronLeft,FaChevronDown } from "react-icons/fa";
import vch_logo from "../assets/vch_logo.png"

function Navbar() {
const [sticky,setSticky] = useState(false)

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(null);
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
      window.scrollY > 150 ? setSticky(true) : setSticky(false)
    })
  }, [])

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
      
      // For profile dropdown - only close if clicking outside both the menu and trigger
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

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdown) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === dropdown ? null : dropdown);
  };

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

  return (
    <nav className={`${sticky ? 'bg-slate-900' : 'bg-slate-900'} shadow-md sticky top-0  left-0 right-0 z-50`}>
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
              <div className="relative group ">
                <button className="flex items-center text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 hover:font-bold">
                Find Experts <FaChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className=" flex dropdown-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-0 mt-2 w-105 bg-white rounded-md shadow-lg py-2 z-20">
                  {/* Finance Link with Nested Dropdown */}
                  <div className="relative group/finance px-4 py-2">
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 group-hover/finance:bg-gray-100 cursor-pointer">
                      <span>Finance</span>
                      < FaChevronDown className="ml-1 h-3 w-3" />
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
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 group-hover/legal:bg-gray-100 cursor-pointer">
                      <span>Legal</span>
                      < FaChevronDown className="ml-1 h-3 w-3" />
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
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 group-hover/technology:bg-gray-100 cursor-pointer">
                      <span>Technology</span>
                      < FaChevronDown className="ml-1 h-3 w-3" />
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
                    <div className="flex justify-between items-center text-sm text-gray-700 hover:bg-gray-100 group-hover/wellness:bg-gray-100 cursor-pointer">
                      <span>Wellness</span>
                      < FaChevronDown className="ml-1 h-3 w-3" />
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
                className={`text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 hover:font-bold ${
                  isActive('/services') ? 'text-blue-500 border-b-4 border-practo-blue font-medium' : ''
                }`}
                style={{ fontFamily: '"Lato", "Open Sans", sans-serif' }}
              >
                Video Consult
              </Link>
              
              <Link
                to="/contacts"
                className={`text-white font-semibold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 hover:font-bold ${
                  isActive('/contacts') ? 'text-blue-500 border-b-4 border-practo-blue font-medium' : ''
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

            {/* Dropdowns for Tablets and Desktop */}

            {/* Profile Section - Desktop and Tablet */}
            <div
              ref={profileTriggerRef}
              className="relative profile-trigger"
            >
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-sky-300 transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <FaUser className="h-4 w-4 text-gray-600 hover:text-sky-500 transition-colors" />
              </button>

              {isProfileOpen && (
                <div 
                ref={profileMenuRef} 
                className={"absolute right-0 mt-2 w-48 h-20 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden "}
                onClick={(e) => e.stopPropagation()}
              > 
                  <div className=" justify-between">
                    <Link to="/login" className=" block m-2 text-lg text-gray-600 hover:text-black hover:bg-blue-300" onClick={(e) => e.stopPropagation()}>
                      Login
                    </Link>
                    <Link to="/register" className=" block m-2 text-lg text-gray-600 hover:text-black hover:bg-blue-300" onClick={(e) => e.stopPropagation()}>
                      Register
                    </Link>
                  </div>
               
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu (Heisenberg Style) */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className=" fixed top-16 left-0 right-0 bg-white shadow-lg overflow-y-auto z-50"
            style={{ maxHeight: 'calc(100vh - 4rem)', height: 'auto' }}
          >
            <div className="flex flex-col p-4 space-y-4">
             
         
              
          
            <div>
  <button 
    className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
    onClick={() => toggleMobileDropdown('services')}
  >
    <span>Services</span>
    <FaChevronLeft className={`h-4 w-4 transition-transform duration-300 ${isMobileDropdownOpen === 'services' ? 'rotate-90' : ''}`} />
  </button>

  {isMobileDropdownOpen === 'services' && (
    <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
      <Link 
        to="/services/finance" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Finance
      </Link>
      <Link 
        to="/services/legal" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Legal
      </Link>
      <Link 
        to="/services/technology" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Technology
      </Link>
      <Link 
        to="/services/wellness" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Wellness
      </Link>
    </div>
  )}
</div>

{/* For Corporates Mobile Dropdown */}
<div className="border-t border-gray-200 pt-4">
  <button 
    className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
    onClick={() => toggleMobileDropdown('corporates')}
  >
    <span>For Corporates</span>
    <FaChevronLeft className={`h-4 w-4 transition-transform duration-300 ${isMobileDropdownOpen === 'corporates' ? 'rotate-90' : ''}`} />
  </button>

  {isMobileDropdownOpen === 'corporates' && (
    <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
      <Link 
        to="/health-plans" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Health Plans
      </Link>
      <Link 
        to="/wellness-plans" 
        className="block py-2 px-3 text-gray-700 hover:text-blue-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Wellness Plans
      </Link>
    </div>
  )}
</div>
              
              <Link
                to="/contacts"
                className={`text-white flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
                  isActive('/contacts') 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>

              {/* For Corporates Mobile Dropdown */}
              <div className="border-t border-gray-200 pt-4">
                <button 
                  className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => toggleMobileDropdown('corporates')}
                >
                  <span>For Corporates</span>
                  <FaChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileDropdownOpen === 'corporates' ? 'transform rotate-180' : ''}`} />
                </button>
                
                {isMobileDropdownOpen === 'corporates' && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                    <Link 
                      to="/health-plans" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Health Plans
                    </Link>
                    <Link 
                      to="/wellness-plans" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Wellness Plans
                    </Link>
                  </div>
                )}
              </div>

              {/* For Providers Mobile Dropdown */}
              <div className="border-t border-gray-200 pt-4">
                <button 
                  className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => toggleMobileDropdown('providers')}
                >
                  <span>For Providers</span>
                  <FaChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileDropdownOpen === 'providers' ? 'transform rotate-180' : ''}`} />
                </button>
                
                {isMobileDropdownOpen === 'providers' && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                    <Link 
                      to="/practo-assured" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Vch Assured
                    </Link>
                    <Link 
                      to="/practo-prime" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      vch Prime
                    </Link>
                    <Link 
                      to="/software" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Software for Providers
                    </Link>
                    <Link 
                      to="/list-practice" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      List Your Practice for Free
                    </Link>
                    <Link 
                      to="/abdm" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ABDM
                    </Link>
                  </div>
                )}
              </div>

              {/* Security & Help Mobile Dropdown */}
              <div className="border-t border-gray-200 pt-4">
                <button 
                  className="flex items-center justify-between w-full text-lg py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => toggleMobileDropdown('security')}
                >
                  <span>Security & Help</span>
                  <FaChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileDropdownOpen === 'security' ? 'transform rotate-180' : ''}`} />
                </button>
                
                {isMobileDropdownOpen === 'security' && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                    <Link 
                      to="/security" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Data Security
                    </Link>
                    <Link 
                      to="/help" 
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Help
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;