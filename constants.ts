import { 
  FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, 
  FaTiktok, FaPatreon, FaSnapchatGhost, FaPinterest, FaReddit, 
  FaQuora, FaBlogger, FaTumblr, FaMedium, FaVimeo, FaGithub, 
  FaProductHunt, FaBehance, FaDribbble, FaDiscord, FaWhatsapp, 
  FaTelegramPlane, FaGlobe, FaFilm, FaTwitch, FaSoundcloud, FaImdb
} from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';
import { SiSubstack, SiBluesky, SiRumble, SiDailymotion, SiEtsy, SiSketchfab } from 'react-icons/si';
import { NavLinkItem, SocialLink, YouTubeVideo, Project, SocialCategory, ExperienceItem, EducationItem } from './types';

export const SITE_NAME = 'Pujiverse';
export const CREATOR_NAME = 'Pujith Chowdary Sakhamuri';
export const CREATOR_TITLE = 'Full Stack Data & AI Engineer · Network Data Analyst · Pujiverse Creator';
export const TAGLINE = 'I turn raw data into things people can explore — pipelines, dashboards, AI agents and interactive websites.';

export const SHORT_BIO = `Hello! I'm Pujith Chowdary Sakhamuri — a Full Stack Data & AI Engineer and Network Data Analyst (placed with T-Mobile via Telka LLC). Master of Science in Computer & Information Sciences from Cleveland State University. Creator of Pujiverse — a 39-channel media network and digital playground exploring BigQuery, Cloud Run, Vertex AI, Gemini agents, and interactive web tools.`;

export const PROFILE_IMAGE_URL = 'https://github.com/pujiverse.png'; 
export const RESUME_URL = 'https://raw.githubusercontent.com/pujiverse/pujiverse/main/resume.pdf';
export const PORTFOLIO_URL = 'https://pujith-sakhamuri-portfolio.vercel.app/';
export const MAIN_HUB_URL = 'https://pujiverse.github.io/Pujiverse-Network/';

export const CONTACT_EMAIL = 'techwithpujith@gmail.com';
export const WHATSAPP_LINK = 'https://wa.me/message/HPIAGRGKO23SM1'; 
export const DISCORD_USERNAME = 'pujiverse';
export const DISCORD_LINK = 'https://discord.gg/pujiverse';

export const YOUTUBE_CHANNEL_LINK = 'https://youtube.com/@pujiversetech';
export const INSTAGRAM_LINK = 'https://instagram.com/pujiverseofficial';
export const FACEBOOK_PAGE_LINK = 'https://www.facebook.com/PUJIVERSEOFFICIAL/';
export const TELEGRAM_CHANNEL_LINK = 'https://t.me/pujiverse';
export const X_PROFILE_LINK = 'https://x.com/pujiverse';
export const LINKEDIN_PROFILE_LINK = 'https://linkedin.com/in/pujith-sakhamuri-06b69a137';
export const PUJIVERSE_LINKEDIN_LINK = 'https://www.linkedin.com/in/pujiverse-pujith-700819392/';

export const TELEGRAM_CHANNEL_DESCRIPTION = `
Join the Pujiverse Telegram channel for exclusive updates, behind-the-scenes content, and direct notifications about new projects and videos. 
It's the fastest way to stay connected with everything happening in the Pujiverse!
`;

export const LINKEDIN_SUMMARY = `
Full Stack Data & AI Engineer and Network Data Analyst with extensive experience building production data pipelines, cloud analytics infrastructure, and AI-powered applications. Passionate about BigQuery, Cloud Run, Vertex AI, and generative agents. Creator of the Pujiverse multi-channel digital brand.
`;

