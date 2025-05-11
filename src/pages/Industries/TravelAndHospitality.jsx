import React from "react";

//components
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import IndustryCommon from "../../components/IndustryCommon";

//data
import { travelObj } from "../../data/industries/industries";

const TravelAndHospitality = () => {
  return (
    <div>
      <IndustryCommon obj={travelObj} />
    </div>
  );
};

export default TravelAndHospitality;
