import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Custom SVG Icons matching the exact TTAND brand styling in the screenshot
const LaptopChartIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Screen Bezel */}
    <rect x="14" y="15" width="36" height="25" rx="3" stroke="#E85D04" strokeWidth="2.5" />
    
    {/* Screen Inner Chart */}
    <path
      d="M21 33L27 27L34 31L43 21"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="21" cy="33" r="2.2" fill="#E85D04" />
    <circle cx="27" cy="27" r="2.2" fill="#E85D04" />
    <circle cx="34" cy="31" r="2.2" fill="#E85D04" />
    <circle cx="43" cy="21" r="2.2" fill="#E85D04" />

    {/* Laptop Base */}
    <path
      d="M9 42C9 41 10 40 11 40H53C54 40 55 41 55 42L53 47H11L9 42Z"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Trackpad notch */}
    <line x1="28" y1="43.5" x2="36" y2="43.5" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MegaphoneIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Cone Body */}
    <path
      d="M21 27L38 18V44L21 35H17C15.5 35 14.5 34 14.5 32.5V29.5C14.5 28 15.5 27 17 27H21Z"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bell Opening Ellipse */}
    <ellipse cx="38" cy="31" rx="2.5" ry="13" stroke="#E85D04" strokeWidth="2.5" />
    
    {/* Handle */}
    <path
      d="M22 35V45C22 46.5 23 47.5 24.5 47.5H26C27 47.5 28 46.5 28 45V36.5"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Sound Waves */}
    <path d="M46 22C49 24.5 51 27.5 51 31C51 34.5 49 37.5 46 40" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45 15L52 13" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45 47L52 49" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const GraduationCapIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Diamond Mortarboard Top */}
    <polygon
      points="32,16 54,26 32,36 10,26"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Cap Underneath */}
    <path
      d="M17 30V39C17 44 23 47 32 47C41 47 47 44 47 39V30"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Tassel */}
    <path
      d="M48 29V41"
      stroke="#E85D04"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Tassel Tip */}
    <polygon points="46,41 50,41 49,46 47,46" fill="#E85D04" stroke="#E85D04" strokeWidth="1" />
  </svg>
);

const HeadsetIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Headband Arch */}
    <path
      d="M18 31C18 21.5 24 15 32 15C40 15 46 21.5 46 31"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Left Earpad */}
    <rect x="15" y="27" width="5.5" height="13" rx="2.75" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    {/* Right Earpad */}
    <rect x="43.5" y="27" width="5.5" height="13" rx="2.75" stroke="#E85D04" strokeWidth="2.5" fill="white" />
    
    {/* Microphone Boom */}
    <path
      d="M46 37V43C46 47 41.5 49 36 49H31"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Mic Tip */}
    <circle cx="29" cy="49" r="2.2" fill="#E85D04" />
  </svg>
);

const HandshakeIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Left Sleeve */}
    <path d="M12 37L19 28L25 32L17 41L12 37Z" stroke="#E85D04" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* Right Sleeve */}
    <path d="M52 37L45 28L39 32L47 41L52 37Z" stroke="#E85D04" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* Hand Clasp & Fingers */}
    <path
      d="M25 32L32 25L37 30L33 34"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 36L28 42L33 37"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 42L33 47L38 42L35 39"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 47L37 51L42 46L39 43"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37 30L44 37"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const BackOfficeIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-[#E85D04] transition-transform duration-200 group-hover:scale-105"
    aria-hidden="true"
  >
    {/* Document Body with corner fold */}
    <path
      d="M17 49V17C17 15.5 18 14.5 19.5 14.5H35L45 24.5V34"
      stroke="#E85D04"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Corner Fold */}
    <path d="M35 14.5V24.5H45" stroke="#E85D04" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* Document Text Lines */}
    <line x1="22" y1="25" x2="30" y2="25" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="32" x2="34" y2="32" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="39" x2="28" y2="39" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />

    {/* Bottom-left line */}
    <path d="M17 49H31" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />

    {/* Gear at bottom right */}
    <g transform="translate(42, 45)">
      <circle cx="0" cy="0" r="4" stroke="#E85D04" strokeWidth="2.5" fill="white" />
      {/* Gear Teeth Outline */}
      <path
        d="M-2 -8H2L2.5 -5.5L4 -4.5L6.5 -5.5L8.5 -3.5L7.5 -1L8 0.5L10.5 1V3L8 3.5L7.5 5L8.5 7.5L6.5 9.5L4 8.5L2.5 9.5L2 12H-2L-2.5 9.5L-4 8.5L-6.5 9.5L-8.5 7.5L-7.5 5L-8 3.5L-10.5 3V1L-8 0.5L-7.5 -1L-8.5 -3.5L-6.5 -5.5L-4 -4.5L-2.5 -5.5Z"
        stroke="#E85D04"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="white"
      />
      <circle cx="0" cy="0" r="2.5" fill="#E85D04" />
    </g>
  </svg>
);

