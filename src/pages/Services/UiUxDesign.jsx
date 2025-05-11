import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { uiuxObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const UiUxDesign = () => {
  return (
    <div>
      <ServicesCommon obj={uiuxObj} />
    </div>
  );
};

export default UiUxDesign;
