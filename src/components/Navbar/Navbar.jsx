import React from "react";
import { useState } from 'react';

const Navbar = () => {
const [selectedOption, setSelectedOption] = useState('ITA');


return (
    <nav className="bg-transparent w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto pt-16 pb-10 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <a href="www.google.com" className="flex items-center space-x-4 rtl:space-x-reverse flex-shrink-0">
                <img
                    src="images/OblyLogo.png"
                    className="h-24 text-white"
                    alt="Obly Logo"
                />
            </a>   

            {/* Language Button */}
            <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
                <button
                    type="button"
                    onClick={() => setSelectedOption((prevOption) => prevOption === "ITA" ? "EN" : "ITA")}
                    className="relative focus:outline-none text-white font-medium text-sm px-4 py-2"
                >
                    <span className={`px-1 ${selectedOption === "ITA" ? "border-b-2 border-white" : ""}`}>
                        ITA
                    </span>
                    <span className="mx-1">|</span>
                    <span className={`px-1 ${selectedOption === "EN" ? "border-b-2 border-white" : ""}`}>
                        EN
                    </span>
                </button>
            </div>
            
            {/* Menu */}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
                    <li>
                        <a href="www.google.com" className="block py-2 px-2 text-white" aria-current="page">
                            Casi studio
                        </a>
                    </li>
                    <li>
                        <a href="www.google.com" className="block py-2 px-2 text-white">
                            Chi siamo
                        </a>
                    </li>
                    <li>
                        <a href="www.google.com" className="block py-2 px-2 text-white">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="www.google.com" className="block py-2 px-2 text-white">
                            Formazione
                        </a>
                    </li>
                    <li>
                        <a href="www.google.com" className="block py-2 px-2 text-white">
                            Contatti
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Navbar;