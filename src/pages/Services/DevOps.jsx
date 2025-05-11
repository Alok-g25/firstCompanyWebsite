import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { devOpsObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const DevOps = () => {
  return (
    <div>
      {/* <Hero heading={devOpsObj.title} bgImage={devOpsObj.src} content={devOpsObj.description}/> */}
      <ServicesCommon obj={devOpsObj} />
      {/* <Footer /> */}
    </div>
  );
};

export default DevOps;
