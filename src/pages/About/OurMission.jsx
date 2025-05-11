import React from "react";
import Hero from "/src/components/Hero.jsx";
import Footer from "/src/components/Footer";
import MissionHero from "/src/images/ourMission.jpeg";
import Mission from "/src/images/missionImage.jpeg";

const OurMission = () => {
  return (
    <div>
      <Hero
        bgImage={MissionHero}
        heading={"Our Mission"}
        content={
          "Creating Impactful Tech Solutions that Empower Businesses and Shape the Future."
        }
      />
      <div className="flex flex-col lg:flex-row justify-evenly items-center my-10 lg:my-24 mx-8 md:mx-4">
        <img
          src={Mission}
          alt="mission"
          className="rounded-2xl my-3 md:h-72"
        />
        <p className="max-w-xl text-md md:text-xl text-center lg:text-start md:mx-4 font-poppins">
          <h1 className="font-bold my-3 font-montserrat">Our Mission</h1>
          At Markle Tech & Media, our mission extends beyond delivering
          technology solutions—we aim to create meaningful change that empowers
          businesses and individuals alike. We believe that every business has a
          unique story, and our role is to translate that vision into impactful
          digital experiences that drive growth, efficiency, and engagement.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default OurMission;
