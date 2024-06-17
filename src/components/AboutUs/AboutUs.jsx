import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl flex items-center justify-between mx-auto py-10 2xl:px-[1%] xl:px-[10%] lg:px-[10%] md:px-[8%] sm:px-[6%] px-[12%]">
      <div className="w-1/2 pt-4">
        {/* First line */}
        <div className="mb-5 flex space-x-2">
          <p className="text-xs text-white">C</p>
          <p className="text-xs text-white">H</p>
          <p className="text-xs text-white">I</p>
          <p></p>
          <p className="text-xs text-white">S</p>
          <p className="text-xs text-white">I</p>
          <p className="text-xs text-white">A</p>
          <p className="text-xs text-white">M</p>
          <p className="text-xs text-white">O</p>
        </div>
        {/* Second line */}
        <div className="pb-4">
          <p className="xl:min-h-[13rem] lg:min-h-[10rem] md:min-h-[10rem] min-h-[5rem] xl:text-8xl sm:text-7xl xs:text-6xl text-3xl font-bold text-white">
            La nostra esperienza
          </p>
        </div>
        {/* Third line */}
        <div className="justify-center items-center pb-12">
          {/* Line */}
          <div>
            <p className="text-white text-lg">
              {" "}
              Can altre 15 anni di esperienza nel settore, portiamo can noi una
              vasta competenza e una profonda comprensione delle soluzioni web
              per ogni progetto che intraprendiamo
            </p>
          </div>
        </div>
        <div className="flex space-x-10">
          {/* Gradient Background Button */}
          <button className="xl:px-10 lg:px-8 sm:px-6 lg:py-2 sm:py-4 px-6 py-1 text-white bg-gradient-button rounded-lg">
            Contattaci
          </button>
          <div class="px-1 py-1 bg-gradient-button rounded-lg position-relative">
            <button class="bg-[#29102f] rounded-lg xl:px-12 lg:px-10 sm:px-8 lg:py-2 sm:py-4 px-8 py-1 border text-white">
              Scopri chi siamo  
            </button>
          </div>

        </div>
      </div>
      <div className="w-1/2">
        <img src="images/aboutus.png" alt="About us" />
      </div>
    </div>
  );
};

export default AboutUs;
