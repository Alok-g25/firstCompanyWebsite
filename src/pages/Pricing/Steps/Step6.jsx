import React, { useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";
import { Link } from "react-router";

const services = [
  "From-scratch development",
  "Delivery of new features",
  "UI design/redesign",
  "Modernization/upgrade",
  "Migration to a new platform/tech stack",
  "Troubleshooting",
  "Consultation",
];

const softwareVersions = [
  "MVP only",
  "A fully-featured solution",
  "MVP now, a fully-featured solution later",
];

const complianceStandards = [
  "No",
  "HIPAA",
  "PCI-DSS",
  "GDPR",
  "FDA",
  "AML/KYC",
  "GLBA",
  "OSHA",
  "EPA",
  "NIST",
  "SOX",
  "SEC",
  "I need your expert advice on compliance",
];

const Step6 = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSoftwareVersion, setSelectedSoftwareVersion] = useState("");
  const [selectedCompliance, setSelectedCompliance] = useState([]);

  const handleCheckboxChange = (value, setter, multiple = true) => {
    setter((prev) =>
      multiple
        ? prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
        : value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Services:", selectedServices);
    console.log("Selected Software Version:", selectedSoftwareVersion);
    console.log("Selected Compliance Standards:", selectedCompliance);
  };

  return (
    <div>
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4 mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#330073] m-3">
          Cost Calculator
        </h1>
        <ProgressBar currentStep={6} />

        <div className="max-w-xl sm:max-w-3xl w-full bg-white px-6 py-6 m-8 shadow-md rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Project Requirements
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Services Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-center">
                What services do you need?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={service}
                      checked={selectedServices.includes(service)}
                      onChange={() =>
                        handleCheckboxChange(service, setSelectedServices)
                      }
                      className="w-4 h-4 text-gray-300 border-gray-300 rounded focus:ring focus:ring-[#E9D9FF]"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Software Version Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Which software version do you need?
              </h3>
              <div className="flex flex-col items-start">
                {softwareVersions.map((version) => (
                  <label key={version} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="softwareVersion"
                      value={version}
                      checked={selectedSoftwareVersion === version}
                      onChange={() =>
                        handleCheckboxChange(
                          version,
                          setSelectedSoftwareVersion,
                          false
                        )
                      }
                      className="w-4 h-4 text-gray-500 border-gray-300 rounded focus:ring focus:ring-[#E9D9FF]"
                    />
                    <span className="text-gray-700">{version}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Compliance Standards Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Are there any compliance standards for your planned app?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {complianceStandards.map((standard) => (
                  <label key={standard} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={standard}
                      checked={selectedCompliance.includes(standard)}
                      onChange={() =>
                        handleCheckboxChange(standard, setSelectedCompliance)
                      }
                      className="w-4 h-4 text-gray-500 border-gray-300 rounded focus:ring focus:ring-[#E9D9FF]"
                    />
                    <span className="text-gray-700">{standard}</span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Navigation Buttons */}
        <div className="m-6 flex flex-row gap-4">
          <Link
            to="/cost-calculator/5"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Prev
          </Link>
          <Link
            to="/cost-calculator/7"
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

export default Step6;
