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
    <section className="beyond-section relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="beyond-bg-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[170px]" />

      <div className="beyond-container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="beyond-heading-wrapper mb-24">

          <p className="beyond-label mb-5 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            Beyond Code
          </p>

          <h2 className="beyond-heading text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
            Outside
            <br />
            The Terminal
          </h2>
        </div>

        {/* Cards */}
        <div className="beyond-grid grid gap-8 lg:grid-cols-3">

          {interests.map((item, index) => (
            <div
              key={index}
              className="
                beyond-card
                group
                relative
                overflow-hidden
                rounded-[2rem]
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
              <div className="beyond-image-wrapper relative h-[520px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="beyond-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="beyond-image-overlay absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="beyond-content absolute inset-0 flex flex-col justify-end p-8">

                <p className="beyond-subtitle mb-4 text-xs uppercase tracking-[0.3em] text-neon-primary/70">
                  {item.subtitle}
                </p>

                <h3 className="beyond-title text-4xl font-black tracking-[-0.05em] text-white">
                  {item.title}
                </h3>

                <p className="beyond-description mt-5 text-base leading-relaxed text-white/70">
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