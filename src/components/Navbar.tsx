import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Navigation Links
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Research", id: "research" },
    { name: "Education", id: "education" },
    { name: "Works", id: "website-works" },
  ];

  // Smooth Scroll Function
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 z-50 w-full border-b border-bg-surface bg-bg-main/90 backdrop-blur-md">

      <div className="navbar-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="navbar-wrapper flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <div className="navbar-logo-wrapper flex-shrink-0">

            <button
              onClick={() => handleScroll("hero")}
              className="navbar-logo text-2xl font-extrabold tracking-tighter text-text-bright sm:text-3xl"
            >
              Ezaz<span className="text-neon-primary">.</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop hidden md:block">

            <div className="navbar-links ml-6 flex items-center space-x-3 lg:ml-10 lg:space-x-6">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="navbar-link text-xs font-medium text-text-muted transition-colors duration-300 hover:text-neon-primary lg:text-sm"
                >
                  {link.name}
                </button>
              ))}

              {/* Contact Button */}
              <button
                onClick={() => handleScroll("contact")}
                className="navbar-contact-btn rounded-md border border-neon-primary px-5 py-2 text-sm font-bold text-neon-primary transition-all duration-300 hover:bg-neon-primary hover:text-bg-main hover:shadow-[0_0_15px_#ccff00]"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="navbar-mobile-toggle flex items-center md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-hamburger text-text-muted transition-colors hover:text-neon-primary focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu border-b border-bg-surface-hover bg-bg-surface md:hidden">

          <div className="navbar-mobile-links space-y-1 px-2 pb-4 pt-2 sm:px-3">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="navbar-mobile-link block w-full rounded-md px-3 py-2 text-left text-base font-medium text-text-muted transition-colors hover:text-neon-primary"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Contact Button */}
            <button
              onClick={() => handleScroll("contact")}
              className="navbar-mobile-contact-btn mt-4 block w-full rounded-md border border-neon-primary px-5 py-2 text-center text-base font-bold text-neon-primary transition-all duration-300 hover:bg-neon-primary hover:text-bg-main hover:shadow-[0_0_15px_#ccff00]"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
