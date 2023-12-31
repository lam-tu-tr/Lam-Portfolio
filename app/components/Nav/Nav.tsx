"use client";
import { useState, useEffect, useRef } from "react";
import style from "./Nav.module.scss";

import header from "../Header/Header.module.scss";
import editorial from "../Editorial/Editorial.module.scss";
import tech_container from "../Tech/Tech.module.scss";
import footer from "../Footer/Footer.module.scss";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";

import { Passion_One } from "next/font/google";

import Link from "next/link";

const passion_one = Passion_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);

  const [navOffset, setNavOffset] = useState<number | null>(null);

  const [navSticky, setNavSticky] = useState<Boolean>(false);

  const [lightMode, setLightMode] = useState<Boolean>(true);

  const [menuOpened, setMenuOpened] = useState<Boolean>(false);

  const setMode = () => {
    if (lightMode == true) {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
      setLightMode(false);
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      setLightMode(true);
    }
  };

  //* Recalculate Y of Nav to Top on screen resize
  useEffect(() => {
    function updateNavOffset() {
      setNavOffset(navRef.current?.offsetTop || null);
    }

    updateNavOffset();

    window.addEventListener("resize", updateNavOffset);

    return () => {
      window.addEventListener("resize", updateNavOffset);
    };
  }, []);

  // //* Auto sticky nav when screen scrolls past Nav
  // useEffect(() => {
  //   function navStickyScroll() {
  //     if (navOffset !== null && window.scrollY >= navOffset) {
  //       setNavSticky(true);
  //       document.body.classList.add("sticky");
  //       document.body.style.paddingTop = navRef.current?.offsetHeight + "px";
  //     } else {
  //       setNavSticky(false);
  //       document.body.classList.remove("sticky");
  //       document.body.style.paddingTop = "0px";
  //     }
  //   }

  //   window.addEventListener("scroll", navStickyScroll);

  //   return () => {
  //     window.removeEventListener("scroll", navStickyScroll);
  //   };
  // }, [navOffset]);

  return (
    <section id={style.nav_section} ref={navRef} className="nav_bar">
      <nav className={`${style.mobile_nav} ${menuOpened && style.menuOpened}`}>
        <a
          href={`#${header.header}`}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          Home
        </a>
        <a
          href={`#${editorial.editorial}`}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          Editorial
        </a>
        <a
          href={`#${tech_container.heading_container}`}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          Skills
        </a>
        <a
          href={`#${footer.footer}`}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          Contact
        </a>
        {/* <Link href="/gallery">Gallery</Link> */}
      </nav>

      <div>
        {navSticky && (
          <h3 className={passion_one.className}>
            {navSticky && "<FRONTEND TIMES/>"}
          </h3>
        )}
        {!navSticky && (
          <button
            onClick={() => setMode()}
            aria-label="Dark mode"
            type="button"
          >
            {lightMode ? (
              <BsSunglasses className="icon" />
            ) : (
              <BsEyeglasses className="icon" />
            )}
          </button>
        )}

        <button
          className={`hamburger hamburger--spin ${menuOpened && "is-active"}`}
          type="button"
          aria-label="Navigation Menu"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <span className="hamburger-box">
            <span
              id={style.hamburger_symbol}
              className="hamburger-inner"
            ></span>
          </span>
        </button>
      </div>
    </section>
  );
}
