import React from 'react'
import './Services.css';
const Graphics = () => {
  return (
    <div className="max-w-screen-xl w-10/12 sm:w-9/12 mx-auto">
    <div className="flex w-full h-full lg:h-3/5 md:h-2/3 sm:h-3/4 rounded-lg overflow-hidden text-white bg-graphics-gradient">
      <div className="w-1/2 p-[2.5%] flex flex-col justify-center">
        <div
          className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 h-6 w-6 rounded-full bg-cover bg-center mb-[1%]"
          style={{
            backgroundImage: "url(images/graphics-avatar.png)",
          }}
        ></div>
        <div className="lg:text-2xl text-xl font-bold mb-[2%]">
          3D Graphics & Rendering
        </div>
        <div className="lg:text-base md:text-sm text-xs mb-[1%]">
          diamo tridimensionalita alle tue idee.
        </div>
        <a
          href="your_contact_link.html"
          className="flex items-center text-xs mb-[1%]"
        >
          contattaci
          <span className="ml-1">⬆️</span>
        </a>
      </div>
      <div
        className="w-1/2"
        style={{
          backgroundImage: "url(images/3dGraphics.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      ></div>
    </div>
  </div>
  )
}

export default Graphics
