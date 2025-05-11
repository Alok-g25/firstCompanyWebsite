import React from "react";
import Hero from "../../components/Hero";
import IndustryCommon from "../../components/IndustryCommon";
import { manufacturingObj } from "../../data/industries/industries";
import Footer from "../../components/Footer";

const Manufacturing = () => {
  return (
    <div>
      <IndustryCommon obj={manufacturingObj} />
    </div>
  );
};

export default Manufacturing;
