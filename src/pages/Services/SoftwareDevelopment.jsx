import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { softwareObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const SoftwareDevelopment = () => {
  return (
    <div>
      <ServicesCommon obj={softwareObj} />
    </div>
  );
};

export default SoftwareDevelopment;
