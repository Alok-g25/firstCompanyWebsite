import { motion } from "motion/react";
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";

const SolutionsCommon = ({ obj }) => {
  return (
    <div>
      <Hero heading={obj.title} bgImage={obj.src} content={obj.description} />
      <div className="min-h-screen bg-[#E9D9FF] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white text-[#330073] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-4xl w-full border transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
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
            {obj.extendedContent}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {obj.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#330073] to-[#6C4AB6] text-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:bg-white hover:scale-105 font-poppins"
              >
                <h2 className="text-xl font-bold mb-2 text-center sm:text-left">
                  {section.title}
                </h2>
                <p className="text-md leading-relaxed text-justify">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SolutionsCommon;
