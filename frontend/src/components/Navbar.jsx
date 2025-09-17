import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginPopup from './LoginPopup';

const Navbar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // const [token, setToken] = useState("");

  // ✅ Component load hote hi token check karega
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("authToken");
    setToken("");
  };

  return (
    <>
      <nav className="bg-[#2C3E4C] text-white fixed top-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center px-6 h-14">

          {/* Logo */}
          <div className="logo flex font-bold text-4xl items-center">
            <span className="text-green-600">&lt;</span>
            LⓞCK
            <img
              width="40"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/40C057/lock-2.png"
              alt="lock-2"
            />
            <span className="text-green-600">IT&gt;</span>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Menu links */}
          <ul
            className={`md:flex md:items-center md:gap-2 absolute md:static bg-[#2C3E4C] left-0 w-full md:w-auto transition-all duration-300 ease-in ${
              isOpen ? 'top-14 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
            }`}
          >
            <li><a className="block px-3 py-2 hover:bg-[#020c21] hover:rounded-lg hover:text-green-600" href="#home">Home</a></li>
            <li><a className="block px-3 py-2 hover:bg-[#020c21] hover:rounded-lg hover:text-green-600" href="#about">About</a></li>
            <li><a className="block px-3 py-2 hover:bg-[#020c21] hover:rounded-lg hover:text-green-600" href="#manager">Manager</a></li>
            <li><a className="block px-3 py-2 hover:bg-[#020c21] hover:rounded-lg hover:text-green-600" href="#contact">Contact</a></li>

            {/* ✅ Agar token hai to Logout, warna Signup */}
            {!token ? (
              <li>
                <button
                  onClick={() => setShowLogin(true)}
                  className="m-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
                  focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
                  rounded-lg text-sm px-3 py-2 text-center w-full md:w-auto"
                >
                  Sign-In
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={logout}
                  className="m-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
                  focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
                  rounded-lg text-sm px-3 py-2 text-center w-full md:w-auto"
                >
                  Log-Out
                </button>
              </li>
            )}

            {/* ✅ Login Popup */}
            {showLogin && (
              <LoginPopup setShowLogin={setShowLogin} setToken={setToken} />
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
