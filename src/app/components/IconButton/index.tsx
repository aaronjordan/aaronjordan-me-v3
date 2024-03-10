"use client";

import { RefObject, forwardRef } from "react";
import style from "./style.module.scss";

interface IconButtonProps {
  ariaLabel: string;
  className?: string;
  filled?: boolean;
  onClick?: () => void;
  icon: JSX.Element;
  ref?: RefObject<HTMLButtonElement>;
  size?: string;
}

export const IconButton = forwardRef(function (
  props: IconButtonProps,
  ref?: RefObject<HTMLButtonElement>
) {
  const classes = `${style.icon} ${
    props.filled ? style.filled : style.outlined
  } ${props.className}`;
  const inline = {
    "--icon-size": props.size ?? "var(--icon-size-lg)",
  } as React.CSSProperties;

  return (
    <button
      aria-label={props.ariaLabel}
      className={classes}
      onClick={props.onClick}
      style={inline}
      ref={ref}
    >
      {props.icon}
    </button>
  );
});
