import React from "react";

const Goal = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-center mx-8 md:mx-28 lg:mx-48 xl:mx-64 my-10"> */}
      <div className="flex items-center justify-center mx-8 md:mx-28 lg:mx-48 xl:mx-64 my-10">
        <div className="relative bg-[#330073] border rounded-2xl">
          {/* <div className="absolute invisible md:visible md:right-2 md:bottom-24 lg:bottom-16 xl:bottom-12 animate-bounce">
            <img src="src\images\pink-cube.png" alt="" className="md:w-32 lg:w-40 xl:w-36 z-20" />
          </div> */}

          <p className="text-white text-center px-5 md:px-10 lg:px-12 py-5 text-sm sm:text-lg md:text-xl lg:text-2xl break-normal font-poppins">
            Our goal is to develop custom software solutions that empower
            businesses, streamline processes and provide an opportunity to
            establish as renowned brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
