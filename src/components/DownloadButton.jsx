import React, { useEffect } from "react";

const DownloadButton = () => {
  return (
    <div className="fixed right-0">
      <a
        href="/src/assets/markle-tech-profile.pdf"
        download="Profile.pdf"
        className="bg-slate-100 text-[#330073] z-30 font-bold px-1 py-4 sm:px-2 sm:py-10 rounded-l-lg shadow-lg hover:bg-[#330073] hover:text-white duration-300 transition-all [writing-mode:vertical-lr] font-poppins"
      >
        Download Now!
      </a>
    </div>
  );
};

export default DownloadButton;
