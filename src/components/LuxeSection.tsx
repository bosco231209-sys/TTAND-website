import React from 'react';
import { ArrowRight } from 'lucide-react';
import luxeShowcaseImg from '../assets/images/luxe_luxury_showcase_1790252481185.jpg';

interface LuxeSectionProps {
  onOpenConsultation: () => void;
  onOpenLuxeModal: () => void;
}

export const LuxeSection: React.FC<LuxeSectionProps> = ({
  onOpenConsultation,
  onOpenLuxeModal
}) => {
  return (
    <section id="luxe-program" className="relative py-20 lg:py-28 bg-[#08111F] text-white overflow-hidden border-b border-slate-900">
      
      {/* Background ambient gold & deep navy glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Content List */}
          <div className="reveal-on-scroll lg:col-span-5 flex flex-col justify-center">
            
            {/* Subtitle / Eyebrow */}
            <div className="text-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-widest block">
              GROW IN THE DIRECTION THAT’S RIGHT FOR YOU
            </div>
            
            {/* Elegant Accent Gold Line under subtitle */}
            <div className="w-14 h-[2px] bg-[#C5A059] mt-3 mb-6" />

            {/* Serif Heading matching the luxury design */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-white leading-[1.12] tracking-tight">
              Build a Luxury <br />
              Travel Business <br />
              with LUXE
            </h2>

            {/* Content description */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal max-w-xl">
              A distinct luxury ecosystem with its own client-facing website, marketing materials, specialized training and luxury supplier relationships—all designed to help advisors serve the affluent traveller.
            </p>

            {/* Horizontal Inline list of elements separated by vertical lines */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span>LUXE Marketing Materials</span>
              <span className="text-[#C5A059]/40">|</span>
              <span>LUXE Website</span>
              <span className="text-[#C5A059]/40">|</span>
              <span>LUXE Training</span>
              <span className="text-[#C5A059]/40">|</span>
              <span>LUXE Suppliers</span>
            </div>

            {/* Solid gold primary action button */}
            <div className="mt-10">
              <button
                type="button"
                onClick={onOpenLuxeModal}
                className="slide-up-hover inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#C5A059] hover:bg-[#B89248] text-[#08111F] text-base font-bold tracking-tight transition duration-150 shadow-xl cursor-pointer group"
              >
                <span>Explore LUXE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: High Fidelity Showcase Mockup Image */}
          <div className="reveal-on-scroll reveal-delay-200 lg:col-span-7 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl lg:max-w-none">
              <img
                src={luxeShowcaseImg}
                alt="Build a Luxury Travel Business with LUXE Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
