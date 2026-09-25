import React, { useState } from 'react';
import { X, Check, ArrowRight, PhoneCall, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { PREFERRED_SUPPLIERS, APPROVED_SUPPLIERS } from '../data/contentData.ts';
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

const getSupplierLogoComponent = (id?: string) => {
  switch (id) {
    case 'bedsonline':
      return <BedsOnlineLogo className="h-6 w-auto max-w-[130px]" />;
    case 'air-canada':
      return <AirCanadaLogo className="h-6 w-auto max-w-[130px]" />;
    case 'royal-caribbean':
      return <RoyalCaribbeanLogo className="h-6 w-auto max-w-[130px]" />;
    case 'avis':
      return <AvisLogo className="h-6 w-auto max-w-[110px]" />;
    case 'g-adventures':
      return <GAdventuresLogo className="h-6 w-auto max-w-[130px]" />;
    case 'abercrombie-kent':
      return <AbercrombieKentLogo className="h-5 w-auto max-w-[130px]" />;
    case 'hurtigruten':
      return <HurtigrutenLogo className="h-6 w-auto max-w-[130px]" />;
    case 'railbookers':
      return <RailbookersLogo className="h-6 w-auto max-w-[130px]" />;
    default:
      return null;
  }
};

export type DetailModalType = 
  | { type: 'path'; path: 'new' | 'experienced' | 'agency' }
  | { type: 'service'; serviceId: string }
  | { type: 'suppliers' }
  | { type: 'stories' }
  | { type: 'luxe' }
  | null;

interface DetailModalProps {
  modalData: DetailModalType;
  onClose: () => void;
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  onOpenConsultation: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  modalData,
  onClose,
  onOpenWebinar,
  onOpenConsultation
}) => {
  if (!modalData) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#0C1E3A] text-white border-b border-slate-800 shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-white">
            {modalData.type === 'path' && modalData.path === 'new' && 'Program Blueprint: New to the Travel Industry'}
            {modalData.type === 'path' && modalData.path === 'experienced' && 'Advisor Transition: Experienced Travel Advisors'}
            {modalData.type === 'path' && modalData.path === 'agency' && 'Agency Solutions: Multi-Advisor Teams & Storefronts'}
            {modalData.type === 'service' && 'TTAND Service Details & System Capabilities'}
            {modalData.type === 'suppliers' && 'Preferred & Approved Supplier Directory'}
            {modalData.type === 'stories' && 'Verified Agent Partner Case Studies'}
            {modalData.type === 'luxe' && 'The LUXE Program: Luxury Travel Advisory'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 grow text-left text-slate-700 leading-relaxed text-sm">
          
          {modalData.type === 'path' && modalData.path === 'new' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-[#0C1E3A]">
                <strong>No prior travel experience required:</strong> TTAND provides the certified provincial licensing, system training, and 1-on-1 mentorship to start selling travel with complete confidence.
              </div>
              
              <h4 className="text-base font-bold text-[#0C1E3A]">1. The STEP Education Program</h4>
              <p className="text-xs text-slate-600">
                Our 18-module Student Travel Educational Program covers Canadian travel regulations, geography, supplier reservations, cruise booking, travel insurance rules, and marketing for new business owners.
              </p>

              <h4 className="text-base font-bold text-[#0C1E3A]">2. Provincial Licensing & Exam Support</h4>
              <p className="text-xs text-slate-600">
                We assist you every step of the way with preparing and registering for the Travel Industry Council of Ontario (TICO), Consumer Protection BC (CPBC), or Office de la protection du consommateur (OPC) certifications.
              </p>

              <h4 className="text-base font-bold text-[#0C1E3A]">3. Dedicated Mentorship Clinics</h4>
              <p className="text-xs text-slate-600">
                Join weekly new-agent drop-in coaching clinics led by veteran travel advisors who review your first quotes, supplier contacts, and client communication.
              </p>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenWebinar('new'); }}
                  className="px-5 py-2.5 bg-[#E85D04] text-white font-bold rounded-xl text-xs hover:bg-[#D04F00] transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch New-to-Industry Webinar</span>
                </button>
              </div>
            </div>
          )}

          {modalData.type === 'path' && modalData.path === 'experienced' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#0C1E3A]">
                <strong>Seamless Client Transfer:</strong> Keep 100% of your client database, access top commission overrides, and eliminate software fees.
              </div>

              <h4 className="text-base font-bold text-[#0C1E3A]">1. Up to 100% Preferred Commission</h4>
              <p className="text-xs text-slate-600">
                Enjoy uncapped commission retention with direct deposit twice per month on time. No hidden deductions for IT, GDS access, or CRM support.
              </p>

              <h4 className="text-base font-bold text-[#0C1E3A]">2. Phenix Multi-Supplier Booking Engine</h4>
              <p className="text-xs text-slate-600">
                Compare and book air, packages, hotels, and cruise inventory simultaneously on a single screen without toggling 10 different supplier windows.
              </p>

              <h4 className="text-base font-bold text-[#0C1E3A]">3. Complete Client Equity Protection</h4>
              <p className="text-xs text-slate-600">
                Your client list remains exclusively yours legally. We never market over your head or reassign client accounts.
              </p>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenWebinar('experienced'); }}
                  className="px-5 py-2.5 bg-[#0C1E3A] text-white font-bold rounded-xl text-xs hover:bg-[#142E57] transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Experienced Advisor Webinar</span>
                </button>
              </div>
            </div>
          )}

          {modalData.type === 'path' && modalData.path === 'agency' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <strong>Scale Your Team Without Adding Administrative Headcount:</strong> Centralized accounting, associate logins, and regulatory filing taken off your plate.
              </div>

              <h4 className="text-base font-bold text-[#0C1E3A]">1. Multi-Advisor Hierarchies</h4>
              <p className="text-xs text-slate-600">
                Manage your primary storefront or team with customized commission splits, associate permissions, and team-wide reporting dashboards.
              </p>

              <h4 className="text-base font-bold text-[#0C1E3A]">2. Full Back-Office & Ticketing Desk</h4>
              <p className="text-xs text-slate-600">
                Our team handles merchant credit card processing, chargeback defense, group contracts, and airline ticketing so you can keep your focus on leadership and sales.
              </p>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenWebinar('agency'); }}
                  className="px-5 py-2.5 bg-emerald-800 text-white font-bold rounded-xl text-xs hover:bg-emerald-900 transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Agency & Team Webinar</span>
                </button>
              </div>
            </div>
          )}

          {modalData.type === 'suppliers' && (
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
                TTAND empowers agent partners with access to over 600+ vetted travel suppliers across Canada and globally. Our supplier ecosystem is transparently organized into two distinct tiers:
              </div>

              {/* Section 1: Preferred Suppliers */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="p-1 rounded bg-amber-100 text-[#E85D04]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Preferred Suppliers</h4>
                    <p className="text-[11px] text-slate-500">
                      Strategic relationships offering enhanced programs, up to 100% commission splits, dedicated desk support, and agent incentives.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {PREFERRED_SUPPLIERS.map((s, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xs transition">
                      <div className="flex justify-between items-start mb-2">
                        <div className="h-7 flex items-center">
                          {getSupplierLogoComponent(s.id)}
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                          {s.commissionBadge}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm mt-1">{s.name}</div>
                      <div className="text-xs text-[#E85D04] font-semibold mt-0.5">{s.category}</div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Approved Suppliers */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="p-1 rounded bg-blue-100 text-blue-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Approved Suppliers</h4>
                    <p className="text-[11px] text-slate-500">
                      The broader range of reputable suppliers agent partners can freely book with protected commissions and trust accounting.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {APPROVED_SUPPLIERS.map((s, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900 text-sm">{s.name}</span>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded shrink-0">
                          {s.commissionBadge}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium">{s.category}</div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {modalData.type === 'luxe' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <strong>Elevate to Ultra-High-Net-Worth Advisory:</strong> LUXE equips advisors with a dedicated high-end brand, turnkey print collateral, and direct VIP hotelier access.
              </div>
              <p className="text-xs text-slate-600">
                With LUXE, your clients receive complimentary daily breakfast for two, $100 hotel or spa credits, room upgrades upon arrival, and personalized welcome notes from hotel general managers worldwide.
              </p>
            </div>
          )}

          {modalData.type === 'stories' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Over 1,700 Canadian travel entrepreneurs trust The Travel Agent Next Door to power their businesses. Here are common journey milestones:
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm">Karen Henderson · Bespoke Wanderlust Travel</div>
                <div className="text-xs text-[#E85D04] font-semibold">Calgary, Alberta · 5 Years with TTAND</div>
                <p className="text-xs text-slate-600 mt-1 italic">
                  "Transitioning was fast and seamless. TTAND’s Phenix system saves me over 15 hours each week, allowing me to book more luxury river cruises and family journeys."
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm">Marcus Tremblay · Vanguard Voyages</div>
                <div className="text-xs text-emerald-800 font-semibold">Montreal, Quebec · 4 Years with TTAND</div>
                <p className="text-xs text-slate-600 mt-1 italic">
                  "Having 70+ support staff handling trust accounting and ticketing gave our agency the confidence to recruit five additional sub-advisors in twelve months."
                </p>
              </div>
            </div>
          )}

          {modalData.type === 'service' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Every service at TTAND is designed with one goal: giving you more time back to focus on clients and selling travel.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Integrated CRM & automated marketing email campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Air desk with round-the-world ticketing & net fare options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Annual national conference in world-class tropical resort destinations</span>
                </li>
              </ul>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0C1E3A] hover:bg-[#142E57] text-white text-xs font-bold rounded-lg transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak With Our Team</span>
          </button>
        </div>

      </div>
    </div>
  );
};
