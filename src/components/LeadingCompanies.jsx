import React from "react";
import { LeadingCompaniesImg } from "../data/home/homepage";

const LeadingCompanies = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 max-w-full mx-10 md:mx-20 md:my-8">
        <div className="md:px-6 col-span-1">
          <hr class="w-28 h-1 my-4 bg-gray-100 border-0 rounded mx-auto md:mx-0 md:my-5 dark:bg-gray-700"></hr>
          <h1 className="row-span-1 text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-3 font-semibold text-[#330073] font-montserrat">
            Leading companies trust us{" "}
            <span className="font-bold lg:block"> to develop software</span>
          </h1>
          <p className="row-span-1 text-lg sm:text-xl md:text-xl md:pt-3 text-left font-poppins">
            We <span className="text-[#330073]">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <div className="row-span-1 my-4">
            <a
              href="/about/company"
              className=" text-[#330073] hover:text-[#330059] font-semibold font-plex"
            >
              See More Information &rarr;
            </a>
          </div>
        </div>
        <div className="my-4 md: px-4">
          <img
            src={LeadingCompaniesImg}
            alt=""
            className="border rounded-2xl"
          />
        </div>
      </div>
      <hr class="w-28 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700"></hr>
    </div>
  );
};

export default LeadingCompanies;
