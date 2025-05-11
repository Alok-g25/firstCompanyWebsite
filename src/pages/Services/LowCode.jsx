import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { lowCodeObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const LowCode = () => {
  return (
    <div>
      <ServicesCommon obj={lowCodeObj} />
    </div>
  );
};

export default LowCode;
