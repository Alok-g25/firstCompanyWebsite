import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../data/about/clientReviews";

const CustomerReviews = () => {
  const [currRev, setCurrRev] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const reviewRef = useRef(null);
  const modalRef = useRef(null);
  let touchStartX = 0;

  const totalReviews = reviews.length;
  const currentReviewer = reviews[currRev];
  const prevReviewer = reviews[(currRev - 1 + totalReviews) % totalReviews];
  const nextReviewer = reviews[(currRev + 1) % totalReviews];
  const nextToNextReviewer = reviews[(currRev + 2) % totalReviews];
  const prevToPrevReviewer =
    reviews[(currRev - 2 + totalReviews) % totalReviews];

  useEffect(() => {
    const checkOverflow = () => {
      if (reviewRef.current) {
        setIsOverflowing(
          reviewRef.current.scrollHeight > reviewRef.current.clientHeight
        );
      }
    };
    checkOverflow();
  }, [currRev]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrRev((prev) => (prev + 1) % totalReviews);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalReviews]);

  const changeReview = (newIndex) => {
    setCurrRev((currRev) => (newIndex + totalReviews) % totalReviews);
  };

  const handleSwipe = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchStartX - touchEndX;

      if (deltaX > 50) {
        changeReview(currRev + 1);
      } else if (deltaX < -50) {
        changeReview(currRev - 1);
      }
    }
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  // const formatName = (name, isCurrent) => {
  //   if (isCurrent) return name;
  //   return "";
  // };

  return (
    <div
      className="m-3 mb-12 md:mb-20"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleSwipe}
    >
      <div>
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed text-center pb-4 md:pb-3 font-semibold text-[#330073] font-montserrat">
          Why customers love{" "}
          <span className="font-bold lg:block">working with us</span>
        </h1>
        <div className="flex justify-evenly items-center gap-4 md:gap-8">
          <ArrowLeftCircle
            className="text-[#330073] md:hover:bg-gray-100 rounded-full cursor-pointer w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 hover:scale-110"
            onClick={() => changeReview(currRev - 1)}
          />
          <div className="flex flex-col items-center w-full max-w-md sm:max-w-screen-sm md:h-auto sm:p-4 bg-white rounded-xl shadow-lg">
            <div className="h-80 sm:h-52 min-h-52 max-h-80 max-w-sm sm:max-w-screen-sm flex sm:items-center justify-center overflow-hidden relative m-1">
              {/* <AnimatePresence mode="wait"> */}
              <motion.p
                key={currRev}
                ref={reviewRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-lg text-center font-normal px-5 leading-relaxed text-gray-700 line-clamp-8 sm:line-clamp-4 font-poppins"
                onClick={() => isOverflowing && setIsModalOpen(true)}
              >
                {currentReviewer.review}
              </motion.p>
              {/* </AnimatePresence> */}
              {isOverflowing && (
                <button
                  className="absolute bottom-2 right-2 text-sm text-blue-500 underline cursor-pointer font-plex"
                  onClick={() => setIsModalOpen(true)}
                >
                  Read more
                </button>
              )}
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-1 font-montserrat">
              {currentReviewer.name}
            </p>
            <p className="text-sm text-gray-500 italic m-1 text-center font-poppins">
              {currentReviewer.reviewerDesc}
            </p>

            <div className="flex items-center gap-2 md:gap-6 mt-6 h-24">
              {[
                prevToPrevReviewer,
                prevReviewer,
                currentReviewer,
                nextReviewer,
                nextToNextReviewer,
              ].map((reviewer, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    index === 0 || index === 4 ? "hidden md:block" : ""
                  }`}
                  onClick={() => changeReview(currRev - 2 + index)}
                >
                  <motion.img
                    src={reviewer.icon}
                    alt="Reviewer"
                    className={`rounded-full border-2 ${
                      index === 2
                        ? "w-20 md:w-24 h-20 md:h-24 border-[#330073]"
                        : "w-12 md:w-16 h-12 md:h-16 border-gray-300"
                    } ${
                      index === 0 || index === 4
                        ? "opacity-20"
                        : index === 1 || index === 3
                        ? "opacity-50"
                        : ""
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </div>
          <ArrowRightCircle
            className="text-[#330073] md:hover:bg-gray-100 rounded-full cursor-pointer w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 hover:scale-110"
            onClick={() => changeReview(currRev + 1)}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-xl relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-center text-[#330073] mb-2">
              {currentReviewer.name}
            </h2>
            <p className="text-sm text-gray-500 italic text-center mb-4">
              {currentReviewer.reviewerDesc}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {currentReviewer.review}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