interface ServicesGridProps {
  onOpenConsultation: () => void;
  onSelectServiceDetail: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onOpenConsultation,
  onSelectServiceDetail
}) => {
  // hoveredId tracks mouse hover, selectedId defaults to 'tech' as shown in the screenshot
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>('tech');

  const SERVICES = [
    {
      id: 'tech',
      title: 'Technology That Gives You Time Back',
      description: 'Work faster with connected tools and fewer manual tasks.',
      icon: <LaptopChartIcon />,
    },
    {
      id: 'marketing',
      title: 'Marketing That Builds Your Brand',
      description: 'Attract clients and stay connected with ready-to-use marketing.',
      icon: <MegaphoneIcon />,
    },
    {
      id: 'training',
      title: 'Training at Every Stage',
      description: 'Build your knowledge and grow with practical, ongoing education.',
      icon: <GraduationCapIcon />,
    },
    {
      id: 'support',
      title: 'Personal, Responsive Support',
      description: 'Get expert help and guidance whenever you need it.',
      icon: <HeadsetIcon />,
    },
    {
      id: 'suppliers',
      title: 'Stronger Supplier Partnerships',
      description: 'Access competitive commissions and more earning opportunities.',
      icon: <HandshakeIcon />,
    },
    {
      id: 'backoffice',
      title: 'Back-Office Services',
      description: 'Let us manage the operational details behind your business.',
      icon: <BackOfficeIcon />,
    },
  ];

  return (
    <section id="services-overview" className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Constellation / Node Network in Top Right Corner matching screenshot */}
      <div className="absolute top-0 right-0 w-[420px] h-[360px] pointer-events-none opacity-45 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 350 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Constellation Dots */}
          <circle cx="120" cy="45" r="3.5" fill="#93C5FD" />
          <circle cx="210" cy="35" r="3.5" fill="#93C5FD" />
          <circle cx="295" cy="55" r="4" fill="#93C5FD" />
          <circle cx="160" cy="115" r="3.5" fill="#93C5FD" />
          <circle cx="250" cy="120" r="4" fill="#93C5FD" />
          <circle cx="325" cy="110" r="3.5" fill="#93C5FD" />
          <circle cx="210" cy="190" r="3.5" fill="#93C5FD" />
          <circle cx="300" cy="180" r="4" fill="#93C5FD" />
          <circle cx="340" cy="235" r="3" fill="#93C5FD" />
          
          {/* Connecting Lines */}
          <line x1="120" y1="45" x2="210" y2="35" stroke="#BFDBFE" strokeWidth="1.2" strokeDasharray="none" />
          <line x1="210" y1="35" x2="295" y2="55" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="120" y1="45" x2="160" y2="115" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="210" y1="35" x2="160" y2="115" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="210" y1="35" x2="250" y2="120" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="295" y1="55" x2="250" y2="120" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="295" y1="55" x2="325" y2="110" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="160" y1="115" x2="250" y2="120" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="250" y1="120" x2="325" y2="110" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="160" y1="115" x2="210" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="250" y1="120" x2="210" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="250" y1="120" x2="300" y2="180" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="325" y1="110" x2="300" y2="180" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="300" y1="180" x2="340" y2="235" stroke="#BFDBFE" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (matching screenshot) */}
        <div className="reveal-on-scroll text-left max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C1E3A] tracking-tight leading-tight">
            More Support. Smarter Tools. Less Administration.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Technology, marketing, training, supplier partnerships and back-office services—<br className="hidden sm:inline" />
            all working together to help you run your business efficiently and spend more time selling travel.
          </p>
        </div>

        {/* 6 Grid Cards (3 columns x 2 rows, matching screenshot with blue border on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            // A card has the blue border when hovered, or if nothing is hovered, the active card retains it (as in the screenshot)
            const isHovered = hoveredId === service.id;
            const isHighlighted = hoveredId ? isHovered : selectedId === service.id;
            
            // Stagger classes based on index
            const delayClasses = [
              'reveal-delay-75',
              'reveal-delay-150',
              'reveal-delay-225',
              'reveal-delay-300',
              'reveal-delay-375',
              'reveal-delay-450'
            ];
            const delayClass = delayClasses[index % delayClasses.length];

            return (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  setSelectedId(service.id);
                  onSelectServiceDetail(service.id);
                }}
                className={`reveal-on-scroll ${delayClass} slide-up-hover rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center justify-start cursor-pointer group ${
                  isHighlighted
                    ? 'border-2 border-blue-500 bg-[#F9FBFF] shadow-sm ring-1 ring-blue-400/30'
                    : 'border-2 border-slate-100 bg-white hover:border-blue-500 hover:bg-[#F9FBFF] hover:shadow-md hover:ring-1 hover:ring-blue-400/30'
                }`}
              >
                {/* Centered Custom Icon */}
                <div className="mb-4 flex items-center justify-center h-18 sm:h-20">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-[#0C1E3A] tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed max-w-[260px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Left-Aligned CTA Button (matching screenshot) */}
        <div className="reveal-on-scroll reveal-delay-200 mt-10 flex justify-start">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="slide-up-hover inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D04F00] text-white text-sm sm:text-base font-bold tracking-tight shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
