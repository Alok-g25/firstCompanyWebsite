import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

//libraries
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
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
  ChevronUpIcon,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  Link,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { NavLink, Route } from "react-router";

//data
import { servicesObj } from "../data/services/services";
import { aboutObj } from "../data/about/about";
import { industriesObj } from "../data/industries/industries";
import { solutionsObj } from "../data/solutions/solutions";
import Logo from "/markle-logo.png";
import { motion } from "framer-motion";
import LogoBlack from "/markle-logo-black.png";
import { callsToAction } from "../data/callsToAction";

const NavBar = ({ isBlack = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(open === id ? null : id);

  useEffect(() => {
    const handleClickOutside = () => setOpen(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  //for sticky navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Global"
        className={`fixed left-0 w-full z-50 transition-all p-4 lg:px-8
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md top-0"
            : isBlack
            ? "bg-black/80 top-0"
            : "bg-transparent top-0 sm:top-10"
        }`}
      >
        <div className="flex items-center justify-between font-montserrat">
          <div className="flex flex-1">
            <NavLink to="/" className="m-1.5 mx-3 p-0.5 md:mx-3">
              <span className="sr-only">Markle Tech</span>
              <img
                alt="Logo"
                src={Logo}
                className="h-8 sm:h-12 sm:w-60 lg:w-44 lg:h-9"
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 sm:size-8" />
            </button>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:flex-1 flex-shrink">
            <PopoverGroup className="hidden lg:flex lg:gap-x-6">
              <Popover className="relative">
                <PopoverButton
                  className="flex items-center gap-x-1 text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  onClick={() => handleOpen(1)}
                >
                  About
                  <motion.div
                    animate={{ rotate: open === 1 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </motion.div>
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-10 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="grid grid-cols-2 gap-4 p-4 font-poppins">
                    {aboutObj.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-2xl p-4 text-lg hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white">
                          {/* {item.icon} */}
                          {item.icon ? (
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          ) : (
                            <Code2
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          )}
                        </div>
                        <div className="flex-auto">
                          <NavLink
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                          {/* <p className="mt-1 text-xs text-gray-600">
                            {item.description}
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <Popover className="relative">
                <PopoverButton
                  className="flex items-center gap-x-1 text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0 "
                  onClick={() => handleOpen(2)}
                >
                  Services
                  <motion.div
                    animate={{ rotate: open === 2 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </motion.div>
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="grid grid-cols-3 gap-4 p-5 font-poppins">
                    {[
                      ...servicesObj.slice(0, 11),
                      servicesObj[servicesObj.length - 1],
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-2xl p-4 text-lg hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <NavLink
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                          {/* <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p> */}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <Popover className="relative">
                <PopoverButton
                  className="flex items-center gap-x-1 text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  onClick={() => handleOpen(3)}
                >
                  Industries
                  <motion.div
                    animate={{ rotate: open === 3 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </motion.div>
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-56 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="grid grid-cols-3 gap-4 p-5 font-poppins">
                    {[
                      ...industriesObj.slice(0, 11),
                      industriesObj[industriesObj.length - 1],
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-2xl p-4 text-lg hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <NavLink
                            to={item.href}
                            className="block font-semibold text-gray-900 w-32 overflow-hidden overflow-ellipsis"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                          {/* <p className="mt-1 text-gray-600">
                            {item.description}
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <Popover className="relative">
                <PopoverButton
                  className="flex items-center gap-x-1 text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  onClick={() => handleOpen(4)}
                >
                  Solutions
                  <motion.div
                    animate={{ rotate: open === 4 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </motion.div>
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute mt-2 w-screen z-10 overflow-hidden -left-96 max-w-3xl rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="grid grid-cols-3 gap-4 p-5 font-poppins">
                    {solutionsObj.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-2xl p-2 text-lg hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <NavLink
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <NavLink
                to="/pricing"
                className="text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0"
              >
                Pricing
              </NavLink>
            </PopoverGroup>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end mx-6">
            <NavLink
              to="/contact-us"
              className="text-lg font-semibold text-gray-100 focus:outline-none focus:ring-0 focus-visible:ring-0"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full sm:max-w-sm bg-white shadow-xl ring-1 ring-gray-900/10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="h-full flex flex-col p-6 overflow-y-scroll"
          >
            {/* Header */}
            <div className="flex items-center justify-between mx-3">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <img alt="" src={LogoBlack} className="h-8 md:h-10 w-auto" />
              </NavLink>
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-black"
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="mt-6 space-y-2">
              {[
                { title: "About", items: aboutObj },
                {
                  title: "Services",
                  items: [...servicesObj, ...callsToAction],
                },
                { title: "Industries", items: industriesObj },
                { title: "Solutions", items: solutionsObj },
              ].map((section) => (
                <details key={section.title} className="group">
                  <summary className="flex justify-between items-center py-2 px-3 rounded-lg cursor-pointer text-base font-semibold text-gray-900 hover:bg-gray-50">
                    {section.title}
                    <ChevronDownIcon className="size-5 transform transition-transform group-open:rotate-180" />
                  </summary>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 space-y-2"
                  >
                    {section.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                </details>
              ))}

              {/* Static Links */}
              <a
                href="/pricing"
                className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Pricing
              </a>
              <a
                href="/contact-us"
                className="block px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default NavBar;
