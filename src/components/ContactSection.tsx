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
    <section className="contact-section relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="contact-bg-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[180px]" />

      <div className="contact-container relative z-10 mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <p className="contact-label mb-5 text-sm uppercase tracking-[0.3em] text-neon-primary/70">
            Contact
          </p>

          <h2 className="contact-heading text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            Let’s Build
            <br />
            Something
            <br />
            Exceptional.
          </h2>

          <p className="contact-description mt-10 max-w-2xl text-lg leading-relaxed text-white/70">
            Interested in full stack engineering, AI research collaborations,
            scalable backend systems, or intelligent software experiences?
            I'm always open to impactful opportunities and ambitious ideas.
          </p>

          {/* Availability */}
          <div className="contact-availability mt-10 flex items-center gap-4">

            <div className="contact-status-dot h-3 w-3 rounded-full bg-neon-primary shadow-[0_0_15px_rgba(204,255,0,0.8)]" />

            <p className="contact-status-text text-sm uppercase tracking-[0.25em] text-white/60">
              Available For Opportunities
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* Terminal Card */}
          <div className="contact-terminal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            {/* Glow */}
            <div className="contact-terminal-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="contact-terminal-content relative z-10">

              {/* Terminal Header */}
              <div className="contact-terminal-header mb-8 flex items-center gap-3">

                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-red-400" />
                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-yellow-400" />
                <div className="contact-terminal-dot h-3 w-3 rounded-full bg-green-400" />

                <p className="contact-terminal-title ml-4 text-sm uppercase tracking-[0.25em] text-white/40">
                  terminal
                </p>
              </div>

              {/* Terminal Lines */}
              <div className="contact-terminal-lines flex flex-col gap-8">

                {contactLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-terminal-link group/link flex items-start justify-between border-b border-white/5 pb-6 transition-all duration-300 hover:border-neon-primary/20"
                  >

                    <div>
                      <p className="contact-terminal-label text-xs uppercase tracking-[0.3em] text-neon-primary/70">
                        {item.label}
                      </p>

                      <h3 className="contact-terminal-value mt-3 text-xl font-semibold text-white transition-colors duration-300 group-hover/link:text-neon-primary">
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
              <div className="contact-cta mt-10">

                <a
                  href="mailto:ezazahmed@example.com"
                  className="
                    contact-primary-btn
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-neon-primary
                    px-8
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
      <div className="contact-footer relative z-10 mt-32 border-t border-white/5 pt-10 text-center">

        <p className="contact-footer-text text-sm uppercase tracking-[0.3em] text-white/40">
          Designed & Engineered by Ezaz Ahmed
        </p>
      </div>
    </section>
  );
};

export default ContactSection;