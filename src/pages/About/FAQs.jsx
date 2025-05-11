import React, { useState } from "react";
import Hero from "../../components/Hero";

import { AccordionItem } from "../../components/FAQ";
import Footer from "../../components/Footer";
import faqSections from "../../data/about/faqs";

import faqsHero from "/src/images/faq-hero.jpeg";
const FAQs = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(open === id ? null : id);
  return (
    <div className="">
      {/* Hero Section */}
      <Hero
        bgImage={faqsHero}
        heading={`Markle Tech answers FAQs`}
        content={`Markle Tech answers your go-to FAQs for quick solutions, expert insights, and all the information in place`}
      />
      {/* Heading */}
      <div className="m-4 md:m-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#330073] text-center font-montserrat">
          Frequently Asked <span className="font-bold">Questions</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-lg text-center font-poppins">
          Here's a list of FAQs that will help you to know more about Markle
          Tech.
        </p>

        {Object.entries(faqSections).map(([section, faqs]) => (
          <div
            key={section}
            className="m-7 p-4 rounded-xl"
            style={{ boxShadow: "rgba(33, 11, 73, 0.15) 0px 8px 22px" }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#330073] text-center uppercase my-4 font-montserrat">
              {section.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <div>
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  open={open}
                  handleOpen={handleOpen}
                  className=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
