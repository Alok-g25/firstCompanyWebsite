import React, { useState } from "react";

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({ children, asChild }) {
  const triggerClass = "cursor-pointer";
  return asChild ? children : <button className={triggerClass}>{children}</button>;
}

export function DropdownMenuContent({ children, align = "start" }) {
  return (
    <div
      className={`absolute mt-2 min-w-[150px] rounded-md bg-white shadow-lg border border-gray-200 ${
        align === "end" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
}