export const CAREER_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Network Data Analyst',
    organization: 'Telka LLC (placed with T-Mobile, Central Region)',
    period: 'Current',
    description: 'Analyzing cellular and network performance datasets, designing automated reporting pipelines, and building interactive telemetry dashboards.'
  },
  {
    role: 'Full Stack Data & AI Engineer',
    organization: 'CVS Pharmacy (SR Systems)',
    period: 'Previous',
    description: 'Engineered data systems, developed enterprise data pipelines, and implemented AI-driven process automations.'
  },
  {
    role: 'Data Engineer',
    organization: 'Cleveland Clinic (IvyNova)',
    period: 'Previous',
    description: 'Architected scalable healthcare analytics pipelines, clinical data warehousing, and business intelligence models.'
  },
  {
    role: 'Graduate Assistant, Data Analytics & Reporting',
    organization: 'Cleveland State University',
    period: 'Previous',
    description: 'Analyzed institutional academic datasets, developed predictive student success reports, and automated KPI tracking.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.S. in Computer & Information Sciences',
    institution: 'Cleveland State University'
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)'
  },
  {
    degree: 'Ongoing Graduate Coursework in AI/ML & Data Analytics',
    institution: 'Indiana Wesleyan University'
  }
];

export const CURRENTLY_LEARNING = [
  'Google Agent Development Kit (ADK)',
  'BigQuery & Cloud Run for production AI agents',
  'Multi-agent orchestration with Gemini API'
];

export const TECH_STACK: string[] = [
  'Python', 'SQL', 'R', 'BigQuery', 'Google Cloud', 'Cloud Run',
  'Dataflow', 'Pub/Sub', 'Cloud Composer', 'Vertex AI', 'Terraform',
  'Docker', 'GitHub Actions', 'Google ADK', 'Gemini API', 'TypeScript',
  'JavaScript', 'HTML/CSS', 'Firebase', 'Google Sheets API', 'Vercel', 'GitHub Pages'
];

// Primary Socials for Footer/Hero
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: 'https://youtube.com/@pujiversetech', icon: FaYoutube },
  { name: 'Instagram', url: 'https://instagram.com/pujiverseofficial', icon: FaInstagram },
  { name: 'X', url: 'https://x.com/pujiverse', icon: FaXTwitter },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/pujith-sakhamuri-06b69a137', icon: FaLinkedinIn },
  { name: 'GitHub', url: 'https://github.com/pujiverse', icon: FaGithub },
  { name: 'Discord', url: 'https://discord.gg/pujiverse', icon: FaDiscord },
];

