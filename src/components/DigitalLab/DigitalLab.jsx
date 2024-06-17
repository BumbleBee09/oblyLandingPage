import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./DigitalLab.css";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const DigitalLab = () => {
  return (
    <div className="max-w-screen-xl flex items-center justify-between mx-auto py-8 sm:px-6 lg:px-2">
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
          <p className="text-8xl font-bold gradient-text">
            Hai mai visto un Laboratorio Digitale?
          </p>
        </div>

        {/* Third line */}
        <div className="flex space-x-4 justify-center items-center">
          <div className="w-1/4"></div>
          {/* Line */}
          <div className="w-1/2">
            <p className="text-white">
              {" "}
              Uno spazio dedicato and anticipare com le nuove tecnologie
              impattano sui brand e li modo in cui interagiamo can loro
            </p>
          </div>
          <div className="w-1/8"></div>
          <div className="w-1/8 justify-center items-center">
            {/* Image */}
            <img src="../public/images/OblyLogo.png" alt="Scroll Down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalLab;
