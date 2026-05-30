import { useEffect, useRef } from 'react';

export default function Hero() {
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

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-void flex items-center justify-center overflow-hidden noise"
    >
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orb - top right */}
        <div
          className="orb w-[600px] h-[600px] bg-gradient-to-br from-ember/30 to-amber/20 animate-pulse-soft"
          style={{ top: '-10%', right: '-10%' }}
        />
        {/* Medium orb - bottom left */}
        <div
          className="orb w-[400px] h-[400px] bg-gradient-to-br from-amber/20 to-transparent animate-pulse-soft"
          style={{ bottom: '10%', left: '-5%', animationDelay: '1s' }}
        />
        {/* Small orb - center */}
        <div
          className="orb w-[300px] h-[300px] bg-ember/10 animate-pulse-soft"
          style={{ top: '40%', left: '50%', transform: 'translateX(-50%)', animationDelay: '2s' }}
        />
        {/* Floating geometric accent */}
        <div
          className="absolute w-24 h-24 border-2 border-ember/30 animate-float"
          style={{ top: '15%', right: '20%', animationDelay: '0s' }}
        />
        <div
          className="absolute w-16 h-16 bg-ember/10 animate-float"
          style={{ bottom: '25%', left: '10%', animationDelay: '1s', borderRadius: '4px' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <div
              className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-surface/50 border border-borderSubtle rounded-full"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-2 h-2 bg-ember rounded-full animate-pulse" />
              <span className="text-sm font-sub uppercase tracking-wider text-silver">
                Available for opportunities
              </span>
            </div>

            {/* Main Name */}
            <h1
              className="reveal opacity-0 font-heading font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9] text-white"
              style={{ transitionDelay: '200ms' }}
            >
              ANIKET<br />
              <span className="text-gradient">SINGH</span>
            </h1>

            {/* Tagline */}
            <p
              className="reveal opacity-0 font-sub text-xl md:text-2xl text-silver max-w-xl leading-relaxed"
              style={{ transitionDelay: '300ms' }}
            >
              Graphic designer who believes the best design doesn't just look good, it means something.
            </p>

            {/* CTA Button */}
            <div
              className="reveal opacity-0"
              style={{ transitionDelay: '400ms' }}
            >
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 bg-ember text-white font-heading font-semibold px-8 py-4 rounded-full hover:scale-105 animate-glow-pulse"
              >
                <span className="text-lg">See the work</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div
              className="stagger-children flex gap-12 pt-8 border-t border-borderSubtle"
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <p className="font-heading font-bold text-3xl text-white">2+</p>
                <p className="font-sub text-sm text-silver">Years Experience</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-white">20+</p>
                <p className="font-sub text-sm text-silver">Projects</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-white">3</p>
                <p className="font-sub text-sm text-silver">Companies</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Abstract Design Element */}
            <div className="relative w-96 h-96">
              {/* Rotating ring */}
              <div className="absolute inset-0 border-2 border-ember/30 rounded-full animate-spin-slow" />
              <div
                className="absolute inset-8 border border-amber/20 rounded-full"
                style={{ animationDirection: 'reverse' }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-ember to-amber rounded-2xl animate-float shadow-2xl" />
              </div>
              {/* Decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-ember rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-ember/60 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver/50">
        <span className="text-xs font-sub uppercase tracking-widest">Scroll</span>
        <svg
          className="w-5 h-5 animate-float"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  );
}