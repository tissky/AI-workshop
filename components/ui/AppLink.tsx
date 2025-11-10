import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "muted";
  external?: boolean;
  underline?: boolean;
}

export default function AppLink({
  href,
  children,
  variant = "default",
  external = false,
  underline = false,
  className = "",
  ...props
}: AppLinkProps) {
  const baseStyles = "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const variantStyles = {
    default: "text-gray-700 hover:text-gray-900",
    primary: "text-blue-600 hover:text-blue-700",
    muted: "text-gray-500 hover:text-gray-700",
  };

  const underlineStyle = underline ? "underline underline-offset-2" : "";

  const classes = `${baseStyles} ${variantStyles[variant]} ${underlineStyle} ${className}`;

  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link href={href} className={classes} {...externalProps} {...props}>
      {children}
    </Link>
  );
}
