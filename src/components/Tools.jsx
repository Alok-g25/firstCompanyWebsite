import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const cardDataArray = [
  {
    category: "Frontend",
    items: [
      {
        title: "HTML",
        content: "HTML structures web pages with semantic elements.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        title: "CSS",
        content: "CSS styles web pages with layouts, colors, and fonts.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        title: "JavaScript",
        content: "JavaScript adds interactivity and dynamic content.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        title: "ReactJS",
        content: "ReactJS builds reusable UI components efficiently.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        title: "Tailwind CSS",
        content: "Tailwind CSS provides utility-first classes for design.",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        title: "TypeScript",
        content: "TypeScript enhances JavaScript with static typing.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        title: "Next.js",
        content: "Next.js enables server-side rendering for React apps.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "NodeJS",
        content: "NodeJS runs JavaScript on the server side.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        title: "ExpressJS",
        content: "ExpressJS is a minimalist web framework for Node.js.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        title: "PHP",
        content: "PHP handles server-side logic for dynamic web apps.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        title: "Python",
        content: "Python is versatile for web development and automation.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        title: "Django",
        content: "Django is a high-level Python framework for web apps.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        title: "Golang",
        content: "Golang is efficient for building scalable backends.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
    ],
  },
  {
    category: "Databases and Storage",
    items: [
      {
        title: "MySQL",
        content: "MySQL is a robust relational database management system.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        title: "PostgreSQL",
        content: "PostgreSQL is an advanced open-source SQL database.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        title: "MongoDB",
        content: "MongoDB stores data in flexible, JSON-like documents.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        title: "Redis",
        content: "Redis is an in-memory data structure store for caching.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        title: "Firebase",
        content: "Firebase provides real-time NoSQL cloud database services.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        title: "Amazon S3",
        content: "Amazon S3 offers scalable cloud object storage.",
        logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      {
        title: "Cassandra",
        content: "Cassandra is a NoSQL database optimized for scalability.",
        logo: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
      },
    ],
  },
  {
    category: "Deployment Tools",
    items: [
      {
        title: "Docker",
        content:
          "Docker packages applications into containers for easy deployment.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        title: "Kubernetes",
        content:
          "Kubernetes automates containerized application deployment and scaling.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        title: "AWS",
        content: "AWS provides cloud computing services for app hosting.",
        logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      {
        title: "Netlify",
        content: "Netlify automates modern web app deployments.",
        logo: "https://www.netlify.com/v3/img/components/logomark.png",
      },
      {
        title: "Vercel",
        content: "Vercel optimizes React-based apps with seamless deployment.",
        logo: "https://assets.vercel.com/image/upload/v1592322480/front/favicon/vercel/favicon.ico",
      },
      {
        title: "GitHub Actions",
        content: "GitHub Actions automates CI/CD pipelines for projects.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        title: "Jenkins",
        content:
          "Jenkins facilitates continuous integration and continuous delivery.",
        logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
      },
    ],
  },
  {
    category: "APIs and Integration",
    items: [
      {
        title: "REST API",
        content: "REST APIs allow communication via standard HTTP methods.",
        logo: "https://cdn-icons-png.flaticon.com/512/3659/3659737.png",
      },
      {
        title: "GraphQL",
        content: "GraphQL enables flexible data queries for APIs.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        title: "gRPC",
        content: "gRPC facilitates high-performance API communication.",
        logo: "https://grpc.io/img/logos/grpc-icon-color.png",
      },
      {
        title: "Postman",
        content: "Postman tests and manages API requests efficiently.",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        title: "OAuth",
        content: "OAuth secures authorization for APIs and apps.",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968941.png",
      },
      {
        title: "Firebase API",
        content:
          "Firebase APIs integrate real-time databases and authentication.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "Application and Monitoring",
    items: [
      {
        title: "Prometheus",
        content: "Prometheus monitors system performance and metrics.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      },
      {
        title: "Grafana",
        content: "Grafana visualizes monitoring data with dashboards.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
      {
        title: "New Relic",
        content: "New Relic tracks application performance in real-time.",
        logo: "https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg",
      },
      {
        title: "Sentry",
        content: "Sentry helps detect and fix application errors.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg",
      },
      {
        title: "Datadog",
        content: "Datadog provides cloud infrastructure monitoring tools.",
        logo: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg",
      },
      {
        title: "Nagios",
        content: "Nagios monitors networks, servers, and system health.",
        logo: "https://www.vectorlogo.zone/logos/nagios/nagios-icon.svg",
      },
    ],
  },
];

// TOOLS section
export default function Tools() {
  const [activeHeading, setActiveHeading] = useState("Frontend");
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollCarousel = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const handleDrag = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust scrolling speed
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") scrollCarousel("left");
      if (e.key === "ArrowRight") scrollCarousel("right");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const currentItems = cardDataArray.find(
    (category) => category.category === activeHeading
  ).items;
  const showArrows = currentItems.length > 4;

  return (
    <div className="py-4 sm:p-6 lg:p-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#330073] mb-4 font-montserrat">
        Tools We Use
      </h2>

      {/* <div className="grid grid-cols-2 sm:grid-cols-6 sm:space-x-4 mb-4 sm:mb-6">
        {cardDataArray.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveHeading(category.category)}
            className={`px-4 sm:px-2 py-1 sm:py-1 rounded-full font-semibold transition-colors duration-300 text-left sm:text-center hover:bg-[#330073] text-gray-50 font-plex ${
              activeHeading === category.category
                ? "bg-[#330073] "
                : "bg-gray-400"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div> */}

      <div className="px-2">
        <div className="space-x-1 sm:space-x-4 overflow-x-auto mx-3 sm:mx-auto">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full sm:max-w-screen-xl"
          >
            {cardDataArray.map((category) => (
              <SwiperSlide key={category.category} className="!w-fit mx-auto">
                <button
                  key={category.category}
                  onClick={() => setActiveHeading(category.category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 text-center hover:bg-[#330073] hover:text-white font-plex ${
                    activeHeading === category.category
                      ? "bg-[#330073] text-white "
                      : "bg-[#E9D9FF] text-[#330073] "
                  }`}
                >
                  {category.category}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative">
          {showArrows && (
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute hidden md:block left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-0 opacity-85 hover:bg-gray-200"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex space-x-1 sm:space-x-4 overflow-x-auto px-2 md:px-10 scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={startDrag}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
            onMouseMove={handleDrag}
          >
            <style>
              {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
            </style>
            {cardDataArray
              .find((category) => category.category === activeHeading)
              .items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] shadow-[#E9D9FF] border-2 border-[#E9D9FF] hover:bg-[#E9D9FF] rounded-2xl shadow-lg m-4 p-6 cursor-pointer scroll-snap-align-start transition-transform duration-300"
                >
                  <img
                    src={item.logo}
                    alt="Item Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 mb-2 mx-auto"
                  />
                  <p className="text-sm sm:text-base text-gray-900 text-center font-poppins">
                    {item.content}
                  </p>
                </motion.div>
              ))}
          </div>

          {showArrows && (
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute hidden md:block right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-10 opacity-85 hover:bg-gray-200"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
// return (
//   <div className="">
//     <div className="m-8 px-8 sm:m-10 md:h-64">
//       <div className="">
//         {/* <div className=""> */}
//         <h2 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-bold text-[#330073] text-center">
//           Tools We Use
//         </h2>
//         <div className="flex space-x-3 md:space-x-6 mb-6 justify-center items-center mt-4">
//           {/* Tools Headings */}
//           {cardDataArray.map((category) => (
//             <button
//               key={category.category}
//               onClick={() => setActiveHeading(category.category)}
//               className={`px-3 md:py-1 rounded-lg font-mono font-semibold group ${
//                 activeHeading === category.category
//                   ? "text-[#330073]"
//                   : " text-gray-500"
//               }`}
//             >
//               {category.category}
//             </button>
//           ))}
//         </div>
//         {/* </div> */}

//         {/* Cards */}

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center my-4 mx-11 p-2"> */}
//         <div className="relative">
//           {" "}
//           <button
//             onClick={() => scrollCarousel("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div
//             ref={carouselRef}
//             className="flex space-x-4 overflow-x-auto px-10 scrollbar-hide"
//             style={{
//               scrollSnapType: "x mandatory",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//             onMouseDown={startDrag}
//             onMouseLeave={stopDrag}
//             onMouseUp={stopDrag}
//             onMouseMove={handleDrag}
//           >
//             <style>
//               {`
//             .scrollbar-hide::-webkit-scrollbar {
//               display: none;
//             }
//           `}
//             </style>
//             {cardDataArray
//               .find((category) => category.category === activeHeading)
//               .items.map((item, index) => (
//                 // <div
//                 //   key={index}
//                 //   // onClick={() => {
//                 //   //   if (isExpanded == index) setIsExpanded(null);
//                 //   //   else if (isExpanded != index) setIsExpanded(index);
//                 //   // }}
//                 //   onMouseEnter={() => setIsExpanded(index)}
//                 //   onMouseLeave={() => setIsExpanded(null)}
//                 //   onClick={() =>
//                 //     isExpanded === index
//                 //       ? setIsExpanded(null)
//                 //       : setIsExpanded(index)
//                 //   }
//                 //   className={`w-60 cursor-pointer overflow-hidden transition delay-150 duration-500 ease-in-out ${
//                 //     isExpanded === index ? "max-h-64" : "max-h-16"
//                 //   }`}
//                 // >
//                 //   {/* Card Title */}
//                 //   <h3
//                 //     className={`font-bold text-lg p-4 rounded-t-2xl duration-100 ease-in-out ${
//                 //       isExpanded === index
//                 //         ? "bg-[#330073] text-[#E9D9FF]"
//                 //         : "bg-[#E9D9FF] rounded-xl"
//                 //     }`}
//                 //   >
//                 //     {item.title}
//                 //   </h3>

//                 //   {/* Card Content */}
//                 //   <div
//                 //     className={`p-4 text-sm text-[#E9D9FF] bg-[#330073] rounded-b-2xl duration-500 ease-in-out ${
//                 //       isExpanded === index ? "opacity-100" : "opacity-0 hidden"
//                 //     }`}
//                 //   >
//                 //     {item.content}
//                 //   </div>
//                 // </div>

//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="min-w-[240px] bg-[#E9D9FF] rounded-2xl shadow-md p-4 cursor-pointer scroll-snap-align-start transition-transform duration-300"
//                 >
//                   <h3 className="font-bold text-xl text-[#330073] mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700">{item.content}</p>
//                 </motion.div>
//               ))}
//           </div>
//           <button
//             onClick={() => scrollCarousel("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
