import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  BedsOnlineLogo,
  AirCanadaLogo,
  RoyalCaribbeanLogo,
  AvisLogo,
  GAdventuresLogo,
  AbercrombieKentLogo,
  HurtigrutenLogo,
  RailbookersLogo,
} from './SupplierLogos.tsx';

interface SuppliersGridProps {
  onOpenSuppliersModal: () => void;
}

const PREFERRED_PARTNERS = [
  {
    id: 'bedsonline',
    name: 'BedsOnline',
    LogoComponent: BedsOnlineLogo,
  },
  {
    id: 'air-canada',
    name: 'Air Canada',
    LogoComponent: AirCanadaLogo,
  },
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean International',
    LogoComponent: RoyalCaribbeanLogo,
  },
  {
    id: 'avis',
    name: 'Avis',
    LogoComponent: AvisLogo,
  },
  {
    id: 'g-adventures',
    name: 'G Adventures',
    LogoComponent: GAdventuresLogo,
  },
  {
    id: 'abercrombie-kent',
    name: 'Abercrombie & Kent',
    LogoComponent: AbercrombieKentLogo,
  },
  {
    id: 'hurtigruten',
    name: 'Hurtigruten',
    LogoComponent: HurtigrutenLogo,
  },
  {
    id: 'railbookers',
    name: 'Railbookers',
    LogoComponent: RailbookersLogo,
  },
];

export const SuppliersGrid: React.FC<SuppliersGridProps> = ({
  onOpenSuppliersModal
}) => {
  return (
    <section id="preferred-suppliers" className="py-20 lg:py-26 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Top Left Constellation Graphic (Matching screenshot) */}
      <div className="absolute top-0 left-0 w-72 h-64 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="30" r="3.5" fill="#93C5FD" />
          <circle cx="80" cy="50" r="4" fill="#93C5FD" />
          <circle cx="140" cy="20" r="3.5" fill="#93C5FD" />
          <circle cx="60" cy="110" r="4" fill="#93C5FD" />
          <circle cx="130" cy="90" r="3.5" fill="#93C5FD" />
          <circle cx="190" cy="70" r="3" fill="#93C5FD" />
          <circle cx="20" cy="140" r="3.5" fill="#93C5FD" />

          <line x1="20" y1="30" x2="80" y2="50" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="80" y1="50" x2="140" y2="20" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="80" y1="50" x2="60" y2="110" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="60" y1="110" x2="130" y2="90" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="140" y1="20" x2="190" y2="70" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="130" y1="90" x2="190" y2="70" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="20" y1="140" x2="60" y2="110" stroke="#BFDBFE" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Top Right Dotted Map Nodes (Matching screenshot) */}
      <div className="absolute top-4 right-0 w-80 h-72 pointer-events-none opacity-35 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g fill="#93C5FD">
            <circle cx="210" cy="20" r="2.5" />
            <circle cx="225" cy="22" r="2.5" />
            <circle cx="240" cy="25" r="2.5" />
            <circle cx="200" cy="35" r="2.5" />
            <circle cx="215" cy="38" r="2.5" />
            <circle cx="230" cy="40" r="2.5" />
            <circle cx="245" cy="45" r="2.5" />
            <circle cx="260" cy="48" r="2.5" />
            <circle cx="195" cy="55" r="2.5" />
            <circle cx="210" cy="58" r="2.5" />
            <circle cx="225" cy="62" r="2.5" />
            <circle cx="240" cy="65" r="2.5" />
            <circle cx="255" cy="70" r="2.5" />
            <circle cx="270" cy="75" r="2.5" />
            <circle cx="215" cy="78" r="2.5" />
            <circle cx="230" cy="82" r="2.5" />
            <circle cx="245" cy="88" r="2.5" />
            <circle cx="260" cy="95" r="2.5" />
            <circle cx="235" cy="105" r="2.5" />
            <circle cx="250" cy="115" r="2.5" />
          </g>
        </svg>
      </div>

      {/* Bottom Right Constellation Graphic (Matching screenshot) */}
      <div className="absolute bottom-0 right-0 w-72 h-64 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="240" cy="180" r="3.5" fill="#93C5FD" />
          <circle cx="180" cy="160" r="4" fill="#93C5FD" />
          <circle cx="120" cy="190" r="3.5" fill="#93C5FD" />
          <circle cx="200" cy="100" r="4" fill="#93C5FD" />
          <circle cx="130" cy="120" r="3.5" fill="#93C5FD" />
          <circle cx="70" cy="140" r="3" fill="#93C5FD" />

          <line x1="240" y1="180" x2="180" y2="160" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="180" y1="160" x2="120" y2="190" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="180" y1="160" x2="200" y2="100" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="200" y1="100" x2="130" y2="120" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="120" y1="190" x2="130" y2="120" stroke="#BFDBFE" strokeWidth="1.2" />
          <line x1="130" y1="120" x2="70" y2="140" stroke="#BFDBFE" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching screenshot exactly) */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E85D04] block mb-2">
            STRONGER TOGETHER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0C1E3A] tracking-tight leading-tight">
            Stronger Partnerships. More Opportunity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our scale gives agent partners access to preferred supplier programs, competitive earning opportunities and{' '}
            <strong className="font-bold text-[#0C1E3A]">up to 100% commission</strong> on preferred suppliers—with no administrative fee deducted from that commission.
          </p>
        </div>

        {/* Supporting Label Divider (Matching screenshot) */}
        <div className="reveal-on-scroll reveal-delay-75 relative flex items-center justify-center mb-10 max-w-xl mx-auto">
          <div className="grow border-t border-slate-200"></div>
          <span className="shrink-0 px-4 text-xs sm:text-sm font-medium text-slate-600">
            A selection of our preferred supplier partners
          </span>
          <div className="grow border-t border-slate-200"></div>
        </div>

        {/* 4x2 Logo Showcase Grid (Matching screenshot: 8 distinct brand boxes with prominent, large logos) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {PREFERRED_PARTNERS.map((partner, index) => {
            const Logo = partner.LogoComponent;
            const delays = [
              'reveal-delay-75',
              'reveal-delay-100',
              'reveal-delay-150',
              'reveal-delay-200',
              'reveal-delay-250',
              'reveal-delay-300',
              'reveal-delay-350',
              'reveal-delay-400',
            ];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={partner.id}
                className={`reveal-on-scroll ${delayClass} slide-up-hover bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 sm:p-6 lg:p-7 flex items-center justify-center h-28 sm:h-32 lg:h-36 hover:shadow-md hover:border-slate-300`}
              >
                {/* Brand Logo - sized significantly larger for maximum visual impact */}
                <div className="w-full h-full flex items-center justify-center">
                  <Logo className="w-full max-w-[200px] sm:max-w-[220px] max-h-[46px] sm:max-h-[54px] lg:max-h-[60px] object-contain drop-shadow-xs" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Single CTA Button (Matching screenshot: Vibrant orange/red button with subtle white double border) */}
        <div className="reveal-on-scroll reveal-delay-200 mt-12 text-center">
          <button
            type="button"
            onClick={onOpenSuppliersModal}
            className="slide-up-hover inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-[#E85D04] hover:bg-[#D04F00] text-white text-sm sm:text-base font-bold tracking-tight shadow-md hover:shadow-lg transition-all duration-150 ring-2 ring-white/40 ring-offset-2 ring-offset-[#E85D04] cursor-pointer group"
          >
            <span>View All Preferred & Approved Suppliers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
