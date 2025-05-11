import React from "react";
import CountUp from "react-countup";
import techExperts from "/src/images/techExperts.png";
import skills from "/src/images/skills.jpeg";
import projectManagement from "/src/images/projectManagement.jpeg";
import happyClients from "/src/images/happyClients.jpeg";

const imgs = [
  {
    name: "Tech Experts on Board",
    id: 1,
    number: 250,
    content: "Tech Experts On-board",
    src: techExperts,
  },
  {
    name: "Tech Experts on Board",
    id: 2,
    number: 8,
    content: "Years Of Expertise",
    src: skills,
  },
  {
    name: "Tech Experts on Board",
    id: 3,
    number: 3350,
    content: "Projects Delivered",
    src: projectManagement,
  },
  {
    name: "Tech Experts on Board",
    id: 4,
    number: 3120,
    content: "Happy Clients",
    src: happyClients,
  },
];
const WhyChooseMarkle = () => {
  return (
    <div className="m-6">
      <h1 className="row-span-1 text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-3 font-semibold text-[#330073] text-center uppercase font-montserrat">
        Why choose <span className="font-bold"> Markle</span>?
      </h1>
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-gray-50">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 gap-x-14 m-4">
          {imgs.map((img, imgIndex) => (
            <a
              key={imgIndex}
              href="/pricing-2"
              className="relative w-48 h-48 rounded-md overflow-hidden shadow-md transform transition duration-300 cursor-default"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt || "Image"}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay (Hover Effect Added) */}
              <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 ease-in-out"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-lg px-3 text-center leading-tight font-plex">
                {/* Text Overlay */}
                <p className=" ">
                  <CountUp end={img.number} suffix="+" duration={5} />
                </p>

                <p className="">{img.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMarkle;
