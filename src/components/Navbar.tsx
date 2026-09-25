import React, { useState, useRef, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { MegaMenu, NavBucketKey } from './MegaMenu.tsx';
import { 
  ChevronDown, 
  Search, 
  User, 
  Phone, 
  Menu, 
  X, 
  Play, 
  Sparkles, 
  Compass, 
  Users,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
  onOpenCalculator: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateFaq: (category: string) => void;
  onGoHome: () => void;
  currentPage: 'home' | 'faq';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWebinar,
  onOpenConsultation,
  onOpenSearch,
  onOpenCalculator,
  onNavigateSection,
  onNavigateFaq,
  onGoHome,
  currentPage,
}) => {
  const [activeBucket, setActiveBucket] = useState<NavBucketKey | null>(null);
  const [isWebinarMenuOpen, setIsWebinarMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedBucket, setMobileExpandedBucket] = useState<string | null>(null);

  const webinarDropdownRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (webinarDropdownRef.current && !webinarDropdownRef.current.contains(event.target as Node)) {
        setIsWebinarMenuOpen(false);
      }
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveBucket(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMegaMenuAction = (actionType: string) => {
    setActiveBucket(null);
    if (actionType === 'path-new') {
      onNavigateSection('audience-funnel');
    } else if (actionType === 'path-exp') {
      onNavigateSection('audience-funnel');
    } else if (actionType === 'path-agency') {
      onNavigateSection('audience-funnel');
    } else if (actionType === 'compare-agencies') {
      onOpenCalculator();
    } else if (actionType === 'scroll-tech') {
      onNavigateSection('services-overview');
    } else if (actionType === 'scroll-services') {
      onNavigateSection('services-overview');
    } else if (actionType === 'scroll-founder') {
      onNavigateSection('founders-message');
    } else if (actionType === 'scroll-testimonials') {
      onNavigateSection('testimonials');
    } else if (actionType === 'scroll-suppliers') {
      onNavigateSection('preferred-suppliers');
    } else if (actionType === 'scroll-luxe') {
      onNavigateSection('luxe-program');
    } else if (actionType === 'speak-team') {
      onOpenConsultation();
    } else if (actionType === 'webinar-selector') {
      onOpenWebinar();
    } else if (actionType.startsWith('faq-')) {
      const category = actionType.replace('faq-', '');
      // Map 'agencies' to 'agency' as expected by FaqPage
      const mappedCategory = category === 'agencies' ? 'agency' : category;
      onNavigateFaq(mappedCategory);
    }
  };

  return (
    <header ref={navContainerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Main Top Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[88px] sm:min-h-[96px] lg:min-h-[104px] py-3.5 sm:py-4 lg:py-4.5">
          {/* Brand Logo Zone with generous top/bottom breathing room */}
          <button 
            type="button"
            onClick={onGoHome}
            className="flex items-center my-auto py-1 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D04] rounded-lg transition-transform hover:scale-[1.01] cursor-pointer text-left"
          >
            <BrandLogo size="md" />
          </button>

          {/* Clean 5-Bucket Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              type="button"
              onMouseEnter={() => setActiveBucket('business')}
              onClick={() => setActiveBucket(activeBucket === 'business' ? null : 'business')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-tight rounded-md transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                activeBucket === 'business' ? 'text-[#E85D04] bg-orange-50/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>YOUR TRAVEL BUSINESS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeBucket === 'business' ? 'rotate-180 text-[#E85D04]' : 'text-slate-400'}`} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveBucket('tech')}
              onClick={() => setActiveBucket(activeBucket === 'tech' ? null : 'tech')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-tight rounded-md transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                activeBucket === 'tech' ? 'text-[#E85D04] bg-orange-50/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>TECHNOLOGY</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeBucket === 'tech' ? 'rotate-180 text-[#E85D04]' : 'text-slate-400'}`} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveBucket('support')}
              onClick={() => setActiveBucket(activeBucket === 'support' ? null : 'support')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-tight rounded-md transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                activeBucket === 'support' ? 'text-[#E85D04] bg-orange-50/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>SUPPORT & GROWTH</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeBucket === 'support' ? 'rotate-180 text-[#E85D04]' : 'text-slate-400'}`} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveBucket('why')}
              onClick={() => setActiveBucket(activeBucket === 'why' ? null : 'why')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-tight rounded-md transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                activeBucket === 'why' ? 'text-[#E85D04] bg-orange-50/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>WHY TTAND</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeBucket === 'why' ? 'rotate-180 text-[#E85D04]' : 'text-slate-400'}`} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setActiveBucket('faq')}
              onClick={() => setActiveBucket(activeBucket === 'faq' ? null : 'faq')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-tight rounded-md transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                activeBucket === 'faq' || currentPage === 'faq' ? 'text-[#E85D04] bg-orange-50/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>FAQ</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeBucket === 'faq' ? 'rotate-180 text-[#E85D04]' : 'text-slate-400'}`} />
            </button>
          </nav>

          {/* Primary Action Button with Target-Path Dropdown */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button 
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 text-slate-500 hover:text-[#0C1E3A] hover:bg-slate-100 rounded-xl transition cursor-pointer"
              title="Search TTAND resources"
              aria-label="Search TTAND resources"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="relative" ref={webinarDropdownRef}>
              <div className="inline-flex rounded-xl shadow-sm">
                <button
                  type="button"
                  onClick={() => onOpenWebinar()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E85D04] hover:bg-[#D04F00] text-white text-xs xl:text-sm font-bold tracking-tight rounded-l-xl transition shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Your Webinar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsWebinarMenuOpen(!isWebinarMenuOpen)}
                  aria-label="Select webinar audience path"
                  className="px-2.5 py-2.5 bg-[#D04F00] hover:bg-[#B34300] text-white rounded-r-xl border-l border-orange-700/50 transition cursor-pointer"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isWebinarMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Webinar Path Selector Menu */}
              {isWebinarMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Select Your Audience Path</span>
                  </div>
                  <div className="mt-1 space-y-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsWebinarMenuOpen(false);
                        onOpenWebinar('new');
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50/60 transition flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-md bg-orange-100 text-[#E85D04] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#E85D04]">New to Travel Industry</div>
                        <div className="text-[11px] text-slate-500">Launching your first business</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsWebinarMenuOpen(false);
                        onOpenWebinar('experienced');
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/60 transition flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-100 text-[#0C1E3A] flex items-center justify-center shrink-0">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#0C1E3A]">Experienced Travel Advisor</div>
                        <div className="text-[11px] text-slate-500">Higher commissions & tools</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsWebinarMenuOpen(false);
                        onOpenWebinar('agency');
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-emerald-50/60 transition flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800]">Agency or Team Owner</div>
                        <div className="text-[11px] text-slate-500">Scaling team & operations</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <MegaMenu
        activeBucket={activeBucket}
        onClose={() => setActiveBucket(null)}
        onSelectAction={handleMegaMenuAction}
      />

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[85vh] overflow-y-auto px-4 py-4 space-y-4">
          <div className="p-3 bg-orange-50/80 rounded-xl border border-orange-200">
            <span className="text-xs font-bold text-[#E85D04] uppercase tracking-wide block">Audience Webinars</span>
            <div className="mt-2 grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWebinar('new');
                }}
                className="w-full text-left p-2 rounded-lg bg-white border border-orange-200 text-xs font-semibold text-slate-900 flex items-center justify-between"
              >
                <span>New to Travel Industry</span>
                <Play className="w-3 h-3 text-[#E85D04] fill-current" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWebinar('experienced');
                }}
                className="w-full text-left p-2 rounded-lg bg-white border border-orange-200 text-xs font-semibold text-slate-900 flex items-center justify-between"
              >
                <span>Experienced Travel Advisor</span>
                <Play className="w-3 h-3 text-[#E85D04] fill-current" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWebinar('agency');
                }}
                className="w-full text-left p-2 rounded-lg bg-white border border-orange-200 text-xs font-semibold text-slate-900 flex items-center justify-between"
              >
                <span>Agency or Team Owner</span>
                <Play className="w-3 h-3 text-[#E85D04] fill-current" />
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setMobileExpandedBucket(mobileExpandedBucket === 'business' ? null : 'business')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              <span>YOUR TRAVEL BUSINESS</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileExpandedBucket === 'business' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedBucket === 'business' && (
              <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('audience-funnel'); }} className="cursor-pointer py-1 hover:text-[#E85D04]">New to Industry</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('audience-funnel'); }} className="cursor-pointer py-1 hover:text-[#E85D04]">Experienced Advisor</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('audience-funnel'); }} className="cursor-pointer py-1 hover:text-[#E85D04]">Agency or Team</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onOpenCalculator(); }} className="cursor-pointer py-1 text-[#E85D04] font-semibold">Compare Host Agencies & Calculator</div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileExpandedBucket(mobileExpandedBucket === 'tech' ? null : 'tech')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              <span>TECHNOLOGY</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileExpandedBucket === 'tech' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedBucket === 'tech' && (
              <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('services-overview'); }} className="cursor-pointer py-1">Phenix Booking Engine</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('services-overview'); }} className="cursor-pointer py-1">TripBuilder Itineraries</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('services-overview'); }} className="cursor-pointer py-1">Smart Automation & HUB</div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileExpandedBucket(mobileExpandedBucket === 'support' ? null : 'support')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              <span>SUPPORT & GROWTH</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileExpandedBucket === 'support' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedBucket === 'support' && (
              <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('services-overview'); }} className="cursor-pointer py-1">Support & Training</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('preferred-suppliers'); }} className="cursor-pointer py-1">Suppliers & Commission</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('luxe-program'); }} className="cursor-pointer py-1 text-amber-700 font-semibold">LUXE Luxury Program</div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileExpandedBucket(mobileExpandedBucket === 'why' ? null : 'why')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              <span>WHY TTAND</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileExpandedBucket === 'why' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedBucket === 'why' && (
              <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('founders-message'); }} className="cursor-pointer py-1">Founder's Message</div>
                <div onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('testimonials'); }} className="cursor-pointer py-1">Agent Partner Stories</div>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigateFaq('all');
              }}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              <span>FAQ & QUESTIONS</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50"
            >
              Speak With Our Team
            </button>
            <a
              href="https://agent.thetravelagentnextdoor.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>Agent Partner Login</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
