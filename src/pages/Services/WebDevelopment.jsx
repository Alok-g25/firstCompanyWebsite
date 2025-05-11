import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { webObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const WebDevelopment = () => {
  return (
    <div>
      <ServicesCommon obj={webObj} />
    </div>
  );
};

export default WebDevelopment;
