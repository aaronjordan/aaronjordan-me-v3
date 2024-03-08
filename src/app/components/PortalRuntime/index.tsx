"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAfterHydrate } from "$app/utils/useAfterHydrate";

/**
 * INCOMPLETE: This could enable projecting content into a popover/tooltip
 * component through a marking system built into lexical's system. It's a
 * handsome yak and I need to leave it alone for now.
 */
export function PortalRuntime(props) {
  const afterHydrate = useAfterHydrate();

  // Array.from(document?.querySelectorAll("a")).filter((a) => a.href);

  if (afterHydrate) {
    // console.log(props.target);
    // return createPortal(<p>I'm a portal!</p>, document.body);
  } else {
    // Do not prerender the portal.
    return <></>;
  }
}
