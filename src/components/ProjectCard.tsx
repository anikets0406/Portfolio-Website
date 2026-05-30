import { motion } from 'framer-motion';
import { Project } from './ProjectGrid';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-warmCream border border-borderLight overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:bg-softPeach">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay Hover Effect */}
          <div className="absolute inset-0 bg-richBlack/0 group-hover:bg-richBlack/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-warmCream text-richBlack text-sm font-medium rounded-full">
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-softPeach text-burntOrange text-xs font-mono uppercase tracking-wider rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl text-richBlack mb-2 group-hover:text-burntOrange transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-warmGray text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* View Link */}
          <div className="mt-4 flex items-center gap-2 text-burntOrange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">View Project</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}