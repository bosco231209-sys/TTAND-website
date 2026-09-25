import React, { useState } from 'react';
import { Search, X, ArrowRight, Laptop, Sparkles, Compass, Users, Crown, Phone } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (target: string) => void;
}

const SEARCH_DATABASE = [
  { title: 'Phenix Proprietary Booking Engine', category: 'Technology', section: 'services-overview', desc: 'Direct GDS access, package search, and live airline inventory in one tool.' },
  { title: 'STEP Training for New Advisors', category: 'Training', section: 'audience-funnel', desc: '18-module structured education for advisors launching with zero prior experience.' },
  { title: 'LUXE Luxury Travel Ecosystem', category: 'Programs', section: 'luxe-program', desc: 'White-glove luxury print magazines, high-touch hotelier amenities, and consulting fee masterclasses.' },
  { title: 'Air Canada Preferred Partnership', category: 'Suppliers', section: 'preferred-suppliers', desc: 'Direct priority desk and vacation package booking with up to 100% commission.' },
  { title: 'Commission Calculator & Checklist', category: 'Tools', section: 'calculator', desc: 'Compare host agency earnings, zero tech fees, and Rising Star progression.' },
  { title: 'TripBuilder Interactive Proposals', category: 'Technology', section: 'services-overview', desc: 'Stunning digital itinerary proposals with instant client booking approvals.' },
  { title: 'Agency & Team Management', category: 'Your Business', section: 'audience-funnel', desc: 'Multi-advisor back-office management, custom split accounting, and branding preservation.' },
  { title: 'Flemming Friisdahl Founder Video', category: 'About TTAND', section: 'founders-message', desc: 'Why The Travel Agent Next Door is invested in your long-term success.' }
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? SEARCH_DATABASE
    : SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 sm:pt-20 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, tools, Phenix, commissions, suppliers..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 focus:outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            {results.length} {results.length === 1 ? 'Resource' : 'Resources'} Found
          </div>

          {results.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                onSelectResult(item.section);
                onClose();
              }}
              className="w-full text-left p-3.5 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition flex items-start justify-between gap-3 group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#E85D04] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E85D04] transition">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E85D04] group-hover:translate-x-1 transition shrink-0 mt-1" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
