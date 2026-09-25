import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Users, 
  Calculator, 
  Laptop, 
  Layers, 
  Wand2, 
  FileCheck, 
  HelpCircle, 
  Award, 
  PhoneCall, 
  HeartHandshake, 
  BookOpen, 
  Megaphone, 
  TrendingUp, 
  Crown, 
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export type NavBucketKey = 'business' | 'tech' | 'support' | 'why' | 'faq';

interface MegaMenuProps {
  activeBucket: NavBucketKey | null;
  onClose: () => void;
  onSelectAction: (actionType: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  activeBucket,
  onClose,
  onSelectAction
}) => {
  if (!activeBucket) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeBucket === 'business' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  onSelectAction('path-new');
                  onClose();
                }}
                className="flex items-start gap-3.5 p-4 rounded-xl text-left border border-slate-100 bg-slate-50/50 hover:bg-orange-50/40 hover:border-orange-200 transition group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#E85D04] flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04] flex items-center gap-1.5">
                    New to the Travel Industry
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Launch your business with step-by-step STEP training, TICO certification guidance, and full mentorship.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('path-exp');
                  onClose();
                }}
                className="flex items-start gap-3.5 p-4 rounded-xl text-left border border-slate-100 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0C1E3A]/10 text-[#0C1E3A] flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0C1E3A] flex items-center gap-1.5">
                    Experienced Travel Advisor
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Retain up to 100% commission with no hidden fees, proprietary Phenix booking tools, and client ownership.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('path-agency');
                  onClose();
                }}
                className="flex items-start gap-3.5 p-4 rounded-xl text-left border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/40 hover:border-emerald-200 transition group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1.5">
                    Agency or Team
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Scale your agency with associate management, centralized accounting, and back-office administrative relief.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('compare-agencies');
                  onClose();
                }}
                className="flex items-start gap-3.5 p-4 rounded-xl text-left border border-amber-200/80 bg-amber-50/50 hover:bg-amber-100/60 transition group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-900 flex items-center gap-1.5">
                      Compare Host Agencies
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 uppercase tracking-wider">Interactive</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Host agency comparison checklist, commission calculator, and Rising Star progression chart.
                  </p>
                </div>
              </button>
            </div>

            {/* Quick Feature Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0C1E3A] to-[#142E57] text-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Independent Ownership</span>
                <h4 className="text-base font-bold text-white mt-1">You own 100% of your client database</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Unlike traditional franchises, you keep your identity, your brand, and your client relationships forever.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onSelectAction('webinar-selector');
                  onClose();
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-[#E85D04] hover:bg-[#D04F00] text-white transition shadow-sm"
              >
                Watch Information Webinar
              </button>
            </div>
          </div>
        )}

        {activeBucket === 'tech' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">Technology Overview</h4>
                <p className="text-xs text-slate-600 mt-1">Our connected suite designed specifically for Canadian travel advisors.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#E85D04] flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Phenix Booking Engine</h4>
                <p className="text-xs text-slate-600 mt-1">Book air, package vacations, hotels, and custom dynamic packages in one place.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">Booking Engines</h4>
                <p className="text-xs text-slate-600 mt-1">Direct GDS, cruise line integrations, and live inventory syncs.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                  <Wand2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700">TripBuilder</h4>
                <p className="text-xs text-slate-600 mt-1">Create stunning, mobile-responsive interactive proposals in minutes.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700">Smart Forms & Automation</h4>
                <p className="text-xs text-slate-600 mt-1">Credit card authorization, electronic signatures, and automated client intake.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-tech');
                  onClose();
                }}
                className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">The HUB</h4>
                <p className="text-xs text-slate-600 mt-1">Central portal for supplier contacts, commission records, marketing & support.</p>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#0C1E3A] uppercase tracking-wider">No IT Headaches</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">Cloud-based, secure & updated continuously</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  No costly hardware or third-party IT contractors. Work seamlessly on any laptop, tablet, or smartphone.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200">
                <span className="text-xs font-semibold text-slate-700">✓ Over 40+ Integrated Suppliers</span>
              </div>
            </div>
          </div>
        )}

        {activeBucket === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operations & Systems</h4>
              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-services');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <HeartHandshake className="w-4 h-4 text-[#E85D04]" />
                  Support & Business Model
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Transparent fees with zero hidden technology deductions.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-services');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <BookOpen className="w-4 h-4 text-[#E85D04]" />
                  Training & Development
                </div>
                <p className="text-xs text-slate-500 mt-0.5">STEP onboarding, weekly vendor webinars, and annual academies.</p>
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Growth & Brand</h4>
              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-services');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <Megaphone className="w-4 h-4 text-[#E85D04]" />
                  Marketing & Branding
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Automated e-newsletters, direct mail magazines, and social assets.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-suppliers');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <TrendingUp className="w-4 h-4 text-[#E85D04]" />
                  Suppliers & Commission
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Tier 1 commissions and on-time twice-monthly payroll deposits.</p>
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Premium & Operations</h4>
              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-luxe');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg bg-amber-50/60 border border-amber-200/60 hover:bg-amber-100/60 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                  <Crown className="w-4 h-4 text-amber-600" />
                  Sales Programs & LUXE
                </div>
                <p className="text-xs text-amber-800 mt-0.5">Luxury ecosystem for affluent travellers with exclusive perks.</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectAction('scroll-services');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition block cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#E85D04]" />
                  Back-Office Services
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Full ticketing desk, group booking support, and regulatory compliance.</p>
              </button>
            </div>
          </div>
        )}

        {activeBucket === 'why' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <button
              type="button"
              onClick={() => {
                onSelectAction('scroll-founder');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">The TTAND Difference</h4>
              <p className="text-xs text-slate-600 mt-1">Why over 1,700 travel advisors chose us as their host agency partner.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('scroll-founder');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Your Business, Your Way</h4>
              <p className="text-xs text-slate-600 mt-1">Complete autonomy over your hours, niche, branding, and pricing strategy.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('scroll-testimonials');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Agent Community</h4>
              <p className="text-xs text-slate-600 mt-1">Collaborative Facebook communities, peer masterminds, and regional meetups.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('scroll-testimonials');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Agent Partner Stories</h4>
              <p className="text-xs text-slate-600 mt-1">Real video stories and growth journeys from advisors across Canada.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('scroll-testimonials');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Rewards & Awards</h4>
              </div>
              <p className="text-xs text-slate-600 mt-1">Rising Star program, President’s Club trips, and supplier incentives.</p>
            </button>
          </div>
        )}

        {activeBucket === 'faq' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <button
              type="button"
              onClick={() => {
                onSelectAction('faq-general');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">General Questions</h4>
              <p className="text-xs text-slate-600 mt-1">How host agencies work, compensation, contracts, and requirements.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('faq-new');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">New to Industry FAQ</h4>
              <p className="text-xs text-slate-600 mt-1">Licensing in Ontario (TICO), BC, Quebec, study timelines, and training.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('faq-experienced');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Experienced Advisor FAQ</h4>
              <p className="text-xs text-slate-600 mt-1">Transitioning your existing client file, GDS access, and commission tiers.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('faq-agencies');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04]">Agencies & Teams FAQ</h4>
              <p className="text-xs text-slate-600 mt-1">Structuring sub-advisors, custom payouts, and storefront migration.</p>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectAction('speak-team');
                onClose();
              }}
              className="p-4 rounded-xl text-left border border-orange-200 bg-orange-50/50 hover:bg-orange-100/60 transition group cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[#E85D04]">
                <PhoneCall className="w-4 h-4" />
                <h4 className="text-sm font-bold text-[#E85D04]">Contact Our Team</h4>
              </div>
              <p className="text-xs text-slate-700 mt-1">Book a private 1-on-1 discovery call with our advisor relations specialists.</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
