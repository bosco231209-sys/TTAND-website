import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import advisorAsianFemaleImg from '../assets/images/advisor_asian_female_1790254413148.jpg';
import advisorBlackMaleImg from '../assets/images/advisor_black_male_1790254429687.jpg';
import advisorBrunetteFemaleImg from '../assets/images/advisor_brunette_female_1790254448845.jpg';
import teamAdvisorImg from '../assets/images/advisor_community_team_1790252499186.jpg';
import { AnimatedCounter } from './AnimatedCounter';

// Bespoke Orange Double Quotation Mark (matching the screenshot exactly)
const OrangeQuoteMark: React.FC = () => (
  <svg
    viewBox="0 0 44 32"
    fill="currentColor"
    className="w-10 h-7 sm:w-12 sm:h-9 text-[#E85D04] mb-3"
    aria-hidden="true"
  >
    <path d="M0 19.2C0 8.6 6.6 2.4 15.8 0L18.4 4.8C12.4 6.8 9.4 10.4 8.8 14.8H17.6V32H0V19.2ZM24 19.2C24 8.6 30.6 2.4 39.8 0L42.4 4.8C36.4 6.8 33.4 10.4 32.8 14.8H41.6V32H24V19.2Z" />
  </svg>
);

interface TestimonialsProps {
  onOpenConsultation: () => void;
  onOpenStoriesModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onOpenConsultation,
  onOpenStoriesModal
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverTimerRef = useRef<number | null>(null);

