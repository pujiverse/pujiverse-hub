import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';
import { 
  SITE_NAME, 
  CREATOR_NAME, 
  CREATOR_TITLE, 
  TAGLINE, 
  SHORT_BIO, 
  PROFILE_IMAGE_URL, 
  SOCIAL_LINKS,
  RESUME_URL,
  PORTFOLIO_URL,
  MAIN_HUB_URL,
  TECH_STACK,
  CAREER_EXPERIENCE,
  EDUCATION,
  CURRENTLY_LEARNING
} from '../constants';
import { 
  FaEnvelope, 
  FaFilePdf, 
  FaExternalLinkAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaLaptopCode,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home" className="pt-12 pb-16 md:pt-16 md:pb-24">
      {/* Top Banner / Creator Intro */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
        {/* Profile Image with Pulsing Glow */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-700"></div>
          <img
            src={PROFILE_IMAGE_URL}
            alt={CREATOR_NAME}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-gray-900 transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Creator Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 leading-tight mb-3 tracking-tight">
          {CREATOR_NAME}
        </h1>

        {/* Subtitle / Role Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-sm sm:text-base font-semibold mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          {CREATOR_TITLE}
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-200 mb-6 max-w-3xl font-medium tracking-wide leading-relaxed">
          &ldquo;{TAGLINE}&rdquo;
        </p>

        {/* Short Bio */}
        <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-3xl leading-relaxed">
          {SHORT_BIO}
        </p>

        {/* Action Buttons: Resume, Hub, Portfolio, Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <NavLink
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm sm:text-base font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300 border border-cyan-400/40"
          >
            <span>Explore Projects</span>
            <FaArrowRight className="ml-2 text-xs" />
          </NavLink>

          <a
            href={MAIN_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600/30 text-purple-200 hover:text-white hover:bg-purple-600/50 text-sm sm:text-base font-semibold rounded-xl border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-105"
          >
            <FaGlobe className="mr-2 text-cyan-400" />
            <span>Pujiverse Network Hub</span>
            <FaExternalLinkAlt className="ml-2 text-xs" />
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-emerald-600/30 text-emerald-200 hover:text-white hover:bg-emerald-600/50 text-sm sm:text-base font-semibold rounded-xl border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105"
          >
            <FaFilePdf className="mr-2 text-red-400" />
            <span>Resume (PDF)</span>
            <FaExternalLinkAlt className="ml-2 text-xs" />
          </a>

          <NavLink
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-sm sm:text-base font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
          >
            <FaEnvelope className="mr-2 text-cyan-400" />
            <span>Get in Touch</span>
          </NavLink>
        </div>

        {/* Social Icons Bar */}
        <SocialLinks links={SOCIAL_LINKS} className="mt-2" />
      </div>

      {/* Grid: Experience & Background */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Career Experience */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2.5 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30">
              <FaBriefcase className="text-xl" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Experience</h2>
              <p className="text-xs text-cyan-300">Data Engineering & Analytics Background</p>
            </div>
          </div>

          <div className="space-y-6">
            {CAREER_EXPERIENCE.map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-cyan-500/30 last:border-0 pb-2">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.role}</h3>
                  {item.period && (
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-cyan-200 mb-1.5">{item.organization}</p>
                {item.description && (
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Learning */}
        <div className="flex flex-col space-y-8">
          {/* Education Box */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-purple-500/20 rounded-xl text-purple-400 border border-purple-500/30">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Education</h2>
                <p className="text-xs text-purple-300">Academic Degrees & Advanced Coursework</p>
              </div>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm text-cyan-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning / Focus */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex-grow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/30">
                <FaLaptopCode className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Current Focus</h2>
                <p className="text-xs text-emerald-300">Cutting-Edge AI & Agent Architectures</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {CURRENTLY_LEARNING.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3 shadow-[0_0_6px_#34d399]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Technical Skills & Tooling</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
          Production engineering stack covering modern cloud data platforms, AI frameworks, and full-stack development.
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {TECH_STACK.map((tech, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-cyan-200 text-xs sm:text-sm font-medium hover:border-cyan-400 hover:text-white transition-colors duration-200 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
