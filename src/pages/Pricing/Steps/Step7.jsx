import React, { useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";
import { Link } from "react-router";

const environmentPreferences = [
  "On-premises",
  "Cloud-native",
  "Cloud-only",
  "Hybrid (cloud and on-premises)",
  "Not sure",
];

const Step7 = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [requireIntegrations, setRequireIntegrations] = useState("");
  const [showIntegrationsInput, setShowIntegrationsInput] = useState(false);
  const [techStack, setTechStack] = useState("");
  const [showTechStackInput, setShowTechStackInput] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Environment:", selectedEnvironment);
    console.log("Require Integrations:", requireIntegrations);
    console.log("Tech Stack:", techStack);
    console.log("Additional Details:", additionalDetails);
  };

  return (
    <div>
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4 mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#330073] m-3 text-center">
          Cost Calculator
        </h1>
        <ProgressBar currentStep={7} />

        <div className="w-full max-w-[90%] sm:max-w-3xl mx-auto p-6 text-black shadow-md rounded-lg bg-white">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Environment Preferences
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Environment Preferences */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Do you have any preferences for the environment?
              </h3>
              {environmentPreferences.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="environment"
                    value={option}
                    checked={selectedEnvironment === option}
                    onChange={() => setSelectedEnvironment(option)}
                    className="w-4 h-4 text-gray-300 border-[#E9D9FF] bg-[#330073] rounded focus:ring focus:ring-[#E9D9FF]"
                  />
                  <span className="text-gray-500">{option}</span>
                </label>
              ))}
            </div>

            {/* Integrations */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Would you require any integrations?
              </h3>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="integrations"
                  value="Yes"
                  checked={showIntegrationsInput}
                  onChange={() => setShowIntegrationsInput(true)}
                  className="w-4 h-4"
                />
                <span className="text-gray-500">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="integrations"
                  value="No"
                  checked={!showIntegrationsInput}
                  onChange={() => {
                    setShowIntegrationsInput(false);
                    setRequireIntegrations("");
                  }}
                  className="w-4 h-4"
                />
                <span className="text-gray-500">No</span>
              </label>
              {showIntegrationsInput && (
                <input
                  type="text"
                  placeholder="Specify other integrations"
                  value={requireIntegrations}
                  onChange={(e) => setRequireIntegrations(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg text-black"
                />
              )}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Do you have tech stack preferences?
              </h3>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="techStack"
                  value="Yes"
                  checked={showTechStackInput}
                  onChange={() => setShowTechStackInput(true)}
                  className="w-4 h-4"
                />
                <span className="text-gray-500">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="techStack"
                  value="No"
                  checked={!showTechStackInput}
                  onChange={() => {
                    setShowTechStackInput(false);
                    setTechStack("");
                  }}
                  className="w-4 h-4"
                />
                <span className="text-gray-500">No</span>
              </label>
              {showTechStackInput && (
                <input
                  type="text"
                  placeholder="Specify tech stack preferences"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg text-black"
                />
              )}
            </div>

            {/* Additional Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Here, you can add any details you'd like to include.
              </h3>
              <textarea
                placeholder="Additional details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className="w-full p-2 border rounded-lg text-black resize-none"
              />
            </div>
          </form>
        </div>
        <div className="m-6 flex flex-row gap-4">
          <Link
            to="/cost-calculator/6"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Prev
          </Link>
          <Link
            to="/cost-calculator/thank-you"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Next
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Step7;

{
  /* <div className="m-6 flex flex-row gap-4">
          <Link
            to="/cost-calculator/6"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Prev
          </Link>
          <Link
            to="/cost-calculator/thank-you"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Next
          </Link>
        </div> */
}
