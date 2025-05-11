import React from "react";
import WhyMarkleImg from "/src/images/whyMarkle.jpeg";

const WhyMarkle = () => {
  return (
    <>
      <div className="lg:flex justify-center mx-8 m-4 md:m-20 md:ms-40">
        <div className="lg:flex-1">
          <h1 className="uppercase text-lg md:text-4xl font-bold text-[#330073] font-montserrat">
            Why customers in over 50+ countries choose Markle Tech?
          </h1>
          <div className="my-8">
            <div className="overflow-x-hidden">
              <div className="hidden lg:block">
                <div className="grid grid-cols-3">
                  <div className="border-t border-l border-black px-4 py-2 hover:bg-gray-300">
                    FLEXIBLE ENGAGEMENT MODELS
                  </div>
                  <div className="border-t border-l border-black px-4 py-2 hover:bg-gray-300">
                    STATE OF THE ART IT INFRASTRUCTURE
                  </div>
                  <div className="border-t border-l border-r border-black px-4 py-2 hover:bg-gray-300">
                    24X7 SUPPORT ACROSS ALL TIMEZONES
                  </div>
                  <div className="border-t border-l border-b border-black px-4 py-2 hover:bg-gray-300">
                    STRONG TECHNOLOGY COMPETENCY
                  </div>
                  <div className="border-t border-l border-b border-black px-4 py-2 hover:bg-gray-300">
                    COMPETITIVE PRICING & ONTIME DELIVERY
                  </div>
                  <div className="border border-black px-4 py-2 hover:bg-gray-300">
                    SEAMLESS COMMUNICATION
                  </div>
                </div>
              </div>

              {/* Mobile view - 2 columns layout */}
              <div className="hidden sm:block lg:hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border px-4 py-2">
                    FLEXIBLE ENGAGEMENT MODELS
                  </div>
                  <div className="border px-4 py-2">
                    STATE OF THE ART IT INFRASTRUCTURE
                  </div>
                  <div className="border px-4 py-2">
                    24X7 SUPPORT ACROSS ALL TIMEZONES
                  </div>
                  <div className="border px-4 py-2">
                    STRONG TECHNOLOGY COMPETENCY
                  </div>
                  <div className="border px-4 py-2">
                    COMPETITIVE PRICING & ONTIME DELIVERY
                  </div>
                  <div className="border px-4 py-2">SEAMLESS COMMUNICATION</div>
                </div>
              </div>

              <div className="block sm:hidden">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="border px-4 py-2">
                    FLEXIBLE ENGAGEMENT MODELS
                  </div>
                  <div className="border px-4 py-2">
                    STATE OF THE ART IT INFRASTRUCTURE
                  </div>
                  <div className="border px-4 py-2">
                    24X7 SUPPORT ACROSS ALL TIMEZONES
                  </div>
                  <div className="border px-4 py-2">
                    STRONG TECHNOLOGY COMPETENCY
                  </div>
                  <div className="border px-4 py-2">
                    COMPETITIVE PRICING & ONTIME DELIVERY
                  </div>
                  <div className="border px-4 py-2">SEAMLESS COMMUNICATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 flex justify-center mx-5 px-5">
          <img
            src={WhyMarkleImg}
            alt=""
            className="w-40 md:w-80 h-fit rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default WhyMarkle;
