import './Client.css'

const Client = () => {
    return (
      <div className="mt-[10%] w-full h-[3rem] xl:h-[7rem] lg:h-[6rem] md:h-[5rem] sm:h-[4rem] relative">
        <div className="absolute bottom-0 left-0 w-full h-full bg-black z-10 transform rotate-[-3deg]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-div z-20 transform rotate-[3deg]" />
      </div>
    );
  };
  
  export default Client;
