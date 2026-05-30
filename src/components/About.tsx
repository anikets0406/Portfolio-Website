import { useEffect, useRef } from 'react';

export default function About() {
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
      id="about"
      className="relative py-32 md:py-48 bg-void overflow-hidden noise"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb bg-gradient-to-br from-amber/10 to-transparent" style={{ filter: 'blur(120px)' }} />

      <div className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="reveal mb-6">
          <span className="font-sub text-sm uppercase tracking-[0.2em] text-ember">About</span>
        </div>

        {/* Heading */}
        <h2 className="reveal font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-12 glow-text">
          The person behind<br />the work
        </h2>

        {/* Narrative */}
        <div className="stagger-children max-w-3xl space-y-6">
          <p className="reveal font-sub text-xl md:text-2xl text-silver leading-relaxed">
            I'm Aniket Singh — a graphic designer who believes the best design doesn't just look good, it means something.
          </p>
          <p className="reveal font-body text-lg text-gray leading-relaxed">
            For the past two years, I've been helping brands figure out what they actually want to say — and then making it impossible to ignore. Social campaigns, brand identities, digital experiences — whatever the format, the goal's always the same: make someone stop, feel something, and remember it.
          </p>
          <p className="reveal font-body text-lg text-gray leading-relaxed">
            I care a lot about clarity and intention. But honestly? I'm mostly just deeply curious about why certain things make you stop mid-scroll and others don't. That question drives pretty much everything I make.
          </p>
        </div>

        {/* Details Row */}
        <div className="reveal mt-16 pt-8 border-t border-borderSubtle">
          <div className="stagger-children flex flex-wrap gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-sub text-silver">Gurugram, Haryana</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-sub text-silver">Open to freelance + full-time</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-sub text-silver">English, Hindi</span>
            </div>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="reveal mt-20 relative">
          <span className="font-heading text-[200px] md:text-[300px] text-ember/10 absolute -left-8 -top-16 select-none">"</span>
          <blockquote className="relative font-sub text-2xl md:text-3xl text-white/80 italic pl-12 max-w-4xl leading-relaxed">
            The best design doesn't just look good, it means something.
          </blockquote>
        </div>
      </div>
    </section>
  );
}