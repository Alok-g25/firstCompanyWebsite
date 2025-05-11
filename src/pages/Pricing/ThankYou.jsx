import React from "react";
import AlmostDoneImg from "/src/images/pricing/almost-done.png";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ThankYou = () => (
  <div className="flex flex-col min-h-screen">
    <NavBar isBlack={true} />
    <div className="flex-grow flex items-center justify-center px-4 py-10 mt-20">
      <div className="w-full max-w-3xl p-6 bg-white text-center shadow-lg rounded-lg">
        <div className="flex justify-center items-center mb-4">
          <img
            src={AlmostDoneImg}
            alt="Almost Done"
            className="w-24 sm:w-32 h-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#330073] mb-2">
          Thanks For Sharing Your Needs With Us!
        </h2>
        <p className="text-gray-700 mb-4">
          You Will Receive The Estimate For Your Project Within 24 Hours.
          <br /> It's Non-Binding And Absolutely Free.
        </p>
        <h3 className="text-lg font-semibold text-left mb-2">
          Sample Costs Ranges:
        </h3>
        <ul className="text-gray-700 text-left mb-6 space-y-1">
          <li>$50,000–$250,000 For An Average Enterprise Web App</li>
          <li>$200,000–$600,000 For A Specialized Business Solution</li>
          <li>
            $800,000–$4,000,000 For A Large-Scale Process Automation System
            Powered With Advanced Techs
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-3 border rounded w-full"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="p-3 border rounded w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded w-full"
          />
        </div>
        <button className="mt-6 w-full bg-[#330073] text-white py-3 rounded-lg hover:bg-[#E9D9FF] hover:text-gray-700 transition">
          Submit
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default ThankYou;
