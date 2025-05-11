import {
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import {
  Code2,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";
import React from "react";

import { servicesObj } from "../data/services/services";

const Services = ({ renderComplete }) => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-2 font-semibold text-[#330073] text-center font-montserrat">
          Services We Offer
        </h1>
        <div className="flex justify-evenly flex-wrap mx-6">
          {/* Conditional rendering based on if complete rendering or not */}
          {(renderComplete
            ? servicesObj.slice(0, servicesObj.length - 1)
            : servicesObj.slice(0, 8)
          ).map((service, id) => (
            <a
              key={id}
              href={service.href}
              class="group relative flex flex-col items-center shadow-sm shadow-gray-300 m-2 hover:border hover:shadow-md hover:bg-[#E9D9FF] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-72"
            >
              <div class="p-4 flex flex-col items-center">
                {service.icon ? (
                  <service.icon className="size-6 text-[#330073] mb-2" />
                ) : (
                  <Code2 className="size-6 text-[#330073] mb-2" />
                )}
                <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-gray-700 font-montserrat">
                  {service.name}
                </h5>
                <p class="text-slate-700 leading-normal text-sm text-center font-light group-hover:text-slate-600 font-poppins">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {renderComplete ? (
        ""
      ) : (
        <div className="flex justify-center items-center">
          <a
            href="/services/all-services"
            className=" px-6 py-2 bg-[#330073] text-white text-center rounded-full hover:bg-[#330073] hover:scale-105 transition duration-300 font-plex"
          >
            View More
          </a>
        </div>
      )}
    </div>
  );
};

export default Services;
