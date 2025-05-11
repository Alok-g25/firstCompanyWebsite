import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import ServicesCommon from "../../components/ServicesCommon";
import { itConsultingObj } from "../../data/services/services";

const ItConsulting = () => {
  return (
    <div>
      <ServicesCommon obj={itConsultingObj} />
    </div>
  );
};

export default ItConsulting;
