import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_NAV_LINKS, SITE_NAME, RESUME_URL, MAIN_HUB_URL } from '../constants';
import { FaBars, FaTimes, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Site Name / Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 hover:opacity-90 transition-opacity drop-shadow-lg flex items-center space-x-2"
        >
          <span>{SITE_NAME}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800/60 hidden sm:inline-block">
            Network
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {HEADER_NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Quick External CTAs */}
          <div className="flex items-center space-x-3 pl-2 border-l border-white/10">
            <a
              href={MAIN_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center"
            >
              <span>Hub</span>
              <FaExternalLinkAlt className="ml-1.5 text-[9px]" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all flex items-center"
            >
              <FaFilePdf className="mr-1 text-red-400 text-xs" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-2 bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 animate-fade-in p-6">
          <button
            onClick={closeMobileMenu}
            className="absolute top-5 right-5 text-gray-400 hover:text-cyan-400 focus:outline-none p-2 bg-white/5 rounded-full"
            aria-label="Close navigation menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <div className="text-xl font-bold text-cyan-300 mb-2">{SITE_NAME}</div>

          {HEADER_NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-2xl font-bold transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-6 flex flex-col space-y-3 w-full max-w-xs">
            <a
              href={MAIN_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/40 text-sm font-semibold flex items-center justify-center"
            >
              <span>Pujiverse Network Hub</span>
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 text-sm font-semibold flex items-center justify-center"
            >
              <FaFilePdf className="mr-2 text-red-400 text-sm" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
