import React from "react";

//components
import Hero from "../../components/Hero";
import SolutionsCommon from "../../components/SolutionsCommon";

//data
import { CRMObj } from "../../data/solutions/solutions";

const CRM = () => {
  return (
    <div>
      <SolutionsCommon obj={CRMObj} />
    </div>
  );
};

export default CRM;
