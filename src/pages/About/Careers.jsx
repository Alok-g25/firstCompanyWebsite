import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import CareersHero from "/src/images/careers.jpeg";
const careerObj = [
  {
    name: "Motion Graphics Artist",
    duration: "0-1 Years",
    department: "Design",
    time: "Full-Time",
    id: 1,
  },
  {
    name: "Creative Director",
    duration: "8+ Years",
    department: "Content",
    time: "Full-Time",
    id: 2,
  },
  {
    name: "Business Growth Manager",
    duration: "2-4 Years",
    department: "Marketing",
    time: "Full-Time",
    id: 3,
  },
];
const Careers = () => {
  return (
    <div>
      <Hero
        bgImage={CareersHero}
        heading={`Careers at Markle`}
        content={`Explore exciting opportunities to innovate, grow, and make an impact in the tech world with Markle Tech.`}
      />

      {/* Flowbite Component */}
      <div class="">
        <div class="p-4 bg-white shadow-md sm:p-10 sm:px-32 ">
          <div class="flex justify-center items-center mb-4">
            <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-semibold text-[#330073] text-center font-montserrat">
              Careers
            </h1>
            {/* <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline "
            >
              View all
            </a> */}
          </div>
          <div class="flow-root font-poppins">
            <ul role="list" class="divide-y divide-gray-200 ">
              {careerObj.map((career) => (
                <li key={career.id} class="p-4 py-3 sm:py-4 hover:bg-gray-50">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate ">
                        {`${career.name}`} ({`${career.duration}`})
                      </p>
                      <p class="text-sm text-gray-500 truncate ">
                        {`${career.time}`}{" "}
                        <svg
                          viewBox="0 0 2 2"
                          aria-hidden="true"
                          className="mx-2 inline size-0.5 fill-current"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>{" "}
                        {`${career.department}`}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 px-3 py-1 text-sm text-[#330073] font-light text-gray backdrop-blur-3xl">
                          Apply Now
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
