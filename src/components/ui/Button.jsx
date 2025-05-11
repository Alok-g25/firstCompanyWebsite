import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef(
  ({ children, className, variant = "default", size = "md", ...props }, ref) => {
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    };

    const sizes = {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          "rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
