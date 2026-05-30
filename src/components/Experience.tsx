import { useEffect, useRef } from 'react';

const timelineData = [
  {
    period: 'April 2026 – Present',
    company: 'COG Culture',
    role: 'Graphic Designer',
    location: 'Gurugram',
    isCurrent: true,
    highlights: [
      'Visual development of pitch decks and brand presentations',
      'Print and digital marketing collaterals, social posts, banners',
      'OOH advertising campaigns across multiple markets',
      'EDM and event communication assets for real estate campaigns'
    ]
  },
  {
    period: 'March 2025 – April 2026',
    company: 'Cygnett Hotels',
    role: 'Graphic Designer',
    location: 'Gurugram',
    isCurrent: false,
    highlights: [
      'Daily social media creative across platforms',
      'WhatsApp marketing campaigns for seasonal promotions',
      'Sub-brand visual identity systems and brand manuals',
      'Full design ownership for pan-India hospitality brand'
    ]
  },
  {
    period: 'December 2023 – September 2024',
    company: 'Yutrp',
    role: 'Graphic Designer',
    location: 'Gurugram',
    isCurrent: false,
    highlights: [
      'High-performing social media creatives',
      'Reels covers and promotional post series',
      'Video promos boosting client content performance'
    ]
  }
];

export default function Experience() {
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
      id="experience"
      className="relative py-32 md:py-48 bg-surface overflow-hidden noise"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb bg-ember/5" style={{ filter: 'blur(150px)' }} />

      <div className="relative z-10 px-6 md:px-20 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="reveal">
            <span className="font-sub text-sm uppercase tracking-[0.2em] text-ember">Experience</span>
          </div>
          <h2 className="reveal font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Career journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative pl-8 md:pl-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ember via-amber to-transparent" />

          {timelineData.map((item, index) => (
            <div
              key={item.company}
              className="reveal relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Node */}
              <div className="absolute -left-10 md:-left-[3.25rem] top-2 w-5 h-5 rounded-full bg-ember border-4 border-surface z-10">
                {item.isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className="bg-charcoal/50 backdrop-blur-sm border border-borderSubtle rounded-2xl p-8 hover:border-ember/30 transition-colors duration-500">
                {/* Period Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-ember/20 text-ember font-sub text-sm rounded-full">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="px-3 py-1 bg-ember text-white font-sub text-xs rounded-full animate-pulse">
                      Current
                    </span>
                  )}
                </div>

                {/* Company & Role */}
                <h3 className="font-heading font-bold text-3xl text-white mb-2">
                  {item.company}
                </h3>
                <p className="font-sub text-lg text-ember mb-6">
                  {item.role} · {item.location}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                      <span className="font-body text-silver">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal mt-20">
          <h3 className="font-sub text-sm uppercase tracking-[0.2em] text-silver mb-8">Education</h3>
          <div className="bg-charcoal/50 backdrop-blur-sm border border-borderSubtle rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-2xl text-white mb-2">
                  B.Sc Animation and VFX
                </h4>
                <p className="font-sub text-silver">
                  Asian Academy of Film and Television, Noida
                </p>
              </div>
              <span className="px-4 py-2 bg-surface text-silver font-sub text-sm rounded-full">
                August 2022 – July 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}