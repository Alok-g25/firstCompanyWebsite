import React from "react";
import IndustryCommon from "../../components/IndustryCommon";
import { oilAndGasObj } from "../../data/industries/industries";

const OilGas = () => {
  return (
    <div>
      <IndustryCommon obj={oilAndGasObj} />
    </div>
  );
};

export default OilGas;
