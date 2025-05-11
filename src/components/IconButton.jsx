import React from "react";

const IconButton = ({ svg, bgColor, href }) => {
  return (
    <div>
      <a href={href} class="p-1 my-1.5 mx-0.5 flex items-center justify-center relative overflow-hidden rounded-full bg-gray-200 cursor-pointer shadow-sm shadow-gray-50 group transition-all duration-300">
        {svg}
        <div
          class={`absolute top-full left-0 w-full h-full rounded-full ${bgColor}
             z-0 transition-all duration-500 group-hover:top-0`}
        ></div>
      </a>
    </div>
  );
};

export default IconButton;
