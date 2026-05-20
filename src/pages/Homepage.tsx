import Marquee from "../components/Marquee.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ExperienceSection from "../components/ExperienceSection.tsx";
import ProjectsSection from "../components/ProjectsSection.tsx";
import ResearchSection from "../components/ResearchSection.tsx";
import EducationSection from "../components/EducationSection.tsx";
import BeyondCodeSection from "../components/BeyondCodeSection.tsx";
import WebsiteWorksSection from "../components/WebsiteWorksSection.tsx";
import ContactSection from "../components/ContactSection.tsx";

const HomePage = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Ezaz_Ahmed_Resume.docx`;

  return (
    <>
      <div
        id="hero"
        className="hero-section relative flex min-h-[100svh] items-center overflow-hidden bg-bg-main pb-16 pt-24 md:pb-0 md:pt-12"
      >
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="hero-grid-overlay" />

        <div className="hero-container mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Main Layout */}
          <div className="hero-layout flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-10">
            {/* LEFT CONTENT */}
            <div className="hero-content-wrapper flex w-full flex-col gap-6 sm:flex-row md:w-1/2 md:gap-10">
              {/* SOCIAL SIDEBAR */}
              <div className="hero-social-sidebar flex flex-row gap-6 border-b border-white/10 pb-4 pt-2 sm:flex-col sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="hero-social-link text-text-muted transition-all duration-300 hover:text-neon-primary hover:-translate-y-1"
                >
                  <svg
                    className="hero-social-icon h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  className="hero-social-link text-text-muted transition-all duration-300 hover:text-neon-primary hover:-translate-y-1"
                >
                  <svg
                    className="hero-social-icon h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="hero-social-link text-text-muted transition-all duration-300 hover:text-neon-primary hover:-translate-y-1"
                >
                  <svg
                    className="hero-social-icon h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>

              {/* HERO TEXT CONTENT */}
              <div className="hero-text-content flex flex-col justify-center">
                {/* Intro Label */}
                <p className="hero-intro-label mb-4 text-xs uppercase tracking-[0.22em] text-neon-primary/70 sm:text-sm sm:tracking-[0.3em]">
                  Full Stack Engineer & AI Researcher
                </p>

                {/* Heading */}
                <h2 className="hero-heading mb-2 text-3xl font-bold leading-tight text-text-bright sm:text-4xl">
                  Engineering
                  <br />
                  Intelligent Systems
                </h2>

                {/* Name */}
                <h1 className="hero-name mb-6 break-words text-4xl font-extrabold tracking-tight text-neon-primary sm:text-5xl md:text-7xl">
                  Ezaz Ahmed.
                </h1>

                {/* Description */}
                <p className="hero-description mb-8 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base md:mb-10 md:text-lg">
                  Full Stack Developer specializing in MERN Stack, Java Spring
                  Boot, and AI-driven systems with research experience in Deep
                  Learning, Cloud Security, and Intelligent Architectures.
                </p>

                {/* CTA Buttons */}
                <div className="hero-actions flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
                  <a
                    href="#projects"
                    className="
                hero-primary-btn
                inline-flex w-full items-center justify-center sm:w-auto
                rounded-sm
                bg-neon-primary
                px-8 py-3
                font-bold
                text-bg-main
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_0_25px_rgba(204,255,0,0.35)]
              "
                  >
                    View My Work
                  </a>

                  <a
                    href={resumeUrl}
                    download="Ezaz_Ahmed_Resume.docx"
                    className="
                hero-secondary-btn
                inline-flex w-full items-center justify-center sm:w-auto
                rounded-sm
                border border-white/10
                bg-white/[0.02]
                px-8 py-3
                font-semibold
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:border-neon-primary/40
                hover:bg-white/[0.05]
                hover:text-neon-primary
              "
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            {/* RIGHT IMAGE SECTION */}
            <div className="hero-image-section relative hidden md:flex md:w-1/2 items-end justify-center overflow-hidden">
              {/* Main Glow */}
              <div className="hero-image-glow absolute bottom-0 z-0 h-[260px] w-[260px] rounded-full bg-neon-primary/20 blur-[100px] lg:h-[320px] lg:w-[320px] lg:blur-[120px]" />

              {/* HI I'M -> Behind Image */}
              <div className="hero-bg-top-text absolute top-24 z-0 select-none leading-none">
                <h2 className="hero-bg-hi text-[5rem] font-black uppercase tracking-[-0.08em] text-white/[0.04] lg:text-[9rem]">
                  Helllo
                </h2>
              </div>

              {/* Image Wrapper */}
              <div className="hero-image-wrapper relative z-10 flex h-full w-full items-end justify-center overflow-hidden">
                <img
                  src="/ezaz.png"
                  alt="Ezaz Ahmed"
                  className="hero-image h-[420px] w-auto object-cover object-top drop-shadow-[0_0_40px_rgba(204,255,0,0.16)] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Marquee />
        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="research">
          <ResearchSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="beyond">
          <BeyondCodeSection />
        </section>

        <section id="website-works">
          <WebsiteWorksSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default HomePage;
