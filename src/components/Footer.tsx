export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-void border-t border-borderSubtle">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-heading font-bold text-lg text-white hover:text-ember transition-colors"
          >
            ANIKET SINGH
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.behance.net/aniketsingh70"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-ember text-sm font-sub transition-colors"
            >
              Behance
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-ember text-sm font-sub transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:aniket1.singh8464@gmail.com"
              className="text-silver hover:text-ember text-sm font-sub transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray text-sm font-sub">
            © {currentYear} Aniket Singh. Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}