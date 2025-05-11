import React, { useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";
import { Link } from "react-router";

const industries = [
  "Internal use (to support business operations or enhance client experience)",
  "Commercial distribution (offering a web software product for a fee)",
];

const Step2 = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const handleChange = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  return (
    <div>
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4 mt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-[#330073] m-3">
          Cost Calculator
        </h1>
        <h2 className="text-lg md:text-xl font-semibold m-4">
          Select Your Software Type
        </h2>
        <ProgressBar currentStep={2} />

        <div className="w-full max-w-lg px-6 py-6 m-8 bg-white shadow-md rounded-3xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            How do you plan to use your web app?
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            to="/cost-calculator/1"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Prev
          </Link>
          <Link
            to="/cost-calculator/3"
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

export default Step2;
