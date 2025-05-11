import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import PricingTwoHero from "/src/images/pricingPageTwo.jpeg";

//images
// import enterprise from "/src/images/pricing/pricingTwo/enterprise.jpg";
import consumer from "/src/images/pricing/pricingTwo/consumer.jpg";
import website from "/src/images/pricing/pricingTwo/website.jpg";
import aiml from "/src/images/pricing/pricingTwo/ai.jpg";
import dwh from "/src/images/pricing/pricingTwo/dwh.jpg";
import desktop from "/src/images/pricing/pricingTwo/desktop.jpg";
import erp from "/src/images/pricing/pricingTwo/erp.jpg";
import crm from "/src/images/pricing/pricingTwo/crm.jpg";
import corporate from "/src/images/pricing/pricingTwo/corporate.jpg";
import ar from "/src/images/pricing/pricingTwo/ar.jpg";
import accounting from "/src/images/pricing/pricingTwo/accounting.jpg";
import banking from "/src/images/pricing/pricingTwo/banking.jpg";
import bi from "/src/images/pricing/pricingTwo/bi.jpg";
import big from "/src/images/pricing/pricingTwo/big.jpg";
import blockchain from "/src/images/pricing/pricingTwo/blockchain.jpg";
import content from "/src/images/pricing/pricingTwo/content.jpg";
import dynamics from "/src/images/pricing/pricingTwo/dynamics.jpg";
import ecommerce from "/src/images/pricing/pricingTwo/ecommerce.jpg";
import elearning from "/src/images/pricing/pricingTwo/elearning.jpg";
import enterpriseSystem from "/src/images/pricing/pricingTwo/enterprise.jpg";
import hr from "/src/images/pricing/pricingTwo/hr.jpg";
import industry from "/src/images/pricing/pricingTwo/industry.jpg";
import insurance from "/src/images/pricing/pricingTwo/insurance.jpg";
import inventory from "/src/images/pricing/pricingTwo/inventory.jpg";
import investment from "/src/images/pricing/pricingTwo/investment.jpg";
import kiosk from "/src/images/pricing/pricingTwo/kiosk.jpg";
import lending from "/src/images/pricing/pricingTwo/lending.jpg";
import medical from "/src/images/pricing/pricingTwo/medical.jpg";
import mobile from "/src/images/pricing/pricingTwo/mobile.jpg";
import order from "/src/images/pricing/pricingTwo/order.jpg";
import otherTechnology from "/src/images/pricing/pricingTwo/other-technology.jpg";
import other from "/src/images/pricing/pricingTwo/other.jpg";
import payment from "/src/images/pricing/pricingTwo/payment.jpg";
import professional from "/src/images/pricing/pricingTwo/professional.jpg";
import retail from "/src/images/pricing/pricingTwo/retail.jpg";
import servicenow from "/src/images/pricing/pricingTwo/servicenow.jpg";
import sharepoint from "/src/images/pricing/pricingTwo/sharepoint.jpg";
import supply from "/src/images/pricing/pricingTwo/supply.jpg";
import asset from "/src/images/pricing/pricingTwo/asset.jpg";
import { Link } from "react-router";