export const HEADER_NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Social Hub', path: '/socials' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  // ⭐ Featured projects — Pujiverse data platforms
  {
    title: "The AI Timeline",
    description: "Interactive history of AI from 1843 to today: era timeline, release tracker, model library with side-by-side comparison, and a built-in AI guide.",
    githubUrl: "https://github.com/pujiverse/The-AI-Timeline",
    liveUrl: "https://pujiverse.github.io/The-AI-Timeline/",
    category: "Featured Data Platforms",
    status: "Live",
    tags: ["BigQuery", "AI History", "Data Platform"]
  },
  {
    title: "Vehicle Universe",
    description: "Explorer for every kind of vehicle, from bicycles to rockets — 57 types, 3,400+ brands, 59,000+ models with brand histories and specs.",
    githubUrl: "https://github.com/pujiverse/Vehicle-Universe",
    liveUrl: "https://pujiverse.github.io/Vehicle-Universe/",
    category: "Featured Data Platforms",
    status: "Live",
    tags: ["Data Visualization", "Vehicles", "Catalog"]
  },
  {
    title: "Pujiverse World Atlas",
    description: "3D globe population explorer with drill-down from world to city, 2015–2025 trends, density, and 1,400+ water bodies.",
    githubUrl: "https://github.com/pujiverse/pujiverse-world-atlas",
    liveUrl: "https://pujiverse.github.io/pujiverse-world-atlas/",
    category: "Featured Data Platforms",
    status: "Live",
    tags: ["3D Globe", "Geography", "Population Data"]
  },
  {
    title: "Pujiverse Film Database",
    description: "IMDb-style database of movies, short films, anime and TV across world film industries, organized by year.",
    githubUrl: "https://github.com/pujiverse/Pujiverse-Film-Database",
    category: "Featured Data Platforms",
    status: "In Progress",
    tags: ["Cinema", "Database", "Entertainment"]
  },

  // 🛠️ Web apps & tools
  {
    title: "BizManager Lite",
    description: "Dependency-free business, chit, loan and household-expense manager in plain HTML/CSS/JS — no build step.",
    githubUrl: "https://github.com/pujiverse/ledger",
    liveUrl: "https://pujiverse.github.io/ledger/",
    category: "Web Apps & Tools",
    status: "Live",
    tags: ["Vanilla JS", "Finance", "Offline First"]
  },
  {
    title: "Household Expense Manager (Firebase)",
    description: "Multi-page app with Firebase Authentication covering business, chits and household expenses.",
    githubUrl: "https://github.com/pujiverse/HouseholdExpenseManager",
    liveUrl: "https://pujiverse.github.io/HouseholdExpenseManager/",
    category: "Web Apps & Tools",
    status: "Live",
    tags: ["Firebase", "Auth", "Expense Tracking"]
  },
  {
    title: "Expense Manager (Google Sheets)",
    description: "Expense, business, chit and loan tracker backed by Google Sheets.",
    githubUrl: "https://github.com/pujiverse/Expense-Manager",
    liveUrl: "https://pujiverse.github.io/Expense-Manager/",
    category: "Web Apps & Tools",
    status: "Live",
    tags: ["Google Sheets API", "Finance", "Sync"]
  },
  {
    title: "Auto-Updating Portfolio",
    description: "Portfolio that pulls its content live from a Google Sheet.",
    githubUrl: "https://github.com/pujiverse/pujith-portfolio",
    liveUrl: "https://pujiverse.github.io/pujith-portfolio/",
    category: "Web Apps & Tools",
    status: "Live",
    tags: ["Google Sheets", "Portfolio", "Dynamic Data"]
  },
  {
    title: "Pujiverse Network — Master Data",
    description: "Master data for the channels in the Pujiverse Network.",
    githubUrl: "https://github.com/pujiverse/PujiverseNetwork",
    liveUrl: "https://pujiverse.github.io/PujiverseNetwork/",
    category: "Web Apps & Tools",
    status: "Live",
    tags: ["Pujiverse", "YouTube Network", "Master Data"]
  },
  {
    title: "FlyPal",
    description: "Concept: real-time social matching for airport layovers.",
    githubUrl: "https://github.com/pujiverse/FlyPal",
    category: "Web Apps & Tools",
    status: "Concept",
    tags: ["Social", "Travel", "Real-time"]
  },

  // 🤖 Google AI Studio apps (Gemini API) — Content creation & voice
  {
    title: "Pujiverse Voice Studio",
    description: "Text-to-speech voice-overs with selectable age, gender and emotion.",
    githubUrl: "https://github.com/pujiverse/Pujiverse-Voice-Studio",
    liveUrl: "https://pujiverse-voice-studio.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Gemini API", "Speech Synthesis", "Voice Studio"]
  },
  {
    title: "YouTube Video Creator",
    description: "Scripts, voice-overs and background music for YouTube videos.",
    githubUrl: "https://github.com/pujiverse/PujiVerse-Video-Content-Creator",
    liveUrl: "https://puji-verse-video-content-creator.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["AI Scripts", "Voice-overs", "YouTube"]
  },
  {
    title: "Pujiverse Creation Spark",
    description: "Turns an idea into songs, stories or narrations in multiple languages.",
    githubUrl: "https://github.com/pujiverse/Creative-Spark",
    liveUrl: "https://pujiverse-creative-spark.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Creative AI", "Multilingual", "Storytelling"]
  },
  {
    title: "Recipe Voice-over Generator",
    description: "Multilingual cooking voice-overs from recipe steps and nutritional facts.",
    githubUrl: "https://github.com/pujiverse/Recipe-Voice-over-Generator",
    liveUrl: "https://pujiverse-recipe-voice-over-generat.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Recipes", "Audio AI", "Cooking"]
  },
  {
    title: "Pujiverse Cinema Storyteller",
    description: "Movie scripts and voice-overs in Telugu–English with Gemini API.",
    githubUrl: "https://github.com/pujiverse/pujiverse-cinema",
    liveUrl: "https://pujiverse-cinema.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Telugu-English", "Cinema", "Gemini API"]
  },
  {
    title: "Movie Storyteller & Live AI",
    description: "Stories from subtitles, transcript analysis and live voice chat using Gemini AI.",
    githubUrl: "https://github.com/pujiverse/movie-subtitle-to-story",
    liveUrl: "https://pujiverse-subtitle-to-story.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Subtitles", "Live Chat", "Gemini AI"]
  },
  {
    title: "Text to Audio",
    description: "Simple text-to-audio generator using AI speech synthesis.",
    githubUrl: "https://github.com/pujiverse/voice",
    liveUrl: "https://voice-three-blush.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["TTS", "Audio Generation", "AI"]
  },

  // 🤖 Google AI Studio apps (Gemini API) — Video
  {
    title: "VidPrompt Studio",
    description: "Prompt-driven video trimming, narration and in-browser editing.",
    githubUrl: "https://github.com/pujiverse/VidPrompt-Studio_new",
    liveUrl: "https://pujiverse-vid-prompt-studio-new.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Video Editor", "Prompt Driven", "Trimming"]
  },
  {
    title: "SmartSceneCutter",
    description: "Cuts and merges clips from prompts and timestamps, generates FFmpeg commands.",
    githubUrl: "https://github.com/pujiverse/SmartSceneCutter",
    liveUrl: "https://smart-scene-cutter.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["FFmpeg", "Scene Detection", "Video Cutting"]
  },
  {
    title: "Text-to-Video Generator",
    description: "Prompt-to-video with aspect-ratio and resolution control using Gemini API.",
    githubUrl: "https://github.com/pujiverse/text-to-video",
    liveUrl: "https://pujiverse-text-to-video.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Text to Video", "Gemini API", "Generative AI"]
  },

  // 🤖 Google AI Studio apps (Gemini API) — Presentations & career
  {
    title: "Presentation Generator",
    description: "Animated PPTX slides with voice-over from a single topic using AI.",
    githubUrl: "https://github.com/pujiverse/AI-Animated-Presentation-Generator",
    liveUrl: "https://ai-animated-presentation-generator.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["PPTX", "Animated Slides", "Voice-overs"]
  },
  {
    title: "PPT Voiceover Generator",
    description: "Per-slide voice-overs with playback and download.",
    githubUrl: "https://github.com/pujiverse/PPT-Voiceover-Generator",
    liveUrl: "https://pujiverse-ppt-voiceover-generator.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["PPT", "Slide Narration", "Audio"]
  },
  {
    title: "Pujiverse Resume Builder",
    description: "Tailors a resume to a job description with PDF download and matching features.",
    githubUrl: "https://github.com/pujiverse/resume-builder",
    liveUrl: "https://resume-builder-azure-omega.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Resume", "Job Match", "PDF Export"]
  },

  // 🤖 Google AI Studio apps (Gemini API) — Business & personal
  {
    title: "Sai Indian Cuisine — Digital Concierge",
    description: "Mobile-first restaurant landing page with an AI concierge.",
    githubUrl: "https://github.com/pujiverse/SAI-INDIAN",
    liveUrl: "https://sai-indian.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Restaurant", "Digital Concierge", "WhatsApp"]
  },
  {
    title: "Business Manager Pro",
    description: "Business, chit, expense and loan tracking with summary reports.",
    githubUrl: "https://github.com/pujiverse/biz-manager",
    liveUrl: "https://biz-manager-eight.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Business Manager", "Chits", "Reporting"]
  },
  {
    title: "Pujiverse Hub (earlier version)",
    description: "First version of personal creator hub.",
    githubUrl: "https://github.com/pujiverse/pujiverse-hub",
    liveUrl: "https://pujiverse.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Creator Hub", "Landing", "Pujiverse"]
  },
  {
    title: "Live-Sync Portfolio",
    description: "Google-Sheet-synced portfolio with a Gemini assistant.",
    githubUrl: "https://github.com/pujiverse/New-Portfolio",
    liveUrl: "https://pujithsakhamuri.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Portfolio", "Google Sheets Sync", "Assistant"]
  },
  {
    title: "Professional Portfolio",
    description: "Comprehensive career portfolio showcasing IT experience and repositories.",
    githubUrl: "https://github.com/pujiverse/my-protfolio",
    liveUrl: "https://pujith-sakhamuri-portfolio.vercel.app/",
    category: "Gemini AI Studio Apps",
    status: "Live",
    tags: ["Career Portfolio", "IT", "Vercel"]
  },

  // 🎓 Academic
  {
    title: "AIML-500 Professional Portfolio",
    description: "Academic portfolio showcasing graduate coursework, research, and applied AI/ML knowledge.",
    githubUrl: "https://github.com/pujiverse/pujith_portfolio",
    liveUrl: "https://pujiverse.github.io/pujith_portfolio/",
    category: "Academic",
    status: "Live",
    tags: ["AI/ML Coursework", "Graduate Studies", "Research"]
  }
];

