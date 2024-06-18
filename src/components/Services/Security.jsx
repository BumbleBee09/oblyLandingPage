import React from 'react'

const Security = () => {
  return (
    <div className="flex w-full h-full lg:h-3/5 md:h-2/3 sm:h-3/4 rounded-lg overflow-hidden text-white bg-security-gradient">
    <div className="w-1/2 p-[5%] flex flex-col justify-center">
      <div
        className="lg:w-9 lg:h-9 h-6 w-6 rounded-full bg-cover bg-center mb-[1%]"
        style={{
          backgroundImage: "url(images/security-avatar.png)",
        }}  
      ></div>
      <div className="lg:text-2xl text-xl font-bold mb-[2%]">
        Cyber Security
      </div>
      <div className="lg:text-base md:text-sm text-xs mb-[2%]">Da aggiungere testo introduttivo</div>
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
          backgroundImage: "url(images/security.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      ></div>
  </div>
  )
}

export default Security
