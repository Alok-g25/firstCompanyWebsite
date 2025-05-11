import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PercentBadgeIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";

import softwareDevImg from "/src/images/services/servicesHero/software-development.jpg";
import devOpsImg from "/src/images/services/servicesHero/devops-consulting.jpg";
import ecommerceImg from "/src/images/services/servicesHero/ecommerce.jpg";
import mobileAppDevImg from "/src/images/services/servicesHero/mobile-app-dev.jpg";
import testingAndQaImg from "/src/images/services/servicesHero/testing-and-qa.jpg";
import UiUxImg from "/src/images/services/servicesHero/ui-ux-design.jpg";
import webDevImg from "/src/images/services/servicesHero/web-dev.jpg";
import mvpImg from "/src/images/services/servicesHero/mvp.jpg";
import lowCodeImg from "/src/images/services/servicesHero/low-code.jpg";
import digitalMarketingImg from "/src/images/services/servicesHero/digital-marketing.jpg";
import saasImg from "/src/images/services/servicesHero/saas.jpg";
import ItConsulting from "/src/images/services/servicesHero/it-consulting.jpeg";
import aiMlImg from "/src/images/services/servicesHero/aiMl.jpg";

const servicesObj = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to meet your unique business needs and challenges",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    name: "UI/UX Design",
    description:
      "Craft visually stunning and user-friendly designs to enhance user experience and engagement",
    href: "/services/ui-ux-design",
    icon: PencilSquareIcon,
  },
  {
    name: "Digital Marketing",
    description:
      "Boost your online presence and grow your business with targeted and effective marketing strategies",
    href: "/services/digital-marketing",
    icon: MegaphoneIcon,
  },
  {
    name: "Mobile App Development",
    description:
      "Build high-performance mobile applications for iOS and Android platforms to expand your reach",
    href: "/services/app-development",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "DevOps Consultation",
    description:
      "Streamline your development process with our DevOps practices to ensure efficient delivery and scalability",
    href: "/services/devOps-consultation",
    icon: Cog6ToothIcon,
  },
  {
    name: "MVP Development",
    description:
      "Quickly bring your ideas to life with minimum viable product (MVP) development services",
    href: "/services/mvp-development",
    icon: RocketLaunchIcon,
  },
  {
    name: "Web Development",
    description:
      "Create fast, secure, and scalable websites tailored to your business goals and user needs",
    href: "/services/web-development",
    icon: GlobeAltIcon,
  },
  {
    name: "E-commerce",
    description:
      "Build seamless and feature-rich online stores to deliver exceptional shopping experiences",
    href: "/services/e-commerce",
    icon: ShoppingBagIcon,
  },
  {
    name: "Low Code/No Code",
    description:
      "Empower your team with low-code and no-code solutions to develop apps faster and more efficiently",
    href: "/services/low-code",
    icon: LucideCloudLightning,
  },
  {
    name: "AI & Machine Learning Solutions",
    description:
      "Harness the power of AI and ML for automation, predictive analytics, NLP, computer vision, and intelligent business insights.",
    href: "/services/aiml-services",
    icon: CpuChipIcon,
  },
  {
    name: "IT Consulting",
    description:
      "Develop scalable and user-friendly SaaS applications to meet modern business demands",
    href: "/services/it-consulting",
    icon: CloudIcon,
  },
  {
    name: "Testing and QA",
    description:
      "Ensure your product's quality with thorough testing and quality assurance services",
    href: "/services/testing-and-quality-assurance",
    icon: CheckBadgeIcon,
  },
  {
    name: "SaaS Products",
    description:
      "Develop scalable and user-friendly SaaS applications to meet modern business demands",
    href: "/services/saas-products",
    icon: CloudIcon,
  },
  {
    name: "See All Services",
    description:
      "Explore the full range of services we offer to help your business thrive",
    href: "/services/all-services",
    icon: EllipsisHorizontalIcon,
  },
];

