const experiences = [
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "VCR Tech Solutions",
    duration: "March 2026 — Present",
    description:
      "Building scalable full stack applications using MERN Stack and Java Spring Boot with focus on performance, architecture, and user-centric systems.",
  },

  {
    year: "2025",
    role: "Program Analyst Trainee",
    company: "Cognizant",
    duration: "June 2025 — February 2026",
    description:
      "Worked on enterprise applications using Angular, Spring Boot, MongoDB, and PostgreSQL while contributing to scalable backend systems and frontend experiences.",
  },

  {
    year: "2025",
    role: "Program Analyst Trainee Intern",
    company: "Cognizant",
    duration: "January 2025 — June 2025",
    description:
      "Completed intensive enterprise training focused on React, Java Spring Boot, and modern full stack development practices while gaining exposure to professional coding standards, collaborative workflows, and industry-grade software engineering methodologies.",
  },

  {
    year: "2025",
    role: "MS CS Admit",
    company: "University of Louisville",
    duration: "R1 Research Institution",
    description:
      "Admitted to the MS in Computer Science program with International Resident Tuition Grant, recognizing academic and research potential. (Didn't join due to personal reasons)",
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section relative overflow-hidden bg-black py-20 md:py-32">
      {/* Background Glow */}
      <div className="experience-bg-glow absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[600px] md:w-[600px] md:blur-[150px]" />

      <div className="experience-container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="experience-heading-wrapper mb-14 md:mb-24" data-animate="fade-up">
          <p className="experience-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Experience
          </p>

          <h2 className="experience-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Career Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative">
          {/* Vertical Line */}
          <div className="experience-line absolute left-[120px] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-neon-primary/40 to-transparent md:block" />

          {/* Timeline Items */}
          <div className="experience-items flex flex-col gap-10 md:gap-24">
            {experiences.map((item, index) => (
              <div
                key={index}
                data-animate="fade-left"
                style={{ transitionDelay: `${index * 110}ms` }}
                className="experience-item relative flex flex-col gap-4 md:flex-row md:gap-16"
              >
                {/* LEFT YEAR */}
                <div className="experience-year-wrapper md:w-[120px] flex-shrink-0">
                  <h3 className="experience-year text-3xl font-black tracking-[-0.05em] text-white/20 md:sticky md:top-32 md:text-5xl">
                    {item.year}
                  </h3>
                </div>

                {/* TIMELINE DOT */}
                <div className="experience-dot-wrapper absolute left-[115px] top-6 hidden md:flex">
                  <div className="experience-dot h-3 w-3 rounded-full bg-neon-primary shadow-[0_0_20px_rgba(204,255,0,0.8)]" />
                </div>

                {/* CONTENT CARD */}
                <div
                  className="
                    experience-card
                    group
                    relative
                    flex-1
                    overflow-hidden
                    rounded-2xl md:rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5 sm:p-6 md:p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-neon-primary/30
                    hover:bg-white/[0.05]
                  "
                >
                  {/* Hover Glow */}
                  <div className="experience-card-glow right-to-left absolute inset-0 bg-gradient-to-br from-neon-primary/[0.03] via-transparent to-transparent  transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="experience-card-content relative z-10">
                    <p className="experience-duration mb-3 text-xs uppercase tracking-[0.18em] text-neon-primary/70 sm:text-sm sm:tracking-[0.25em]">
                      {item.duration}
                    </p>

                    <h3 className="experience-role text-2xl font-bold text-white md:text-3xl">
                      {item.role}
                    </h3>

                    <h4 className="experience-company mt-2 text-base text-white/60 md:text-lg">
                      {item.company}
                    </h4>

                    <p className="experience-description mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:mt-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
