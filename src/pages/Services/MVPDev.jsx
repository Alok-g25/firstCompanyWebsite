import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { mvpObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const MVPDev = () => {
  return (
    <div>
      <ServicesCommon obj={mvpObj} />
    </div>
  );
};

export default MVPDev;
