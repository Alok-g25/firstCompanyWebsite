import React from "react";

//components
import IndustryCommon from "../../components/IndustryCommon";

//data
import { financeObj } from "../../data/industries/industries";

const FinanceAndFintech = () => {
  return (
    <div>
      <IndustryCommon obj={financeObj} />
    </div>
  );
};

export default FinanceAndFintech;
