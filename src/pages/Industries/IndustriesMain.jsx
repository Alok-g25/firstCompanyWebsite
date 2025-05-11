import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { motion } from "motion/react";
import industriesHero from "/src/images/industries/industries.jpeg";
import manufacturingImg from "/src/images/industries/manufacturing.jpeg";
import automotive from "/src/images/industries/automotive.jpeg";
import education from "/src/images/industries/education.jpeg";
import agritech from "/src/images/industries/agritech.jpeg";
import mediaAndEntertainment from "/src/images/industries/media-and-entertainment.jpg";
import fintech from "/src/images/industries/fintech.jpg";
import travelAndHospitality from "/src/images/industries/travel-and-hospitality.jpg";
import transportationAndLogi from "/src/images/industries/transportation-and-logi.avif";
import retail from "/src/images/industries/retail.jpg";
import oilAndGas from "/src/images/industries/oil-and-gas.webp";
import healthcare from "/src/images/industries/healthcare.webp";
import compliance from "/src/images/industries/compliance.png";
import banking from "/src/images/industries/banking.webp";
import insurance from "/src/images/industries/insurance.jpg";
import ecommerce from "/src/images/industries/ecommerce.jpg";
import realEstate from "/src/images/industries/real-estate.webp";
import astro from "/src/images/industries/astrology.avif";
import { Link } from "react-router";

