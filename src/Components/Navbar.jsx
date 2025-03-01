import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaUser, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
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
<<<<<<< HEAD
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 ">
=======
    <nav className="bg-white shadow-md sticky top-0  left-0 right-0 z-50 h-30">
>>>>>>> 0d6f7c01a346cb782a193b20e256ea81f5a40bae
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and main links */}
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/037/356/non_2x/vch-letter-logo-design-on-white-background-vch-creative-circle-letter-logo-concept-vch-letter-design-vector.jpg"
                alt="VCH"
                className="h-12 sm:h-14 md:h-16"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
              <Link
                to="/find-experts"
                className={`text-black font-extrabold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 ${
                  isActive('/find-experts') ? 'text-blue-500 border-b-4 border-practo-blue font-medium' : ''
                }`}
                style={{ fontFamily: '"Lato", "Open Sans", sans-serif' }}
              >
                Find Experts
              </Link>
              <Link
                to="/video-consult"
                className={`text-black font-extrabold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 ${
                  isActive('/video-consult') ? 'text-blue-500 border-b-4 border-practo-blue font-medium' : ''
                }`}
                style={{ fontFamily: '"Lato", "Open Sans", sans-serif' }}
              >
                Services
              </Link>
              <Link
                to="/contacts"
                className={`text-black font-extrabold text-sm sm:text-base lg:text-lg pb-1 hover:text-blue-900 ${
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
            <div className="relative group hidden md:block">
              <button className="flex items-center text-practo-dark hover:text-practo-blue font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
                For Corporates <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="dropdown-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <Link to="/health-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Health Plans
                </Link>
                <Link to="/wellness-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Wellness Plans
                </Link>
              </div>
            </div>

            <div className="relative group hidden md:block">
              <button className="flex items-center text-practo-dark hover:text-practo-blue font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
                For Providers <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="dropdown-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                <Link to="/practo-assured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Vch Assured
                </Link>
                <Link to="/practo-prime" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  vch Prime
                </Link>
                <Link to="/software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Software for Providers
                </Link>
                <Link to="/list-practice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  List Your Practice for Free
                </Link>
                <Link to="/abdm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ABDM
                </Link>
              </div>
            </div>

            <div className="relative group hidden md:block">
              <button className="flex items-center text-practo-dark hover:text-practo-blue font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
                Security & help <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="dropdown-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <Link to="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Data Security
                </Link>
                <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Help
                </Link>
              </div>
            </div>

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
                  className="absolute right-0 mt-2 w-64 sm:w-72 md:w-80 bg-white rounded-md shadow-lg py-4 px-4 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <form onSubmit={handleProfileSubmit} className="space-y-4 bg-white">
                    <div className="relative bg-white ">
                      <label htmlFor="name" className="block text-md font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        className="mt-1 block w-full h-10 p-4 rounded-md border-grey-800  bg-gray-100 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-lg"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-md font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="mt-1 block w-full  h-10 p-4 rounded-md border-gray-300  bg-gray-100 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Link to="/login" className="text-md text-blue-600 hover:text-blue-800" onClick={(e) => e.stopPropagation()}>
                        Login
                      </Link>
                      <Link to="/register" className="text-md text-blue-600 hover:text-blue-800" onClick={(e) => e.stopPropagation()}>
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu (Heisenberg Style) */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg overflow-y-auto z-50"
            style={{ maxHeight: 'calc(100vh - 4rem)', height: 'auto' }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {/* Main Navigation Links */}
              <Link
                to="/find-experts"
                className={`flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
                  isActive('/find-experts') 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find Experts
              </Link>
              
              <Link
                to="/video-consult"
                className={`flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
                  isActive('/video-consult') 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              <Link
                to="/contacts"
                className={`flex items-center text-lg py-2 px-4 rounded-lg transition-colors ${
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
