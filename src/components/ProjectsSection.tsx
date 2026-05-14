const projects = [
  {
    number: "01",

    title: "Human Action Recognition",

    category: "AI Research Project",

    description:
      "Computer vision-based human action recognition system leveraging CNN architectures for video sequence classification and intelligent activity detection.",

    stack: ["Python", "CNN", "Deep Learning", "Computer Vision", "TensorFlow"],

    image: "/har.jpg",
  },

  {
    number: "02",

    title: "Hospital Management System",

    category: "Enterprise Full Stack System",

    description:
      "Scalable healthcare management platform with authentication, appointment scheduling, patient workflows, role-based access control, and Spring Boot backend architecture.",

    stack: ["React", "Spring Boot", "JWT", "PostgreSQL", "REST APIs"],

    image: "/hams.jpg",
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
  },

  {
    number: "04",

    title: "Student Platform",

    category: "Full Stack Platform",

    description:
      "Interactive student-centric platform designed for streamlined academic workflows, collaboration, dashboard management, and scalable user experiences.",

    stack: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],

    image: "/sp.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section relative overflow-hidden bg-black py-32">
      {/* Background Glow */}
      <div className="projects-bg-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[160px]" />

      <div className="projects-container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="projects-heading-wrapper mb-24">
          <p className="projects-label mb-5 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            Featured Projects
          </p>

          <h2 className="projects-heading text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
            Selected
            <br />
            Work
          </h2>
        </div>

        {/* Projects */}
        <div className="projects-list flex flex-col gap-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-item grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="project-content">
                <p className="project-number mb-4 text-7xl font-black tracking-[-0.08em] text-white/10">
                  {project.number}
                </p>

                <p className="project-category mb-4 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
                  {project.category}
                </p>

                <h3 className="project-title text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
                  {project.title}
                </h3>

                <p className="project-description mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="project-stack mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="project-stack-pill rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-actions mt-10 flex gap-4">
                  <button className="project-primary-btn rounded-full bg-neon-primary px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)]">
                    View Project
                  </button>

                  <button className="project-secondary-btn rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-neon-primary/30 hover:bg-white/[0.05]">
                    GitHub
                  </button>
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
                    className="project-preview-image h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
