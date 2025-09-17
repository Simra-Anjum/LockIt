import React, { useState, useEffect } from "react";
import Copy from "../assets/copy_success.svg";
import Vault from "../assets/vault_wheel_spin.svg";
import Shield from "../assets/shield_check_draw.svg";
import Lock from "../assets/lock_pulse.svg";

const TypingText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50); // speed (ms per character)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <p className="text-white md:font-bold md:text-lg text-xl font-light transition-all duration-500">
      {displayed}
    </p>
  );
};

const Header = () => {
  return (
    <div id="home" className=" justify-center items-center md:mycontainer grid md:grid-cols-10 md:grid-rows-2 grid-cols-4 grid-rows-2 md:gap-4 gap-2  mt-20 md:mt-8 min-h-96">
     
          <div className="md:col-span-3 justify-center items-center md:p-2 p-1  text-center">
            <TypingText text="All your passwords in one secure place — no more forgetting." />
          </div>

     
          <div className="md:col-span-2 bg-gray-200  rounded-xl justify-center items-center animate-fadeIn  transform transition duration-300 hover:scale-110 
               shadow-lg border-4 border-transparent hover:border-green-700">
            <img
              src={Copy}
              alt="Copy"
              className=" opacity-0 animate-fadeIn"
            />
          </div>

    
          <div className="md:col-span-2 bg-gray-200  rounded-xl flex  justify-center items-center animate-fadeIn  transform transition duration-300 hover:scale-110 
               shadow-lg border-4 border-transparent hover:border-green-700">
            <img
              src={Vault}
              alt="Vault"
              className=" opacity-0 animate-fadeIn"
            />
          </div>

        
          <div className="md:col-span-3 flex  justify-center items-center md:p-2 p-1 text-center">
            <TypingText text="Your digital life. Protected. One vault. Infinite security." />
          </div>

        
          <div className="md:col-span-3 flex  justify-center items-center md:p-2 p-1 text-center">
            <TypingText text="Start securing your passwords today." />
          </div>

       
          <div className="md:col-span-2  bg-gray-200  flex rounded-xl justify-center items-center animate-fadeIn  transform transition duration-300 hover:scale-110 
               shadow-lg border-4 border-transparent hover:border-green-700">
            <img
              src={Lock}
              alt="Lock"
              className=" opacity-0 animate-fadeIn"
            />
          </div>

    
          <div className="md:col-span-2 bg-gray-200 flex rounded-xl justify-center items-center animate-fadeIn  transform transition duration-300 hover:scale-110 
               shadow-lg border-4 border-transparent hover:border-green-700">
            <img
              src={Shield}
              alt="Shield"
              className=" opacity-0 animate-fadeIn"
            />
          </div>

        
          <div className=" md:col-span-3 flex  justify-center items-center md:p-2 p-1 text-center">
            <TypingText text="Never lose access to your accounts again" />
          </div>
        </div>

  );
};

export default Header;
