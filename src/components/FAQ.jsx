import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "motion/react";
import faqSections from "../data/about/faqs";

const faqObj = [
  {
    id: 1,
    question:
      "Why should I choose Markle for software engineering, consulting, and outsourcing?",
    answer: `We are a highly experienced and qualified team of professionals with a proven track record of delivering quality software solutions to clients. Here are a few reasons to choose us:
    65+ software developers
    Expertise in different technologies
    Strong reputation for quality work
    Experience working on complex projects for different industry verticals`,
  },
  {
    id: 2,
    question:
      "Can I test the services of Markle before committing to long-term engagement?",
    answer: `You can test the services of Markle before committing to long-term engagement. We offer free trial to clients worldwide. This is to give our potential customers a risk-free way to try our software development services before committing to long-term engagement. We strongly believe in our products and services and want to allow everyone to experience firsthand the value we can bring.
    Just fill out a form and connect with our team immediately. We hope you’ll take advantage of this and give us a chance to show you what we can do.`,
  },
  {
    id: 3,
    question: "How much does outsourcing software development to India cost?",
    answer: `The cost of outsourcing software development depends on several factors such as the size and build of the application, the features & third-party integrations, APIs, animations, localizations, backend, cross-platform toolsets, platforms, etc.
    If you share your basic idea, we can provide you with an ETA and estimated cost.`,
  },
  {
    id: 4,
    question:
      "I own a digital agency. Do you offer white-label software development services?",
    answer: `Yes, we provide all types of white-label software development services, including business-to-business (B2B), business-to-customer (B2C), and software-as-a-service (SaaS). Get in touch with our experts to know more about white-label software services.
    We believe in complete transparency and collaboration with our clients regarding white-label software development. We understand that every business has unique requirements and needs, and we work closely with our clients to ensure that we meet all their specific needs. We also offer 24/7 support and maintenance services to ensure that our client’s businesses always run smoothly.`,
  },
  {
    id: 5,
    question: "What is the pricing structure for your services?",
    answer:
      "Our pricing structure is flexible and based on the specific needs of your project.",
  },
  {
    id: 6,
    question: "Are there any additional fees beyond the quoted price?",
    answer:
      "No, all fees are discussed upfront to ensure transparency and avoid any surprises.",
  },
  {
    id: 7,
    question: "Do you offer discounts for long-term projects?",
    answer:
      "Yes, we offer discounts for long-term commitments. Please contact us for details.",
  },
  {
    id: 8,
    question: "Can I customize the pricing plan to fit my budget?",
    answer:
      "Absolutely! We work with clients to create pricing options that fit their budgetary needs.",
  },
  {
    id: 9,
    question: "Is there a deposit required to start a project?",
    answer:
      "Yes, a deposit is typically required to secure project resources and timeline commitments.",
  },
  {
    id: 10,
    question: "Do you have any subscription or retainer options?",
    answer:
      "Yes, we offer retainer options for ongoing support and maintenance. Please inquire for more details.",
  },
  {
    id: 11,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, bank transfers, and other secure payment options.",
  },
  {
    id: 12,
    question: "What information should I prepare for our initial discussion?",
    answer:
      "Please provide a brief overview of your project goals and any relevant details.",
  },
  {
    id: 13,
    question: "Can I see a portfolio of your previous projects?",
    answer:
      "Yes, we have a portfolio available to showcase our past work and success stories.",
  },
  {
    id: 14,
    question: "How long does the initial consultation usually take?",
    answer:
      "The initial consultation typically lasts 30–60 minutes, depending on your project needs.",
  },
  {
    id: 15,
    question: "Is there any cost for the initial consultation?",
    answer:
      "No, the initial consultation is free to help us understand your project requirements.",
  },
  {
    id: 16,
    question:
      "What kind of questions should I prepare for the initial discussion?",
    answer:
      "Think about questions regarding timelines, budget, and any specific project requirements.",
  },
  {
    id: 17,
    question: "Can we discuss potential challenges for my project?",
    answer:
      "Yes, we can identify possible challenges and strategize ways to address them.",
  },
  {
    id: 18,
    question:
      "How do you handle confidential information in the initial discussion?",
    answer:
      "We respect client confidentiality and can sign an NDA if necessary to protect your ideas.",
  },
  {
    id: 19,
    question: "What information should I prepare for our initial discussion?",
    answer:
      "Please provide a brief overview of your project goals and any relevant details.",
  },
  {
    id: 20,
    question: "Can I see a portfolio of your previous projects?",
    answer:
      "Yes, we have a portfolio available to showcase our past work and success stories.",
  },
  {
    id: 21,
    question: "How long does the initial consultation usually take?",
    answer:
      "The initial consultation typically lasts 30–60 minutes, depending on your project needs.",
  },
  {
    id: 22,
    question: "Is there any cost for the initial consultation?",
    answer:
      "No, the initial consultation is free to help us understand your project requirements.",
  },
  {
    id: 23,
    question:
      "What kind of questions should I prepare for the initial discussion?",
    answer:
      "Think about questions regarding timelines, budget, and any specific project requirements.",
  },
  {
    id: 24,
    question: "Can we discuss potential challenges for my project?",
    answer:
      "Yes, we can identify possible challenges and strategize ways to address them.",
  },
  {
    id: 25,
    question:
      "How do you handle confidential information in the initial discussion?",
    answer:
      "We respect client confidentiality and can sign an NDA if necessary to protect your ideas.",
  },
  {
    id: 26,
    question: "What are the first steps to start a project with you?",
    answer:
      "The first step is to schedule an initial consultation to discuss your needs.",
  },
  {
    id: 27,
    question: "How soon can we start after the initial discussion?",
    answer:
      "We can start within a week of finalizing the project scope and agreement terms.",
  },
  {
    id: 28,
    question: "Do you require a contract to begin work?",
    answer:
      "Yes, we require a signed agreement to ensure both parties are aligned on expectations.",
  },
  {
    id: 29,
    question: "Can you assist with initial project planning?",
    answer:
      "Absolutely! We provide guidance on project planning and key milestones from the start.",
  },
  {
    id: 30,
    question: "How do you determine project timelines?",
    answer:
      "We create timelines based on project scope, complexity, and our prior experience with similar projects.",
  },
  {
    id: 31,
    question: "What information will I need to provide to get started?",
    answer:
      "We’ll need details on project objectives, your target audience, and any existing content or resources.",
  },
  {
    id: 32,
    question:
      "What is the typical timeframe for getting a project off the ground?",
    answer:
      "Most projects begin within 1–2 weeks after the initial consultation and contract signing.",
  },
  {
    id: 33,
    question: "What methods do you use for service delivery?",
    answer:
      "We use various project management tools to ensure timely delivery.",
  },
  {
    id: 34,
    question: "Can I track the progress of my project?",
    answer:
      "WYes, we provide regular updates and use tools that allow you to monitor progress.",
  },
  {
    id: 35,
    question: "Can I track the progress of my project?",
    answer:
      "Yes, we provide regular updates and use tools that allow you to monitor progress.",
  },
  {
    id: 36,
    question: "What if I need changes after delivery?",
    answer:
      "We offer a revision period post-delivery to accommodate any adjustments you may need.",
  },
  {
    id: 37,
    question: "Do you provide training for delivered services or products?",
    answer:
      "Yes, training is available as part of our post-delivery support package.",
  },
  {
    id: 38,
    question: "How will I receive the final deliverables?",
    answer:
      "Deliverables are typically provided digitally, through secure file-sharing platforms or direct transfer.",
  },
  {
    id: 39,
    question: "What communication channels do you use during delivery?",
    answer:
      "WWe communicate via email, project management tools, and scheduled meetings to ensure you’re informed.",
  },
  {
    id: 40,
    question: "Do you offer post-delivery support?",
    answer:
      "Yes, we provide ongoing support for a defined period to ensure everything runs smoothly.",
  },
  {
    id: 41,
    question: "How do you ensure high service quality?",
    answer:
      "We conduct regular reviews and implement feedback to improve our services.",
  },
  {
    id: 42,
    question: "Do you have a quality assurance process?",
    answer:
      "Yes, we follow a rigorous QA process, including testing and client feedback at each stage.",
  },
  {
    id: 43,
    question: "Can I provide feedback during the project?",
    answer:
      "Absolutely. We encourage ongoing feedback to ensure the final product meets your expectations.",
  },
  {
    id: 44,
    question: "What happens if I'm not satisfied with the quality of work?",
    answer:
      "We strive for excellence and will make necessary adjustments to ensure client satisfactio",
  },
  {
    id: 46,
    question: "How do you handle bugs or issues that arise after delivery?",
    answer:
      "We offer a warranty period post-delivery to address any issues or bugs that may appear.",
  },
  {
    id: 47,
    question: "Do you conduct user testing before final delivery?",
    answer:
      "Yes, user testing is part of our QA process to ensure a high-quality user experience.",
  },
  {
    id: 48,
    question: "Can I expect regular quality updates and improvements?",
    answer:
      "For long-term projects, we provide regular quality reviews and updates as part of our service.",
  },
  {
    id: 49,
    question: "How do you handle intellectual property rights?",
    answer:
      "We ensure all intellectual property rights are respected and legally documented.",
  },
  {
    id: 50,
    question: "Will I own the final product?",
    answer:
      "Yes, all ownership rights are transferred to you upon project completion and payment.",
  },
  {
    id: 51,
    question: "Do you sign non-disclosure agreements (NDAs)?",
    answer:
      "Yes, we are open to signing NDAs to ensure confidentiality of your project information",
  },
  {
    id: 52,
    question: "How do you protect my proprietary information?",
    answer:
      "We take privacy seriously, using secure systems and procedures to protect your data.",
  },
  {
    id: 53,
    question: "Will any part of the project be used in your portfolio?",
    answer:
      "Only with your permission. We respect client privacy and only showcase approved work.",
  },
  {
    id: 54,
    question: "How are intellectual property disputes handled?",
    answer:
      "We resolve disputes through open communication and adhere to all legal agreements in place.",
  },
  {
    id: 55,
    question:
      "Can I retain rights to any proprietary tools developed during the project?",
    answer:
      "Yes, we discuss all ownership rights upfront, including proprietary tools or software developed.",
  },
];

