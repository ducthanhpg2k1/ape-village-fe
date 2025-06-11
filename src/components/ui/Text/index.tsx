import React from "react";

import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  type?:
    | "font-30-900"
    | "font-24-900"
    | "font-16-500"
    | "font-24-500"
    | "font-24-300"
    | 'font-14-500'
    | 'text-14-400'
    | 'font-14-900'
    | 'font-16-600'
    | 'font-24-700'
    | 'font-14-400'
    | undefined;
  color?: "cwhite" | undefined;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  element?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = "",
  onClick = () => {},
  children,
  element = "p",
}) => {
  const classes = clsx(type, color, { "text-disable": disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children)
  );
};

export default Text;
