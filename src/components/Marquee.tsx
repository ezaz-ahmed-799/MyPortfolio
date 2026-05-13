import {
  SiReact,
  SiTypescript,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAngular,
  SiTensorflow,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

const devSkills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Angular", icon: SiAngular },
];

const aiSkills = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Git", icon: SiGit },
  { name: "CNN", icon: null },
  { name: "Deep Learning", icon: null },
  { name: "Machine Learning", icon: null },
  { name: "JVM", icon: null },
  { name: "Operating Systems", icon: null },
];
type Skill = {
  name: string;
  icon: IconType | null;
};

const SkillRow = ({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) => {
  return (
    <div className="relative flex overflow-hidden py-4">
      <div
        className={`flex min-w-max gap-5 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                group
                flex items-center gap-3
                rounded-full
                border border-lime-400/20
                bg-white/[0.03]
                px-6 py-3
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:border-lime-300
                hover:shadow-[0_0_25px_rgba(217,255,0,0.12)]
              "
            >
              {Icon && (
                <Icon className="text-[1.1rem] text-lime-300 transition-transform duration-300 group-hover:scale-110" />
              )}

              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white/90">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y border-white/5
        bg-black
        py-16
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.08),transparent_70%)]
          pointer-events-none
        "
      />

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="relative z-20 mb-8 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-lime-300/70">
          Tech Arsenal
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Technologies I Work With
        </h2>
      </div>

      {/* Row 1 */}
      <SkillRow skills={devSkills} />

      {/* Row 2 */}
      <SkillRow skills={aiSkills} reverse />

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 28s linear infinite;
          }

          .animate-marquee-reverse {
            animation-direction: reverse;
          }
        `}
      </style>
    </section>
  );
};

export default Marquee;
