import { useEffect, useRef, useState } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sales Pitch Deck',
    category: 'Business',
    link: 'https://www.behancet.net/gallery/250021729/Sales-Pitch-Deck',
     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 2,
    title: 'Google Ads',
    category: 'Advertising',
    link: 'https://www.behance.net/gallery/250021987/Google-Ads',
     image: '/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Emailer / EDMs',
    category: 'Email Marketing',
    link: 'https://www.behance.net/gallery/your-link-3',
     image: '/projects/project1.jpg',
  },
  {
    id: 4,
    title: 'EDM Ad Campaigns',
    category: 'Advertising',
    link: 'https://www.behance.net/gallery/your-link-4',
     image: '/projects/project1.jpg',
  },
  {
    id: 5,
    title: 'Event Save the Date',
    category: 'Events',
    link: 'https://www.behance.net/gallery/your-link-5',
     image: '/projects/project1.jpg',
  },
  {
    id: 6,
    title: 'Real Estate Invitation',
    category: 'Real Estate',
    link: 'https://www.behance.net/gallery/your-link-6',
     image: '/projects/project1.jpg',
  },
  {
    id: 7,
    title: 'F&B Promotion Creatives',
    category: 'Hospitality',
    link: 'https://www.behance.net/gallery/your-link-7',
     image: '/projects/project1.jpg',
  },
  {
    id: 8,
    title: 'Hotel Promotions',
    category: 'Hospitality',
    link: 'https://www.behance.net/gallery/your-link-8',
     image: '/projects/project1.jpg',
  },
  {
    id: 9,
    title: 'Flight Social Media Post',
    category: 'Social',
    link: 'https://www.behance.net/gallery/your-link-9',
     image: '/projects/project1.jpg',
  },
  {
    id: 10,
    title: 'Wish Posts',
    category: 'Social',
    link: 'https://www.behance.net/gallery/your-link-10',
     image: '/projects/project1.jpg',
  },
  {
    id: 11,
    title: 'Mockups',
    category: 'Presentation',
    link: 'https://www.behance.net/gallery/your-link-11',
     image: '/projects/project1.jpg',
  },
  {
    id: 12,
    title: 'Hotel Sub-brand Identity',
    category: 'Branding',
    link: 'https://www.behance.net/gallery/your-link-12',
     image: '/projects/project1.jpg',
  },
];

const categories = ['All', 'Branding', 'Social', 'Advertising', 'Events', 'Hospitality', 'Business', 'Email Marketing', 'Real Estate', 'Presentation'];

export default function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 md:py-48 bg-void overflow-hidden noise"
    >
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] orb bg-gradient-to-tr from-ember/10 to-amber/5" style={{ filter: 'blur(150px)' }} />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="font-sub text-sm uppercase tracking-[0.2em] text-ember">Selected Work</span>
          </div>
          <h2 className="reveal font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Projects that<br />
            <span className="text-gradient">mean something</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="reveal mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 font-sub text-sm rounded-full border transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-ember text-white border-ember'
                    : 'bg-transparent text-white border-borderSubtle hover:border-ember hover:bg-ember/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Count */}
        <div className="reveal mb-8">
          <p className="font-sub text-silver">
            <span className="text-ember font-bold">{filteredProjects.length}</span> projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group reveal cursor-pointer"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative bg-charcoal border border-borderSubtle rounded-xl overflow-hidden hover:border-ember/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ember/10">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden">
                 <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                  {/* Grayscale to Color Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ember/20 to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-ember/90 text-white text-xs font-sub uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                  {/* View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-void/60 backdrop-blur-sm">
                   <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="px-6 py-3 bg-white text-void font-sub font-semibold rounded-full">
    View Project
  </span>
</a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-ember transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    {/* <span className="font-sub text-sm text-silver">{project.views} views</span> */}
                    <svg
                      className="w-5 h-5 text-ember transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="reveal mt-16 text-center">
          <a
            href="https://www.behance.net/aniketsingh70"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sub text-lg text-ember hover:text-white transition-colors duration-300 group"
          >
            <span>View all projects on Behance</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}