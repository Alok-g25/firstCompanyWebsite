import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";

const ServicesCommon = ({ obj }) => {
  const [scrolled, setScrolled] = useState(false);

  // When scrollY > 200, we update state to trigger our layout change.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <Hero heading={obj.title} bgImage={obj.src} content={obj.description} />

      <div
        className={`min-h-screen bg-[#E9D9FF] flex items-center justify-center transition-all duration-500 ease-in-out py-10 px-4 sm:px-6 lg:px-8 ${
          scrolled ? "flex-row" : "flex-col"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`bg-white text-[#330073] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-3xl w-full border hover:shadow-3xl transition-transform duration-500 ease-in-out ${
            scrolled ? "-translate-x-10" : "translate-x-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 ">
            {/* <span className="text-5xl sm:text-6xl drop-shadow-lg">
              {obj.icon}
            </span> */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-center sm:text-left font-montserrat">
              {obj.title}
            </h1>
          </div>

          {/* <p className="mb-4 text-lg sm:text-xl font-semibold text-center sm:text-left">
          {obj.description}
        </p> */}

          <p className="mb-4 text-md sm:text-lg leading-relaxed text-justify font-poppins">
            {obj.details}
          </p>

          <p className="mb-4 text-md sm:text-lg leading-relaxed text-justify font-poppins">
            {obj.extendedContent}
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
            {obj.keywords.map((keyword, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-[#330073] text-white px-4 py-2 text-sm rounded-full shadow-md hover:bg-white hover:text-[#330073] transition-colors duration-200 cursor-pointer border border-[#330073] font-plex"
              >
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesCommon;
