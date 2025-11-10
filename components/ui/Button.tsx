"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800",
      secondary:
        "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 active:bg-purple-800",
      outline:
        "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500",
      ghost:
        "text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-500",
    };

    const sizeStyles = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
      outline: "border-2 border-border text-foreground hover:bg-muted hover:border-muted-foreground"
    };

    const sizeStyles = {
      sm: "px-5 py-2 text-sm rounded-full",
      md: "px-8 py-3 text-lg rounded-full",
      lg: "px-10 py-4 text-xl rounded-full"
    };

    const widthStyle = fullWidth ? "w-full" : "";

    const motionStyles = "transform hover:scale-[1.02] active:scale-[0.98]";

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${motionStyles} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