export const SOCIAL_CATEGORIES: SocialCategory[] = [
  {
    title: "The Pujiverse Empire (YouTube — 39 Channels)",
    links: [
      // Tech & Science
      { name: 'Pujiverse AI', url: 'https://www.youtube.com/@pujiverseai', icon: FaYoutube },
      { name: 'PUJIVERSE TECH', url: 'https://www.youtube.com/@pujiversetech', icon: FaYoutube },
      { name: 'Pujiverse Future', url: 'https://www.youtube.com/@pujiversefuture', icon: FaYoutube },
      { name: 'Pujiverse Space', url: 'https://www.youtube.com/@pujiversespace', icon: FaYoutube },
      { name: 'Pujiverse Gadgets', url: 'https://www.youtube.com/@pujiversegadgets', icon: FaYoutube },
      { name: 'Pujiverse Science', url: 'https://www.youtube.com/@pujiversescience', icon: FaYoutube },

      // Mystery & Mind
      { name: 'Pujiverse Mystery', url: 'https://www.youtube.com/@pujiversemystery', icon: FaYoutube },
      { name: 'Pujiverse True Crime', url: 'https://www.youtube.com/@pujiversetruecrime', icon: FaYoutube },
      { name: 'Pujiverse Psychology', url: 'https://www.youtube.com/@pujiversepsychology', icon: FaYoutube },
      { name: 'Pujiverse Conspiracy', url: 'https://www.youtube.com/@pujiverseconspiracy', icon: FaYoutube },
      { name: 'Pujiverse Paranormal', url: 'https://www.youtube.com/@pujiverseparanormal', icon: FaYoutube },
      { name: 'Pujiverse Mind', url: 'https://www.youtube.com/@pujiversemind', icon: FaYoutube },

      // Money & Career
      { name: 'Pujiverse Finance', url: 'https://www.youtube.com/@pujiversefinance', icon: FaYoutube },
      { name: 'Pujiverse Business', url: 'https://www.youtube.com/@pujiversebusiness', icon: FaYoutube },
      { name: 'Pujiverse Crypto', url: 'https://www.youtube.com/@pujiversecrypto', icon: FaYoutube },
      { name: 'Pujiverse Real Estate', url: 'https://www.youtube.com/@pujiverserealestate', icon: FaYoutube },
      { name: 'Pujiverse Luxury', url: 'https://www.youtube.com/@pujiverseluxury', icon: FaYoutube },
      { name: 'Pujiverse Jobs', url: 'https://www.youtube.com/@pujiversejobs', icon: FaYoutube },

      // Entertainment
      { name: 'Pujiverse Gaming', url: 'https://www.youtube.com/@pujiversegaming', icon: FaYoutube },
      { name: 'PUJIVERSE CINE', url: 'https://www.youtube.com/@pujiversemovies', icon: FaYoutube },
      { name: 'Pujiverse Sports', url: 'https://www.youtube.com/@pujiversesports', icon: FaYoutube },
      { name: 'Pujiverse Celebrity', url: 'https://www.youtube.com/@pujiversecelebrity', icon: FaYoutube },
      { name: 'PujiVerse Beatz', url: 'https://www.youtube.com/@pujiversebeatz', icon: FaYoutube },
      { name: 'Pujiverse Music', url: 'https://www.youtube.com/@pujiversemusic', icon: FaYoutube },
      { name: 'Pujiverse Shorts', url: 'https://www.youtube.com/@pujiverseshorts', icon: FaYoutube },
      { name: 'Pujiverse Talk', url: 'https://www.youtube.com/@pujiversetalk', icon: FaYoutube },

      // Learning & Culture
      { name: 'PUJIVERSE HISTORY', url: 'https://www.youtube.com/@pujiversehistory', icon: FaYoutube },
      { name: 'Pujiverse Languages', url: 'https://www.youtube.com/@pujiverselanguages', icon: FaYoutube },
      { name: 'PUJIVERSE KIDS', url: 'https://www.youtube.com/@pujiversekids', icon: FaYoutube },
      { name: 'Pujiverse Devotional', url: 'https://www.youtube.com/@pujiversedevotional', icon: FaYoutube },
      { name: 'Pujiverse Motivation', url: 'https://www.youtube.com/@pujiversemotivation', icon: FaYoutube },

      // Lifestyle
      { name: 'Pujiverse Fitness', url: 'https://www.youtube.com/@pujiversefitness', icon: FaYoutube },
      { name: 'Pujiverse Recipes', url: 'https://www.youtube.com/@pujiverserecipes', icon: FaYoutube },
      { name: 'Pujiverse LifeStyle', url: 'https://www.youtube.com/@pujiverselifestyle', icon: FaYoutube },
      { name: 'Pujiverse Life Hacks', url: 'https://www.youtube.com/@pujiverselifehacks', icon: FaYoutube },

      // World & Transport
      { name: 'Pujiverse Ocean', url: 'https://www.youtube.com/@pujiverseocean', icon: FaYoutube },
      { name: 'Pujiverse Aviation', url: 'https://www.youtube.com/@pujiverseaviation', icon: FaYoutube },
      { name: 'Pujiverse Agriculture', url: 'https://www.youtube.com/@pujiverseagriculture', icon: FaYoutube },
      { name: 'Pujiverse Transport', url: 'https://www.youtube.com/@pujiversetransport', icon: FaYoutube },
    ]
  },
  {
    title: "Video & Streaming Platforms",
    links: [
      { name: 'TikTok', url: 'https://www.tiktok.com/@pujiverse', icon: FaTiktok },
      { name: 'Rumble', url: 'https://rumble.com/user/pujiverse', icon: SiRumble },
      { name: 'Vimeo', url: 'https://vimeo.com/pujiverse', icon: FaVimeo },
      { name: 'Dailymotion', url: 'https://www.dailymotion.com/PUJIVERSE', icon: SiDailymotion },
      { name: 'Snapchat Spotlight', url: 'https://snapchat.com/t/bprrYRF8', icon: FaSnapchatGhost },
      { name: 'Twitch', url: 'https://www.twitch.tv/pujiverse_ai', icon: FaTwitch },
      { name: 'SoundCloud', url: 'https://soundcloud.com/pujiverse', icon: FaSoundcloud },
      { name: 'IMDb', url: 'https://www.imdb.com/user/p.aclcmdbqqkrtmxcppzezlcxolq/', icon: FaImdb },
      { name: 'Likee', url: 'https://l.likee.video/p/h1YdV', icon: FaFilm }, 
      { name: 'Kwai', url: 'https://k.kwai.com/u/@Pujiverse/2sGeerCN', icon: FaFilm }, 
      { name: 'Moj', url: 'https://mojapp.in/@pujiverse', icon: FaFilm }, 
      { name: 'Trendo', url: 'https://s.trendo.vip/Jjoq', icon: FaFilm }, 
    ]
  },
  {
    title: "Social Networks",
    links: [
      { name: 'Instagram', url: 'https://www.instagram.com/pujiverseofficial/', icon: FaInstagram },
      { name: 'Facebook', url: 'https://www.facebook.com/PUJIVERSEOFFICIAL/', icon: FaFacebookF },
      { name: 'Threads', url: 'https://www.threads.net/@pujiverseofficial', icon: FaThreads },
      { name: 'X (Twitter)', url: 'https://x.com/pujiverse', icon: FaXTwitter },
      { name: 'Bluesky', url: 'https://bsky.app/profile/pujiverse.bsky.social', icon: SiBluesky },
      { name: 'Pinterest', url: 'https://in.pinterest.com/pujiverse/', icon: FaPinterest },
      { name: 'Reddit', url: 'https://www.reddit.com/user/pujiverse/', icon: FaReddit },
      { name: 'LinkedIn (Pujiverse)', url: 'https://www.linkedin.com/in/pujiverse-pujith-700819392/', icon: FaLinkedinIn },
      { name: 'LinkedIn (Personal)', url: 'https://linkedin.com/in/pujith-sakhamuri-06b69a137', icon: FaLinkedinIn },
      { name: 'Telegram Channel', url: 'https://t.me/pujiverse', icon: FaTelegramPlane },
    ]
  },
  {
    title: "Writing & Blogs",
    links: [
      { name: 'Medium', url: 'https://medium.com/@pujiverse', icon: FaMedium },
      { name: 'Substack', url: 'https://substack.com/@pujiverse', icon: SiSubstack },
      { name: 'Blogger', url: 'https://pujiverse.blogspot.com/', icon: FaBlogger },
      { name: 'Tumblr', url: 'https://www.tumblr.com/pujiverse', icon: FaTumblr },
      { name: 'Quora', url: 'https://www.quora.com/profile/Pujiverse', icon: FaQuora },
    ]
  },
  {
    title: "Build & Design",
    links: [
      { name: 'GitHub', url: 'https://github.com/pujiverse', icon: FaGithub },
      { name: 'Product Hunt', url: 'https://www.producthunt.com/@pujiverse', icon: FaProductHunt },
      { name: 'Behance', url: 'https://www.behance.net/pujiverse', icon: FaBehance },
      { name: 'Dribbble', url: 'https://dribbble.com/pujiverse', icon: FaDribbble },
      { name: 'Sketchfab', url: 'https://sketchfab.com/Pujiverse', icon: SiSketchfab },
    ]
  },
  {
    title: "Support & Direct Chat",
    links: [
      { name: 'Patreon', url: 'https://www.patreon.com/cw/pujithchowdarysakhamuri', icon: FaPatreon },
      { name: 'WhatsApp', url: 'https://wa.me/message/HPIAGRGKO23SM1', icon: FaWhatsapp },
      { name: 'Etsy Store', url: 'https://www.etsy.com/people/jqo8bz5apmta83y3', icon: SiEtsy },
      { name: 'Discord', url: 'https://discord.gg/pujiverse', icon: FaDiscord },
    ]
  }
];

export const YOUTUBE_FEATURED_VIDEOS: YouTubeVideo[] = [
  { id: 'dQw4w9WgXcQ', title: 'Welcome to Pujiverse' },
  { id: 'anotherVideoID', title: 'Latest Tech Review' },
  { id: 'yetAnotherID', title: 'Vlog: A Day in the Life' },
];
