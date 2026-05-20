const projects = [
  {
    number: "01",

    title: "Human Action Recognition",

    category: "AI Research Project",

    description:
      "Computer vision-based human action recognition system leveraging CNN architectures for video sequence classification and intelligent activity detection.",

    stack: ["Python", "CNN", "Deep Learning", "Computer Vision", "TensorFlow"],

    image: "/har.jpg",

    github: "https://github.com/ezaz-ahmed-799/Thief-detection",
  },

  {
    number: "02",

    title: "Hospital Management System",

    category: "Enterprise Full Stack System",

    description:
      "Scalable healthcare management platform with authentication, appointment scheduling, patient workflows, role-based access control, and Spring Boot backend architecture.",

    stack: ["React", "Spring Boot", "JWT", "PostgreSQL", "REST APIs"],

    image: "/hams.jpg",

    github:
      "https://github.com/ezaz-ahmed-799/Hospital-Management-System---React-Springboot",
  },

  {
    number: "03",

    title: "Solar Flare Prediction",

    category: "Predictive AI System",

    description:
      "Deep learning-driven predictive system for solar flare forecasting and space weather analysis using comparative neural network architectures and scientific datasets.",

    stack: [
      "Machine Learning",
      "Python",
      "Predictive Modeling",
      "Data Mining",
      "Neural Networks",
    ],

    image: "/sf.jpg",

    github: "https://github.com/ezaz-ahmed-799/Solar-Flare-prediction",
  },

  {
    number: "04",

    title: "Student Platform",

    category: "Full Stack Platform",

    description:
      "Interactive student-centric platform designed for streamlined academic workflows, collaboration, dashboard management, and scalable user experiences.",

    stack: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],

    image: "/sp.jpg",

    github: "https://github.com/ezaz-ahmed-799/Student-Platform",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section relative overflow-hidden bg-black py-20 md:py-32">
      {/* Background Glow */}
      <div className="projects-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[160px]" />

      <div className="projects-container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="projects-heading-wrapper mb-14 md:mb-24" data-animate="fade-up">
          <p className="projects-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Featured Projects
          </p>

          <h2 className="projects-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Selected
            <br />
            Work
          </h2>
        </div>

        {/* Projects */}
        <div className="projects-list flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <div
              key={index}
              data-animate={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`project-item grid items-center gap-8 md:gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="project-content">
                <p className="project-number mb-3 text-5xl font-black tracking-[-0.08em] text-white/10 md:mb-4 md:text-7xl">
                  {project.number}
                </p>

                <p className="project-category mb-3 text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-4">
                  {project.category}
                </p>

                <h3 className="project-title text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                  {project.title}
                </h3>

                <p className="project-description mt-5 max-w-xl text-base leading-relaxed text-white/70 md:mt-6 md:text-lg">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="project-stack mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="project-stack-pill rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-actions mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-primary-btn inline-flex w-full justify-center rounded-full bg-neon-primary px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] sm:w-auto"
                  >
                    View Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-secondary-btn inline-flex w-full justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-neon-primary/30 hover:bg-white/[0.05] sm:w-auto"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* RIGHT PREVIEW */}
              <div className="project-preview-wrapper group relative">
                {/* Glow */}
                <div className="project-preview-glow absolute inset-0 rounded-[2rem] bg-neon-primary/10 blur-3xl transition-all duration-500 group-hover:bg-neon-primary/20" />

                {/* Preview Card */}
                <div className="project-preview-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-preview-image h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px] lg:h-[420px]"
                  />

                  {/* Overlay */}
                  <div className="project-preview-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
