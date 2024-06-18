import React from 'react'

const Branding = () => {
  return (
    <div className="flex w-full h-full lg:h-3/5 md:h-2/3 sm:h-3/4 rounded-lg text-white overflow-hidden bg-gradient-to-r from-[#25597f] via-[#41356d] to-[#621e46]">
    <div className="w-2/3 p-2 flex flex-col justify-center">
      <div
        className="w-12 h-12 rounded-full bg-cover bg-center mb-[1%]"
        style={{
          backgroundImage: "url(path_to_avatar_image_or_icon.png)",
        }}
      ></div>
      <div className="lg:text-2xl text-xl font-bold mb-[2%]">Branding</div>
      <div className="lg:text-base mb-[1%]">
        Ti aiutiamo a creare la tua identita visiva coerente can i tuoi
        obiettivi di business.
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
      className="w-1/3"
      // style={{
      //   backgroundImage: "url(images/branding.png)",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right",
      // }}
    ></div>
  </div>
  )
}

export default Branding
