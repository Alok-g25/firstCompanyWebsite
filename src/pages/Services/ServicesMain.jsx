import React from "react";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import WhyMarkle from "../../components/WhyMarkle";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassMinusIcon } from "@heroicons/react/20/solid";
import { PenTool, SettingsIcon } from "lucide-react";
import ServicesHero from "/src/images/services.jpeg";
const ServicesMain = () => {
  return (
    <div>
      <Hero
        bgImage={ServicesHero}
        heading={`Services We Provide`}
        content={`Empowering Businesses with Advanced IT Services and Custom Solutions.`}
      />
      <Services renderComplete={true} />
      {/*  */}

      <div className="flex flex-col items-center p-8 mx-10 relative z-0">
        <h2 className="text-2xl font-semibold text-[#330073] mb-8 font-montserrat">
          How it Works
        </h2>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 ">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64 transition-all ease-in-out duration-500 hover:scale-105 font-poppins z-0">
            <div className="bg-white text-black p-4 rounded-xl shadow-md">
              <MagnifyingGlassIcon className="text-[#330073] w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Define the problem</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We analyze your business challenges, identify inefficiencies, and
              understand your specific IT needs to develop a clear problem
              statement.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-56 z-10 top-1/2 transform -translate-y-1/2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 300 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#d8d8d8"
              transform="matrix(1.2, 0, 0, 1, 0, 0)rotate(10)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="76.8"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                  stroke="#d8d8d8"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="16 32"
                />{" "}
                <path
                  d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                  stroke="#d8d8d8"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64 transition-all ease-in-out duration-500 hover:scale-105 font-poppins z-0">
            <div className="bg-white p-4 rounded-xl shadow-md">
              {/* <img
                src="/icons/solution-icon.svg"
                alt="Develop a Solution"
                className="w-10 h-10"
              /> */}
              <SettingsIcon className="text-[#330073] w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Develop a Solution</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Our experts design and implement tailored IT solutions,
              integrating cutting-edge technology to enhance efficiency,
              security, and scalability.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block absolute right-56 top-1/2 z-10 transform -translate-y-1/2">
            <svg
              width="80"
              height="80"
              viewBox="0 -40 450 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#d8d8d8"
              transform="matrix(1.2, 0, 0, -1, 0, 0)rotate(20)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="76.8"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                  stroke="#d8d8d8"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="16 32"
                />{" "}
                <path
                  d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                  stroke="#d8d8d8"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64 transition-all ease-in-out duration-500 hover:scale-105 font-poppin z-0">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <PenTool className="text-[#330073] w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Refine</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We continuously optimize and fine-tune the solution, ensuring
              seamless performance, adaptability, and long-term success
              for your business.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <WhyMarkle />
      <Footer />
    </div>
  );
};

export default ServicesMain;
