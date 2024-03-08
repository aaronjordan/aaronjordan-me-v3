"use client";

import style from "./style.module.scss";

interface IconButtonProps {
  ariaLabel: string;
  filled?: boolean;
  onClick?: () => void;
  icon: JSX.Element;
  size?: string;
}

export function IconButton(props: IconButtonProps) {
  const classes = `${style.icon} ${
    props.filled ? style.filled : style.outlined
  }`;
  const inline = {
    "--icon-size": props.size ?? "var(--icon-size-lg)",
  } as React.CSSProperties;

  return (
    <button
      aria-label={props.ariaLabel}
      className={classes}
      onClick={props.onClick}
      style={inline}
    >
      {props.icon}
    </button>
  );
}
