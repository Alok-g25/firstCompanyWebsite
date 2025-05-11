import React from "react";

const ProgressBar = ({ currentStep, totalSteps = 7 }) => {
  return (
    <div className="flex items-center w-full max-w-xl mx-auto">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        return (
          <div key={stepNumber} className="flex items-center w-full">
            {/* Step Number Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold
                ${
                  stepNumber === currentStep
                    ? "bg-purple-700 text-white border-purple-900 shadow-lg scale-105" // Highlight current step
                    : stepNumber < currentStep
                    ? "bg-purple-500 text-white border-purple-800 hover:scale-105" // Completed steps
                    : "border-gray-300 text-gray-500" // Upcoming steps
                } 
              `}
            >
              {stepNumber}
            </div>

            {/* Connecting Line */}
            {stepNumber !== totalSteps && (
              <div
                className={`flex-1 h-1 transition-all duration-300 
                  ${stepNumber < currentStep ? "bg-purple-800" : "bg-gray-300"}
                `}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
