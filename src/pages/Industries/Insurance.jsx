import React from "react";
import IndustryCommon from "../../components/IndustryCommon";
import { insuranceObj } from "../../data/industries/industries";

const Insurance = () => {
  return (
    <div>
      <IndustryCommon obj={insuranceObj}/>
    </div>
  );
};

export default Insurance;
