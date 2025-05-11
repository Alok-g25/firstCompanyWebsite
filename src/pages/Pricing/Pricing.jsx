import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

//hero
import PricingHero from "/src/images/pricing.jpeg";

//images
import web from "/src/images/pricing/web.jpeg";
import crm from "/src/images/pricing/crm.jpeg";
import bfsi from "/src/images/pricing/bfsi.jpeg";
import aiml from "/src/images/pricing/aiml.jpeg";
import sharepoint from "/src/images/pricing/sharepoint.jpeg";
import dataManagement from "/src/images/pricing/data-management.jpg";
import dataAnalytics from "/src/images/pricing/data-analytics.jpg";
import dataVisualization from "/src/images/pricing/data-visualization.jpg";
import dataWarehouse from "/src/images/pricing/data-warehouse.jpg";
import helpDesk from "/src/images/pricing/help-desk.jpg";
import complianceAssessment from "/src/images/pricing/compliance-assessment.jpg";
import dataScience from "/src/images/pricing/data-science.jpg";
import itConsulting from "/src/images/pricing/it-consulting.jpg";
import itInfrastructure from "/src/images/pricing/it-infrastructure.jpg";
import bigData from "/src/images/pricing/big-data.jpg";
import cloudMigration from "/src/images/pricing/cloud-migration.jpg";
import qaConsulting from "/src/images/pricing/qa-consulting.jpg";
import securityTesting from "/src/images/pricing/security-testing.jpg";
import siemImplementation from "/src/images/pricing/siem-implementation.jpg";
import softwareMaintenance from "/src/images/pricing/software-maintenance.jpg";
import softwareTesting from "/src/images/pricing/software-testing.jpg";
import staffAugmentation from "/src/images/pricing/staff-augmentation.jpg";
import { Link } from "react-router";

// Click on the card to reach the cost calculator for your required solution type (30+ options to choose from)

const pricingComponentObj = [
  {
    heading: `Software Development Cost Calculators`,
    desc: `Explore our comprehensive cost calculators for custom software development across multiple platforms and industries. Get instant, transparent pricing estimates tailored to your specific requirements, helping you plan your project budget effectively.`,
    items: [
      {
        title: "Web, Mobile, Desktop, DWH",
        src: web,
      },
      {
        title: "ERP, CRM, SCM, accounting, etc.",
        src: crm,
      },
      {
        title: "BFSI, Healthcare, Retail, & Other",
        src: bfsi,
      },
      {
        title: "AI/ML, AR, Blockchain, And More",
        src: aiml,
      },
      {
        title: "SharePoint, ServiceNow, Dynamics 365",
        src: sharepoint,
      },
    ],
  },
  {
    heading: `Data Analytics Cost Calculators`,
    desc: `Calculate costs for transforming your raw data into actionable insights. Our advanced analytics solutions help you harness the power of your data through efficient management, visualization, and analysis tools, all with predictable pricing.`,
    items: [
      {
        title: "Data management services",
        src: dataManagement,
      },
      {
        title: "Data analytics & BI implementation",
        src: dataAnalytics,
      },
      {
        title: "Big data consulting and implementation",
        src: bigData,
      },
      {
        title: "Data science services",
        src: dataScience,
      },
      {
        title: "Data warehouse services",
        src: dataWarehouse,
      },
      {
        title: " Data visualization services",
        src: dataVisualization,
      },
    ],
  },
  {
    heading: `Managed IT Service Cost Calculators`,
    desc: `Get precise cost estimates for comprehensive IT management services. Our transparent pricing model includes detailed SLAs, ensuring you receive reliable, high-quality IT support while maintaining complete visibility of your investment.`,
    items: [
      {
        title: "Software maintenance",
        src: softwareMaintenance,
      },
      {
        title: "IT Infrastructure Management",
        src: itInfrastructure,
      },
      {
        title: "Help Desk Services",
        src: helpDesk,
      },
      {
        title: "Cloud Migration",
        src: cloudMigration,
      },
    ],
  },
  {
    heading: `QA and Cyber Security Cost Calculators`,
    desc: `Calculate investment requirements for ensuring your software's quality and security. From comprehensive testing to compliance assessments, our calculators help you understand the costs of protecting your digital assets and maintaining high standards.`,
    items: [
      {
        title: "QA Consulting",
        src: qaConsulting,
      },
      {
        title: "Software Testing",
        src: softwareTesting,
      },
      {
        title: "Security Testing",
        src: securityTesting,
      },
      {
        title: "Compliance assessment: HIPAA, PCI, etc.",
        src: complianceAssessment,
      },
      {
        title: "SIEM Implementation",
        src: siemImplementation,
      },
    ],
  },
  {
    heading: `Other Cost Calculators`,
    desc: `Estimate costs for specialized IT services including strategic consulting and skilled staff augmentation. Our calculators provide clear pricing insights for additional services that can enhance your technology initiatives and team capabilities.`,
    items: [
      {
        title: "IT Consulting",
        src: itConsulting,
      },
      {
        title: "Staff Augmentation",
        src: staffAugmentation,
      },
    ],
  },
];
const Pricing = () => {
  return (
    <div className="bg-[#E9D9FF]">
      <Hero
        bgImage={PricingHero}
        heading={`how much will your project cost?`}
        content={`Pricing is customized to fit your unique project requirements. Contact us for a detailed estimate! \n Click on any card to reach the cost calculator for your required solution type.`}
      />
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-[#E9D9FF]">
        {pricingComponentObj.map((component, index) => (
          <div
            key={index}
            className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 my-4 mx-0"
          >
            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-extrabold text-[#330073] m-4 text-center uppercase tracking-wide font-montserrat">
              {component.heading}
            </h2>

            {/* Description */}
            <p className="font-light text-lg md:text-xl text-gray-600 text-justify md:text-center p-4 leading-relaxed font-poppins">
              {component.desc}
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 m-4">
              {component.items?.map((img, imgIndex) => (
                <Link
                  key={imgIndex}
                  to="/pricing-2"
                  className="relative w-52 h-52 md:w-48 md:h-48 cursor-pointer rounded-xl overflow-hidden shadow-md transform transition duration-300 group hover:scale-105"
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.alt || "Image"}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay (Hover Effect Added) */}
                  <div className="absolute inset-0 bg-black group bg-opacity-50 group-hover:bg-opacity-65 transition duration-300 ease-in-out"></div>

                  {/* Text Overlay */}
                  <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg px-3 text-center leading-tight font-plex">
                    {img.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-[#E9D9FF]">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 my-4 mx-0">
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-extrabold text-[#330073] m-4 text-center uppercase tracking-wide font-montserrat">
            Pricing Models We Rely On
          </h2>

          {/* Description */}
          <p className="font-medium text-md md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed font-poppins">
            Markle offers flexible pricing models tailored to the cooperation
            scope and the client’s budget limitations. Depending on the required
            services, we employ time and materials (T&M), time and materials
            (T&M) with a cap, fixed-price, subscription-based,
            per-ticket, or mixed model. Explore our dedicated page to learn how
            we select an optimal pricing model for each particular case.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-[#E9D9FF]">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 my-4 mx-0">
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-extrabold text-[#330073] m-4 text-center uppercase tracking-wide font-montserrat">
            Check Our Sample Estimates
          </h2>

          {/* Description */}
          <p className="font-medium text-md md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed font-poppins">
            The estimates provided here are not ScienceSoft's official pricing.
            We assess the cost of each project individually, based on our
            clients' specific situations and needs. Feel free to use our cost
            calculators to estimate the cost of your project.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
