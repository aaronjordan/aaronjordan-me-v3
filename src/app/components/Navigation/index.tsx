"use client";

import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import { usePathname } from "next/navigation";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SiteThemeKeyword } from "$app/utils/siteTheme";
import { useAfterHydrate } from "$app/utils/useAfterHydrate";
import { Navigation as PayloadNav } from "$types/payload-types";
import { HeaderControls } from "../HeaderControls";
import { IconButton } from "../IconButton";
import styles from "./style.module.scss";

interface NavigationProps {
  links: PayloadNav["items"];
  theme: SiteThemeKeyword;
}

interface DialogNavigationProps extends NavigationProps {
  onClose: () => void;
  open: boolean;
}

export function Navigation(props: NavigationProps) {
  const hydrated = useAfterHydrate();
  const [mobileDialogOpen, setMobileDialogOpen] = React.useState(false);

  return (
    <>
      <ul className={styles.controls}>
        {props.links.map((link) => (
          <li key={link.id}>
            <a
              // not convinced we cna SSR this with njs...
              // aria-current={path.startsWith(link.route) ? "page" : null}
              href={link.route}
            >
              {link.title}
            </a>
          </li>
        ))}
        <li className={styles.separator} />
        <HeaderControls initialTheme={props.theme} />
      </ul>

      <ul className={styles.mobile}>
        <IconButton
          ariaLabel="Show navigation"
          icon={<HamburgerMenuIcon />}
          onClick={() => setMobileDialogOpen((x) => !x)}
        />

        {hydrated &&
          createPortal(
            <DialogNavigation
              {...props}
              open={mobileDialogOpen}
              onClose={() => setMobileDialogOpen(false)}
            />,
            document.body
          )}
      </ul>
    </>
  );
}

/**
 * A variant of the navigation bar for use in an overlay.
 */
function DialogNavigation(props: DialogNavigationProps) {
  const path = usePathname();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const initialFocusElement = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Close if the window is resized to desktop.
    if (isDesktop && props.open) props.onClose();
  }, [isDesktop]);

  useEffect(() => {
    // Place initial focus within trap when opened.
    if (props.open) initialFocusElement.current.focus();
  }, [props.open]);

  return (
    <FocusTrap active={props.open}>
      <dialog open={props.open}>
        <nav className={styles.dialog}>
          <ul>
            <div className={styles.icons}>
              <HeaderControls filledButtons initialTheme={props.theme} />
              <li className="button" style={{ paddingRight: 0 }}>
                <IconButton
                  ariaLabel="Close dialog"
                  filled
                  icon={<Cross2Icon />}
                  onClick={() => props.onClose()}
                  ref={initialFocusElement}
                />
              </li>
            </div>
            {props.links.map((link) => (
              <li key={link.id}>
                <a
                  aria-current={path.startsWith(link.route) ? "page" : null}
                  href={link.route}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </FocusTrap>
  );
}
