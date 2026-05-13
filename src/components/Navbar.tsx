import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated to use paths for React Router instead of # anchors
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="fixed w-full h-[10vh] top-0 z-50 bg-bg-main/90 backdrop-blur-md border-b border-bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-extrabold text-text-bright tracking-tighter">
              Ezaz<span className="text-neon-primary">.</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-text-muted hover:text-neon-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              {/* Glowing Neon Button */}
              <a
                href="#contact"
                className="border border-neon-primary text-neon-primary hover:bg-neon-primary hover:text-bg-main hover:shadow-[0_0_15px_#ccff00] px-5 py-2 rounded-md text-sm font-bold transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-muted hover:text-neon-primary focus:outline-none transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-bg-surface border-b border-bg-surface-hover">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-muted hover:text-neon-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="block mt-4 text-center border border-neon-primary text-neon-primary hover:bg-neon-primary hover:text-bg-main hover:shadow-[0_0_15px_#ccff00] px-5 py-2 rounded-md text-base font-bold transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;