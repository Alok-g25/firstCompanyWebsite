import React, { useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";
import { Link } from "react-router";

const industries = [
  "Healthcare",
  "Banking, Financial Services, and Insurance",
  "Manufacturing",
  "Transportation",
  "Retail and wholesale",
  "Oil and gas",
  "Professional services",
  "Telecommunications",
  "Engineering & Construction",
  "Utilities",
  "Public sector",
  "Real Estate",
  "Entertainment",
  "Information technologies",
  "Multi-industry",
];

const Step1 = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const handleChange = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Industries:", selectedIndustries);
  };

  return (
    <div className="">
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4 sm:p-6 lg:p-8 mt-20 min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#330073] m-3 text-center">
          Cost Calculator
        </h1>
        {/* <h2 className="text-lg sm:text-xl font-semibold m-4 text-center">
          Select Your Software Type
        </h2> */}

        <ProgressBar currentStep={1} />

        <div className="w-full sm:w-4/5 lg:w-1/2 px-6 py-6 m-8 bg-white shadow-md rounded-3xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            What is your industry?
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <label key={industry} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={industry}
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleChange(industry)}
                    className="w-4 h-4 text-[#330073] border-gray-300 rounded focus:ring focus:ring-blue-200"
                  />
                  <span className="text-gray-700">{industry}</span>
                </label>
              ))}
            </div>
          </form>
        </div>

        <div className="m-6 flex flex-row gap-4">
          <Link
            to="/cost-calculator/2"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full transition-all text-center"
          >
            Next
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Step1;
