import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 bg-surface overflow-hidden noise"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orb bg-ember/10" style={{ filter: 'blur(150px)' }} />

      <div className="relative z-10 px-6 md:px-20 max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <div className="reveal">
            <span className="font-sub text-sm uppercase tracking-[0.2em] text-ember">Get in Touch</span>
          </div>
          <h2 className="reveal font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Let's create something<br />
            <span className="text-gradient">worth remembering.</span>
          </h2>
          <p className="reveal font-sub text-xl text-silver mt-6 max-w-2xl mx-auto">
            Open for freelance projects and full-time opportunities.
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal mb-20">
          <a
            href="mailto:aniket1.singh8464@gmail.com"
            className="inline-flex items-center gap-4 bg-ember text-white font-heading font-bold text-xl px-12 py-6 rounded-full hover:scale-105 animate-glow-pulse group"
          >
            <span>Get in Touch</span>
            <svg
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      {/* Contact Cards */}
<div className="stagger-children flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mb-16 justify-center items-center">

  {/* Email Card */}
  <a
    href="mailto:aniket1.singh8464@gmail.com"
    className="reveal glass border border-borderSubtle rounded-2xl p-5 md:p-8 hover:border-ember/30 transition-all duration-500 group w-full max-w-[340px] text-center"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-ember/20 flex items-center justify-center group-hover:bg-ember/30 transition-colors">
      <svg
        className="w-6 h-6 md:w-7 md:h-7 text-ember"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>

    <p className="font-sub text-silver group-hover:text-white transition-colors">
      Email
    </p>

    <p className="font-heading font-bold text-white mt-2 break-all text-sm md:text-base">
      aniket1.singh8464@gmail.com
    </p>
  </a>

  {/* Phone Card */}
  <a
    href="tel:+919560500849"
    className="reveal glass border border-borderSubtle rounded-2xl p-5 md:p-8 hover:border-ember/30 transition-all duration-500 group w-full max-w-[340px] text-center"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-ember/20 flex items-center justify-center group-hover:bg-ember/30 transition-colors">
      <svg
        className="w-6 h-6 md:w-7 md:h-7 text-ember"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>

    <p className="font-sub text-silver group-hover:text-white transition-colors">
      Phone
    </p>

    <p className="font-heading font-bold text-white mt-2 text-sm md:text-base">
      +91 9560500849
    </p>
  </a>

  {/* Portfolio Card */}
  <a
    href="https://www.linkedin.com/in/aniket-singh-a1814b249/"
    target="_blank"
    rel="noopener noreferrer"
    className="reveal glass border border-borderSubtle rounded-2xl p-5 md:p-8 hover:border-ember/30 transition-all duration-500 group w-full max-w-[340px] text-center"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-ember/20 flex items-center justify-center group-hover:bg-ember/30 transition-colors">
      <svg
        className="w-6 h-6 md:w-7 md:h-7 text-ember"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </div>

    <p className="font-sub text-silver group-hover:text-white transition-colors">
      Connect
    </p>

    <p className="font-heading font-bold text-white mt-2 text-sm md:text-base">
      LinkedIn
    </p>
  </a>

</div>

        {/* Location */}
        <div className="reveal">
          <p className="font-sub text-silver">
            Based in <span className="text-white">Gurugram, Haryana</span> · Available worldwide
          </p>
        </div>
      </div>
    </section>
  );
}