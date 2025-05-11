import React from "react";
import IndustryCommon from "../../components/IndustryCommon";
import { automotiveObj } from "../../data/industries/industries";

const Automotive = () => {
  return (
    <div>
      <IndustryCommon obj={automotiveObj} />
    </div>
  );
};

export default Automotive;
