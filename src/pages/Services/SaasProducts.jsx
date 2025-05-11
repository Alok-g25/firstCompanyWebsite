import React from "react";
import ServicesCommon from "../../components/ServicesCommon";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { saasProductsObj } from "../../data/services/services";

const SaasProducts = () => {
  return (
    <div>
      <ServicesCommon obj={saasProductsObj} />
    </div>
  );
};

export default SaasProducts;
