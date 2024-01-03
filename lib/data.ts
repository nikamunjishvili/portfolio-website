import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NestDoc from "@/public/assets/nest.png";
import moviesWeb from "@/public/assets/movies.png";
import quizWebsite from "@/public/assets/quiz.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Middle Mobile Developer",
    location: "Tbilisi/Georgia",
    description: "I worked as a Mobile Developer in interesting AI startup!!",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Middle Web && Mobile Developer",
    location: "Tbilisi/Georgia",
    description:
      "I'm working as a Web && Mobile Developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
  },
  {
    title: "Web Development Lecturer",
    location: "Tbilisi/Georgia",
    description:
      "Helping out beginners with simple tasks and understanding fundamentals!!",
      icon: React.createElement(FaReact),
      date: "2021 - present",
  },
  {
    title: "Web Development Mentor",
    location: "Tbilisi/Georgia",
    description:
      "Helping out beginners with simple tasks and understanding fundamentals!!",
      icon: React.createElement(FaReact),
      date: "2021 - present",
  },
];


export const projectsData = [
  {
    title: "Nest.js Front Documentation",
    description:
      "I worked as a front-end developer on this project for 1 months. Users can use this website to learn nest.js with two languages.",
    tags: ["React", "Next.js", "styled-components"],
    imageUrl: NestDoc,
  },
  {
    title: "Movies Website",
    description:
      "I worked as a front-end developer. It's Movies Website clone!",
    tags: ["React.js"],
    imageUrl: moviesWeb,
  },
  {
    title: "Quiz Website",
    description:
      "This app is Quiz Game Website only used front-end technologies!",
    tags: ["React", "Typescript", "Styled-Components"],
    imageUrl: quizWebsite,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express.js",
  "Nest.js",
  "Framer Motion",
] as const;
