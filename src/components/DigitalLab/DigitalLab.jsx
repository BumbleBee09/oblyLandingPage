import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./DigitalLab.css";

const DigitalLab = () => {
  return (
    <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 sm:px-6 lg:px-2">
      {/* Vertical Navbar */}
      <div className="w-1/12">
        <ul className="flex-col font-medium">
          <li>
            <a href="www.google.com" className="block py-2 px-2 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="www.google.com" className="block py-2 px-2 text-white">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="www.google.com" className="block py-2 px-2 text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="www.google.com" className="block py-2 px-2 text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-11/12 p-8">
        {/* First line */}
        <div className="mb-5 flex space-x-2">
          <p className="text-xs text-white">D</p>
          <p className="text-xs text-white">I</p>
          <p className="text-xs text-white">G</p>
          <p className="text-xs text-white">I</p>
          <p className="text-xs text-white">T</p>
          <p className="text-xs text-white">A</p>
          <p className="text-xs text-white">L</p>
          <p></p>
          <p className="text-xs text-white">L</p>
          <p className="text-xs text-white">A</p>
          <p className="text-xs text-white">B</p>
        </div>

        {/* Second line */}
        <div className="mb-4">
          <p className="xl:min-h-[15rem] lg:min-h-[10rem] md:min-h-[18rem] min-h-[8rem] xl:text-8xl sm:text-7xl xs:text-6xl text-3xl font-bold gradient-text">
            Hai mai visto un Laboratorio Digitale?
          </p>
        </div>

        {/* Third line */}
        <div className="flex space-x-5 justify-center items-center">
          <div className="lg:w-1/4"></div>
          {/* Line */}
          <div className="lg:w-3/4 w-1/2">
            <p className="text-white text-lg">
              {" "}
              Uno spazio dedicato and anticipare com le nuove tecnologie
              impattano sui brand e li modo in cui interagiamo can loro
            </p>
          </div>
          <div className="lg:w-1/8 w-1/8 justify-center items-center">
            {/* Image */}
            <img className="lg:h-25 md:h-25 h-15" src="images/ScrollDown.png" alt="Scroll Down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalLab;
