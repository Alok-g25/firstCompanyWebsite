import React from "react";
import Hero from "../../components/Hero";
import { transportationObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";

const TransportationAndLogistics = () => {
  return (
    <div>
      <IndustryCommon obj={transportationObj} />
    </div>
  );
};

export default TransportationAndLogistics;
