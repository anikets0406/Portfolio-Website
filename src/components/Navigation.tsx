import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-void/95 backdrop-blur-xl border-b border-borderSubtle'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading font-bold text-xl text-white hover:text-ember transition-colors"
            >
              ANIKET SINGH
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="font-sub text-sm uppercase tracking-wider text-silver hover:text-ember link-underline transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.behance.net/aniketsingh70"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-ember text-white font-sub text-sm rounded-full hover:bg-white hover:text-void transition-all duration-300"
              >
                Behance
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-white transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-void/98 backdrop-blur-xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-4xl font-heading font-bold text-white hover:text-ember transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.behance.net/aniketsingh70"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ember text-white font-heading font-bold text-xl rounded-full hover:bg-white hover:text-void transition-all duration-300"
            >
              Behance Profile
            </a>
          </div>
        </div>
      )}
    </>
  );
}