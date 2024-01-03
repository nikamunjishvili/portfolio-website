"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        it has been approximately three years working as a web and mobile
        developer. during this period I’ve been working over the middle scale
        and long scale projects.i always was interested about technologies,
        wandering- how sites and application are created and built and that was
        the main reason what motivated me to go ahead and force starting doing
        it myself; As I got down to this business, on the very first stage, I
        liked to write the codes so much that I came to the point to spend my
        whole energy and time to pick it up and master it; since then ,almost
        every day I’ve got on the new level, hooving up more and more in this
        field and I work hard over self progress. the think I like most of all
        is -from the first sight it seems very magic and difficult to make it,
        but as you get down to it you are beginning to figure it out and you
        become able to handle it; to run this business and deal with it, it’s
        very pleasant for me and totally ,the thing you do and enjoying doing
        that is the best thing in human being;,I have an experiences to be the
        lecturer and giving lessons to beginners as well!well.I also give a hand
        to developers to go through the way to master technologies -what is in
        need and very active in daily routine of developers business; since I
        begun working in this field I started to get accustomed to the teem
        working and that skill -‘teem working’ lifted me on another level;
      </p>
    </motion.section>
  );
}
