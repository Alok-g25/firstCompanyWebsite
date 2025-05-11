import React from "react";
import Hero from "../../components/Hero";
import { professionalObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";

const ProfessionalServices = () => {
  return (
    <div>
      <IndustryCommon obj={professionalObj} />
    </div>
  );
};

export default ProfessionalServices;
