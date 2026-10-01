import React, { useState, useMemo } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaRocket, FaFilter } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm mb-4">
          <FaRocket className="text-cyan-400" />
          <span>Innovations & Deployments</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          Pujiverse Projects
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Explore data platforms, AI agents, full-stack web applications, and generative media tools built by Pujith Sakhamuri.
        </p>
      </div>

      {/* Search and Category Filter Controls */}
      <div className="max-w-4xl mx-auto mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by name, technology, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-md transition-all text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="text-xs uppercase tracking-wider text-gray-400 flex items-center mr-1">
            <FaFilter className="mr-1 text-cyan-400" /> Filter:
          </span>
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? PROJECTS.length 
              : PROJECTS.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 border ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-black/30 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
          <p className="text-gray-300 mb-2">No projects found matching your query.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-cyan-400 hover:underline text-sm font-medium"
          >
            Reset search and filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isLive = project.status === 'Live' || (!project.status && project.liveUrl);
            const isInProgress = project.status === 'In Progress';
            const isConcept = project.status === 'Concept';

            return (
              <div 
                key={index} 
                className="flex flex-col bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-[0_0_24px_rgba(6,182,212,0.25)] transition-all duration-300 overflow-hidden border border-white/10 hover:border-cyan-500/30 group"
              >
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header: Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {project.category && (
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          {project.category}
                        </span>
                      )}
                      {project.status && (
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                          isLive 
                            ? 'bg-emerald-950/70 text-emerald-400 border-emerald-700/50' 
                            : isInProgress
                            ? 'bg-amber-950/70 text-amber-300 border-amber-700/50'
                            : 'bg-purple-950/70 text-purple-300 border-purple-700/50'
                        }`}>
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Footer Actions */}
                <div className="px-6 py-3.5 bg-black/40 border-t border-white/10 flex justify-between items-center text-sm">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white font-medium transition-colors"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <FaGithub className="mr-1.5 text-base" /> Source Code
                  </a>
                  
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      Open Live <FaExternalLinkAlt className="ml-1.5 text-xs" />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-xs flex items-center italic">
                      {isInProgress ? 'In Progress' : 'Repo Only'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
