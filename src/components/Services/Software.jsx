import React from 'react'

const Software = () => {
  return (
    <div className="max-w-screen-xl w-10/12 sm:w-9/12 mx-auto">
    <div className="flex w-full h-full lg:h-3/5 md:h-2/3 sm:h-3/4 rounded-lg overflow-hidden text-white bg-gradient-to-tr from-[#297d9c] via-[#151515] to-black">
      <div className="w-2/3 p-2 flex flex-col justify-center">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center mb-[1%]"
          style={{
            backgroundImage: "url(path_to_avatar_image_or_icon.png)",
          }}
        ></div>
        <div className="lg:text-2xl text-xl font-bold mb-[2%]">
          Sviluppo Software
        </div>
        <div className="lg:text-base mb-[1%]">
          Ti aiutiamo a structure la ta azienda e transformaria in digitale
          attraverso la creazione di siti web, app o webapp.
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
        //   backgroundImage: "url(images/sviluppo.png)",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "right",
        // }}
      ></div>
    </div>
  </div>
  )
}

export default Software
