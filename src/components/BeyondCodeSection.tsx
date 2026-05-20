const interests = [
  {
    title: "Sports",
    subtitle: "Competition • Discipline • Consistency",

    description:
      "Active badminton and cricket player with experience representing college teams in competitive environments that strengthened focus, adaptability, and teamwork.",

    image: "/badminton.jpg",
  },

  {
    title: "Gaming",
    subtitle: "Strategy • Persistence • Mastery",

    description:
      "Passionate about high-difficulty action RPGs including Sekiro, Elden Ring, Dark Souls, and Ghost of Tsushima — experiences that sharpen patience, decision-making, and analytical thinking.",

    image: "/got.jpg",
  },

  {
    title: "Storytelling",
    subtitle: "Creativity • Narrative • Design",

    description:
      "Interested in story-rich anime and manga focused on sports, action, and unconventional creative structures that inspire perspective, pacing, and immersive world-building.",

    image: "/op.jpg",
  },
];

const BeyondCodeSection = () => {
  return (
    <section className="beyond-section relative overflow-hidden bg-black py-20 md:py-32">

      {/* Background Glow */}
      <div className="beyond-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[170px]" />

      <div className="beyond-container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="beyond-heading-wrapper mb-14 md:mb-24" data-animate="fade-up">

          <p className="beyond-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Beyond Code
          </p>

          <h2 className="beyond-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Outside
            <br />
            The Terminal
          </h2>
        </div>

        {/* Cards */}
        <div className="beyond-grid grid gap-6 md:gap-8 lg:grid-cols-3">

          {interests.map((item, index) => (
            <div
              key={index}
              data-animate="zoom-in"
              style={{ transitionDelay: `${index * 120}ms` }}
              className="
                beyond-card
                group
                relative
                overflow-hidden
                rounded-2xl md:rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-neon-primary/30
              "
            >

              {/* Background Image */}
              <div className="beyond-image-wrapper relative h-[380px] overflow-hidden sm:h-[460px] lg:h-[520px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="beyond-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="beyond-image-overlay absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="beyond-content absolute inset-0 flex flex-col justify-end p-5 sm:p-8">

                <p className="beyond-subtitle mb-3 text-xs uppercase tracking-[0.2em] text-neon-primary/70 sm:mb-4 sm:tracking-[0.3em]">
                  {item.subtitle}
                </p>

                <h3 className="beyond-title text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                  {item.title}
                </h3>

                <p className="beyond-description mt-4 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="beyond-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