const softwareObj = {
  title: "Software Development",
  src: softwareDevImg,
  description:
    "We build scalable and secure software solutions tailored to your business needs. Our team of expert developers ensures high-performance, reliability, and efficiency, helping you achieve your digital transformation goals.",
  details:
    "Whether you're looking for a robust enterprise application, a cloud-based SaaS platform, or custom software, we provide cutting-edge technology solutions. Our agile development approach ensures flexibility, faster delivery, and seamless integration with your existing systems. We focus on clean code, maintainability, and future-proofing your applications to keep them relevant in a rapidly evolving tech landscape.",
  extendedContent:
    "Our software development process begins with a deep understanding of your business requirements, followed by strategic planning and execution. We utilize modern programming languages, frameworks, and best practices to build software that is robust, secure, and user-friendly. Our team specializes in cloud computing, microservices architecture, and DevOps to ensure continuous deployment and monitoring. Whether you need a web-based solution, a mobile application, or an enterprise system, we have the expertise to deliver high-quality results that scale with your business. Additionally, we provide ongoing support and updates to ensure your software remains up-to-date and continues to meet evolving business needs.",
  keywords: [
    "Custom Software",
    "Enterprise Solutions",
    "SaaS",
    "Cloud Computing",
    "Agile",
    "Scalability",
    "Microservices",
    "Automation",
    "AI Integration",
    "Cross-platform",
    "Security",
    "Backend Development",
    "Web Apps",
    "API Development",
    "Performance Optimization",
  ],
  icon: "🖥",
};

const uiuxObj = {
  title: "UI/UX Design",
  src: UiUxImg,
  description:
    "Crafting intuitive and visually stunning user interfaces for seamless digital experiences.",
  details:
    "We specialize in user-centered design, ensuring that every interaction is smooth, engaging, and effective.",
  extendedContent:
    "Our UI/UX design process involves in-depth research, wireframing, prototyping, and usability testing. We focus on enhancing user satisfaction through intuitive navigation, appealing visuals, and responsive design. Our team ensures that every product we design is accessible, functional, and visually appealing across all platforms.",
  keywords: [
    "User Interface",
    "User Experience",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
    "Accessibility",
    "Responsive Design",
    "Visual Design",
    "Interaction Design",
    "Typography",
    "Color Theory",
    "Design Systems",
    "Microinteractions",
    "Motion Design",
    "Product Design",
  ],
  icon: "🎨",
};

const digitalMarketingObj = {
  title: "Digital Marketing",
  src: digitalMarketingImg,
  description:
    "Helping brands grow online through strategic marketing campaigns and targeted outreach.",
  details:
    "Our digital marketing services include SEO, content marketing, PPC advertising, social media strategy, and email marketing.",
  extendedContent:
    "We leverage data-driven insights to create tailored marketing campaigns that maximize reach and engagement. Our team specializes in search engine optimization, social media management, influencer marketing, and paid advertising. We help businesses generate leads, increase brand awareness, and boost conversions through carefully planned marketing strategies.",
  keywords: [
    "SEO",
    "Social Media",
    "PPC",
    "Content Marketing",
    "Email Marketing",
    "Influencer Marketing",
    "Brand Awareness",
    "Lead Generation",
    "Analytics",
    "Conversion Optimization",
    "Ad Campaigns",
    "Google Ads",
    "Facebook Ads",
    "Marketing Strategy",
    "Customer Engagement",
  ],
  icon: "📈",
};

const mobileAppObj = {
  title: "Mobile App Development",
  src: mobileAppDevImg,
  description:
    "Building high-performance mobile applications for iOS and Android platforms.",
  details:
    "We develop feature-rich, scalable, and user-friendly mobile apps tailored to your business needs.",
  extendedContent:
    "Our mobile development team creates both native and cross-platform applications with seamless performance and intuitive interfaces. We follow best practices in UI/UX, security, and performance optimization to ensure that your app delivers a smooth user experience. From ideation to deployment, we handle the entire development lifecycle, ensuring high-quality results.",
  keywords: [
    "iOS Development",
    "Android Development",
    "Flutter",
    "React Native",
    "Cross-Platform",
    "Mobile UI/UX",
    "App Store Optimization",
    "Performance Optimization",
    "Push Notifications",
    "Mobile Security",
    "Cloud Integration",
    "Offline Support",
    "API Integration",
    "App Monetization",
    "Testing & Debugging",
  ],
  icon: "📱",
};

const devOpsObj = {
  title: "DevOps Consultation",
  src: devOpsImg,
  description:
    "Optimizing software development and deployment processes with DevOps best practices.",
  details:
    "We implement CI/CD pipelines, cloud automation, infrastructure as code, and security best practices.",
  extendedContent:
    "Our DevOps services focus on increasing efficiency, scalability, and reliability by integrating automation and continuous monitoring into your development workflow. We provide guidance on cloud adoption, serverless computing, and container orchestration to help businesses modernize their infrastructure.",
  keywords: [
    "CI/CD",
    "Cloud Automation",
    "Infrastructure as Code",
    "Kubernetes",
    "Docker",
    "Monitoring",
    "Security",
    "Serverless",
    "GitOps",
    "Configuration Management",
    "Performance Optimization",
    "Disaster Recovery",
    "Logging & Tracing",
    "Networking",
    "Deployment Strategies",
  ],
  icon: "⚙",
};

