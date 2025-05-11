import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProgressBar from "../../components/ProgressBar";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import ThankYou from "./ThankYou";
// Cost Calculator Component
const CostCalculator = () => {
  const steps = [1, 2, 3, 4, 5, 6, 7];
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep = parseInt(location.pathname.split("/").pop()) || 1;

  const handleNext = () => {
    if (currentStep < steps.length)
      navigate(`/cost-calculator/${currentStep + 1}`);
    else navigate("/cost-calculator/thank-you");
  };

  const handlePrev = () => {
    if (currentStep > 1) navigate(`/cost-calculator/${currentStep - 1}`);
  };

  return (
    <div>
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">
          Cost Calculator
        </h1>
        <ProgressBar currentStep={currentStep} steps={steps} />
      </div>

      <div className="mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
          disabled={currentStep === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CostCalculator;
