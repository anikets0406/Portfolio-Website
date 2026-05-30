import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Design Core',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    skills: ['Social Media Ads', 'Branding', 'Stationery', 'Presentations', 'OOH Advertising', 'EDMs']
  },
  {
    title: 'Motion',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.65zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    skills: ['Motion Graphics', 'Reels', 'Logo Animation']
  },
  {
    title: 'Tools',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Canva', 'After Effects', 'Premiere Pro']
  },
  {
    title: 'Strategy',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    skills: ['Social Campaigns', 'WhatsApp Marketing', 'Event Collaterals', 'AI Visual Enhancement']
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .stagger-children"
    );

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 md:py-48 bg-void overflow-hidden noise"
    >
      {/* Background Glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] orb bg-amber/10"
        style={{ filter: "blur(150px)" }}
      />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">

          <div className="reveal">
            <span className="font-sub text-sm uppercase tracking-[0.2em] text-ember">
              Skills
            </span>
          </div>

          <h2 className="reveal font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            The toolkit
          </h2>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">

          {skillCategories.map((category, index) => (

            <div
              key={category.title}
              className="reveal glass border border-borderSubtle rounded-2xl p-8 hover:border-ember/30 transition-all duration-500 hover:-translate-y-1 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-ember/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-ember"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.icon}
                    />
                  </svg>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white">
                  {category.title}
                </h3>

              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface text-silver font-sub text-sm rounded-full border border-borderSubtle hover:border-ember/50 hover:bg-ember/10 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Software Proficiency */}
        <div className="reveal mt-16">

          <h3 className="font-sub text-sm uppercase tracking-[0.2em] text-silver mb-8">
            Software Proficiency
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {[
              {
                name: "Photoshop",
                image: "/photoshop.png",
              },
              {
                name: "Illustrator",
                image: "/illustrator.webp",
              },
              {
                name: "Figma",
                image: "/figma.png",
              },
              {
                name: "Canva",
                image: "/canva.png",
              },
              {
                name: "After Effects",
                image: "/aftereffects.webp",
              },
              {
                name: "Premiere Pro",
                image: "/premierepro.png",
              },
            ].map((software) => (

              <div
                key={software.name}
                className="bg-charcoal/50 border border-borderSubtle rounded-xl p-6 text-center hover:border-ember/30 hover:bg-ember/5 transition-all duration-300 group"
              >

                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-surface flex items-center justify-center group-hover:bg-ember/20 transition-colors duration-300">

                  <span className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={software.image}
                      alt={software.name}
                      className="w-full h-full object-cover"
                    />
                  </span>

                </div>

                <p className="font-sub text-sm text-silver group-hover:text-white transition-colors duration-300">
                  {software.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}