import { type FormEvent, useState } from "react";

const websiteWorks = [
  {
    title: "Interviewskills.in",
    category: "CSS Website Design",
    status: "Screen recording added",
    description:
      "A custom CSS-driven website design project focused on clean layout, sharp visual hierarchy, responsive structure, and polished frontend presentation.",
    tags: ["CSS", "Responsive Design", "Website UI", "Frontend Polish"],
    videoSrc: "/interviewskills.mp4",
  },
];

const gigServices = [
  "Portfolio websites",
  "Landing pages",
  "CSS animations",
  "Responsive UI fixes",
  "React frontend pages",
  "Website redesigns",
];

const WebsiteWorksSection = () => {
  const [isGigFormOpen, setIsGigFormOpen] = useState(false);

  const handleGigSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "Not provided").trim();
    const email = String(formData.get("email") || "Not provided").trim();
    const projectType = String(
      formData.get("projectType") || "Not provided"
    ).trim();
    const budget = String(formData.get("budget") || "Not provided").trim();
    const timeline = String(formData.get("timeline") || "Not provided").trim();
    const details = String(formData.get("details") || "Not provided").trim();

    const subject = `Website Gig Inquiry from ${name || "Portfolio Visitor"}`;
    const body = [
      "Hi Ezaz,",
      "",
      "I am interested in hiring you for a website/frontend gig.",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Project Type: ${projectType || "Not provided"}`,
      `Budget: ${budget || "Not provided"}`,
      `Timeline: ${timeline || "Not provided"}`,
      "",
      "Project Details:",
      details || "Not provided",
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "ezazahmedmd555@gmail.com");
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
    setIsGigFormOpen(false);
  };

  return (
    <section className="website-works-section relative overflow-hidden bg-black py-20 md:py-32">
      <div className="website-works-bg-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/5 blur-[120px] md:h-[700px] md:w-[700px] md:blur-[170px]" />

      <div className="website-works-container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div
          className="website-works-heading-wrapper mb-14 max-w-4xl md:mb-20"
          data-animate="fade-up"
        >
          <p className="website-works-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em] md:mb-5">
            CSS / Website Works
          </p>

          <h2 className="website-works-heading text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Design Work
          </h2>

          <p className="website-works-intro mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            A dedicated space for website UI, CSS experiments, landing pages,
            and frontend design work. More pieces are coming soon, with screen
            recordings added for each work item.
          </p>
        </div>

        <div className="website-works-grid grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="website-works-list flex flex-col gap-8">
            {websiteWorks.map((work, index) => (
              <article
                key={work.title}
                className="website-work-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:border-neon-primary/30 hover:bg-white/[0.05] sm:p-7 md:rounded-[2rem] md:p-8"
                data-animate="fade-right"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="website-work-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="website-work-video-frame relative overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                    {work.videoSrc ? (
                      <video
                        src={work.videoSrc}
                        className="h-[240px] w-full bg-black object-contain sm:h-[320px]"
                        controls
                        muted
                        onLoadedMetadata={(event) => {
                          event.currentTarget.muted = true;
                          event.currentTarget.volume = 0;
                        }}
                        onVolumeChange={(event) => {
                          event.currentTarget.muted = true;
                          event.currentTarget.volume = 0;
                        }}
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <div className="flex h-[240px] flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.12),transparent_62%)] p-6 text-center sm:h-[320px]">
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-neon-primary/30 bg-neon-primary/[0.06] text-neon-primary shadow-[0_0_30px_rgba(204,255,0,0.14)]">
                          <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>

                        <p className="text-xs uppercase tracking-[0.25em] text-neon-primary/70">
                          Video Preview
                        </p>

                        <h3 className="mt-3 text-2xl font-black text-white">
                          Coming Soon
                        </h3>

                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                          Add a screen recording later and this card is ready to
                          showcase it.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="website-work-content">
                    <p className="website-work-category mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
                      {work.category}
                    </p>

                    <h3 className="website-work-title break-words text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                      {work.title}
                    </h3>

                    <p className="website-work-description mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                      {work.description}
                    </p>

                    <div className="website-work-tags mt-7 flex flex-wrap gap-2.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="website-work-tag rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="website-work-status mt-8 inline-flex rounded-full border border-neon-primary/20 bg-neon-primary/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neon-primary/80">
                      {work.status}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside
            className="gig-card group relative overflow-hidden rounded-2xl border border-neon-primary/20 bg-neon-primary/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:border-neon-primary/40 sm:p-7 md:rounded-[2rem] md:p-8"
            data-animate="fade-left"
          >
            <div className="gig-card-glow absolute inset-0 bg-gradient-to-br from-neon-primary/[0.08] via-transparent to-transparent opacity-70" />

            <div className="relative z-10">
              <p className="gig-label mb-4 text-xs uppercase tracking-[0.24em] text-neon-primary sm:text-sm sm:tracking-[0.3em]">
                Open For Gigs
              </p>

              <h3 className="gig-title text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Need a clean website or frontend polish?
              </h3>

              <p className="gig-description mt-5 text-base leading-relaxed text-white/70">
                I am open to small website builds, CSS-focused UI work,
                responsive fixes, landing pages, and portfolio redesigns.
              </p>

              <div className="gig-services mt-7 flex flex-wrap gap-2.5">
                {gigServices.map((service) => (
                  <span
                    key={service}
                    className="gig-service-pill rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsGigFormOpen(true)}
                className="gig-primary-btn mt-9 inline-flex w-full items-center justify-center rounded-full bg-neon-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(204,255,0,0.35)]"
              >
                Hire Me For A Gig
              </button>
            </div>
          </aside>
        </div>
      </div>

      {isGigFormOpen && (
        <div
          className="gig-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gig-modal-title"
        >
          <div className="gig-modal-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#080808] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:p-7 md:rounded-[2rem] md:p-8">
            <button
              type="button"
              onClick={() => setIsGigFormOpen(false)}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-white/60 transition-colors hover:border-neon-primary/30 hover:text-neon-primary"
              aria-label="Close gig form"
            >
              Close
            </button>

            <p className="mb-4 pr-20 text-xs uppercase tracking-[0.24em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
              Gig Inquiry
            </p>

            <h3
              id="gig-modal-title"
              className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl"
            >
              Tell me about your website idea
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/65">
              Answer a few quick questions and I will open Gmail with everything
              prefilled for you.
            </p>

            <form onSubmit={handleGigSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-white/75">
                  Your name
                  <input
                    name="name"
                    required
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon-primary/40"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-white/75">
                  Your email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon-primary/40"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <label className="grid gap-2 text-sm font-semibold text-white/75">
                  Project type
                  <select
                    name="projectType"
                    className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-white outline-none transition-colors focus:border-neon-primary/40"
                    defaultValue="Portfolio website"
                  >
                    <option>Portfolio website</option>
                    <option>Landing page</option>
                    <option>Website redesign</option>
                    <option>Responsive fix</option>
                    <option>CSS animation</option>
                    <option>React frontend page</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-white/75">
                  Budget
                  <input
                    name="budget"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon-primary/40"
                    placeholder="e.g. $100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-white/75">
                  Timeline
                  <input
                    name="timeline"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon-primary/40"
                    placeholder="e.g. 1 week"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-white/75">
                What do you need built?
                <textarea
                  name="details"
                  required
                  rows={5}
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon-primary/40"
                  placeholder="Tell me about the website, pages, style, deadline, and any links/references."
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-neon-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white sm:w-auto"
                >
                  Open In Gmail
                </button>

                <button
                  type="button"
                  onClick={() => setIsGigFormOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-neon-primary/30 hover:text-neon-primary sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebsiteWorksSection;
