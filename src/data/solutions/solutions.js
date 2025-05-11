import {
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  Bars3Icon,
  BuildingOfficeIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  DocumentCurrencyDollarIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  HeartIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PercentBadgeIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  TruckIcon,
  TvIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  BriefcaseMedical,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";

//images
import erpImg from "/src/images/solutions/solutionsHero/erp.jpg";
import crmImg from "/src/images/solutions/solutionsHero/crm.jpg";
import cmsImg from "/src/images/solutions/solutionsHero/cms.jpg";
import hrmsImg from "/src/images/solutions/solutionsHero/hrms.jpg";
import ottImg from "/src/images/solutions/solutionsHero/ott.jpg";
import supplyImg from "/src/images/solutions/solutionsHero/supply.jpg";
import fleetImg from "/src/images/solutions/solutionsHero/fleet.jpg";
import eLearningImg from "/src/images/solutions/solutionsHero/e-learning.jpg";
import eCommerceImg from "/src/images/solutions/solutionsHero/e-commerce.jpg";
import financialImg from "/src/images/solutions/solutionsHero/financial.jpg";
import projectImg from "/src/images/solutions/solutionsHero/project-management.jpg";
import webPortalsImg from "/src/images/solutions/solutionsHero/web-portals.jpg";
import operationsImg from "/src/images/solutions/solutionsHero/operations.jpg";
import hospitalImg from "/src/images/solutions/solutionsHero/hospital.jpg";

const solutionsObj = [
  {
    name: "ERP",
    // description: "Get a better understanding of your traffic",
    href: "/solutions/erp",
    icon: BuildingOfficeIcon,
  },
  {
    name: "E-learning",
    // description: "Speak directly to your customers",
    href: "/solutions/e-learning",
    icon: AcademicCapIcon,
  },
  {
    name: "CRM",
    // description: "Your customers’ data will be safe and secure",
    href: "/solutions/crm",
    icon: UserGroupIcon,
  },
  {
    name: "Operations Management System",
    // description: "Connect with third-party tools",
    href: "/solutions/operations-management-system",
    icon: Cog6ToothIcon,
  },
  {
    name: "CMS",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/cms",
    icon: DocumentTextIcon,
  },
  {
    name: "E-commerce",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/e-commerce",
    icon: ShoppingCartIcon,
  },
  {
    name: "Supply Chain Management",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/supply-chain-management",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Web Portals",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/web-portals",
    icon: GlobeAltIcon,
  },
  {
    name: "OTT Platform",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/ott",
    icon: TvIcon,
  },
  {
    name: "Fleet Management",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/fleet-management",
    icon: TruckIcon,
  },
  {
    name: "Financial Management",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/financial-management",
    icon: DocumentCurrencyDollarIcon,
  },
  {
    name: "Project Management System",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/project-management",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "HRMS",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/hrms",
    icon: UserIcon,
  },
  {
    name: "Hospital Management System",
    // description: "Build strategic funnels that will convert",
    href: "/solutions/hospital-management-system",
    icon: BriefcaseMedical,
  },
  // {
  //   name: "View All Products",
  //   // description: "Build strategic funnels that will convert",
  //   href: "/our-products",
  //   icon: EllipsisHorizontalIcon,
  // },
];

// const solutions = [
//   {
//     name: "Enterprise Resource Planning (ERP)",
//     description: "Comprehensive ERP solutions to streamline business processes and improve operational efficiency.",
//     details: "Our ERP systems integrate key business functions like finance, HR, supply chain, and inventory into a single unified platform.",
//     extendedContent: "We design scalable ERP solutions tailored to your business needs, ensuring seamless workflow automation, data accuracy, and real-time reporting. Our ERP systems enhance collaboration, optimize resource planning, and drive operational efficiency. With cloud-based integration, role-based access controls, and customizable modules, businesses can effectively manage their operations, finances, and human resources from a centralized platform.",
//     keywords: [
//       "Business Process Automation", "Finance Management", "Supply Chain",
//       "Inventory Control", "HR & Payroll", "Data Analytics", "Cloud-Based ERP",
//       "Workflow Automation", "Role-Based Access", "Custom Modules",
//       "Multi-Department Integration", "Real-Time Insights", "Compliance",
//       "Scalability", "Operational Efficiency"
//     ],
//     icon: "📊"
//   },
//   {
//     name: "Customer Relationship Management (CRM)",
//     description: "Advanced CRM solutions to improve customer relationships, engagement, and sales performance.",
//     details: "Our CRM systems help businesses manage customer data, track sales pipelines, automate marketing, and enhance customer support.",
//     extendedContent: "We offer cloud-based CRM solutions with AI-powered insights, automated workflows, and omnichannel integration to help businesses manage customer interactions more efficiently. Our systems provide real-time reporting, lead tracking, and customer segmentation tools to drive engagement and retention. Whether you're a small business or an enterprise, our CRM solutions are designed to optimize customer relationships and increase revenue.",
//     keywords: [
//       "Customer Engagement", "Sales Automation", "Lead Management",
//       "Marketing Automation", "Omnichannel Support", "AI-powered Insights",
//       "Data Analytics", "Real-Time Reporting", "Personalization",
//       "Customer Support", "Pipeline Management", "Email Campaigns",
//       "Retention Strategies", "Cloud CRM", "User-Friendly Interface"
//     ],
//     icon: "🤝"
//   },
//   {
//     name: "E-Learning",
//     description: "Scalable e-learning solutions to enhance digital education and training experiences.",
//     details: "We develop e-learning platforms with interactive courses, assessments, live sessions, and progress tracking.",
//     extendedContent: "Our e-learning solutions empower educational institutions and corporate trainers with user-friendly platforms that offer customizable courses, gamified learning, AI-driven assessments, and secure content distribution. We integrate features such as discussion forums, live webinars, and mobile compatibility to ensure an engaging learning experience. Our LMS solutions support multiple content formats, certification programs, and automated grading systems.",
//     keywords: [
//       "LMS", "Online Courses", "Interactive Learning", "Gamification",
//       "Virtual Classrooms", "Mobile Learning", "AI-Powered Assessments",
//       "Video-Based Training", "Course Management", "User Progress Tracking",
//       "Discussion Forums", "Live Webinars", "Certification Programs",
//       "Multi-Language Support", "Secure Content Delivery"
//     ],
//     icon: "🎓"
//   },
//   {
//     name: "Operations Management System",
//     description: "A unified platform to optimize and automate daily business operations efficiently.",
//     details: "Our operations management system ensures streamlined workflows, automated task scheduling, and data-driven decision-making.",
//     extendedContent: "Designed to increase productivity and reduce manual effort, our operations management system centralizes task tracking, reporting, and workflow automation. With advanced analytics, predictive maintenance, and integration with ERP/CRM systems, businesses can manage teams, resources, and processes with ease. Our platform also includes role-based access, inventory tracking, and performance monitoring to ensure seamless execution of business strategies.",
//     keywords: [
//       "Task Management", "Process Automation", "Data Analytics", "Workflow Optimization",
//       "Real-Time Monitoring", "Performance Tracking", "Predictive Maintenance",
//       "Inventory Control", "Compliance Management", "Customizable Dashboards",
//       "AI-Driven Insights", "Collaboration Tools", "Resource Allocation",
//       "Scalability", "Third-Party Integrations"
//     ],
//     icon: "⚙"
//   },
//   {
//     name: "Content Management System (CMS)",
//     description: "Flexible and scalable CMS solutions for seamless content creation and management.",
//     details: "Our CMS platforms enable businesses to create, edit, and publish content effortlessly with user-friendly interfaces.",
//     extendedContent: "We develop robust CMS solutions that allow businesses to manage website content, blogs, media, and e-commerce stores efficiently. Our platforms include drag-and-drop builders, SEO optimization, role-based access, and mobile-friendly templates. With seamless integration capabilities, our CMS solutions support various content formats and enhance digital presence across multiple channels.",
//     keywords: [
//       "Website Management", "SEO Optimization", "User Roles", "Media Library",
//       "Drag-and-Drop Builder", "Content Editing", "Custom Templates",
//       "Multi-Language Support", "Mobile-Friendly", "E-Commerce Integration",
//       "Cloud Hosting", "Performance Optimization", "Analytics & Reporting",
//       "Security Features", "User Engagement Tools"
//     ],
//     icon: "📝"
//   },
//   {
//     name: "E-Commerce",
//     description: "Complete e-commerce solutions to build scalable online stores and enhance digital shopping experiences.",
//     details: "We design and develop secure, feature-rich e-commerce platforms with seamless payment and inventory management systems.",
//     extendedContent: "Our e-commerce platforms support multi-vendor capabilities, mobile responsiveness, and AI-driven product recommendations. We integrate secure payment gateways, marketing automation, and customer analytics to optimize conversion rates. Whether you're starting a new online store or upgrading an existing platform, our solutions provide a seamless and engaging shopping experience.",
//     keywords: [
//       "Online Store", "Product Catalog", "Secure Payments", "Shopping Cart",
//       "Multi-Vendor Support", "Customer Analytics", "Marketing Automation",
//       "SEO Optimization", "Mobile Commerce", "Subscription Models",
//       "Order Management", "Shipping & Logistics", "Inventory Tracking",
//       "Loyalty Programs", "Performance Optimization"
//     ],
//     icon: "🛒"
//   },
//   {
//     name: "Supply Chain Management",
//     description: "Optimized supply chain solutions to enhance logistics, inventory, and procurement processes.",
//     details: "We provide AI-driven supply chain management solutions to improve efficiency, cost control, and real-time tracking.",
//     extendedContent: "Our supply chain solutions enable businesses to manage suppliers, warehouses, and distribution networks with real-time analytics and predictive insights. Features like automated demand forecasting, route optimization, and seamless ERP integration ensure reduced operational costs and improved productivity. Our platform supports third-party integrations, ensuring seamless communication across the entire supply chain.",
//     keywords: [
//       "Logistics", "Warehouse Management", "Inventory Tracking", "AI Forecasting",
//       "Procurement", "Supplier Management", "Demand Planning", "Order Fulfillment",
//       "Shipment Tracking", "Route Optimization", "ERP Integration", "Cost Efficiency",
//       "Real-Time Analytics", "Supply Chain Visibility", "Automated Workflows"
//     ],
//     icon: "🚚"
//   }
// ];

// data/solutions.js
const ERPObj = {
  title: "ERP (Enterprise Resource Planning)",
  description: "Streamline Your Business Operations",
  extendedContent:
    "ERP systems integrate core business processes like finance, HR, supply chain, and manufacturing into a single system. This comprehensive integration improves efficiency, data accuracy, and enables real-time decision-making, helping businesses operate smoothly and adapt quickly to changing market conditions.",
  icon: "📊",
  src: erpImg,
  sections: [
    {
      title: "Core Modules",
      content:
        "Manage finance, HR, supply chain, and manufacturing seamlessly.",
    },
    {
      title: "Integration Capabilities",
      content: "Connect with third-party apps to enhance functionality.",
    },
    {
      title: "Real-Time Insights",
      content: "Access data-driven reports for strategic decisions.",
    },
    {
      title: "Scalability",
      content: "Adapt to business growth with flexible module additions.",
    },
  ],
};

const CRMObj = {
  title: "CRM (Customer Relationship Management)",
  description: "Enhance Customer Relationships",
  extendedContent:
    "CRM solutions help businesses manage customer interactions, track sales leads, marketing campaigns, and support services. By centralizing customer data, CRM tools improve customer satisfaction, boost sales performance, and enable personalized communication strategies.",
  icon: "🤝",
  src: crmImg,
  sections: [
    {
      title: "Lead Management",
      content: "Track and nurture potential clients effectively.",
    },
    {
      title: "Customer Support",
      content: "Enhance service quality with integrated support tools.",
    },
    {
      title: "Marketing Automation",
      content: "Automate campaigns for targeted customer engagement.",
    },
    {
      title: "Analytics",
      content: "Gain insights into customer behavior and sales trends.",
    },
  ],
};

const eLearningObj = {
  title: "E-learning",
  description: "Transform Education with Technology",
  extendedContent:
    "E-learning platforms provide interactive and flexible learning environments, offering tools for online courses, virtual classrooms, and assessments. They support both academic institutions and corporate training by enabling remote learning, content management, and progress tracking.",
  icon: "🎓",
  src: eLearningImg,
  sections: [
    {
      title: "Virtual Classrooms",
      content: "Facilitate real-time interactive learning experiences.",
    },
    {
      title: "Course Management",
      content: "Design and manage online courses with ease.",
    },
    {
      title: "Assessment Tools",
      content: "Evaluate learner progress through quizzes and assignments.",
    },
    {
      title: "Analytics",
      content: "Track learner performance with detailed reports.",
    },
  ],
};

const operationsManagementObj = {
  title: "Operations Management System",
  description: "Optimize Your Business Operations",
  extendedContent:
    "Operations Management Systems are designed to streamline day-to-day business activities, including production, logistics, and resource allocation. They enhance productivity, reduce operational costs, and support data-driven decision-making for continuous improvement.",
  icon: "⚙️",
  src: operationsImg,
  sections: [
    {
      title: "Process Automation",
      content: "Automate workflows to increase efficiency.",
    },
    {
      title: "Resource Allocation",
      content: "Optimize the use of materials and labor.",
    },
    {
      title: "Supply Chain Integration",
      content: "Ensure smooth logistics and inventory management.",
    },
    {
      title: "Performance Metrics",
      content: "Monitor key performance indicators in real-time.",
    },
  ],
};

const CMSObj = {
  title: "CMS (Content Management System)",
  description: "Manage Digital Content Effortlessly",
  extendedContent:
    "CMS allows organizations to create, manage, and publish digital content easily. They support website management, blogging, e-commerce, and media libraries, providing user-friendly interfaces for both technical and non-technical users.",
  icon: "📝",
  src: cmsImg,
  sections: [
    {
      title: "Content Creation",
      content: "Simplify article, blog, and media content creation.",
    },
    {
      title: "Media Management",
      content: "Organize images, videos, and files efficiently.",
    },
    {
      title: "User Roles & Permissions",
      content: "Manage access rights for different users.",
    },
    {
      title: "SEO Optimization",
      content: "Improve content visibility with built-in SEO tools.",
    },
  ],
};

const eCommerceObj = {
  title: "e-Commerce",
  description: "Grow Your Online Business",
  extendedContent:
    "e-Commerce platforms enable businesses to sell products and services online. They provide features for inventory management, payment processing, customer engagement, and marketing tools to enhance online sales and customer experiences.",
  icon: "🛒",
  src: eCommerceImg,
  sections: [
    {
      title: "Product Catalog",
      content: "Showcase products with rich descriptions and images.",
    },
    {
      title: "Payment Integration",
      content: "Secure and flexible payment gateway options.",
    },
    {
      title: "Order Management",
      content: "Track orders, shipping, and returns efficiently.",
    },
    {
      title: "Marketing Tools",
      content: "Promote products with discounts, coupons, and email marketing.",
    },
  ],
};

const supplyChainObj = {
  title: "Supply Chain Management",
  description: "Optimize Supply Chain Efficiency",
  extendedContent:
    "Supply Chain Management (SCM) solutions streamline the flow of goods, data, and finances throughout the supply chain. They enhance visibility, improve coordination with suppliers and distributors, and reduce operational costs, ensuring timely deliveries and customer satisfaction.",
  icon: "🚚",
  src: supplyImg,
  sections: [
    {
      title: "Inventory Control",
      content: "Manage stock levels and reduce holding costs.",
    },
    {
      title: "Supplier Management",
      content: "Coordinate effectively with vendors and suppliers.",
    },
    {
      title: "Logistics Optimization",
      content: "Enhance delivery routes and reduce shipping costs.",
    },
    {
      title: "Demand Forecasting",
      content: "Predict market needs to optimize inventory.",
    },
  ],
};

const WebPortalsObj = {
  title: "Web Portals",
  icon: "🌐",
  src: webPortalsImg,
  description:
    "Centralized platforms connecting users, data, and services seamlessly.",
  extendedContent:
    "Web portals are powerful tools that integrate various services, content, and functionalities into a unified digital space. They enhance user engagement, streamline information dissemination, and offer personalized experiences, making them vital for businesses, educational institutions, and government services.",
  sections: [
    {
      title: "Business Portals",
      content:
        "Streamline operations and enhance communication within enterprises.",
    },
    {
      title: "E-Governance Portals",
      content:
        "Empower public services with transparent, accessible digital platforms.",
    },
    {
      title: "Educational Portals",
      content:
        "Facilitate learning management systems and student engagement tools.",
    },
    {
      title: "Customer Portals",
      content:
        "Offer personalized experiences and self-service options for clients.",
    },
  ],
};

const OTTPlatformObj = {
  title: "OTT Platform",
  icon: "📺",
  src: ottImg,
  description:
    "Deliver rich media content across devices with seamless user experiences.",
  extendedContent:
    "OTT platforms revolutionize content distribution, enabling users to access media anytime, anywhere. They support video streaming, live broadcasting, and subscription-based models, ensuring high-quality content delivery with robust analytics and monetization options.",
  sections: [
    {
      title: "Video Streaming",
      content:
        "High-definition video delivery with adaptive streaming technology.",
    },
    {
      title: "Subscription Models",
      content: "Flexible plans to monetize content effectively.",
    },
    {
      title: "Content Management",
      content: "Organize and distribute media with ease.",
    },
    {
      title: "Analytics & Insights",
      content: "Track user engagement and optimize content strategies.",
    },
  ],
};

const FleetManagementObj = {
  title: "Fleet Management",
  icon: "🚚",
  src: fleetImg,
  description: "Optimize vehicle operations, reduce costs, and enhance safety.",
  extendedContent:
    "Fleet management systems provide real-time tracking, route optimization, and maintenance scheduling. They help businesses improve operational efficiency, ensure regulatory compliance, and reduce environmental impact, making logistics smarter and more sustainable.",
  sections: [
    {
      title: "GPS Tracking",
      content: "Monitor vehicle locations and performance in real-time.",
    },
    {
      title: "Route Optimization",
      content: "Plan efficient routes to save time and fuel.",
    },
    {
      title: "Maintenance Scheduling",
      content: "Keep fleets in top condition with proactive servicing.",
    },
    {
      title: "Driver Management",
      content: "Track driver behavior and enhance road safety.",
    },
  ],
};

const FinancialManagementObj = {
  title: "Financial Management",
  icon: "💼",
  src: financialImg,
  description: "Streamline financial operations with robust management tools.",
  extendedContent:
    "Financial management solutions help organizations manage budgets, forecasts, and financial reporting. They enhance decision-making through data-driven insights, automate accounting processes, and ensure compliance with financial regulations.",
  sections: [
    {
      title: "Budget Planning",
      content: "Allocate resources effectively with strategic planning tools.",
    },
    {
      title: "Expense Tracking",
      content: "Monitor and control organizational spending.",
    },
    {
      title: "Financial Reporting",
      content: "Generate accurate, real-time financial reports.",
    },
    {
      title: "Compliance Management",
      content: "Ensure adherence to regulatory standards.",
    },
  ],
};

const ProjectManagementSystemObj = {
  title: "Project Management System",
  icon: "📊",
  src: projectImg,
  description:
    "Manage projects efficiently with advanced planning and collaboration tools.",
  extendedContent:
    "Project management systems enable teams to plan, execute, and monitor projects effectively. They support task assignment, progress tracking, resource allocation, and risk management, fostering productivity and collaboration across teams.",
  sections: [
    {
      title: "Task Management",
      content: "Assign, track, and prioritize tasks effortlessly.",
    },
    {
      title: "Resource Allocation",
      content: "Optimize the use of team resources for project success.",
    },
    {
      title: "Time Tracking",
      content: "Monitor project timelines and meet deadlines consistently.",
    },
    {
      title: "Collaboration Tools",
      content: "Enhance team communication and document sharing.",
    },
  ],
};

const HRMSystemObj = {
  title: "Human Resources Management System",
  icon: "👥",
  src: hrmsImg,
  description: "Empower HR operations with comprehensive management solutions.",
  extendedContent:
    "HRM systems streamline HR functions, including recruitment, employee management, payroll, and performance tracking. They improve workforce engagement, automate administrative tasks, and support strategic HR planning.",
  sections: [
    {
      title: "Employee Database",
      content: "Centralize employee records for easy access.",
    },
    {
      title: "Payroll Management",
      content: "Automate salary calculations and tax compliance.",
    },
    {
      title: "Performance Tracking",
      content: "Monitor employee performance and growth.",
    },
    {
      title: "Recruitment Tools",
      content: "Simplify hiring processes and talent acquisition.",
    },
  ],
};

const HospitalManagementSystemObj = {
  title: "Hospital Management System",
  icon: "🏥",
  src: hospitalImg,
  description:
    "Optimize healthcare operations with integrated management solutions.",
  extendedContent:
    "Hospital management systems enhance patient care, streamline administrative workflows, and support clinical operations. They manage appointments, medical records, billing, and inventory, ensuring efficient healthcare delivery and regulatory compliance.",
  sections: [
    {
      title: "Patient Management",
      content: "Track patient records, appointments, and histories.",
    },
    {
      title: "Billing & Invoicing",
      content: "Simplify healthcare billing processes.",
    },
    {
      title: "Inventory Control",
      content: "Manage medical supplies and equipment effectively.",
    },
    {
      title: "Clinical Workflows",
      content: "Support doctors and nurses with efficient tools.",
    },
  ],
};

export {
  solutionsObj,
  ERPObj,
  CRMObj,
  eLearningObj,
  eCommerceObj,
  operationsManagementObj,
  supplyChainObj,
  CMSObj,
  HospitalManagementSystemObj,
  HRMSystemObj,
  WebPortalsObj,
  ProjectManagementSystemObj,
  FinancialManagementObj,
  FleetManagementObj,
  OTTPlatformObj,
};
