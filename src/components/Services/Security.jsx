import React from 'react'

const Security = () => {
  return (
    <div className="flex w-full h-full lg:h-3/5 md:h-2/3 sm:h-3/4 rounded-lg overflow-hidden text-white bg-gradient-to-r from-[#151515] to-[#2c93bb]">
    <div className="w-1/2 p-2 flex flex-col justify-center">
      <div
        className="w-12 h-12 rounded-full bg-cover bg-center mb-[1%]"
        style={{
          backgroundImage: "url(path_to_avatar_image_or_icon.png)",
        }}  
      ></div>
      <div className="lg:text-2xl text-xl font-bold mb-[2%]">
        Cyber Security
      </div>
      <div className="lg:text-base mb-[1%]">Da aggiungere testo introduttivo</div>
      <a
        href="your_contact_link.html"
        className="flex items-center text-xs mb-[1%]"
      >
        contattaci
        <span className="ml-1">⬆️</span>
      </a>
    </div>
    <div className="w-1/2">
      {/* <img
        src="images/security.png"
        alt="Security"
        className="w-1/2"
      /> */}
    </div>
  </div>
  )
}

export default Security