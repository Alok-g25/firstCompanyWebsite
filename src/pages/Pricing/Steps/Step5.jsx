import React, { useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";
import { Link } from "react-router";

const industries = [
  "Diverse formats for content output (e.g., XML, PDF)",
  "Content search and retrieval",
  "Content recognition (e.g., OCR, barcode recognition)",
  "Electronic forms processing",
  "Access management",
  "Tools for employee collaboration on content",
  "Content workflow management",
  "Built-in SEO tools",
  "AI-powered auto-tagging and metadata creation",
  "Multilanguage support",
  "Versioning",
  "Audit trail",
  "Content archiving",
  "Backup and recovery",
  "AI-driven content personalization",
  "Various distribution channels (e.g., email, social media)",
  "Security technologies (e.g., electronic signature)",
];

const Step5 = () => {
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
    <div>
      <NavBar isBlack={true} />
      <div className="flex flex-col items-center bg-gray-50 p-4 mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#330073] m-3">
          Cost Calculator
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold m-4">
          Select Your Software Type
        </h2>
        <ProgressBar currentStep={5} />

        <div className="w-full max-w-lg sm:max-w-xl px-6 py-6 m-8 sm:px-10 bg-white shadow-md rounded-3xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            What software type do you need assistance with?
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
                  <span className="px-2 text-gray-700">{industry}</span>
                </label>
              ))}
            </div>
            {/* <button
              type="submit"
              className="mt-4 w-full bg-[#330073] text-gray-50 py-2 px-4 rounded-lg hover:bg-[#E9D9FF] hover:text-gray-700 transition"
            >
              Submit
            </button> */}
          </form>
        </div>

        {/* Navigation Buttons */}
        <div className="m-6 flex flex-row gap-4">
          <Link
            to="/cost-calculator/4"
            className="px-6 py-2 text-white bg-[#330073] hover:bg-[#E9D9FF] hover:text-gray-700 rounded-full text-center w-full"
          >
            Prev
          </Link>
          <Link
            to="/cost-calculator/6"
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

export default Step5;
