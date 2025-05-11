import React from "react";
import Hero from "../../components/Hero";
import { retailEcommerceObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";
import Footer from "../../components/Footer";

const RetailAndEcommerce = () => {
  return (
    <div>
      <IndustryCommon obj={retailEcommerceObj} />
    </div>
  );
};

export default RetailAndEcommerce;