const mvpObj = {
  title: "MVP Development",
  src: mvpImg,
  description:
    "Helping startups and enterprises build Minimum Viable Products quickly and efficiently.",
  details:
    "We create functional prototypes that allow businesses to validate their ideas with minimal investment.",
  extendedContent:
    "Our MVP development process focuses on rapid prototyping, agile development, and iterative testing. We help you prioritize features, reduce time to market, and refine your product based on real user feedback. Our goal is to create a scalable foundation that allows for future enhancements while ensuring cost-effectiveness.",
  keywords: [
    "Startup",
    "Prototype",
    "Rapid Development",
    "Market Validation",
    "Lean Methodology",
    "Agile",
    "Scalability",
    "User Feedback",
    "Iterative Testing",
    "Product Market Fit",
    "Wireframing",
    "Testing & QA",
    "Cloud Hosting",
    "Cost Optimization",
    "Growth Strategy",
  ],
  icon: "🚀",
};

const webObj = {
  title: "Web Development",
  src: webDevImg,
  description:
    "Designing and developing modern, responsive, and high-performing websites.",
  details:
    "We create websites that are visually appealing, optimized for search engines, and tailored to business goals.",
  extendedContent:
    "Our web development services cover frontend, backend, and full-stack development using the latest technologies. We build custom web applications, corporate websites, and content management systems that are scalable, secure, and optimized for performance. Whether you're looking for a simple landing page or a complex web solution, we ensure quality and user-friendliness.",
  keywords: [
    "Frontend",
    "Backend",
    "Full-Stack",
    "Responsive Design",
    "SEO",
    "CMS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Web Security",
    "Performance Optimization",
    "UX/UI",
    "Web Apps",
    "E-commerce",
  ],
  icon: "🌍",
};

const eCommerceObj = {
  title: "E-commerce",
  src: ecommerceImg,
  description:
    "Developing secure and scalable e-commerce platforms for businesses of all sizes.",
  details:
    "We build online stores with seamless shopping experiences, payment integration, and advanced analytics.",
  extendedContent:
    "Our e-commerce solutions are designed to enhance customer experience and increase sales. We integrate secure payment gateways, implement performance optimization techniques, and ensure smooth inventory management. Our platforms support multi-vendor capabilities, subscription models, and advanced analytics for better business insights.",
  keywords: [
    "Online Store",
    "Shopify",
    "WooCommerce",
    "Magento",
    "Payment Integration",
    "Inventory Management",
    "Multi-Vendor",
    "Customer Retention",
    "Conversion Optimization",
    "Analytics",
    "Security",
    "Order Tracking",
    "Shipping & Logistics",
    "Marketing Automation",
    "Mobile Commerce",
  ],
  icon: "🛒",
};

const lowCodeObj = {
  title: "Low Code/No Code",
  src: lowCodeImg,
  description:
    "Empowering businesses to build applications quickly without extensive coding.",
  details:
    "We utilize low-code and no-code platforms to develop scalable, functional applications efficiently.",
  extendedContent:
    "Our low-code/no-code solutions help businesses launch applications faster with minimal technical expertise. We provide consulting, implementation, and integration services using platforms like Bubble, OutSystems, and Webflow. Whether you're automating workflows or building customer-facing apps, we enable innovation with ease.",
  keywords: [
    "Automation",
    "No-Code Tools",
    "Low-Code Platforms",
    "Business Applications",
    "Webflow",
    "Bubble.io",
    "Zapier",
    "Integration",
    "AI Automation",
    "Drag & Drop Builder",
    "Prototyping",
    "Workflow Automation",
    "Scalability",
    "Security",
    "Customization",
  ],
  icon: "⚡",
};

const testingObj = {
  title: "Testing and QA",
  src: testingAndQaImg,
  description:
    "Ensuring software quality through rigorous testing and quality assurance methodologies.",
  details:
    "We provide manual and automated testing services to improve software reliability, security, and performance.",
  extendedContent:
    "Our QA team conducts comprehensive testing, including functional, regression, security, and performance testing. We use automation frameworks to speed up the testing process and ensure consistency. Our approach helps businesses minimize defects, enhance user experience, and reduce maintenance costs.",
  keywords: [
    "Automation Testing",
    "Manual Testing",
    "Performance Testing",
    "Security Testing",
    "Regression Testing",
    "Bug Tracking",
    "Test Automation Frameworks",
    "Load Testing",
    "API Testing",
    "Mobile Testing",
    "Cloud Testing",
    "CI/CD Testing",
    "Compliance Testing",
    "User Acceptance Testing",
    "Code Review",
  ],
  icon: "🛠",
};

