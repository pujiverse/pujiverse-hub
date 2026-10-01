import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HEADER_NAV_LINKS, 
  SOCIAL_LINKS, 
  SITE_NAME, 
  CREATOR_NAME,
  MAIN_HUB_URL,
  RESUME_URL,
  PORTFOLIO_URL
} from '../constants';
import SocialLinks from './SocialLinks';
import { FaExternalLinkAlt, FaFilePdf, FaGlobe } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start md:col-span-2">
          <h3 className="text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
            {SITE_NAME}
          </h3>
          <p className="text-sm font-semibold text-cyan-200 mb-2">
            Created by {CREATOR_NAME}
          </p>
          <p className="text-xs text-gray-400 mb-4 max-w-sm leading-relaxed">
            Full Stack Data & AI Engineer · Network Data Analyst · Creator of the 39-channel Pujiverse media network and AI studio projects.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-cyan-300">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {HEADER_NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Key External Hubs */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-cyan-300">External Links</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              <a
                href={MAIN_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
              >
                <FaGlobe className="mr-2 text-xs text-cyan-400" /> Pujiverse Network Hub
              </a>
            </li>
            <li>
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
              >
                <FaExternalLinkAlt className="mr-2 text-xs text-cyan-400" /> Career Portfolio
              </a>
            </li>
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
              >
                <FaFilePdf className="mr-2 text-xs text-red-400" /> Resume (PDF)
              </a>
            </li>
          </ul>

          <SocialLinks links={SOCIAL_LINKS} className="justify-center md:justify-start" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
