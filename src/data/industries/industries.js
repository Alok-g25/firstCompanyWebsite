import {
  AcademicCapIcon,
  ArrowPathIcon,
  BanknotesIcon,
  Bars3Icon,
  BuildingOfficeIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PercentBadgeIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SignalIcon,
  SquaresPlusIcon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BriefcaseBusinessIcon,
  BriefcaseIcon,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  HeartPulseIcon,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";

import HealthImg from "/src/images/industries/IndustriesHero/health-and-wellness.jpg";
import educationImg from "/src/images/industries/IndustriesHero/education.jpg/";
import financeImg from "/src/images/industries/IndustriesHero/finance.jpg";
import travelImg from "/src/images/industries/IndustriesHero/travel-and-hospitality.jpg";
import realEstateImg from "/src/images/industries/IndustriesHero/real-estate-and-construction.jpg";
import retailImg from "/src/images/industries/IndustriesHero/retail-and-ecommerce.jpg";
import telecommunicationsImg from "/src/images/industries/IndustriesHero/telecommunications.jpg";
import transportationImg from "/src/images/industries/IndustriesHero/transportation-and-logistics.jpg";
import professionalImg from "/src/images/industries/IndustriesHero/professional-services.jpg";
import manufacturingImg from "/src/images/industries/IndustriesHero/manufacturing.jpg";
import automotiveImg from "/src/images/industries/IndustriesHero/automotiveHero.jpg";
import astrologyImg from "/src/images/industries/IndustriesHero/astroHoroscopeHero.jpg";
import oilImg from "/src/images/industries/IndustriesHero/oilGasHero.jpg";
import retailEcommerceImg from "/src/images/industries/IndustriesHero/retailEcommerceHero.webp";
import bankingImg from "/src/images/industries/IndustriesHero/bankingHero.webp";
import insuranceImg from "/src/images/industries/IndustriesHero/insuranceHero.jpg";
// import automotiveImg from "/src/images/industries/IndustriesHero/automotiveHero.jpg";

// import
const industriesObj = [
  {
    name: "Finance & FinTech",
    // description: "Get a better understanding of your traffic",
    href: "/industries/finance-and-fintech",
    icon: BanknotesIcon,
  },
  {
    name: "Travel & Hospitality",
    // description: "Speak directly to your customers",
    href: "/industries/travel-and-hospitality",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Real Estate & Construction",
    // description: "Your customers’ data will be safe and secure",
    href: "/industries/real-estate-and-construction",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Health & Wellness",
    // description: "Connect with third-party tools",
    href: "/industries/health-and-wellness",
    icon: HeartPulseIcon,
  },
  {
    name: "Transportation & Logistics",
    // description: "Build strategic funnels that will convert",
    href: "/industries/transportation-and-logistics",
    icon: TruckIcon,
  },
  {
    name: "Professional Services",
    // description: "Build strategic funnels that will convert",
    href: "/industries/professional-services",
    icon: BriefcaseBusinessIcon,
  },
  {
    name: "Media & Entertainment",
    // description: "Build strategic funnels that will convert",
    href: "/industries/media-and-entertainment",
    icon: PlayIcon,
  },
  {
    name: "Retail & E-commerce",
    // description: "Build strategic funnels that will convert",
    href: "/industries/retail-and-ecommerce",
    icon: ShoppingBagIcon,
  },
  {
    name: "Education",
    // description: "Build strategic funnels that will convert",
    href: "/industries/education",
    icon: AcademicCapIcon,
  },
  {
    name: "Manufacturing",
    // description: "Build strategic funnels that will convert",
    href: "/industries/manufacturing",
    icon: Cog6ToothIcon,
  },
  {
    name: "Telecommunications",
    // description: "Build strategic funnels that will convert",
    href: "/industries/telecommunications",
    icon: SignalIcon,
  },
  {
    name: "Banking",
    // description: "Build strategic funnels that will convert",
    href: "/industries/banking",
    icon: ArrowPathIcon,
  },
  {
    name: "Insurance",
    // description: "Build strategic funnels that will convert",
    href: "/industries/insurance",
    icon: ArrowPathIcon,
  },
  {
    name: "Astrology & Horoscope",
    // description: "Build strategic funnels that will convert",
    href: "/industries/astrology-and-horoscope",
    icon: ArrowPathIcon,
  },
  {
    name: "View More Industries",
    // description: "Build strategic funnels that will convert",
    href: "/industries/all-industries",
    icon: EllipsisHorizontalIcon,
  },
];

const financeObj = {
  title: "Finance and Fintech",
  src: financeImg,
  description: `Driving Digital Transformation in Financial Services`,
  extendedContent: `Stay ahead in the fast-evolving finance and fintech landscape with our secure, scalable IT solutions. We offer digital banking platforms, payment processing systems, fraud detection tools, and financial analytics to enhance customer experiences, ensure compliance, and foster growth in a digital-first economy.`,
  sections: [
    {
      title: "Who We Serve",
      description:
        "We cater to a variety of financial institutions and service providers.",
      items: [
        {
          name: "Banks",
          info: "Financial institutions providing banking services.",
        },
        {
          name: "Insurance Companies",
          info: "Organizations offering risk management through insurance.",
        },
        {
          name: "Lending Companies",
          info: "Firms that provide loans to individuals and businesses.",
        },
        {
          name: "Payment Service Providers",
          info: "Companies facilitating electronic payments.",
        },
        {
          name: "Investment Companies",
          info: "Firms that manage investments for clients.",
        },
        {
          name: "Fintech Startups",
          info: "Emerging companies leveraging technology for financial services.",
        },
        {
          name: "Defi Companies",
          info: "Decentralized finance firms offering blockchain-based services.",
        },
        {
          name: "Financial Software Product Companies",
          info: "Businesses developing software for financial applications.",
        },
      ],
    },
    {
      title: "Financial Services and Solutions We Specialize In",
      description:
        "Our expertise spans across various financial systems and solutions.",
      items: [
        {
          name: "Underwriting Automation Systems",
          info: "Software to automate underwriting processes.",
        },
        {
          name: "Insurance Claims Processing Systems",
          info: "Tools to manage and process insurance claims.",
        },
        {
          name: "Policy Administrative Systems",
          info: "Software for handling policy administration tasks.",
        },
        {
          name: "Actuarial Software",
          info: "Applications for actuarial calculations and risk assessment.",
        },
        {
          name: "Loan Management Software",
          info: "Solutions for tracking and managing loans.",
        },
        {
          name: "Debt Collection Systems",
          info: "Tools for managing debt recovery processes.",
        },
        {
          name: "Treasury Software",
          info: "Applications for managing treasury operations.",
        },
        {
          name: "Payment Gateways",
          info: "Platforms for processing online payments securely.",
        },
        {
          name: "Payment Orchestration Software",
          info: "Solutions to streamline payment processing.",
        },
        {
          name: "Investor Relationship Management Software",
          info: "Tools for managing investor relations effectively.",
        },
        {
          name: "Investment Platforms",
          info: "Online platforms for managing investments.",
        },
      ],
    },
    {
      title: "Customer-Facing Apps",
      description: "We develop apps designed to enhance customer experiences.",
      items: [
        {
          name: "Mobile Banking Apps",
          info: "Applications for mobile banking services.",
        },
        {
          name: "Insurance Apps",
          info: "Apps to manage insurance policies and claims.",
        },
        { name: "Lending Apps", info: "Applications for facilitating loans." },
        {
          name: "Buy Now Pay Later Apps",
          info: "Apps offering flexible payment options.",
        },
        {
          name: "Payment Apps",
          info: "Applications for secure and easy transactions.",
        },
        {
          name: "Money Transfer Apps",
          info: "Apps designed for fast and secure money transfers.",
        },
        {
          name: "Investor Portals",
          info: "Platforms for investors to manage their portfolios.",
        },
        {
          name: "Crypto Wallets",
          info: "Applications for managing cryptocurrency assets.",
        },
      ],
    },
    {
      title: "Software For General Business Administration",
      description:
        "We provide versatile software solutions for business operations.",
      items: [
        { name: "CRM", info: "Customer Relationship Management software." },
        {
          name: "Accounting Software",
          info: "Tools for managing financial accounts.",
        },
        {
          name: "Document Management Software",
          info: "Software for organizing and managing documents.",
        },
        {
          name: "Human Resource Management Systems",
          info: "Applications for HR management.",
        },
        {
          name: "Corporate ERPs",
          info: "Enterprise Resource Planning software for businesses.",
        },
      ],
    },
  ],
};

const travelObj = {
  title: "Travel and Hospitality",
  src: travelImg,
  description: `Redefining Travel Experiences with Smart Technologies`,
  extendedContent: `Create unforgettable travel and hospitality experiences with our tailored IT solutions. From reservation systems and customer engagement platforms to property management software and data-driven marketing, we help businesses in this dynamic industry improve guest satisfaction and operational efficiency.`,
  sections: [
    {
      title: "Who We Serve",
      description:
        "We support businesses in the travel and hospitality industry.",
      items: [
        {
          name: "Hotels & Resorts",
          info: "Luxury, boutique, and chain hotels managing guest experiences.",
        },
        {
          name: "Travel Agencies",
          info: "Organizations planning and booking travel itineraries.",
        },
        {
          name: "Airlines & Cruise Lines",
          info: "Companies providing air and sea travel services.",
        },
      ],
    },
    {
      title: "Guest Experience Solutions",
      description: "Innovative solutions to elevate guest satisfaction.",
      items: [
        {
          name: "Mobile Check-In Apps",
          info: "Apps for seamless, contactless guest services.",
        },
        {
          name: "Personalized Recommendation Engines",
          info: "AI tools for tailored travel suggestions.",
        },
      ],
    },
    {
      title: "Operational Efficiency Tools",
      description:
        "Optimizing operations in the travel and hospitality sector.",
      items: [
        {
          name: "Property Management Systems",
          info: "Software for managing hotel operations.",
        },
        {
          name: "Reservation Platforms",
          info: "Solutions for booking management.",
        },
        {
          name: "Staff Scheduling Tools",
          info: "Applications for efficient workforce management.",
        },
      ],
    },
    {
      title: "Marketing and Engagement Platforms",
      description: "Driving customer engagement through targeted marketing.",
      items: [
        {
          name: "Loyalty Programs",
          info: "Tools to manage customer loyalty rewards.",
        },
        {
          name: "Social Media Integration Tools",
          info: "Platforms for seamless social media marketing.",
        },
        {
          name: "Feedback and Review Management",
          info: "Solutions to manage customer feedback effectively.",
        },
      ],
    },
  ],
};

const healthObj = {
  title: "Health and Wellness",
  src: HealthImg,
  description: `Revolutionizing Healthcare with Digital Solutions`,
  extendedContent: `Enhance patient care and operational efficiency with our comprehensive IT solutions for the health and wellness sector. We specialize in electronic health records (EHR), telemedicine platforms, patient engagement systems, and health analytics to support better health outcomes and streamline workflows.`,
  sections: [
    {
      title: "Healthcare Providers",
      description: "Supporting hospitals, clinics, and healthcare networks.",
      items: [
        {
          name: "Hospitals & Clinics",
          info: "Facilities providing medical treatment and services.",
        },
        {
          name: "Telemedicine Platforms",
          info: "Virtual healthcare consultation services.",
        },
        {
          name: "Pharmaceutical Companies",
          info: "Organizations involved in drug development and distribution.",
        },
      ],
    },
    {
      title: "Patient-Centric Solutions",
      description: "Improving patient care through technology.",
      items: [
        {
          name: "Health Monitoring Apps",
          info: "Mobile apps for tracking health metrics.",
        },
        {
          name: "Electronic Health Records",
          info: "Systems for managing patient medical histories.",
        },
      ],
    },
    {
      title: "Healthcare Administration Tools",
      description: "Streamlining healthcare administrative processes.",
      items: [
        {
          name: "Hospital Management Systems",
          info: "Software for managing hospital operations.",
        },
        {
          name: "Billing and Coding Software",
          info: "Tools for efficient medical billing.",
        },
        {
          name: "Inventory Management for Healthcare",
          info: "Solutions for tracking medical supplies.",
        },
      ],
    },
    {
      title: "Wellness and Fitness Applications",
      description: "Promoting health and wellness through technology.",
      items: [
        {
          name: "Fitness Tracking Apps",
          info: "Applications for monitoring physical activity.",
        },
        {
          name: "Mental Health Platforms",
          info: "Tools to support mental health and well-being.",
        },
        {
          name: "Nutrition Management Apps",
          info: "Apps for managing diet and nutrition.",
        },
      ],
    },
  ],
};

const manufacturingObj = {
  title: "Manufacturing",
  src: manufacturingImg,
  description: `Driving Operational Excellence in Manufacturing`,
  extendedContent: `Optimize your manufacturing processes with cutting-edge technology solutions. From supply chain automation and production management systems to IoT integration and predictive maintenance, we help manufacturers improve efficiency, reduce costs, and achieve greater agility in a competitive global market.`,
  sections: [
    {
      title: "Production Management",
      description: "Optimizing manufacturing processes for efficiency.",
      items: [
        {
          name: "Manufacturing Execution Systems",
          info: "Tools for managing production operations.",
        },
        {
          name: "Supply Chain Management",
          info: "Software to streamline supply chain processes.",
        },
        {
          name: "Inventory Control Systems",
          info: "Applications for tracking and managing inventory.",
        },
      ],
    },
    {
      title: "Quality Assurance Solutions",
      description: "Ensuring product quality through advanced tools.",
      items: [
        {
          name: "Inspection Software",
          info: "Tools for product quality inspection.",
        },
        {
          name: "Defect Tracking Systems",
          info: "Applications to monitor and address defects.",
        },
      ],
    },
    {
      title: "Workforce Management",
      description: "Enhancing productivity with effective workforce tools.",
      items: [
        {
          name: "Employee Scheduling Software",
          info: "Tools for managing employee shifts and schedules.",
        },
        {
          name: "Training and Development Platforms",
          info: "Solutions for workforce skill development.",
        },
      ],
    },
    {
      title: "Data Analytics and Reporting",
      description: "Leveraging data for smarter manufacturing decisions.",
      items: [
        {
          name: "Real-Time Analytics Tools",
          info: "Software for live production data analysis.",
        },
        {
          name: "Business Intelligence Platforms",
          info: "Tools for advanced data reporting and insights.",
        },
      ],
    },
  ],
};

const educationObj = {
  title: "Education",
  src: educationImg,
  description: `Empowering Learning Through Innovative Technology`,
  extendedContent: `Transform the educational landscape with our smart IT solutions designed for schools, universities, and e-learning platforms. We offer learning management systems, virtual classrooms, student information systems, and data-driven analytics to enhance teaching efficiency, student engagement, and administrative operations.`,
  sections: [
    {
      title: "Learning Management Systems",
      description:
        "Platforms to manage educational content and track progress.",
      items: [
        {
          name: "Virtual Classrooms",
          info: "Environments for online learning and collaboration.",
        },
        {
          name: "Assessment Tools",
          info: "Applications for quizzes and exams.",
        },
        {
          name: "Content Authoring Tools",
          info: "Software to create educational materials.",
        },
      ],
    },
    {
      title: "Student Engagement Platforms",
      description: "Technologies to enhance student participation.",
      items: [
        {
          name: "Gamified Learning Apps",
          info: "Games designed to make learning fun and engaging.",
        },
        {
          name: "Discussion Forums",
          info: "Spaces for academic discussions and peer learning.",
        },
      ],
    },
    {
      title: "Administration Solutions",
      description:
        "Streamlining administrative tasks for educational institutions.",
      items: [
        {
          name: "Enrollment Management Software",
          info: "Tools for handling student admissions.",
        },
        {
          name: "Attendance Tracking Systems",
          info: "Applications to monitor student attendance.",
        },
      ],
    },
    {
      title: "Research and Development Tools",
      description: "Supporting academic research through advanced technology.",
      items: [
        {
          name: "Data Analysis Software",
          info: "Tools for conducting academic research.",
        },
        {
          name: "Reference Management Tools",
          info: "Applications to organize and manage research references.",
        },
      ],
    },
  ],
};

const realEstateObj = {
  title: "Real Estate & Construction",
  src: realEstateImg,
  description: "Transforming Property Management with Smart Tech Solutions",
  extendedContent: `We empower real estate and construction businesses with cutting-edge digital solutions. From property management platforms to construction project optimization tools, we help streamline operations, enhance marketing strategies, and improve financial management for seamless growth.`,
  sections: [
    {
      title: "Property Management",
      description: "Solutions to manage properties efficiently.",
      items: [
        {
          name: "Real Estate CRM",
          info: "Tools to manage client relationships and property listings.",
        },
        {
          name: "Lease Management Software",
          info: "Applications to handle lease agreements and renewals.",
        },
        {
          name: "Building Maintenance Systems",
          info: "Software to schedule and track maintenance activities.",
        },
      ],
    },
    {
      title: "Construction Project Management",
      description: "Optimizing construction workflows and project timelines.",
      items: [
        {
          name: "Project Scheduling Tools",
          info: "Software to plan and manage construction projects.",
        },
        {
          name: "Resource Allocation Systems",
          info: "Tools for managing construction resources effectively.",
        },
      ],
    },
    {
      title: "Marketing & Sales Platforms",
      description: "Boosting real estate sales and marketing efforts.",
      items: [
        {
          name: "Virtual Tour Software",
          info: "Applications for showcasing properties virtually.",
        },
        {
          name: "Lead Generation Tools",
          info: "Platforms to attract potential buyers and renters.",
        },
      ],
    },
    {
      title: "Financial Management Solutions",
      description: "Handling finances for real estate businesses.",
      items: [
        {
          name: "Property Accounting Software",
          info: "Tools for managing property-related finances.",
        },
        {
          name: "Investment Analysis Tools",
          info: "Applications to analyze real estate investments.",
        },
      ],
    },
  ],
};

const transportationObj = {
  title: "Transportation & Logistics",
  src: transportationImg,
  description: "Driving Efficiency Through Advanced Technology",
  extendedContent: `Revolutionize your logistics and transportation operations with our innovative IT solutions. We specialize in fleet management systems, supply chain optimization tools, and real-time tracking technologies that improve route efficiency, reduce costs, and ensure regulatory compliance.`,
  sections: [
    {
      title: "Fleet Management",
      description: "Tools to manage and optimize vehicle fleets.",
      items: [
        {
          name: "GPS Tracking Systems",
          info: "Real-time tracking of vehicles and routes.",
        },
        {
          name: "Fleet Maintenance Software",
          info: "Applications to schedule and track vehicle maintenance.",
        },
      ],
    },
    {
      title: "Supply Chain Optimization",
      description: "Improving supply chain efficiency and transparency.",
      items: [
        {
          name: "Logistics Management Systems",
          info: "Software to streamline logistics operations.",
        },
        {
          name: "Warehouse Management Tools",
          info: "Applications for inventory control and storage optimization.",
        },
      ],
    },
    {
      title: "Route Planning Solutions",
      description: "Enhancing delivery efficiency with optimized routes.",
      items: [
        {
          name: "Dynamic Routing Tools",
          info: "Real-time route optimization based on traffic conditions.",
        },
        {
          name: "Delivery Scheduling Software",
          info: "Applications for planning and managing delivery schedules.",
        },
      ],
    },
    {
      title: "Compliance & Safety Management",
      description: "Ensuring transportation safety and regulatory compliance.",
      items: [
        {
          name: "Driver Safety Monitoring Systems",
          info: "Tools to monitor driver behavior and promote safety.",
        },
        {
          name: "Regulatory Compliance Software",
          info: "Applications to manage industry-specific compliance requirements.",
        },
      ],
    },
  ],
};

const mediaObj = {
  title: "Media and Entertainment",
  src: transportationImg,
  description: "Innovating Content Creation and Distribution",
  extendedContent: `Enhance the media and entertainment landscape with cutting-edge technology solutions. From content creation and digital streaming to audience analytics and interactive experiences, our IT solutions empower businesses to deliver high-quality entertainment efficiently and effectively.`,
  sections: [
    {
      title: "Content Production & Management",
      description: "Optimizing media production and asset management.",
      items: [
        {
          name: "Cloud-Based Editing Platforms",
          info: "Collaborative tools for video and audio production teams.",
        },
        {
          name: "Digital Asset Management (DAM)",
          info: "Organizing and securing media content with AI-powered tagging.",
        },
      ],
    },
    {
      title: "Streaming & Digital Distribution",
      description: "Delivering seamless and scalable streaming experiences.",
      items: [
        {
          name: "OTT Streaming Solutions",
          info: "Custom platforms for video-on-demand and live streaming.",
        },
        {
          name: "CDN Optimization",
          info: "Enhancing content delivery speed and reducing latency.",
        },
      ],
    },
    {
      title: "Audience Engagement & Monetization",
      description: "Driving revenue through data-driven audience insights.",
      items: [
        {
          name: "AI-Powered Content Recommendations",
          info: "Personalized viewing experiences based on user preferences.",
        },
        {
          name: "AdTech & Monetization Platforms",
          info: "Advanced advertising and subscription models for revenue growth.",
        },
      ],
    },
    {
      title: "Immersive & Interactive Media",
      description: "Enhancing entertainment with next-gen experiences.",
      items: [
        {
          name: "Augmented & Virtual Reality",
          info: "Creating immersive entertainment experiences using AR/VR.",
        },
        {
          name: "Gamification & Interactive Storytelling",
          info: "Engaging audiences through interactive and gamified content.",
        },
      ],
    },
  ],
};

const automotiveObj = {
  title: "Automotive",
  src: automotiveImg,
  description: "Innovating the Future of Mobility",
  extendedContent: `Transform the automotive industry with cutting-edge IT solutions. We offer advanced telematics, predictive maintenance systems, connected car technologies, and AI-driven automation to enhance vehicle performance, safety, and customer experience.`,
  sections: [
    {
      title: "Connected Vehicles",
      description: "Enhancing connectivity and smart features in vehicles.",
      items: [
        {
          name: "Infotainment Systems",
          info: "Advanced in-car entertainment and navigation solutions.",
        },
        {
          name: "Vehicle-to-Everything (V2X) Communication",
          info: "Technology for real-time data exchange between vehicles and infrastructure.",
        },
      ],
    },
    {
      title: "Predictive Maintenance",
      description:
        "AI-driven solutions for vehicle maintenance and diagnostics.",
      items: [
        {
          name: "IoT-based Diagnostic Tools",
          info: "Real-time vehicle health monitoring and predictive analytics.",
        },
        {
          name: "Automated Maintenance Scheduling",
          info: "Software for proactive maintenance planning.",
        },
      ],
    },
    {
      title: "Supply Chain & Manufacturing",
      description:
        "Optimizing production and logistics for automotive companies.",
      items: [
        {
          name: "Automotive ERP Systems",
          info: "Enterprise resource planning solutions for streamlined operations.",
        },
        {
          name: "Robotic Process Automation",
          info: "AI-powered automation in vehicle production lines.",
        },
      ],
    },
    {
      title: "Autonomous & Electric Vehicles",
      description: "Driving innovation in self-driving and electric vehicles.",
      items: [
        {
          name: "ADAS (Advanced Driver Assistance Systems)",
          info: "AI-powered driving assistance and automation features.",
        },
        {
          name: "Battery Management Systems",
          info: "Optimizing efficiency and longevity of EV batteries.",
        },
      ],
    },
  ],
};

const oilAndGasObj = {
  title: "Oil and Gas",
  src: oilImg,
  description: "Optimizing Energy Production with Technology",
  extendedContent: `We empower the oil and gas industry with smart IT solutions, including real-time monitoring, predictive analytics, and automation tools that improve efficiency, safety, and regulatory compliance.`,
  sections: [
    {
      title: "Exploration & Production",
      description: "Enhancing upstream operations with technology.",
      items: [
        {
          name: "Geospatial Data Analytics",
          info: "AI-driven analysis for accurate resource exploration.",
        },
        {
          name: "Reservoir Management Systems",
          info: "Advanced tools for efficient resource extraction.",
        },
      ],
    },
    {
      title: "Asset Management & Maintenance",
      description: "Ensuring optimal performance of oil & gas assets.",
      items: [
        {
          name: "Predictive Maintenance Tools",
          info: "AI-based failure prediction for equipment and pipelines.",
        },
        {
          name: "IoT-Enabled Asset Tracking",
          info: "Real-time monitoring of field equipment and assets.",
        },
      ],
    },
    {
      title: "Safety & Compliance",
      description: "Improving worker safety and environmental protection.",
      items: [
        {
          name: "Environmental Monitoring Software",
          info: "Tools for tracking emissions and compliance requirements.",
        },
        {
          name: "Workplace Safety Solutions",
          info: "IoT-enabled safety monitoring and incident response systems.",
        },
      ],
    },
    {
      title: "Downstream Operations",
      description: "Optimizing refining, distribution, and retail processes.",
      items: [
        {
          name: "Refinery Process Automation",
          info: "AI-powered optimization of refining operations.",
        },
        {
          name: "Supply Chain Management Tools",
          info: "Software for logistics and fuel distribution efficiency.",
        },
      ],
    },
  ],
};

const astrologyAndHoroscopeObj = {
  title: "Astrology and Horoscope",
  src: astrologyImg,
  description: "Bringing Astrology into the Digital Age",
  extendedContent: `Leverage technology to enhance astrology and horoscope services. Our solutions include AI-powered predictions, personalized horoscope generators, and seamless online consultation platforms for astrologers.`,
  sections: [
    {
      title: "Online Consultation Platforms",
      description: "Connecting users with astrologers in real time.",
      items: [
        {
          name: "Live Video Consultation",
          info: "Secure video calling for astrology sessions.",
        },
        {
          name: "AI Chatbots for Horoscope Queries",
          info: "Instant automated responses for astrology-related questions.",
        },
      ],
    },
    {
      title: "Personalized Horoscope Systems",
      description: "Delivering customized astrological insights.",
      items: [
        {
          name: "Birth Chart Generators",
          info: "Automated generation of Kundali and birth charts.",
        },
        {
          name: "Daily & Weekly Predictions",
          info: "AI-driven daily, weekly, and yearly horoscope forecasts.",
        },
      ],
    },
    {
      title: "Astrology & AI Integration",
      description: "Enhancing astrology accuracy with machine learning.",
      items: [
        {
          name: "AI-powered Astrological Predictions",
          info: "Data-driven insights for better accuracy in astrology readings.",
        },
        {
          name: "Predictive Analysis for Future Trends",
          info: "Using AI to predict astrological trends based on planetary movements.",
        },
      ],
    },
  ],
};

const insuranceObj = {
  title: "Insurance",
  src: insuranceImg,
  description: "Transforming the Insurance Sector with Technology",
  extendedContent: `Modernize the insurance industry with AI-driven automation, fraud detection, and customer experience solutions. We provide tools to streamline underwriting, claims processing, and policy management.`,
  sections: [
    {
      title: "AI-Powered Risk Assessment",
      description: "Improving underwriting with data analytics.",
      items: [
        {
          name: "Predictive Risk Analytics",
          info: "AI-based risk evaluation for policy underwriting.",
        },
        {
          name: "Automated Fraud Detection",
          info: "Machine learning algorithms for detecting fraudulent claims.",
        },
      ],
    },
    {
      title: "Claims Processing Automation",
      description: "Enhancing efficiency in claims settlements.",
      items: [
        {
          name: "AI Claims Processing",
          info: "Automated claim validation and settlement systems.",
        },
        {
          name: "Blockchain for Insurance",
          info: "Securing transactions and improving transparency.",
        },
      ],
    },
    {
      title: "Customer Experience Solutions",
      description: "Enhancing user engagement and satisfaction.",
      items: [
        {
          name: "Chatbots for Customer Support",
          info: "AI-driven virtual assistants for policyholders.",
        },
        {
          name: "Personalized Policy Recommendations",
          info: "AI-powered tools for suggesting the best coverage options.",
        },
      ],
    },
  ],
};

const bankingObj = {
  title: "Banking",
  src: bankingImg,
  description: "Modernizing Banking with Fintech Innovations",
  extendedContent: `Revolutionize the banking sector with AI-powered solutions, blockchain security, and digital banking platforms. Our solutions drive automation, fraud prevention, and seamless customer experiences.`,
  sections: [
    {
      title: "Digital Banking & Fintech",
      description: "Enhancing digital banking experiences.",
      items: [
        {
          name: "Mobile Banking Apps",
          info: "Secure and user-friendly banking applications.",
        },
        {
          name: "AI-Powered Financial Assistants",
          info: "Automated financial management and spending insights.",
        },
      ],
    },
    {
      title: "Cybersecurity & Fraud Prevention",
      description: "Protecting financial transactions and data.",
      items: [
        {
          name: "AI-Based Fraud Detection",
          info: "Real-time fraud prevention systems.",
        },
        {
          name: "Blockchain for Secure Transactions",
          info: "Enhanced security for banking operations.",
        },
      ],
    },
    {
      title: "Loan & Credit Automation",
      description: "Streamlining lending processes.",
      items: [
        {
          name: "Automated Loan Underwriting",
          info: "AI-driven credit assessment tools.",
        },
        {
          name: "Credit Scoring Systems",
          info: "Data-driven solutions for better risk evaluation.",
        },
      ],
    },
  ],
};

const professionalObj = {
  title: "Professional Services",
  src: professionalImg,
  description: "Empowering Professionals with Digital Transformation",
  extendedContent: `Leverage advanced IT solutions to streamline operations, enhance collaboration, and improve service delivery across legal, consulting, financial, and other professional sectors. Our tools drive efficiency and ensure a seamless client experience.`,
  sections: [
    {
      title: "Workflow Automation",
      description: "Enhancing efficiency with smart automation tools.",
      items: [
        {
          name: "Document Management Systems",
          info: "Automating document organization, storage, and retrieval.",
        },
        {
          name: "Task & Project Management Software",
          info: "Optimizing workflow with AI-driven task management.",
        },
      ],
    },
    {
      title: "Client Relationship Management (CRM)",
      description: "Improving client engagement and retention.",
      items: [
        {
          name: "AI-Powered CRM Tools",
          info: "Automating client interactions and lead management.",
        },
        {
          name: "Virtual Assistance for Professionals",
          info: "Chatbots and AI-driven assistants for client support.",
        },
      ],
    },
    {
      title: "Data Security & Compliance",
      description: "Ensuring secure and compliant business operations.",
      items: [
        {
          name: "Cybersecurity Solutions",
          info: "Advanced security measures to protect client data.",
        },
        {
          name: "Regulatory Compliance Tools",
          info: "Ensuring adherence to industry regulations and legal standards.",
        },
      ],
    },
    {
      title: "Cloud-Based Collaboration",
      description: "Enhancing remote and hybrid work environments.",
      items: [
        {
          name: "Cloud Document Sharing",
          info: "Secure and seamless document access from anywhere.",
        },
        {
          name: "Video Conferencing & Virtual Meeting Platforms",
          info: "Integrated tools for remote collaboration and communication.",
        },
      ],
    },
  ],
};

const retailEcommerceObj = {
  title: "Retail & E-Commerce",
  src: retailEcommerceImg,
  description: "Transforming Shopping Experiences with Technology",
  extendedContent: `Enhance retail and e-commerce operations with AI-powered insights, omnichannel solutions, and secure payment processing. Our solutions optimize customer engagement, inventory management, and personalized shopping experiences.`,
  sections: [
    {
      title: "Omnichannel Commerce",
      description: "Seamless integration of online and offline shopping.",
      items: [
        {
          name: "Unified Shopping Experience",
          info: "Integrated platforms for web, mobile, and physical stores.",
        },
        {
          name: "AI-Powered Chatbots",
          info: "Automated customer assistance and personalized recommendations.",
        },
      ],
    },
    {
      title: "Inventory & Supply Chain Management",
      description: "Optimizing stock levels and logistics operations.",
      items: [
        {
          name: "AI-Based Demand Forecasting",
          info: "Predicting sales trends for better inventory planning.",
        },
        {
          name: "Real-Time Inventory Tracking",
          info: "IoT-enabled monitoring for efficient stock management.",
        },
      ],
    },
    {
      title: "Personalized Customer Experience",
      description: "Enhancing engagement with data-driven insights.",
      items: [
        {
          name: "Recommendation Engines",
          info: "AI-driven product suggestions based on customer behavior.",
        },
        {
          name: "Loyalty & Rewards Programs",
          info: "Personalized promotions and discounts using data analytics.",
        },
      ],
    },
    {
      title: "Secure Payments & Fraud Prevention",
      description: "Ensuring safe and seamless transactions.",
      items: [
        {
          name: "AI-Powered Fraud Detection",
          info: "Machine learning algorithms for detecting fraudulent activities.",
        },
        {
          name: "Blockchain-Based Payments",
          info: "Secure and decentralized transaction processing.",
        },
      ],
    },
  ],
};

const telecommunicationsObj = {
  title: "Telecommunications",
  src: telecommunicationsImg,
  description: "Revolutionizing Connectivity with Advanced IT Solutions",
  extendedContent: `We provide cutting-edge IT solutions to optimize telecom networks, enhance customer experience, and drive innovation in the communication industry. Our services include 5G optimization, AI-driven network monitoring, and digital customer engagement platforms.`,
  sections: [
    {
      title: "Network Optimization & 5G",
      description: "Improving network performance and connectivity.",
      items: [
        {
          name: "AI-Powered Network Analytics",
          info: "Automated monitoring and predictive maintenance for telecom networks.",
        },
        {
          name: "5G Deployment & Optimization",
          info: "Enhancing connectivity with next-gen network solutions.",
        },
      ],
    },
    {
      title: "Customer Experience & Support",
      description: "Enhancing telecom customer engagement.",
      items: [
        {
          name: "AI Chatbots for Customer Support",
          info: "Automated issue resolution and assistance for telecom customers.",
        },
        {
          name: "Personalized Data Plans & Offers",
          info: "Real-time analytics for tailored customer plans and promotions.",
        },
      ],
    },
    {
      title: "Billing & Revenue Management",
      description: "Streamlining telecom financial operations.",
      items: [
        {
          name: "Real-Time Billing Systems",
          info: "Automated and transparent billing solutions.",
        },
        {
          name: "Fraud Detection & Prevention",
          info: "AI-driven security solutions to detect billing fraud.",
        },
      ],
    },
    {
      title: "IoT & Smart Connectivity",
      description: "Expanding telecom services through IoT integration.",
      items: [
        {
          name: "Smart City Connectivity",
          info: "IoT solutions for urban infrastructure and communication networks.",
        },
        {
          name: "Connected Devices & Wearables",
          info: "Seamless communication for IoT-powered gadgets.",
        },
      ],
    },
  ],
};

export {
  industriesObj,
  financeObj,
  travelObj,
  healthObj,
  manufacturingObj,
  educationObj,
  realEstateObj,
  transportationObj,
  telecommunicationsObj,
  professionalObj,
  mediaObj,
  automotiveObj,
  oilAndGasObj,
  astrologyAndHoroscopeObj,
  insuranceObj,
  bankingObj,
  retailEcommerceObj,
};