const itConsultingObj = {
  title: "IT Consulting Services",
  src: ItConsulting,
  description:
    "Expert IT guidance to help businesses optimize technology infrastructure and strategy.",
  details:
    "We provide tailored IT consulting services, ensuring businesses leverage the best technology solutions for efficiency, security, and scalability.",
  extendedContent:
    "Our IT consulting services focus on aligning technology with business goals. We assess your current IT landscape, identify areas for improvement, and create a roadmap for digital transformation. Whether you need cloud migration, cybersecurity enhancements, or IT infrastructure optimization, our experts help you make informed decisions. We also offer IT strategy planning, software recommendations, and process automation to enhance operational efficiency.",
  keywords: [
    "IT Strategy",
    "Digital Transformation",
    "Cloud Solutions",
    "Cybersecurity",
    "Infrastructure Optimization",
    "Process Automation",
    "Risk Management",
    "Enterprise Architecture",
    "Business Continuity",
    "Data Management",
    "Technology Assessment",
    "IT Governance",
    "Scalability Planning",
    "Software Consultation",
    "Networking Solutions",
  ],
  icon: "💻",
};

const saasProductsObj = {
  title: "SaaS Products",
  src: saasImg,
  description:
    "Designing and developing cloud-based SaaS solutions for businesses across industries.",
  details:
    "We build scalable, secure, and high-performance SaaS applications that streamline operations and enhance user experience.",
  extendedContent:
    "Our SaaS development services focus on delivering cloud-based applications with multi-tenancy, security, and seamless user experience. We handle end-to-end development, from ideation and architecture planning to deployment and maintenance. Our expertise covers payment gateway integration, subscription management, API development, and data analytics, ensuring your SaaS product remains competitive in the market.",
  keywords: [
    "Cloud Applications",
    "Multi-Tenancy",
    "Subscription Management",
    "Payment Integration",
    "API Development",
    "User Management",
    "Security & Compliance",
    "Performance Optimization",
    "Microservices",
    "Scalability",
    "Database Architecture",
    "DevOps Integration",
    "AI-Powered SaaS",
    "Data Analytics",
    "Customer Retention",
  ],
  icon: "☁",
};

const aiMlObj = {
  title: "Artificial Intelligence & Machine Learning Solutions",
  src: aiMlImg, // Replace with actual image source
  description:
    "Leverage AI and ML to drive automation, optimize processes, and extract valuable insights. Our intelligent solutions help businesses enhance decision-making, improve efficiency, and stay ahead in a data-driven world.",
  details:
    "We provide cutting-edge AI and ML solutions tailored to your business needs, from predictive analytics and deep learning to NLP and computer vision. Our expertise ensures seamless integration with your existing systems, allowing for intelligent automation, real-time insights, and scalable AI-driven applications. We prioritize ethical AI development, ensuring transparency, security, and accuracy in all our AI models.",
  extendedContent:
    "Our AI & ML development process begins with understanding your business challenges and data infrastructure. We then design, train, and deploy custom AI models using the latest advancements in deep learning, reinforcement learning, and big data analytics. Our team specializes in AI-powered automation, chatbots, predictive modeling, and intelligent data processing. Whether you need AI-driven customer insights, process automation, or advanced analytics, our solutions are built to enhance efficiency and scalability. Additionally, we provide continuous monitoring, optimization, and retraining of AI models to keep them relevant in an ever-evolving digital landscape.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Predictive Analytics",
    "Computer Vision",
    "Natural Language Processing",
    "AI Automation",
    "Data Science",
    "Big Data",
    "Neural Networks",
    "AI Chatbots",
    "Reinforcement Learning",
    "AI for Business Intelligence",
    "Cloud AI Solutions",
    "Smart Recommendations",
  ],
  icon: "🤖",
};

export {
  servicesObj,
  softwareObj,
  uiuxObj,
  digitalMarketingObj,
  mobileAppObj,
  devOpsObj,
  mvpObj,
  webObj,
  eCommerceObj,
  lowCodeObj,
  testingObj,
  itConsultingObj,
  saasProductsObj,
  aiMlObj,
};
