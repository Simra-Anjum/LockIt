import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2C3E4C] text-gray-300 py-8 mt-10">
      <div className="mycontainer px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
           <div className='logo flex font-bold text-5xl'>
      <span className='text-green-600'>&lt;</span>
       LⓞCK
<img width="50" height="30" src="https://img.icons8.com/ios-glyphs/30/40C057/lock-2.png" alt="lock-2"/>    

       <span className='text-green-600'>IT&gt;</span>
        </div>
          <p className="mt-3 text-sm">
              We created LockIT with a simple mission — to
          make password management easy, secure, and stress-free.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#about" className="hover:text-green-600">About</a></li>
            <li><a href="#manager" className="hover:text-green-600">Manager</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-linkedin hover:text-green-600"></i></a>
          </div>
           <h3 className="text-lg font-semibold text-white mt-3">Contact Us</h3>
           <p className="hover:text-green-600 cursor-pointer">simraanjum68@gmail.com</p>
           <p className="hover:text-green-600 cursor-pointer">7005389021</p>
        </div>
        
      </div>
    <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
