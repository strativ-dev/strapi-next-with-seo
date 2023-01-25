import clsx from "clsx";
import Link from "next/link";
import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "plain";
  linkTo?: string;
}

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
  label,
  variant = "primary",
  linkTo,
  ...rest
}) => (
  <button
    {...rest}
    className={clsx({
      "py-2 px-3 bg-teal-500 rounded text-white hover:bg-teal-600":
        variant === "primary",
      "py-2 px-3 border-teal-500 border-2 rounded text-teal-600 hover:bg-teal-500 hover:text-white":
        variant === "secondary",
    })}
  >
    {!!linkTo ? <Link href={linkTo}>{label}</Link> : label}
  </button>
);

export default Button;
