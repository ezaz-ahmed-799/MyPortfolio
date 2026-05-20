const achievements = [
  {
    value: "2",
    label: "Scopus Indexed Papers",
  },

  {
    value: "1",
    label: "Verified Citation",
  },

  {
    value: "1",
    label: "h-index",
  },

  {
    value: "R1",
    label: "Research University Admit",
  },
];

const EducationSection = () => {
  return (
    <section className="education-section relative overflow-hidden bg-black py-20 md:py-32">

      {/* Background Glow */}
      <div className="education-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[170px]" />

      <div className="education-container relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:gap-20 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="education-left" data-animate="fade-right">

          <p className="education-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Education
          </p>

          <h2 className="education-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Academic
            <br />
            Journey
          </h2>

          {/* Education Card */}
          <div className="education-card group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7 md:mt-14 md:rounded-[2rem] md:p-8">

            {/* Glow */}
            <div className="education-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="education-card-content relative z-10">

              <p className="education-duration text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
                2021 — 2025
              </p>

              <h3 className="education-degree mt-5 text-2xl font-black text-white md:text-3xl">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="education-specialization mt-3 text-base text-white/70 md:text-lg">
                Specialization in Artificial Intelligence & Machine Learning
              </p>

              <p className="education-college mt-6 text-lg text-white/80 md:mt-8 md:text-xl">
                Seshadri Rao Gudlavalleru Engineering College
              </p>

              <p className="education-location mt-2 text-white/50">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Louisville Card */}
          <div className="education-card-secondary group relative mt-6 overflow-hidden rounded-2xl border border-neon-primary/20 bg-neon-primary/[0.03] p-5 backdrop-blur-xl sm:p-7 md:mt-8 md:rounded-[2rem] md:p-8">

            <div className="education-card-secondary-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="education-card-secondary-content relative z-10">

              <p className="education-secondary-label text-xs uppercase tracking-[0.22em] text-neon-primary sm:text-sm sm:tracking-[0.3em]">
                International Admit
              </p>

              <h3 className="education-secondary-title mt-5 text-2xl font-black text-white md:text-3xl">
                University of Louisville
              </h3>

              <p className="education-secondary-program mt-3 text-base text-white/80 md:text-lg">
                MS in Computer Science
              </p>

              <p className="education-secondary-highlight mt-6 max-w-xl text-white/70">
                Admitted to an R1 Research Institution with International Resident Tuition Grant recognition. (Didn't attend due to personal reasons)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="education-right" data-animate="fade-left">

          <p className="education-right-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Recognition
          </p>

          <h2 className="education-right-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Academic
            <br />
            Impact
          </h2>

          {/* Achievement Grid */}
          <div className="education-achievement-grid mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5">

            {achievements.map((item, index) => (
              <div
                key={index}
                data-animate="zoom-in"
                style={{ transitionDelay: `${index * 80}ms` }}
                className="
                  education-achievement-card
                  group
                  relative
                  overflow-hidden
                  rounded-2xl md:rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5 sm:p-6 md:p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-neon-primary/30
                "
              >

                <div className="education-achievement-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="education-achievement-content relative z-10">

                  <h3 className="education-achievement-value text-4xl font-black tracking-[-0.05em] text-neon-primary md:text-5xl">
                    {item.value}
                  </h3>

                  <p className="education-achievement-label mt-3 text-xs uppercase tracking-[0.16em] text-white/60 sm:text-sm sm:tracking-[0.2em] md:mt-4">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ORCID */}
          <div className="education-orcid-card mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7 md:mt-8 md:rounded-[2rem] md:p-8">

            <p className="education-orcid-label text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
              ORCID iD
            </p>

            <h3 className="education-orcid-value mt-5 break-all text-xl font-bold text-white sm:text-2xl">
              0009-0009-6572-8661
            </h3>

            <p className="education-orcid-description mt-4 max-w-lg text-white/60">
              Verified international researcher identifier associated with published Scopus-indexed research contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
