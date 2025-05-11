import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { educationObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";

const Education = () => {
  return (
    <div>
      <IndustryCommon obj={educationObj} />
    </div>
  );
};

export default Education;
