import React from "react";
import style from "./Tech.module.scss";
import Image from "next/image";

import css from "../../assets/icons/css.svg";
import express from "../../assets/icons/express.svg";
import figma from "../../assets/icons/figma.svg";
import html from "../../assets/icons/html.svg";
import js from "../../assets/icons/javascript.svg";
import next from "../../assets/icons/nextjs.svg";
import node from "../../assets/icons/nodejs.svg";
import prisma from "../../assets/icons/prisma.svg";
import ts from "../../assets/icons/typescript.svg";

export default function Tech() {
  const logos = [html, css, js, ts, next, node, express, prisma];
  return (
    <div id={style.tech}>
      <section>
        {logos.map((tech, index) => {
          return (
            <aside key={index}>
              <Image src={tech} width={60} height={60} alt={"tech"} />
            </aside>
          );
        })}
      </section>
    </div>
  );
}
