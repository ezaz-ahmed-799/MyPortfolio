const contactLinks = [
  {
    label: "Email",
    value: "ezazahmedmd555@gmail.com",
    href: "mailto:ezazahmedmd555@gmail.com",
  },

  {
    label: "GitHub",
    value: "github.com/ezaz",
    href: "https://github.com/ezaz-ahmed-799/",
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/ezaz",
    href: "https://www.linkedin.com/in/ezaz-ahmed-775898277/",
  },

  {
    label: "ORCID",
    value: "0009-0009-6572-8661",
    href: "https://orcid.org/0009-0009-6572-8661",
  },
];

const ContactSection = () => {
  return (
    <section className="contact-section relative overflow-hidden bg-black py-20 md:py-32">

      {/* Background Glow */}
      <div className="contact-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[180px]" />

      <div className="contact-container relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:gap-20 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="contact-left" data-animate="fade-right">

          <p className="contact-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            Contact
          </p>

          <h2 className="contact-heading text-3xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Let’s Build
            <br />
            Something
            <br />
            Exceptional.
          </h2>

          <p className="contact-description mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:mt-10 md:text-lg">
            Interested in full stack engineering, AI research collaborations,
            scalable backend systems, or intelligent software experiences?
            I'm always open to impactful opportunities and ambitious ideas.
          </p>

          {/* Availability */}
          <div className="contact-availability mt-8 flex items-center gap-4 md:mt-10">

            <div className="contact-status-dot h-3 w-3 rounded-full bg-neon-primary shadow-[0_0_15px_rgba(204,255,0,0.8)]" />

            <p className="contact-status-text text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm sm:tracking-[0.25em]">
              Available For Opportunities
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right" data-animate="fade-left">

          {/* Terminal Card */}
          <div className="contact-terminal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7 md:rounded-[2rem] md:p-8">

            {/* Glow */}
            <div className="contact-terminal-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="contact-terminal-content relative z-10">

              {/* Terminal Header */}
              <div className="contact-terminal-header mb-6 flex items-center gap-3 md:mb-8">

                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-red-400" />
                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-yellow-400" />
                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-green-400" />

                <p className="contact-terminal-title ml-2 text-xs uppercase tracking-[0.2em] text-white/40 sm:ml-4 sm:text-sm sm:tracking-[0.25em]">
                  terminal
                </p>
              </div>

              {/* Terminal Lines */}
              <div className="contact-terminal-lines flex flex-col gap-6 md:gap-8">

                {contactLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-animate="fade-up"
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className="contact-terminal-link group/link flex min-w-0 items-start justify-between gap-4 border-b border-white/5 pb-5 transition-all duration-300 hover:border-neon-primary/20 md:pb-6"
                  >

                    <div className="min-w-0">
                      <p className="contact-terminal-label text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:tracking-[0.3em]">
                        {item.label}
                      </p>

                      <h3 className="contact-terminal-value mt-3 break-all text-base font-semibold text-white transition-colors duration-300 group-hover/link:text-neon-primary sm:text-xl">
                        {item.value}
                      </h3>
                    </div>

                    <div className="contact-terminal-arrow text-white/20 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-neon-primary">
                      ↗
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="contact-cta mt-8 md:mt-10">

                <a
                  href="mailto:ezazahmedmd555@gmail.com"
                  className="
                    contact-primary-btn
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-neon-primary
                    px-6
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_30px_rgba(204,255,0,0.35)]
                    sm:w-auto
                    sm:px-8
                  "
                >
                  Start Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="contact-footer relative z-10 mt-20 border-t border-white/5 px-5 pt-8 text-center md:mt-32 md:pt-10">

        <p className="contact-footer-text text-xs uppercase tracking-[0.22em] text-white/40 sm:text-sm sm:tracking-[0.3em]">
          Designed & Engineered by Ezaz Ahmed
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
