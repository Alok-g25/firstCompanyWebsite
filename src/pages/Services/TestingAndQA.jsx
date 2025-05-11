import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { testingObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const TestingAndQA = () => {
  return (
    <div>
      <ServicesCommon obj={testingObj} />
    </div>
  );
};

export default TestingAndQA;
