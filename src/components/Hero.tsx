import React, { useState, useRef, useEffect } from 'react';
import { Play, ChevronDown, ArrowRight, Sparkles, Compass, Users } from 'lucide-react';
import heroAdvisorImg from '../assets/images/mature_travel_advisor_1790256246239.jpg';

interface HeroProps {
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  onOpenConsultation: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWebinar,
  onOpenConsultation,
  onNavigateSection
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07111E] via-[#0B192C] to-[#081424] pt-10 sm:pt-14 lg:pt-18 pb-16 lg:pb-24 border-b border-slate-800">
      {/* Subtle atmospheric ambient glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[32rem] h-[32rem] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-12 w-[36rem] h-[36rem] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Semantic Content & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col text-left">
            {/* Eyebrow / Tagline */}
            <div className="reveal-on-scroll text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
              <span>Canada’s leading host agency for new and experienced travel advisors and agencies</span>
            </div>

            {/* Exactly ONE H1 for Semantic SEO Hierarchy */}
            <h1 className="reveal-on-scroll reveal-delay-75 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Your purpose is <br className="hidden sm:inline" />
              <span className="text-[#FF7A00]">our success.</span>
            </h1>

            {/* Subheadline */}
            <p className="reveal-on-scroll reveal-delay-150 mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Start, grow or scale your travel business with smart technology, a support team that cares about your business and a community you can count on—so you can spend less time on administration and more time selling travel.
            </p>

            {/* CTA Group with Interactive Webinar Dropdown */}
            <div className="reveal-on-scroll reveal-delay-200 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-30">
              {/* Primary Interactive CTA with Dropdown */}
              <div className="relative slide-up-hover" ref={dropdownRef}>
                <div className="flex rounded-xl shadow-lg shadow-orange-500/25">
                  <button
                    type="button"
                    onClick={() => onOpenWebinar()}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 bg-[#E85D04] hover:bg-[#F26419] text-white text-base font-bold tracking-tight rounded-l-xl transition duration-150 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current shrink-0" />
                    <span>Watch Your Webinar</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-label="Choose webinar stream"
                    className="px-4 py-4 bg-[#D04F00] hover:bg-[#B84400] text-white rounded-r-xl border-l border-orange-700/60 transition cursor-pointer"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu for 3 Target Audiences */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Your Webinar Session
                    </div>
                    <div className="space-y-1 mt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('new');
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-orange-50/70 transition flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E85D04] flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#E85D04]">New to Industry Webinar</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Launch step-by-step with STEP training & mentorship</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('experienced');
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-blue-50/70 transition flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0C1E3A] flex items-center justify-center shrink-0 mt-0.5">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0C1E3A]">Experienced Advisor Webinar</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Up to 100% commission & Phenix tech suite</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('agency');
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-emerald-50/70 transition flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">Agency & Team Owner Webinar</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Full back-office scaling and team structures</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => onNavigateSection('audience-funnel')}
                className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-600 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-700/80 text-white text-base font-semibold tracking-tight transition cursor-pointer backdrop-blur-sm shadow-md"
              >
                <span>Find Your Path</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Supporting Visual (Significantly Larger) */}
          <div className="lg:col-span-6 xl:col-span-6 relative reveal-on-scroll reveal-delay-200">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none slide-up-hover">
              
              {/* Decorative Glowing Gradient Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-[#0C1E3A] to-blue-500/25 rounded-3xl transform rotate-1 scale-[1.03] blur-sm -z-10" />

              {/* High-Fidelity Photo Container - Larger with enhanced viewport presence */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/70 ring-1 ring-white/10 bg-slate-900 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] group">
                <img
                  src={heroAdvisorImg}
                  alt="Experienced travel advisor using laptop in modern home office"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
