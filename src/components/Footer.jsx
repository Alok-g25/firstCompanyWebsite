import { Typography } from "@material-tailwind/react";
import React from "react";
import { Logo } from "../data/home/homepage";
import { Link } from "react-router";

const links = [
  {
    title: "Products",
    items: [
      { name: "ERP", href: "/solutions/erp" },
      { name: "CRM", href: "/solutions/crm" },
      { name: "E-commerce", href: "/solutions/e-commerce" },
      { name: "OTT Platform", href: "/solutions/erp" },
    ],
  },
  {
    title: "Information",
    items: [
      { name: "FAQs", href: "/about/faqs" },
      { name: "Blogs", href: "/*" },
      { name: "Support", href: "/contact-us" },
      // { name: "News", href: "/*" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about/company" },
      { name: "Careers", href: "/about/careers" },
      { name: "Contact Us", href: "/contact-us" },
      // { name: "Lift Media", href: "/*" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#330073]">
        <div className="w-full max-w-screen-2xl p-2 py-6 md:py-8">
          <div className="md:grid md:grid-cols-2 ms-3 md:ms-0">
            <div className="my-5 mx-4 flex flex-col justify-center items-center">
              <Link to="/">
                <img
                  src={Logo}
                  className="h-14 md:h-20"
                  alt="MarkleTech Logo"
                />
              </Link>
              <div className="md:my-6">
                <hr className="w-full my-3 sm:mx-auto border-gray-600 lg:my-3" />
                <p className="text-white text-justify max-w-lg font-montserrat">
                  Subscribe to our newsletter and unlock a world of exclusive
                  benefits. Be the first to know about our latest products,
                  special promotions, and exciting updates.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 mx-4 sm:place-content-center md:mx-5 md:place-items-start font-montserrat">
              {links.map((link, index) => (
                <div key={index}>
                  <h2 class="mb-3 text-sm font-semibold text-white uppercase ">
                    {link.title}
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    {link.items.map((item, i) => (
                      <li key={i} class="mb-2">
                        <Link to={item.href} class="hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr class="my-4 sm:mx-auto border-gray-600" />
          <div class="flex flex-col items-center sm:flex md:flex-row sm:items-center sm:justify-around font-montserrat">
            <Typography
              variant="small"
              className="mb-2 text-center font-normal text-white md:mb-0"
            >
              &copy; {currentYear} <a href="#">Markle Tech</a>. All Rights
              Reserved.
            </Typography>

            <div className="flex gap-8 text-white font-montserrat">
              <a href="/terms-and-conditions" className="hover:text-white">
                Terms
              </a>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy
              </a>
              <a href="/refund-policy" className="hover:text-white">
                Refund
              </a>
              <a href="/disclaimer" className="hover:text-white">
                Disclaimer
              </a>
            </div>
            <div class="flex mt-4 sm:justify-center sm:mt-2">
              <a
                href="https://www.facebook.com/markletechandmedia/"
                class="text-gray-300 hover:text-gray-100"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/markletechandmedia/"
                className="text-gray-300 hover:text-gray-100 ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill-rule="evenodd"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href="https://in.linkedin.com/company/markle-tech-and-mediaagency"
                className="text-gray-300 hover:text-gray-100 ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>

                <span className="sr-only">LinkedIn page</span>
              </a>
              <a
                href="https://www.youtube.com/@markletechandmedia"
                className="text-gray-300 hover:text-gray-100 ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                >
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                </svg>

                <span className="sr-only">Youtube channel</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
