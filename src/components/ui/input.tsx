"use client";
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-6 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-primary-6",
  {
    variants: {
      size: {
        sm: "h-8 text-sm",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-fit", className)}>
        {startAdornment && (
          <span className="absolute left-3 flex items-center">
            {startAdornment}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "w-full bg-transparent",
            inputVariants({ size }),
            startAdornment ? "pl-10" : "",
            endAdornment ? "pr-10" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && (
          <span className="absolute right-3 flex items-center">
            {endAdornment}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
