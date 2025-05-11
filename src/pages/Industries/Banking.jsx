import React from "react";
import IndustryCommon from "../../components/IndustryCommon";
import { bankingObj } from "../../data/industries/industries";

const Banking = () => {
  return (
    <div>
      <IndustryCommon obj={bankingObj} />
    </div>
  );
};

export default Banking;
