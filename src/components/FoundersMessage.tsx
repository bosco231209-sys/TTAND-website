import React, { useState } from 'react';
import { Play, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import founderImg from '../assets/images/founder_flemming_friisdahl_1790252459342.jpg';

// Custom SVG Icons matching the exact TTAND brand styling in the screenshot
const TechnologyIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
    aria-hidden="true"
  >
    {/* Connecting lines */}
    <line x1="32" y1="32" x2="48" y2="18" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="18" y2="20" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="21" y2="43" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="46" y2="44" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="21" y1="43" x2="12" y2="52" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />

    {/* Center Node */}
    <circle cx="32" cy="32" r="5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Top Right Node */}
    <circle cx="49" cy="17" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Top Left Node */}
    <circle cx="17" cy="19" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Bottom Left Primary Node */}
    <circle cx="21" cy="43" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Bottom Left Extension Node */}
    <circle cx="11" cy="53" r="3.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Bottom Right Node */}
    <circle cx="47" cy="45" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
  </svg>
);

const PeopleIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
    aria-hidden="true"
  >
    {/* Head Outline */}
    <path
      d="M23 29C23 22.5 27 18 32 18C37 18 41 22.5 41 29C41 35.5 37 39 32 39C27 39 23 35.5 23 29Z"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Headset Arch */}
    <path
      d="M19 28C19 19.5 24.5 13 32 13C39.5 13 45 19.5 45 28"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Left Earpad */}
    <rect x="17" y="24" width="5.5" height="11" rx="2.75" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Right Earpad */}
    <rect x="41.5" y="24" width="5.5" height="11" rx="2.75" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Microphone Boom */}
    <path
      d="M19 33C19 40 23 43.5 29 43.5H31"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Microphone Tip */}
    <circle cx="33" cy="43.5" r="2" fill="#E85D04" />
    {/* Shoulders */}
    <path
      d="M15 54C15 47 22.5 46 25.5 46H38.5C41.5 46 49 47 49 54"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const CommunityIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
    aria-hidden="true"
  >
    {/* Top Person */}
    <circle cx="32" cy="17" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    <path
      d="M24.5 28C24.5 24.5 28 24 32 24C36 24 39.5 24.5 39.5 28"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Bottom-Left Person */}
    <circle cx="21" cy="36" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    <path
      d="M13.5 48C13.5 43.5 17.5 43 21 43C24.5 43 28 43.5 28.5 48"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Bottom-Right Person */}
    <circle cx="43" cy="36" r="4.5" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    <path
      d="M35.5 48C36 43.5 39.5 43 43 43C46.5 43 50.5 43.5 50.5 48"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Base Connector Arc */}
    <path
      d="M22 49.5C25 51.5 39 51.5 42 49.5"
      stroke="#E85D04"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const FoundersMessage: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="founders-message" className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      {/* Subtle Background Constellation Pattern in Top Right Corner */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-200">
          <circle cx="80" cy="30" r="4" fill="#C7D2FE" />
          <circle cx="160" cy="50" r="4" fill="#C7D2FE" />
          <circle cx="240" cy="30" r="4" fill="#C7D2FE" />
          <circle cx="120" cy="110" r="4" fill="#C7D2FE" />
          <circle cx="210" cy="120" r="4" fill="#C7D2FE" />
          <circle cx="280" cy="100" r="4" fill="#C7D2FE" />
          <circle cx="270" cy="180" r="4" fill="#C7D2FE" />
          
          <line x1="80" y1="30" x2="160" y2="50" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="160" y1="50" x2="240" y2="30" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="80" y1="30" x2="120" y2="110" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="160" y1="50" x2="120" y2="110" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="160" y1="50" x2="210" y2="120" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="240" y1="30" x2="280" y2="100" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="210" y1="120" x2="280" y2="100" stroke="#E0E7FF" strokeWidth="1" />
          <line x1="280" y1="100" x2="270" y2="180" stroke="#E0E7FF" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Narrative & Video Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative (Left) */}
          <div className="reveal-on-scroll lg:col-span-6 flex flex-col text-left">
            {/* Orange Top Accent Bar */}
            <div className="w-12 h-1 bg-[#E85D04] rounded-full mb-5" />

            {/* Small Orange Subtitle */}
            <span className="text-sm sm:text-base font-bold text-[#E85D04] mb-3 tracking-normal">
              The business partner behind your travel business
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0C1E3A] tracking-tight leading-[1.18]">
              You build the business. <br />
              We power what’s behind it.
            </h2>

            {/* Paragraph Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              You own your brand, your clients and your future. The Travel Agent Next Door provides the technology, marketing, training, supplier relationships, back-office services and personal support that help you run your business more efficiently and grow with confidence.
            </p>
          </div>

          {/* Video Card (Right) */}
          <div className="reveal-on-scroll reveal-delay-200 lg:col-span-6">
            {/* Header above video */}
            <div className="text-left mb-2.5">
              <span className="text-sm sm:text-base font-bold text-[#0C1E3A]">
                A message from our founder
              </span>
            </div>

            <div className="slide-up-hover relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              {!isPlayingVideo ? (
                /* Video Thumbnail state */
                <div className="relative aspect-video">
                  <img
                    src={founderImg}
                    alt="Flemming Friisdahl Founder and CEO of The Travel Agent Next Door in office"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-102"
                  />

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      aria-label="Play Founder Video"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E85D04] hover:bg-[#D04F00] text-white flex items-center justify-center shadow-2xl transition-all duration-200 transform hover:scale-110 cursor-pointer"
                    >
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Rendered Video Player */
                <div className="relative aspect-video bg-black flex flex-col">
                  <iframe
                    src="https://player.vimeo.com/video/76979871?autoplay=1&title=0&byline=0&portrait=0"
                    title="Why The Travel Agent Next Door is invested in your success"
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(false)}
                    className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 hover:bg-black text-white text-xs z-20 cursor-pointer"
                  >
                    Close Video
                  </button>
                </div>
              )}
            </div>

            {/* Video Subtitle & Details */}
            <div className="mt-3 flex items-start justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0C1E3A] leading-snug">
                  Why The Travel Agent Next Door is invested in your success
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Flemming Friisdahl, Founder & CEO
                </p>
              </div>

              {/* Transcript Drawer Toggle */}
              <button
                type="button"
                onClick={() => setShowTranscript(!showTranscript)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#0C1E3A] transition cursor-pointer shrink-0 ml-3 mt-1"
                title="Toggle transcript"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{showTranscript ? 'Hide Transcript' : 'Transcript'}</span>
                {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Collapsible Transcript Content */}
            {showTranscript && (
              <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-2 max-h-56 overflow-y-auto leading-relaxed animate-in fade-in">
                <p className="font-bold text-slate-900">Transcript: Flemming Friisdahl on TTAND's Core Philosophy</p>
                <p>
                  "Welcome. When we started The Travel Agent Next Door ten years ago, host agencies were often viewed as transactional clearinghouses that took a slice of your commission and left you on your own. We wanted to flip that equation entirely.
                </p>
                <p>
                  At TTAND, our fundamental purpose is your success. You build the brand, you nurture the client relationships, and you own that equity 100%. What we provide is everything that normally distracts you: proprietary booking technology in Phenix, automated marketing campaigns, supplier negotiations that deliver up to 100% commission, and over 70 dedicated Canadian team members who answer your phone calls and manage your ticketing and trust accounting.
                </p>
                <p>
                  Whether you are just entering the industry or operating a multi-million-dollar agency team, we are here as your silent, empowering partner."
                </p>
              </div>
            )}
          </div>

        </div>

        {/* 3 Key Proof Columns: Technology, People, Community (Matching screenshot) */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 gap-8 md:gap-0">
          
          {/* Column 1: Technology */}
          <div className="reveal-on-scroll reveal-delay-100 slide-up-hover p-4 rounded-2xl transition-all flex items-start gap-5 pt-6 md:pt-4 md:pr-8 hover:bg-slate-50/80">
            <TechnologyIcon />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0C1E3A] leading-snug">
                Technology that gives you time back
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connected tools and smarter processes reduce manual work, so you can focus on clients and selling travel.
              </p>
            </div>
          </div>

          {/* Column 2: People */}
          <div className="reveal-on-scroll reveal-delay-200 slide-up-hover p-4 rounded-2xl transition-all flex items-start gap-5 pt-8 md:pt-4 md:px-8 hover:bg-slate-50/80">
            <PeopleIcon />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0C1E3A] leading-snug">
                People invested in your success
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access dedicated specialists, ongoing training and responsive support whenever you need guidance.
              </p>
            </div>
          </div>

          {/* Column 3: Community */}
          <div className="reveal-on-scroll reveal-delay-300 slide-up-hover p-4 rounded-2xl transition-all flex items-start gap-5 pt-8 md:pt-4 md:pl-8 hover:bg-slate-50/80">
            <CommunityIcon />
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0C1E3A] leading-snug">
                The strength of a community
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Benefit from collective supplier relationships, shared expertise and an agent-partner community you can count on.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
