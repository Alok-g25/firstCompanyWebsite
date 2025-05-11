import React from "react";
import IndustryCommon from "../../components/IndustryCommon";
import { astrologyAndHoroscopeObj } from "../../data/industries/industries";

const AstroHoroscope = () => {
  return (
    <div>
      <IndustryCommon obj={astrologyAndHoroscopeObj} />
    </div>
  );
};

export default AstroHoroscope;
