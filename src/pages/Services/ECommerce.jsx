import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { eCommerceObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const ECommerce = () => {
  return (
    <div>
      <ServicesCommon obj={eCommerceObj} />
    </div>
  );
};

export default ECommerce;