const allIndustriesObj = [
  {
    name: `manufacturing`,
    description: `Our manufacturing solutions integrate the latest technology to streamline production processes, optimize resources, and reduce costs. We provide automation, data analytics, and IoT-enabled solutions to help you meet industry standards and drive innovation.`,
    src: manufacturingImg,
    href: "/industries/manufacturing",
    id: 1,
  },
  {
    name: `automotive`,
    description: `We support the automotive industry with advanced technology solutions that enhance both manufacturing and mobility services. From autonomous driving systems to supply chain optimization, we deliver solutions that keep your business at the forefront of innovation.`,
    src: automotive,
    href: "/industries/automotive",
    id: 2,
  },
  {
    name: `Education & e-learning`,
    description: `Our e-learning platforms leverage AI and interactive technologies to make learning accessible, engaging, and efficient. We support schools, universities, and corporate training programs with solutions that facilitate remote learning and improve educational outcomes.`,
    src: education,
    href: "/industries/education",
    id: 3,
  },
  // {
  //   name: `agritech`,
  //   description: `In agritech, we empower farmers and agribusinesses with technology solutions that boost productivity, enhance resource management, and promote sustainability. Our tools include precision farming, crop monitoring, and supply chain tracking.`,
  //   src: agritech,
  //   href: "/industries/manufacturing",
  //   id: 4,
  // },
  {
    name: `Media & Entertainment`,
    description: `We create cutting-edge media and entertainment solutions, from content creation and distribution to audience analytics and engagement. Our technology enables seamless streaming, personalized experiences, and optimized workflows for media production companies.`,
    src: mediaAndEntertainment,
    href: "/industries/media-and-entertainment",
    id: 5,
  },
  {
    name: `Fintech`,
    description: `Our fintech solutions transform the financial services sector with secure and scalable platforms for payments, lending, digital banking, and blockchain. We help businesses modernize their financial services with a focus on security, compliance, and user experience.`,
    src: fintech,
    href: "/industries/finance-and-fintech",
    id: 6,
  },
  {
    name: `Travel & Hospitality`,
    description: `We elevate travel and hospitality experiences with our custom solutions for booking, customer service, and hospitality management. Our technology helps you create memorable experiences for travelers while optimizing backend operations and customer engagement.`,
    src: travelAndHospitality,
    href: "/industries/travel-and-hospitality",
    id: 7,
  },
  {
    name: `Transportation & Logistics`,
    description: `Our logistics solutions streamline transportation management, fleet tracking, and supply chain coordination. We empower companies to enhance operational efficiency, reduce costs, and ensure timely delivery through advanced analytics and IoT integrations.`,
    src: transportationAndLogi,
    href: "/industries/transportation-and-logistics",
    id: 8,
  },
  {
    name: `Retail and E-commerce`,
    description: `Our retail technology solutions improve customer engagement and streamline inventory management. We help retailers enhance their online and in-store experiences with personalized recommendations, POS systems, and real-time inventory tracking.`,
    src: retail,
    href: "/industries/retail-and-ecommerce",
    id: 9,
  },
  {
    name: `Oil and Gas`,
    description: `In the oil and gas sector, we provide solutions for data management, predictive maintenance, and safety compliance. Our technology helps companies improve operational efficiency, enhance safety, and minimize environmental impact.`,
    src: oilAndGas,
    href: "/industries/oil-and-gas",
    id: 10,
  },
  {
    name: `Healthcare`,
    description: `We develop healthcare solutions focused on patient management, diagnostics, and data security. Our technology supports telemedicine, electronic health records, and diagnostic tools to improve patient outcomes and streamline healthcare processes.`,
    src: healthcare,
    href: "/industries/health-and-wellness",
    id: 11,
  },
  // {
  //   name: `Compliance`,
  //   description: `Our compliance solutions ensure your business adheres to regulatory standards with automated reporting, risk assessment, and data management. We help you navigate complex regulatory environments with ease and accuracy.`,
  //   src: compliance,
  //   href: "/industries/compliance",
  //   id: 12,
  // },
  {
    name: `Banking`,
    description: `Our digital banking solutions modernize financial institutions with secure and innovative platforms for transactions, customer management, and fraud detection. We help banks improve customer satisfaction and streamline operations.`,
    src: banking,
    href: "/industries/banking",
    id: 13,
  },
  {
    name: `Insurance`,
    description: `Our insurance technology solutions support claims management, customer service, and data analytics. We help insurers optimize processes, enhance customer engagement, and leverage data for better decision-making.`,
    src: insurance,
    href: "/industries/insurance",
    id: 14,
  },
  // {
  //   name: `E-commerce`,
  //   description: `Our e-commerce solutions enhance online retail with intuitive interfaces, secure payment systems, and personalized product recommendations. We help businesses create seamless shopping experiences that drive customer satisfaction and loyalty.`,
  //   src: ecommerce,
  //   href: "/industries/retail-and-ecommerce",
  //   id: 15,
  // },
  {
    name: `Real estate`,
    description: `We enable real estate businesses with solutions for property management, virtual tours, and customer relationship management. Our technology helps streamline transactions, enhance property listings, and improve client interactions.`,
    src: realEstate,
    href: "/industries/real-estate-and-construction",
    id: 16,
  },
  {
    name: `Astrology and Horoscope`,
    description: `Our astrology solutions offer personalized readings, horoscope predictions, and other astrological services for users. We provide a platform for astrologers to connect with clients and deliver tailored experiences.`,
    src: astro,
    href: "/industries/astrology-and-horoscope",
    id: 17,
  },
];
const IndustriesMain = () => {
  return (
    <div className="bg-[#E9D9FF]">
      <Hero
        heading={`industries we serve`}
        bgImage={industriesHero}
        content={`Providing Tailored IT Solutions to Healthcare, Finance, Retail, and Beyond.`}
      />
      <div className="space-y-6 px-4 m-6">
        {allIndustriesObj.map((industry) => (
          <Link to={industry.href} key={industry} className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center rounded-2xl p-6 max-w-6xl mx-auto shadow-xl bg-gray-50 hover:bg-gray-200 transition-colors duration-200"
            >
              {/* Image Section */}
              <div
                className={`w-full md:w-1/2 mb-4 md:mb-0 ${
                  industry % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <img
                  src={industry.src}
                  alt={industry.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              {/* Text Section */}
              <div
                className={`w-full md:w-1/2 text-center md:text-left ${
                  industry % 2 === 0
                    ? "md:order-2 md:pl-6"
                    : "md:order-1 md:pr-6"
                }`}
              >
                <h2 className="text-2xl font-bold text-purple-900 mb-4 uppercase font-montserrat">
                  {industry.name}
                </h2>
                <p className="text-lg text-gray-800 font-poppins">{industry.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IndustriesMain;
