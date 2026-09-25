import React, { useState, useRef, useEffect } from 'react';
import { Play, ChevronDown, PhoneCall, Sparkles, Compass, Users } from 'lucide-react';

interface ConversionBannerProps {
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  onOpenConsultation: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  onOpenWebinar,
  onOpenConsultation
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
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Navy Container with Orange Accent Border */}
        <div className="reveal-on-scroll slide-up-hover relative rounded-3xl bg-[#0C1E3A] border-2 border-[#E85D04] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E85D04] block mb-2">
              Launch or Elevate Your Agency
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to take the next step?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Choose the webinar designed for where you are in your travel business—or speak with our team.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* Primary Orange Interactive Webinar Button with Dropdown */}
              <div className="relative slide-up-hover" ref={dropdownRef}>
                <div className="flex rounded-xl shadow-lg">
                  <button
                    type="button"
                    onClick={() => onOpenWebinar()}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-[#E85D04] hover:bg-[#D04F00] text-white text-sm sm:text-base font-bold rounded-l-xl transition cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current shrink-0" />
                    <span>Watch Your Webinar</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-label="Select audience webinar"
                    className="px-3.5 py-4 bg-[#D04F00] hover:bg-[#B84400] text-white rounded-r-xl border-l border-orange-700/50 transition cursor-pointer"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 text-left animate-in fade-in slide-in-from-bottom-2">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Target Webinar
                    </div>
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('new');
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50/70 transition flex items-center gap-2.5 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-[#E85D04]" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">New to Industry</div>
                          <div className="text-[10px] text-slate-500">Zero travel background needed</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('experienced');
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/70 transition flex items-center gap-2.5 cursor-pointer"
                      >
                        <Compass className="w-4 h-4 text-[#0C1E3A]" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Experienced Advisor</div>
                          <div className="text-[10px] text-slate-500">100% commission & Phenix</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onOpenWebinar('agency');
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-emerald-50/70 transition flex items-center gap-2.5 cursor-pointer"
                      >
                        <Users className="w-4 h-4 text-emerald-700" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Agency & Team</div>
                          <div className="text-[10px] text-slate-500">Back-office & sub-agents</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Outline Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/30 hover:border-white text-white text-sm sm:text-base font-bold tracking-tight hover:bg-white/10 transition cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Speak With Our Team →</span>
              </button>

            </div>

            <div className="mt-8 text-xs text-slate-400">
              No pressure. 100% confidential. Designed around Canadian travel professionals.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