  const TESTIMONIALS_DATA = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Independent Travel Advisor | British Columbia',
      image: advisorAsianFemaleImg,
      alt: 'Sarah Chen, Independent Travel Advisor with The Travel Agent Next Door',
      quote: 'Joining TTAND gave me the tools and backing to scale my business beyond what I thought was possible. Their support team answers instantly, and Phenix saves me hours every day.',
      storySummary: 'Scale luxury cruise & FIT itineraries with back-office automation',
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Independent Travel Advisor | Ontario',
      image: advisorBlackMaleImg,
      alt: 'Marcus Vance, Travel Business Owner with The Travel Agent Next Door',
      quote: 'The community and peer mentorship at TTAND is unmatched in Canada. Moving my 12-year travel agency here was the single best business decision I have made.',
      storySummary: 'Migrating an established book of business with 100% commission retention',
    },
    {
      id: 3,
      name: 'Elena Dubois',
      role: 'Independent Travel Advisor | Quebec',
      image: advisorBrunetteFemaleImg,
      alt: 'Elena Dubois, Luxury Travel Specialist with The Travel Agent Next Door',
      quote: 'As a career changer with zero prior industry background, the STEP training program and continuous coaching gave me complete confidence to book complex European itineraries from day one.',
      storySummary: 'From zero travel background to Rookie of the Year in 14 months',
    },
    {
      id: 4,
      name: 'David & Karen Miller',
      role: 'Agency Owners | Alberta',
      image: teamAdvisorImg,
      alt: 'David and Karen Miller, Agency Co-Owners with The Travel Agent Next Door',
      quote: 'We spent years dealing with administrative friction at other host agencies. TTAND handles trust accounting, merchant chargebacks, and supplier contracts so we can focus 100% on high-touch client service.',
      storySummary: 'Why our 6-person agency relocated to TTAND for back-office autonomy',
    },
  ];

  const total = TESTIMONIALS_DATA.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Hover continuous sliding functionality as requested:
  // "give a slider affect to keep showing the other testimonials based on hover on the side arrows"
  const handleArrowMouseEnter = (direction: 'prev' | 'next') => {
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
    }
    // Keep sliding continuously while hovering (no immediate slide on hover enter to prevent double-firing with click)
    hoverTimerRef.current = window.setInterval(() => {
      if (direction === 'next') {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 1800);
  };

  const handleArrowMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearInterval(hoverTimerRef.current);
      }
    };
  }, []);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <section id="testimonials" className="py-20 lg:py-26 bg-white border-b border-slate-200 overflow-hidden relative">
      
      {/* Bottom Left Constellation Network (matching screenshot) */}
      <div className="absolute bottom-0 left-0 w-80 h-72 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="40" cy="180" r="3.5" fill="#93C5FD" />
          <circle cx="110" cy="140" r="3.5" fill="#93C5FD" />
          <circle cx="80" cy="220" r="4" fill="#93C5FD" />
          <circle cx="170" cy="170" r="3.5" fill="#93C5FD" />
          <circle cx="210" cy="230" r="3.5" fill="#93C5FD" />
          <circle cx="260" cy="190" r="4" fill="#93C5FD" />
          
          <line x1="40" y1="180" x2="110" y2="140" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="40" y1="180" x2="80" y2="220" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="110" y1="140" x2="170" y2="170" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="80" y1="220" x2="170" y2="170" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="170" y1="170" x2="210" y2="230" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="170" y1="170" x2="260" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="210" y1="230" x2="260" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Bottom Right Constellation Network (matching screenshot) */}
      <div className="absolute bottom-0 right-0 w-80 h-72 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="260" cy="180" r="3.5" fill="#93C5FD" />
          <circle cx="190" cy="140" r="3.5" fill="#93C5FD" />
          <circle cx="220" cy="220" r="4" fill="#93C5FD" />
          <circle cx="130" cy="170" r="3.5" fill="#93C5FD" />
          <circle cx="90" cy="230" r="3.5" fill="#93C5FD" />
          <circle cx="40" cy="190" r="4" fill="#93C5FD" />
          
          <line x1="260" y1="180" x2="190" y2="140" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="260" y1="180" x2="220" y2="220" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="190" y1="140" x2="130" y2="170" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="220" y1="220" x2="130" y2="170" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="130" y1="170" x2="90" y2="230" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="130" y1="170" x2="40" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (matching screenshot) */}
        <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E85D04] block mb-2">
            PROVEN BY OUR AGENT PARTNERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C1E3A] tracking-tight leading-tight">
            Trusted by Travel Business Owners Across Canada
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Built around agent partners—and proven by their success.
          </p>
        </div>

        {/* Small "AGENT PARTNER STORY" Divider with thin horizontal lines */}
        <div className="reveal-on-scroll reveal-delay-75 flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 sm:w-16 bg-slate-200"></span>
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 tracking-wider uppercase">
            AGENT PARTNER STORY
          </span>
          <span className="h-px w-12 sm:w-16 bg-slate-200"></span>
        </div>

        {/* Carousel / Slider Container with Peeking Adjacent Cards */}
        <div className="reveal-on-scroll reveal-delay-150 relative max-w-6xl mx-auto flex items-center justify-center">
          
          {/* Peeking Left Card (Previous) */}
          <div 
            onClick={prevSlide}
            onMouseEnter={() => handleArrowMouseEnter('prev')}
            onMouseLeave={handleArrowMouseLeave}
            aria-label="Previous Testimonial"
            className="hidden lg:block w-36 sm:w-52 h-[340px] shrink-0 rounded-2xl overflow-hidden shadow-md opacity-60 hover:opacity-85 transition-all duration-300 transform -translate-x-6 scale-90 cursor-pointer select-none"
          >
            <img 
              src={TESTIMONIALS_DATA[prevIndex].image} 
              alt={TESTIMONIALS_DATA[prevIndex].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Primary Center Testimonial Showcase Card (matching screenshot with smooth sliding track) */}
          <div className="slide-up-hover w-full max-w-3xl lg:max-w-3xl bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden relative z-10 transition-all duration-300">
            <div 
              className="w-full flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS_DATA.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-12 min-h-[360px]"
                >
                  {/* Left Photo Column */}
                  <div className="sm:col-span-5 relative bg-slate-100 min-h-[260px] sm:min-h-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>

                  {/* Right Quote & Details Column */}
                  <div className="sm:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">
                    <div>
                      {/* Big Orange Quote Icon */}
                      <OrangeQuoteMark />

                      {/* Main Testimonial Quote */}
                      <p className="text-sm sm:text-base lg:text-[17px] font-semibold text-[#0C1E3A] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author Information */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <h4 className="text-base sm:text-lg font-bold text-[#0C1E3A]">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {testimonial.role}
                      </p>

                      <button
                        type="button"
                        onClick={onOpenStoriesModal}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 mt-3 transition cursor-pointer"
                      >
                        <span>Read Their Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peeking Right Card (Next) */}
          <div 
            onClick={nextSlide}
            onMouseEnter={() => handleArrowMouseEnter('next')}
            onMouseLeave={handleArrowMouseLeave}
            aria-label="Next Testimonial"
            className="hidden lg:block w-36 sm:w-52 h-[340px] shrink-0 rounded-2xl overflow-hidden shadow-md opacity-60 hover:opacity-85 transition-all duration-300 transform translate-x-6 scale-90 cursor-pointer select-none"
          >
            <img 
              src={TESTIMONIALS_DATA[nextIndex].image} 
              alt={TESTIMONIALS_DATA[nextIndex].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Floating Left Arrow (with continuous hover sliding) */}
          <button
            type="button"
            onClick={prevSlide}
            onMouseEnter={() => handleArrowMouseEnter('prev')}
            onMouseLeave={handleArrowMouseLeave}
            aria-label="Previous testimonial (hover to auto-slide)"
            className="absolute left-2 sm:left-4 lg:left-36 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200/90 text-slate-700 hover:text-[#E85D04] hover:bg-slate-50 flex items-center justify-center transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Arrow (with continuous hover sliding) */}
          <button
            type="button"
            onClick={nextSlide}
            onMouseEnter={() => handleArrowMouseEnter('next')}
            onMouseLeave={handleArrowMouseLeave}
            aria-label="Next testimonial (hover to auto-slide)"
            className="absolute right-2 sm:right-4 lg:right-36 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200/90 text-slate-700 hover:text-[#E85D04] hover:bg-slate-50 flex items-center justify-center transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Pagination Indicator Dots (matching screenshot) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-2.5 h-2.5 bg-[#E85D04]' 
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Key Social Proof Metrics Strip (4 columns separated by vertical lines, matching screenshot) */}
        <div className="reveal-on-scroll reveal-delay-200 mt-14 max-w-5xl mx-auto pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
            
            {/* Metric 1: 1,600+ Agent Partners */}
            <div className="slide-up-hover-sm py-4 sm:py-2 px-4 rounded-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0C1E3A] tracking-tight">
                <AnimatedCounter target={1600} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Agent Partners
              </div>
            </div>

            {/* Metric 2: 10+ Years of Trusted Growth */}
            <div className="slide-up-hover-sm py-4 sm:py-2 px-4 rounded-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0C1E3A] tracking-tight flex items-baseline justify-center gap-1">
                <AnimatedCounter target={10} suffix="+" />
                <span className="text-2xl sm:text-3xl font-bold">Years</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                of Trusted Growth
              </div>
            </div>

            {/* Metric 3: 70+ Support-Team Specialists */}
            <div className="slide-up-hover-sm py-4 sm:py-2 px-4 rounded-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0C1E3A] tracking-tight">
                <AnimatedCounter target={70} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Support-Team Specialists
              </div>
            </div>

            {/* Metric 4: 600+ New-to-Industry Graduates */}
            <div className="slide-up-hover-sm py-4 sm:py-2 px-4 rounded-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0C1E3A] tracking-tight">
                <AnimatedCounter target={600} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                New-to-Industry Graduates
              </div>
            </div>

          </div>

          {/* Layout Disclaimer Text (matching screenshot) */}
          <p className="text-center text-xs text-slate-400 italic mt-6">
            Figures shown for layout purposes; verify before publication.
          </p>
        </div>

        {/* Section CTA Button (matching screenshot) */}
        <div className="reveal-on-scroll reveal-delay-250 mt-8 text-center">
          <button
            type="button"
            onClick={onOpenStoriesModal}
            className="slide-up-hover inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E85D04] hover:bg-[#D04F00] text-white text-sm sm:text-base font-bold tracking-tight transition duration-150 shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Read More Agent Partner Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
