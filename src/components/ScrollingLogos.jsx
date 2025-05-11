import React, { useState } from "react";
import logoCarousel from "../data/home/logos";

export default function ScrollingLogos() {
  const [isPaused, setPaused] = useState(false);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  return (
    <div
      className="bg-[#330073] w-full inline-flex flex-nowrap overflow-hidden h-24 md:h-32"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <ul
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
          isPaused ? "" : "animate-loop-scroll"
        }`}
      >
        {logoCarousel.map((logo, id) => (
          <li key={id}>
            <img className="w-[130px] h-[46.5px]" src={logo.src} />
          </li>
        ))}
      </ul>
      <ul
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
          isPaused ? "" : "animate-loop-scroll"
        }`}
      >
        {logoCarousel.map((logo, id) => (
          <li key={id}>
            <img className="w-[130px] h-[46.5px]" src={logo.src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const logos = [
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
//   "src/images/logos-scroll-animation/amravathi.png",
// ];

// const LogoCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 13750,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-purple-900 py-6">
//       <Slider {...settings}>
//         {logos.map((logo, index) => (
//           <div key={index} className="flex justify-center items-center">
//             <img
//               src={logo}
//               alt={`Logo ${index + 1}`}
//               className="h-16 object-contain"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default LogoCarousel;
