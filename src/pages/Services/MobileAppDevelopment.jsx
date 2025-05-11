import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { mobileAppObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const MobileAppDevelopment = () => {
  return (
    <div>
      <ServicesCommon obj={mobileAppObj} />
    </div>
  );
};

export default MobileAppDevelopment;
