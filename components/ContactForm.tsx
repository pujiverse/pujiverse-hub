import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { 
  CONTACT_EMAIL, 
  WHATSAPP_LINK, 
  TELEGRAM_CHANNEL_LINK,
  DISCORD_LINK,
  LINKEDIN_PROFILE_LINK,
  CREATOR_NAME 
} from '../constants';
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaDiscord, FaLinkedinIn } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email subject and body
    const subject = encodeURIComponent(`Contact from Pujiverse: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open the default email client with the data pre-filled
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    
    // Reset the form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 5000); 
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Get in Touch ✉️
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Have an inquiry, project idea, collaboration proposal, or feedback for {CREATOR_NAME}? Send a message or connect directly.
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-6 sm:p-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Smith"
              required
              className="block w-full px-4 py-2.5 bg-black/40 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 text-sm transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@example.com"
              required
              className="block w-full px-4 py-2.5 bg-black/40 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 text-sm transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="block w-full px-4 py-2.5 bg-black/40 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 text-sm transition-all"
            ></textarea>
          </div>
          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-cyan-400/30 shadow-[0_0_20px_rgba(8,145,178,0.5)] text-base font-semibold rounded-full text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className="mt-4 text-green-400 font-medium text-sm">
                Opening your email client with your message drafted...
              </p>
            )}
          </div>
        </form>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
            Direct Reach & Instant Messaging
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center px-4 py-2.5 bg-gray-900/80 text-white rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-700 text-sm font-medium"
            >
              <FaEnvelope className="mr-2 text-cyan-400" /> Email
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-green-950/70 text-green-200 rounded-xl shadow-md hover:bg-green-900/80 transition-all duration-300 hover:scale-105 border border-green-700/60 text-sm font-medium"
            >
              <FaWhatsapp className="mr-2 text-green-400" /> WhatsApp
            </a>
            <a
              href={TELEGRAM_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-cyan-950/70 text-cyan-200 rounded-xl shadow-md hover:bg-cyan-900/80 transition-all duration-300 hover:scale-105 border border-cyan-700/60 text-sm font-medium"
            >
              <FaTelegramPlane className="mr-2 text-cyan-400" /> Telegram
            </a>
            <a
              href={LINKEDIN_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-blue-950/70 text-blue-200 rounded-xl shadow-md hover:bg-blue-900/80 transition-all duration-300 hover:scale-105 border border-blue-700/60 text-sm font-medium"
            >
              <FaLinkedinIn className="mr-2 text-blue-400" /> LinkedIn
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-indigo-950/70 text-indigo-200 rounded-xl shadow-md hover:bg-indigo-900/80 transition-all duration-300 hover:scale-105 border border-indigo-700/60 text-sm font-medium"
            >
              <FaDiscord className="mr-2 text-indigo-400" /> Discord
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
