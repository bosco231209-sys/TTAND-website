import React from 'react';
import { ArrowRight, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface FooterProps {
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateFaq: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWebinar,
  onOpenConsultation,
  onOpenCalculator,
  onNavigateSection,
  onNavigateFaq
}) => {
  return (
    <footer className="bg-[#0C1E3A] text-slate-300 relative border-t-4 border-[#E85D04]">
      {/* Upper Footer Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Logo, Purpose, and Social Media Icons */}
          <div className="space-y-4">
            <div>
              <BrandLogo variant="footer" size="lg" />
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Your success is our purpose.
            </p>

            {/* Social Media Rounded Square Icons (Matching screenshot) */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.linkedin.com/company/the-travel-agent-next-door"
                target="_blank"
                rel="noreferrer"
                aria-label="The Travel Agent Next Door on LinkedIn"
                className="w-9 h-9 rounded-lg border border-slate-600/80 hover:border-[#E85D04] hover:bg-[#E85D04] text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/TheTravelAgentNextDoor"
                target="_blank"
                rel="noreferrer"
                aria-label="The Travel Agent Next Door on Facebook"
                className="w-9 h-9 rounded-lg border border-slate-600/80 hover:border-[#E85D04] hover:bg-[#E85D04] text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thetravelagentnextdoor"
                target="_blank"
                rel="noreferrer"
                aria-label="The Travel Agent Next Door on Instagram"
                className="w-9 h-9 rounded-lg border border-slate-600/80 hover:border-[#E85D04] hover:bg-[#E85D04] text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@TheTravelAgentNextDoor"
                target="_blank"
                rel="noreferrer"
                aria-label="The Travel Agent Next Door on YouTube"
                className="w-9 h-9 rounded-lg border border-slate-600/80 hover:border-[#E85D04] hover:bg-[#E85D04] text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: YOUR TRAVEL BUSINESS */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              YOUR TRAVEL BUSINESS
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('audience-funnel')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  New to the Travel Industry
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('audience-funnel')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Experienced Travel Advisor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('audience-funnel')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agency or Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How to Choose a Host Agency
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES & GROWTH */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              SERVICES & GROWTH
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services-overview')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services-overview')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services-overview')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Training & Education
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services-overview')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Support & Back Office
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('preferred-suppliers')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Suppliers & Commission
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('luxe-program')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  LUXE
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: HELP & RESOURCES */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              HELP & RESOURCES
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateFaq('all')}
                  className="text-[#E85D04] hover:text-[#ff7824] font-semibold transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 group"
                >
                  <span>Frequently Asked Questions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenWebinar()}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Watch Your Webinar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Speak With Our Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Commission Calculator
                </button>
              </li>
              <li>
                <a
                  href="https://www.thetravelagentnextdoor.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Find a Travel Agent
                </a>
              </li>
              <li>
                <a
                  href="https://agent.thetravelagentnextdoor.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Advisor Login
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: ABOUT */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              ABOUT
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('founders-message')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About The Travel Agent Next Door
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('founders-message')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Leadership Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  News & Recognition
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Dark Navy Bottom Legal Bar (Matching screenshot) */}
      <div className="bg-[#081528] border-t border-slate-800/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-300 gap-4">
          <div>
            © 2026 The Travel Agent Next Door
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
