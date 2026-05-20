const stats = [
  {
    number: "3",
    label: "Research Papers",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Years Experience",
  },
  {
    number: "2025",
    label: "B.Tech Graduate",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section relative overflow-hidden bg-black py-20 md:py-28">

      {/* Background Glow */}
      <div className="about-bg-glow absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

      <div className="about-container relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 md:flex-row md:items-center md:gap-16 lg:px-12">

        {/* LEFT SIDE */}
        <div className="about-left flex-1" data-animate="fade-up">

          <p className="about-label mb-2 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
            About Me
          </p>

          <h2 className="about-heading text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-6xl lg:text-7xl">
            I engineer scalable digital systems and research intelligent AI architectures.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right flex-1 pt-4" data-animate="fade-left">

          <p className="about-description max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            I'm a Full Stack Developer and AI Researcher from Andhra Pradesh, India,
            specializing in MERN Stack, Java Spring Boot, and Machine Learning systems.
            My work focuses on building performant user-centric applications while
            contributing to research in Deep Learning, Cloud Security, and Predictive Intelligence.
          </p>

          {/* Stats Grid */}
          <div className="about-stats-grid mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5">

            {stats.map((stat, index) => (
              <div
                key={index}
                data-animate="zoom-in"
                style={{ transitionDelay: `${index * 90}ms` }}
                className="
                  about-stat-card
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5 sm:p-6
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

                <h3 className="about-stat-number relative z-10 text-3xl font-black text-neon-primary sm:text-4xl">
                  {stat.number}
                </h3>

                <p className="about-stat-label relative z-10 mt-2 text-xs uppercase tracking-[0.16em] text-white/60 sm:text-sm sm:tracking-[0.2em]">
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