const pricingComponentObj2 = [
  {
    heading: `By Platform`,
    desc: `Choose from our range of platform-specific solutions designed to meet your exact needs. Whether you're looking for web, mobile, or desktop applications, we deliver seamless experiences across all platforms with optimal performance and user engagement.`,
    items: [
      {
        title: "Enterprise Web App",
        src: industry,
      },
      {
        title: "Consumer-focused Web App",
        src: consumer,
      },
      {
        title: "Website",
        src: website,
      },
      {
        title: "Mobile Application",
        src: mobile,
      },
      {
        title: "DWH",
        src: dwh,
      },
      {
        title: "Desktop and other types",
        src: desktop,
      },
    ],
  },
  {
    heading: `By Business Function`,
    desc: `Transform your business operations with our function-specific software solutions. From streamlining operations to enhancing productivity, our tailored applications address every aspect of your business workflow while ensuring seamless integration across departments.`,
    items: [
      {
        title: "ERP Software",
        src: erp,
      },
      {
        title: "CRM Software",
        src: crm,
      },
      {
        title: "Supply Chain Software",
        src: supply,
      },
      {
        title: "Inventory Management Software",
        src: inventory,
      },
      {
        title: "Order Management Software",
        src: order,
      },
      {
        title: "Corporate Finance Software",
        src: corporate,
      },
      {
        title: "Accounting Software",
        src: accounting,
      },
      {
        title: "BI Software",
        src: bi,
      },
      {
        title: "Payment Software",
        src: payment,
      },
      {
        title: "HR Software",
        src: hr,
      },
      {
        title: "e-Learning Software",
        src: elearning,
      },
      {
        title: "Kiosk Software",
        src: kiosk,
      },
      {
        title: "Content Management Software",
        src: content,
      },
      {
        title: "Other",
        src: other,
      },
    ],
  },
  {
    heading: `By Industry`,
    desc: `Get industry-specific solutions that understand your unique challenges and requirements. Our specialized software is built with deep domain knowledge, ensuring compliance with industry standards while driving innovation in your sector.`,
    items: [
      {
        title: "Medical Software",
        src: medical,
      },
      {
        title: "Banking Software",
        src: banking,
      },
      {
        title: "Insurance Software",
        src: insurance,
      },
      {
        title: "Lending Software",
        src: lending,
      },
      {
        title: "Investment Software",
        src: investment,
      },
      {
        title: "E-commerce Software",
        src: ecommerce,
      },
      {
        title: "Retail Software",
        src: retail,
      },
      {
        title: "Professional Services Software",
        src: professional,
      },
      {
        title: "Other Software Types",
        src: industry,
      },
    ],
  },
  {
    heading: `By Technology`,
    desc: `Leverage cutting-edge technologies to stay ahead of the competition. Our advanced solutions incorporate the latest technological innovations, from blockchain to artificial intelligence, helping you build future-ready digital infrastructure.`,
    items: [
      {
        title: "Blockchain Software",
        src: blockchain,
      },
      {
        title: "Big Data Software",
        src: big,
      },
      {
        title: "AI-based Software",
        src: aiml,
      },
      {
        title: "AR Software",
        src: ar,
      },
      {
        title: "Asset Tokenization Software",
        src: asset,
      },
      {
        title: "Other Software Types",
        src: otherTechnology,
      },
    ],
  },
  {
    heading: `Platform-Based Solutions`,
    desc: `Maximize the potential of leading enterprise platforms with our specialized solutions. Our expertise in SharePoint, Dynamics 365, and ServiceNow helps you unlock the full capabilities of these powerful platforms for your business needs.`,
    items: [
      {
        title: "Sharepoint Software",
        src: sharepoint,
      },
      {
        title: "Dynamics 365 Software",
        src: dynamics,
      },
      {
        title: "ServiceNow Software",
        src: servicenow,
      },
    ],
  },
];
const PricingTwo = () => {
  return (
    <div className="bg-[#E9D9FF]">
      <Hero
        bgImage={PricingTwoHero}
        heading={`What software do you need to develop?`}
        content={` From custom apps to complex systems, we build software designed for your unique needs`}
      />
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-[#E9D9FF]">
        {pricingComponentObj2.map((component, index) => (
          <div
            key={index}
            className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 my-4 mx-0"
          >
            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-extrabold text-[#330073] m-4 text-center uppercase tracking-wide font-montserrat">
              {component.heading}
            </h2>

            {/* Description */}
            <p className="font-light text-lg md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed font-poppins">
              {component.desc}
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 m-4">
              {component.items?.map((img, imgIndex) => (
                <Link
                  key={imgIndex}
                  to="/cost-calculator/1"
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
      <Footer />
    </div>
  );
};

export default PricingTwo;
