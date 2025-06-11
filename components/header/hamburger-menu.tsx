"use client";

import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@/icons/close-icon";
import MenuIcon from "@/icons/menu-icon";
import Divider from "@/components/divider";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOverlay: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        setIsOpen(false);
      }
    },
    []
  );

  const onClickNavigationContainer: MouseEventHandler<HTMLElement> =
    useCallback((event) => {
      if (event.target instanceof HTMLAnchorElement) {
        setIsOpen(false);
      }
    }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative ml-1 h-8 w-8 flex items-center justify-center lg:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-8 h-8 flex items-center justify-center md:hidden"
      >
        {isOpen ? (
          <CloseIcon className="hover:fill-accent-dark duration-200 fill-accent" />
        ) : (
          <MenuIcon className="hover:fill-accent-dark duration-200 fill-accent" />
        )}
      </button>

      {isOpen
        ? createPortal(
          <div
            className="fixed top-0 left-0 w-screen h-screen backdrop-blur-[1px] z-50"
            onClick={onClickOverlay}
          >
            <div
              className="absolute right-0 bg-bg-secondary w-10/12 h-screen animate-slide-in-from-right"
              ref={modalRef}
              tabIndex={0}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-md md:text-base text-accent duration-200 text-nowrap font-departure-mono [text-shadow:0_4px_0_#000] ml-4">
                  Uldis Zigurs
                </h1>
                <button className="p-1" onClick={() => setIsOpen(false)}>
                  <CloseIcon
                    className="hover:fill-accent-dark duration-200 fill-accent"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              <Divider />
              <nav
                className="flex flex-col justify-center items-center font-departure-mono mt-2"
                onClick={onClickNavigationContainer}
              >
                <a
                  className="p-[6px] hover:text-accent-light"
                  href="#about_me"
                >
                  About me
                </a>
                <a className="p-[6px] hover:text-accent-light" href="#skills">
                  Skills
                </a>
                <a className="p-[6px] hover:text-accent-light" href="#work">
                  Work
                </a>
                <a
                  className="p-[6px] hover:text-accent-light"
                  href="#contact_me"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>,
          document.body
        )
        : null}
    </div>


  );
}
