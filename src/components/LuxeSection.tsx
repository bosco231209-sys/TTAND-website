import React, { useState } from 'react';
import { Crown, Sparkles, ArrowRight, BookOpen, Globe, Award, Gem, Check } from 'lucide-react';
import luxeShowcaseImg from '../assets/images/luxe_luxury_showcase_1790252481185.jpg';

interface LuxeSectionProps {
  onOpenConsultation: () => void;
  onOpenLuxeModal: () => void;
}

export const LuxeSection: React.FC<LuxeSectionProps> = ({
  onOpenConsultation,
  onOpenLuxeModal
}) => {
  const [activeTab, setActiveTab] = useState<'marketing' | 'website' | 'training' | 'suppliers'>('marketing');

  const tabContent = {
    marketing: {
      title: 'LUXE Marketing Materials',
      desc: 'Exclusive quarterly high-gloss print magazines directly mailed to your affluent client list with your agency’s custom gold-embossed masthead, accompanied by bespoke digital lookbooks and high-converting private client email campaigns.',
      perks: ['Quarterly 68-page luxury print magazine with custom advisor cover', 'Private client direct-mail fulfillment handled by TTAND', 'Digital lookbooks with embedded instant booking inquiries']
    },
    website: {
      title: 'LUXE Dedicated Website',
      desc: 'A turn-key, white-labeled client-facing luxury portal showcasing private villas, yacht charters, luxury expedition ships, and five-star resorts—optimized for ultra-high-net-worth client engagement.',
      perks: ['White-labeled responsive luxury website under your domain', 'Direct integration with Virtuoso-grade supplier partner perks', 'Private client portal with password-protected custom itineraries']
    },
    training: {
      title: 'LUXE Specialized Training',
      desc: 'Master the nuances of affluent travel advisory. Learn high-touch client management, premium trip fee structuring, private aviation booking, and white-glove concierge standards.',
      perks: ['Invitation-only quarterly luxury supplier summits', 'Masterclasses on consulting fees ($250–$1,000+ per itinerary)', 'Direct mentorship from Top 1% luxury travel producers in Canada']
    },
    suppliers: {
      title: 'LUXE Supplier Relationships',
      desc: 'Direct priority contacts and elevated VIP amenities at Four Seasons, Ritz-Carlton, Belmond, Rosewood, Aman, and leading luxury cruise & private tour operators globally.',
      perks: ['Complimentary daily breakfast, $100 hotel credits, and room upgrades', 'VIP welcome amenities personally sent from the general manager', 'Guaranteed high-tier luxury commission overrides with zero clawbacks']
    }
  };

  return (
    <section id="luxe-program" className="relative py-24 lg:py-32 bg-[#08111F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Background ambient gold & deep navy glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow & Headline */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>GROW IN THE DIRECTION THAT’S RIGHT FOR YOU</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build a Luxury Travel Business with <span className="text-[#C5A059] italic">LUXE</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A distinct luxury ecosystem with its own client-facing website, marketing materials, specialized training and luxury supplier relationships—all designed to help advisors serve the affluent traveller.
          </p>
        </div>

        {/* Visual Element & Interactive Content Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Left/Center) */}
          <div className="reveal-on-scroll reveal-delay-100 lg:col-span-6 relative">
            <div className="slide-up-hover relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30 bg-slate-900 aspect-[16/9] group">
              <img
                src={luxeShowcaseImg}
                alt="High-end luxury travel branding mockup with laptop and glossy print magazine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-103"
              />
              
              {/* Subtle luxury overlay banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-[#08111F]/20 to-transparent flex items-end p-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    <Gem className="w-3.5 h-3.5" />
                    <span>Exclusive TTAND Division</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Turnkey Luxury Branding, Magazine & Portal
                  </h3>
                </div>
              </div>
            </div>

            {/* Quick Stats Pill under image */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="slide-up-hover-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A059]/40">
                <div className="text-lg font-bold text-[#C5A059]">$18,000+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">Avg LUXE Booking</div>
              </div>
              <div className="slide-up-hover-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A059]/40">
                <div className="text-lg font-bold text-white">4x / Year</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">Glossy Print Mails</div>
              </div>
              <div className="slide-up-hover-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A059]/40">
                <div className="text-lg font-bold text-[#C5A059]">100%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">VIP Client Retention</div>
              </div>
            </div>
          </div>

          {/* Interactive Content Links & Feature Breakdown (Right) */}
          <div className="reveal-on-scroll reveal-delay-200 lg:col-span-6 flex flex-col justify-between">
            
            {/* 4 Interactive Content Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('marketing')}
                className={`p-3 rounded-xl text-left border text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'marketing'
                    ? 'bg-[#C5A059] text-[#08111F] border-[#C5A059] shadow-lg'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span className="truncate">LUXE Marketing</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('website')}
                className={`p-3 rounded-xl text-left border text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'website'
                    ? 'bg-[#C5A059] text-[#08111F] border-[#C5A059] shadow-lg'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span className="truncate">LUXE Website</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('training')}
                className={`p-3 rounded-xl text-left border text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'training'
                    ? 'bg-[#C5A059] text-[#08111F] border-[#C5A059] shadow-lg'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span className="truncate">LUXE Training</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('suppliers')}
                className={`p-3 rounded-xl text-left border text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'suppliers'
                    ? 'bg-[#C5A059] text-[#08111F] border-[#C5A059] shadow-lg'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Crown className="w-4 h-4 shrink-0" />
                <span className="truncate">LUXE Suppliers</span>
              </button>
            </div>

            {/* Active Feature Detail Card */}
            <div className="slide-up-hover p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{tabContent[activeTab].title}</span>
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {tabContent[activeTab].desc}
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                {tabContent[activeTab].perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenLuxeModal}
                className="slide-up-hover inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#B89248] hover:to-[#C5A059] text-[#08111F] text-sm sm:text-base font-extrabold tracking-tight transition duration-150 shadow-lg cursor-pointer group"
              >
                <span>Explore LUXE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition cursor-pointer"
              >
                <span>Schedule Luxury Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
