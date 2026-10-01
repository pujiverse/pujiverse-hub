import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_CATEGORIES, MAIN_HUB_URL } from '../constants';
import { FaYoutube, FaExternalLinkAlt, FaGlobe, FaSearch } from 'react-icons/fa';

const YOUTUBE_SUBCATEGORIES = [
  { name: 'All 39 Channels', filter: 'all' },
  { name: 'Tech & Science (6)', filter: 'tech' },
  { name: 'Mystery & Mind (6)', filter: 'mystery' },
  { name: 'Money & Career (6)', filter: 'money' },
  { name: 'Entertainment (8)', filter: 'entertainment' },
  { name: 'Learning & Culture (5)', filter: 'learning' },
  { name: 'Lifestyle (4)', filter: 'lifestyle' },
  { name: 'World & Transport (4)', filter: 'world' },
];

const YOUTUBE_TAG_MAP: Record<string, string> = {
  'Pujiverse AI': 'tech',
  'PUJIVERSE TECH': 'tech',
  'Pujiverse Future': 'tech',
  'Pujiverse Space': 'tech',
  'Pujiverse Gadgets': 'tech',
  'Pujiverse Science': 'tech',

  'Pujiverse Mystery': 'mystery',
  'Pujiverse True Crime': 'mystery',
  'Pujiverse Psychology': 'mystery',
  'Pujiverse Conspiracy': 'mystery',
  'Pujiverse Paranormal': 'mystery',
  'Pujiverse Mind': 'mystery',

  'Pujiverse Finance': 'money',
  'Pujiverse Business': 'money',
  'Pujiverse Crypto': 'money',
  'Pujiverse Real Estate': 'money',
  'Pujiverse Luxury': 'money',
  'Pujiverse Jobs': 'money',

  'Pujiverse Gaming': 'entertainment',
  'PUJIVERSE CINE': 'entertainment',
  'Pujiverse Sports': 'entertainment',
  'Pujiverse Celebrity': 'entertainment',
  'PujiVerse Beatz': 'entertainment',
  'Pujiverse Music': 'entertainment',
  'Pujiverse Shorts': 'entertainment',
  'Pujiverse Talk': 'entertainment',

  'PUJIVERSE HISTORY': 'learning',
  'Pujiverse Languages': 'learning',
  'PUJIVERSE KIDS': 'learning',
  'Pujiverse Devotional': 'learning',
  'Pujiverse Motivation': 'learning',

  'Pujiverse Fitness': 'lifestyle',
  'Pujiverse Recipes': 'lifestyle',
  'Pujiverse LifeStyle': 'lifestyle',
  'Pujiverse Life Hacks': 'lifestyle',

  'Pujiverse Ocean': 'world',
  'Pujiverse Aviation': 'world',
  'Pujiverse Agriculture': 'world',
  'Pujiverse Transport': 'world',
};

const SocialHubSection: React.FC = () => {
  const [ytSubfilter, setYtSubfilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const youtubeCategory = SOCIAL_CATEGORIES[0];
  const otherCategories = SOCIAL_CATEGORIES.slice(1);

  const filteredYtChannels = youtubeCategory?.links.filter((channel) => {
    const matchesFilter = ytSubfilter === 'all' || YOUTUBE_TAG_MAP[channel.name] === ytSubfilter;
    const matchesSearch = !searchTerm || channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <SectionWrapper id="socials">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm mb-4">
          <FaGlobe className="text-cyan-400" />
          <span>Complete Digital Footprint</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          The Pujiverse Hub
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Connect with Pujith Sakhamuri across video networks, writing publications, technical repositories, design showcases, and direct messaging channels.
        </p>
        <div>
          <a
            href={MAIN_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-500/30 px-4 py-2 rounded-xl transition-all"
          >
            Visit Central Master Hub (pujiverse.github.io/Pujiverse-Network)
            <FaExternalLinkAlt className="ml-2 text-xs" />
          </a>
        </div>
      </div>

      {/* 📺 Special Showcase: The Pujiverse Empire (YouTube — 39 Channels) */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6 sm:p-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <div className="p-2 bg-red-600/20 text-red-500 rounded-lg">
                <FaYoutube className="text-2xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Pujiverse Empire (YouTube)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              A 39-channel content network spanning tech, mysteries, finance, cinema, lifestyle, and education.
            </p>
          </div>

          {/* Search box for channels */}
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search 39 channels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50"
            />
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {YOUTUBE_SUBCATEGORIES.map((subcat) => (
            <button
              key={subcat.filter}
              onClick={() => setYtSubfilter(subcat.filter)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                ytSubfilter === subcat.filter
                  ? 'bg-red-600/30 text-red-300 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {subcat.name}
            </button>
          ))}
        </div>

        {/* YouTube Channels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredYtChannels?.map((channel, idx) => (
            <a
              key={idx}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl bg-black/40 hover:bg-red-600/10 border border-white/5 hover:border-red-500/40 transition-all duration-300 flex flex-col items-center text-center hover:scale-[1.03] shadow-md"
            >
              <div className="mb-2 p-2.5 rounded-full bg-red-600/10 text-red-500 group-hover:bg-red-600/20 group-hover:text-red-400 transition-colors">
                <FaYoutube className="text-xl" />
              </div>
              <span className="text-xs font-bold text-gray-200 group-hover:text-white leading-tight line-clamp-2">
                {channel.name}
              </span>
              <span className="text-[10px] text-gray-500 group-hover:text-red-300 mt-1 flex items-center">
                Visit Channel <FaExternalLinkAlt className="ml-1 text-[8px]" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Other Categories (Video, Social, Writing, Build, Support) */}
      <div className="space-y-10">
        {otherCategories.map((category, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-200 mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="text-xs text-gray-400 font-normal">{category.links.length} destinations</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
              {category.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-xl bg-black/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-white/5 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="mb-3 p-3 bg-white/5 rounded-full text-gray-300 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
                    <link.icon className="text-2xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white mb-0.5">
                    {link.name}
                  </span>
                  <span className="text-[10px] text-cyan-400/80 group-hover:text-cyan-300 flex items-center">
                    Open Link <FaExternalLinkAlt className="ml-1 text-[8px]" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SocialHubSection;
