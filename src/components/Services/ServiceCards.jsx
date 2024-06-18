import React from "react";
import Software from "./Software";
import UiUx from "./UiUx";
import Branding from "./Branding";
import Graphics from "./Graphics";
import DataAnalytics from "./DataAnalytics";
import Security from "./Security";

const ServiceCard = () => {
  return (
    <div className="flex-row py-[5%] lg:space-y-[1%] space-y-[5%] justify-center items-center min-h-screen bg-custom-gradient2">
    <Software />
    <div className="lg:flex flex-row lg:space-x-[1.5%] lg:space-y-[0%] space-y-[5%] max-w-screen-xl w-10/12 sm:w-9/12 mx-auto">
      <UiUx />
      <Branding />
    </div>
    <Graphics />
    <div className="lg:flex flex-row lg:space-x-[1.5%] lg:space-y-[0%] space-y-[5%] max-w-screen-xl w-10/12 sm:w-9/12 mx-auto">
      <DataAnalytics />
      <Security />
    </div>
    </div>  
  );
};

export default ServiceCard;
