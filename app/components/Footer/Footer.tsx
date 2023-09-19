"use client";

import Image from "next/image";

import { forwardRef } from "react";
import styles from "./Footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { BsMailbox2 } from "react-icons/bs";

interface ChildProps {}
import pointer from "../../assets/icons/pointing-cursor.svg";

const Footer = forwardRef<HTMLElement, ChildProps>(({}, footerRef) => {
  return (
    <footer id={styles.footer} ref={footerRef}>
      <form action="submit" id={styles.form}>
        <aside>
          <input placeholder="@gmail.com" type="text" />
          <input placeholder="Subject2" type="text" />
        </aside>
        <textarea
          name="mail-body"
          id="mail-body"
          cols={15}
          rows={5}
          placeholder="Write a message"
        ></textarea>
      </form>

      <section id={styles.contact}>
        <aside id={styles.ad}>
          <Image
            src={pointer}
            alt="pointer"
            className="w-12 scale-x-[-100%] fill-blue-500"
          />
          <span>Your Website Here</span>
          <Image src={pointer} alt="pointer" className="w-12" />
        </aside>
        <aside id={styles.info}>
          <span>
            <BsMailbox2 className="w-10 h-10" />
            Lam.tu.tr@gmail.com
          </span>
        </aside>
      </section>
      <section id={styles.social}>
        <FaGithub className="w-10 h-10" />
        <FaLinkedin className="w-10 h-10" />
      </section>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
