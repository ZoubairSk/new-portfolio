import { Code, Terminal, GitBranch, Cloud } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiLaravel,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Laravel", icon: SiLaravel },
  { name: "Python", icon: FaPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: Cloud },
  { name: "API Development", icon: Code },
  { name: "DevOps", icon: Terminal },
  { name: "Version Control", icon: GitBranch },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center group">
            <skill.icon className="w-12 h-12 mb-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
