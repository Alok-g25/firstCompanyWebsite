import React from "react";

//components
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import IndustryCommon from "../../components/IndustryCommon";

//data
import { healthObj } from "../../data/industries/industries";

const HealthAndWellness = () => {
  return (
    <div>
      <IndustryCommon obj={healthObj} />
    </div>
  );
};

export default HealthAndWellness;
