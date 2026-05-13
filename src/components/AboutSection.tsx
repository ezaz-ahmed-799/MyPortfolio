const stats = [
  {
    number: "3+",
    label: "Research Papers",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "2+",
    label: "Years Experience",
  },
  {
    number: "2025",
    label: "B.Tech Graduate",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section relative overflow-hidden bg-black py-4">

      {/* Background Glow */}
      <div className="about-bg-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[140px]" />

      <div className="about-container relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-6 md:flex-row md:items-center md:gap-16 lg:px-12">

        {/* LEFT SIDE */}
        <div className="about-left flex-1">

          <p className="about-label mb-2 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            About Me
          </p>

          <h2 className="about-heading text-5xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            I engineer scalable digital systems and research intelligent AI architectures.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right flex-1 h-[90vh] pt-4">

          <p className="about-description max-w-xl text-lg leading-relaxed text-white/70">
            I'm a Full Stack Developer and AI Researcher from Andhra Pradesh, India,
            specializing in MERN Stack, Java Spring Boot, and Machine Learning systems.
            My work focuses on building performant user-centric applications while
            contributing to research in Deep Learning, Cloud Security, and Predictive Intelligence.
          </p>

          {/* Stats Grid */}
          <div className="about-stats-grid mt-12 grid grid-cols-2 gap-5">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  about-stat-card
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-neon-primary/30
                  hover:bg-white/[0.05]
                "
              >
                {/* Card Glow */}
                <div className="about-stat-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/0 via-neon-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <h3 className="about-stat-number relative z-10 text-4xl font-black text-neon-primary">
                  {stat.number}
                </h3>

                <p className="about-stat-label relative z-10 mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;