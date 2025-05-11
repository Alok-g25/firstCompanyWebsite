import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { digitalMarketingObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const DigitalMarketing = () => {
  return (
    <div>
      <ServicesCommon obj={digitalMarketingObj} />
    </div>
  );
};

export default DigitalMarketing;
