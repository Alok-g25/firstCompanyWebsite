import React from "react";

//components
import Hero from "../../components/Hero";
import SolutionsCommon from "../../components/SolutionsCommon";

//data
import { ERPObj } from "../../data/solutions/solutions";
import Footer from "../../components/Footer";

const ERP = () => {
  return (
    <div>
      {/* <Hero
        heading={ERPObj.title}
        bgImage={ERPObj.src}
        content={ERPObj.description}
      /> */}
      <SolutionsCommon obj={ERPObj} />
      {/* <Footer /> */}
    </div>
  );
};

export default ERP;