// Accordion
export const AccordionItem = ({ item, open, handleOpen }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);
  
  return (
    <Accordion
      open={open === item.id}
      className={`mb-1 p-4 md:p-1 rounded-lg border border-blue-gray-100 md:px-6 transition-all duration-300 ease-in-out font-poppins ${
        open === item.id ? " bg-[#330073]" : " bg-[#E9D9FF] hover:bg-[#C3A6FF]"
      }`}
    >
      <div
        onClick={() => handleOpen(item.id)}
        className="flex cursor-pointer items-center justify-between transition-all duration-500 ease-in-out"
      >
        <AccordionHeader
          className={`border-b-0 text-sm sm:text-lg md:text-lg transition-all ease-in-out ${
            open === item.id ? "text-white" : "text-[#330073]"
          }`}
        >
          {item.question}
        </AccordionHeader>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={open === item.id ? "#fff" : "#330073"}
          className="size-8 ml-1 sm:size-11 md:size-14 md:mx-2 md:mb-1"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: open === item.id ? 0 : 90,
          }}
          transition={{ duration: 0.3 }}
        >
          <path
            fillRule="evenodd"
            d={
              open === item.id
                ? "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            }
            clipRule="evenodd"
          />
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {open === item.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <AccordionBody className="py-2 sm:pe-12 text-md sm:text-lg font-light md:font-normal text-white">
              {item.answer}
            </AccordionBody>
          </motion.div>
        )}
      </AnimatePresence>
    </Accordion>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => setOpen(open === id ? null : id);
  return (
    <div className="m-4 md:m-8">
      {/* Heading */}
      <div className="">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-semibold text-[#330073] text-center font-montserrat">
          Frequently Asked <span className="font-bold">Questions</span>{" "}
        </h1>
        <div className="flex justify-center">
          <p className="text-gray-600 text-sm md:text-lg md:max-w-7xl text-center font-poppins">
            Here's a list of FAQs that will help you to know more about Markle
            Tech.
          </p>
        </div>

        {/* Accordion for FAQs */}
        <div className="m-4">
          {faqSections["About Markle"]
            .slice(0, window.innerWidth < 640 ? 3 : 5)
            .map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                open={open}
                handleOpen={handleOpen}
              />
            ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href="/about/faqs"
            className=" px-6 py-2 bg-[#3b0b7d] text-white text-center rounded-full hover:bg-[#3b0b7d] hover:scale-105 transition duration-300 font-plex"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
