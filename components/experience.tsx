"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hook";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* First Experience */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2019"
          icon={<LuGraduationCap />}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">Graduated bootcamp</h3>
          <p className="font-normal !mt-0">Miami, FL</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            I graduated after 6 months of studying. I immediately found a job as
            a front-end developer.
          </p>
        </VerticalTimelineElement>

        {/* Second Experience */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2019 - 2021"
          icon={<CgWorkAlt />}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">Front-End Developer</h3>
          <p className="font-normal !mt-0">Orlando, FL</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            I worked as a front-end developer for 2 years in 1 job and 1 year in
            another job. I also upskilled to the full stack.
          </p>
        </VerticalTimelineElement>

        {/* Third Experience */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2021 - present"
          icon={<FaReact />}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">Full-Stack Developer</h3>
          <p className="font-normal !mt-0">Houston, TX</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            I'm now a full-stack developer working as a freelancer. My stack
            includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.
            I'm open to full-time opportunities.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
