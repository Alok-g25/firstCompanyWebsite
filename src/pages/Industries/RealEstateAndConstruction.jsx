import React from "react";
import { realEstateObj } from "../../data/industries/industries";
// import Hero from "../../components/Hero";
import IndustryCommon from "../../components/IndustryCommon";

const RealEstateAndConstruction = () => {
  return (
    <div>
      <IndustryCommon obj={realEstateObj} />
    </div>
  );
};

export default RealEstateAndConstruction;
