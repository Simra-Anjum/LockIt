import React from "react";
import Fingerprint from "../assets/fingerprint_scanline.svg";
import Key from "../assets/key_spin.svg";

const About = () => {
  return (
    <div id="about" className="grid md:grid-cols-2 gap-2 items-center px-6 md:mt-0 mt-8">
      
   


<div className="relative flex justify-center items-center gap-2">
<div className="bg-gray-200 p-8 rounded-2xl shadow-lg 
                  transition duration-300 transform-gpu 
                 border-[1px] border-gray-400 
                  hover:scale-110 hover:border-4 hover:border-green-700">
    <img src={Fingerprint} alt="Fingerprint" className="lg:w-48 lg:h-48" />
  </div>

 
<div className="bg-gray-200 p-8 rounded-2xl shadow-2xl 
                  transition duration-300 transform-gpu
                  border-[1px] border-gray-400 
                  hover:scale-110 hover:border-4 hover:border-green-700 
                  lg:absolute top-32 left-16">
    <img src={Key} alt="key" className="lg:w-32 lg:h-32" />
  </div>
</div>
<div>
        <h2 className="text-center text-green-600 font-bold text-xl md:text-3xl  md:mt-0 mt-4 p-2 hover:underline">
          About Us
        </h2>
        <p className="text-white text-justify leading-relaxed ">
          We created LockIT with a simple mission — to
          make password management easy, secure, and stress-free.
          <br />
          In today’s digital world, we all use dozens of accounts — from social
          media and email to banking and shopping. Remembering every password is
          nearly impossible, and writing them down is unsafe. That’s why we
          built a secure vault where you can save, organize, and access all your
          passwords in one place.
          <br />
          Our focus is on:
          <br />
          🔒 Security First – All data is encrypted and private.
          <br />
          ⚡ Simplicity – A clean, easy-to-use interface.
          <br />
          🛡️ Trust - Only you control your vault; no one else can access it.
          <br />
          With PassOp, you no longer have to worry about forgetting your
          passwords. Everything you need is stored safely and available whenever
          you need it. Your digital life. Protected.
        </p>
      </div>

    </div>
  );
};

export default About;
