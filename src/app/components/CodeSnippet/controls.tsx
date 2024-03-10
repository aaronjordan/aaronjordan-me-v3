"use client";

import { useState } from "react";
import style from "./style.module.scss";
import { IconButton } from "../IconButton";
import { WidthIcon } from "@radix-ui/react-icons";

export function CodeControls(props) {
  const [isWide, setWide] = useState(false);
  const classes = `${style.base} ${isWide ? style.fs : style.normal}`;

  return (
    <div className={classes}>
      <div className={style.controls}>
        <IconButton
          className={style.fsControl}
          ariaLabel="Enter full-width mode"
          icon={<WidthIcon />}
          onClick={() => setWide((x) => !x)}
        />
      </div>
      {props.children}
    </div>
  );
}
