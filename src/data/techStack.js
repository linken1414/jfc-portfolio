import {
  FaJava, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiPostgresql } from "react-icons/si";

export const techStack = [
  { name: "Java", category: "intermediate", icon: FaJava },
  { name: "HTML", category: "intermediate", icon: FaHtml5 },
  { name: "CSS", category: "intermediate", icon: FaCss3Alt },
  { name: "Python", category: "intermediate", icon: FaPython },
  { name: "C++", category: "intermediate", icon: SiCplusplus },
  { name: "JavaScript", category: "intermediate", icon: SiJavascript },

  { name: "React", category: "learning", icon: FaReact },
  { name: "Node.js", category: "learning", icon: FaNodeJs },
  { name: "Tailwind CSS", category: "learning", icon: SiTailwindcss },
  { name: "PostgreSQL", category: "learning", icon: SiPostgresql },
];