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
    <section className="education-section relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="education-bg-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[170px]" />

      <div className="education-container relative z-10 mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="education-left">

          <p className="education-label mb-5 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            Education
          </p>

          <h2 className="education-heading text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
            Academic
            <br />
            Journey
          </h2>

          {/* Education Card */}
          <div className="education-card group relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            {/* Glow */}
            <div className="education-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="education-card-content relative z-10">

              <p className="education-duration text-sm uppercase tracking-[0.3em] text-neon-primary/70">
                2021 — 2025
              </p>

              <h3 className="education-degree mt-5 text-3xl font-black text-white">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="education-specialization mt-3 text-lg text-white/70">
                Specialization in Artificial Intelligence & Machine Learning
              </p>

              <p className="education-college mt-8 text-xl text-white/80">
                Seshadri Rao Gudlavalleru Engineering College
              </p>

              <p className="education-location mt-2 text-white/50">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Louisville Card */}
          <div className="education-card-secondary group relative mt-8 overflow-hidden rounded-[2rem] border border-neon-primary/20 bg-neon-primary/[0.03] p-8 backdrop-blur-xl">

            <div className="education-card-secondary-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="education-card-secondary-content relative z-10">

              <p className="education-secondary-label text-sm uppercase tracking-[0.3em] text-neon-primary">
                International Admit
              </p>

              <h3 className="education-secondary-title mt-5 text-3xl font-black text-white">
                University of Louisville
              </h3>

              <p className="education-secondary-program mt-3 text-lg text-white/80">
                MS in Computer Science
              </p>

              <p className="education-secondary-highlight mt-6 max-w-xl text-white/70">
                Admitted to an R1 Research Institution with International Resident Tuition Grant recognition. (Didn't attend due to personal reasons)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="education-right">

          <p className="education-right-label mb-5 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            Recognition
          </p>

          <h2 className="education-right-heading text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
            Academic
            <br />
            Impact
          </h2>

          {/* Achievement Grid */}
          <div className="education-achievement-grid mt-14 grid grid-cols-2 gap-5">

            {achievements.map((item, index) => (
              <div
                key={index}
                className="
                  education-achievement-card
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-neon-primary/30
                "
              >

                <div className="education-achievement-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="education-achievement-content relative z-10">

                  <h3 className="education-achievement-value text-5xl font-black tracking-[-0.05em] text-neon-primary">
                    {item.value}
                  </h3>

                  <p className="education-achievement-label mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ORCID */}
          <div className="education-orcid-card mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <p className="education-orcid-label text-sm uppercase tracking-[0.3em] text-neon-primary/70">
              ORCID iD
            </p>

            <h3 className="education-orcid-value mt-5 text-2xl font-bold text-white">
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