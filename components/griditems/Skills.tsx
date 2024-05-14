import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { motion } from "framer-motion";

const skillIcons = [
  {
    icon: <IoLogoJavascript size={"full"} />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "Javascript",
  },
  {
    icon: <IoLogoReact size={"full"} />,
    href: "https://reactjs.org/",
    title: "React JS",
  },
  {
    icon: <SiNextdotjs size={"full"} />,
    href: "https://nextjs.org/",
    title: "Next JS",
  },
  {
    icon: <BiLogoTypescript size={"full"} />,
    href: "https://www.typescriptlang.org/",
    title: "Typescript",
  },
  {
    icon: <SiExpress size={"full"} />,
    href: "https://www.postgresql.org",
    title: "Express JS",
  },
  {
    icon: <FaNode size={"full"} />,
    href: "https://www.postgresql.org",
    title: "Node JS",
  },
  {
    icon: <GrGraphQl size={"full"} />,
    href: "https://www.postgresql.org",
    title: "GraphQL",
  },
  {
    icon: <BiLogoMongodb size={"full"} />,
    href: "https://www.mongodb.com/",
    title: "MongoDB",
  },

  {
    icon: <BiLogoPostgresql size={"full"} />,
    href: "https://www.postgresql.org",
    title: "PostgreSQL",
  },
  {
    icon: <TbBrandTailwind size={"full"} />,
    href: "https://tailwindcss.com/",
    title: "Tailwind",
  },
  {
    icon: <SiMui size={"full"} />,
    href: "https://tailwindcss.com/",
    title: "MaterialUI",
  },
  {
    icon: <FaHtml5 size={"full"} />,
    href: "https://www.postgresql.org",
    title: "HTML",
  },
  {
    icon: <FaCss3Alt size={"full"} />,
    href: "https://www.postgresql.org",
    title: "CSS",
  },
  {
    icon: <FaGitAlt size={"full"} />,
    href: "https://www.postgresql.org",
    title: "Git",
  },
];

const MySkills = () => {
  return (
    <div className="flex flex-col justify-between select-none ">
      <p className="text-light text-lg text-slate-600 px-6 max-[481px]:px-4 max-[481px]:text-sm select-none dark:text-slate-200 text-center">
        I have been working on a project involving the utilization of these
        languages and tools:
      </p>
      <p className="flex flex-wrap justify-center gap-8 max-[481px]:gap-4">
        {skillIcons.map((e, i) => {
          return (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="size-[40px] max-[481px]:size-[30px]"
              key={i}
            >
              <a href={e.href}>{e.icon}</a>
              <div className="flex justify-center">
                <p className="hidden md:flex text-[12px] whitespace-nowrap">
                  {e.title}
                </p>
              </div>
            </motion.button>
          );
        })}
      </p>
    </div>
  );
};

export default MySkills;
