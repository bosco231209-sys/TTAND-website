import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import pathNewAdvisorImg from '../assets/images/path_new_advisor_1790256426510.jpg';
import pathExpAdvisorImg from '../assets/images/path_experienced_1790256446093.jpg';
import pathAgencyTeamImg from '../assets/images/path_agency_team_1790256460720.jpg';

interface PathFunnelProps {
  onOpenWebinar: (path: 'new' | 'experienced' | 'agency') => void;
  onSelectPathDetails: (path: 'new' | 'experienced' | 'agency') => void;
}

export const PathFunnel: React.FC<PathFunnelProps> = ({
  onOpenWebinar,
  onSelectPathDetails
}) => {
  return (
    <section id="audience-funnel" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background ambient map texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0C1E3A_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C1E3A] tracking-tight">
            Choose Your Path
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Find the support designed for where you are in your travel business today.
          </p>
        </div>

        {/* 3 Distinct Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: New to the Travel Industry */}
          <div className="reveal-on-scroll reveal-delay-100 slide-up-hover bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border-t-4 border-t-[#E85D04]">
            <div>
              {/* Photo Header */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-100 shadow-inner">
                <img
                  src={pathNewAdvisorImg}
                  alt="New to the Travel Industry advisor training and mentorship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C1E3A] text-center tracking-tight">
                New to the Travel Industry
              </h3>
              
              <p className="mt-3 text-sm sm:text-base text-slate-600 text-center leading-relaxed">
                Start your travel business with award-winning training, step-by-step guidance and support whenever you need it.
              </p>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectPathDetails('new')}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer group/link"
              >
                <span>Explore New to Industry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWebinar('new')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border-2 border-[#E85D04] flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Your Webinar</span>
              </button>
            </div>
          </div>

          {/* Card 2: Experienced Travel Advisor */}
          <div className="reveal-on-scroll reveal-delay-200 slide-up-hover bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Photo Header */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-100 shadow-inner">
                <img
                  src={pathExpAdvisorImg}
                  alt="Experienced Travel Advisor independent business growth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C1E3A] text-center tracking-tight">
                Experienced Travel Advisor
              </h3>
              
              <p className="mt-3 text-sm sm:text-base text-slate-600 text-center leading-relaxed">
                Grow your independent business with smarter technology, stronger earning opportunities and support that works for you.
              </p>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectPathDetails('experienced')}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer group/link"
              >
                <span>Explore Experienced Advisors</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWebinar('experienced')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border-2 border-[#E85D04] flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Your Webinar</span>
              </button>
            </div>
          </div>

          {/* Card 3: Agency or Team */}
          <div className="reveal-on-scroll reveal-delay-300 slide-up-hover bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Photo Header */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-100 shadow-inner">
                <img
                  src={pathAgencyTeamImg}
                  alt="Agency or Team multi-advisor operations and scale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C1E3A] text-center tracking-tight">
                Agency or Team
              </h3>
              
              <p className="mt-3 text-sm sm:text-base text-slate-600 text-center leading-relaxed">
                Keep your identity while gaining the technology, back-office support and scale to run your agency more efficiently.
              </p>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectPathDetails('agency')}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer group/link"
              >
                <span>Explore Agencies</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWebinar('agency')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E85D04] hover:text-[#D04F00] transition cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border-2 border-[#E85D04] flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Your Webinar</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
