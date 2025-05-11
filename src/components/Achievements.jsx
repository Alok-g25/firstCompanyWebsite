import React from "react";
import { achievementsObj } from "../data/home/homepage";

const Achievements = () => {
  return (
    <div className="m-10">
      <div className="m-2">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-0 font-semibold text-[#330073] text-center font-montserrat">
          Our <span className="font-bold">Achievements</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-gray-600 text-center text-sm md:text-lg max-w-3xl mx-auto mt-2 font-poppins">
            We are empowering businesses of all sizes to achieve digital
            dominance.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap md:m-5">
        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 m-2">
          {achievementsObj.map((achievementsObj, imgIndex) => (
            <div
              key={imgIndex}
              className="w-full rounded-md transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={achievementsObj.src}
                alt={achievementsObj.alt || "Image"}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
