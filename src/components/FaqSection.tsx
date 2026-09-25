import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenConsultation: () => void;
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
}

interface FaqItem {
  q: string;
  a: string;
  category: 'general' | 'new' | 'experienced' | 'agency';
}

const FAQS: FaqItem[] = [
  {
    category: 'general',
    q: 'How does a host agency like The Travel Agent Next Door work?',
    a: 'As your host agency, TTAND provides you with the accredited licensing (TICO, CPBC, OPC), preferred supplier contracts, proprietary booking engines (Phenix), invoicing, and support infrastructure needed to sell travel legally and profitably in Canada. You run your independent travel business under your own chosen brand name, set your own schedule, and keep up to 100% of your commissions.'
  },
  {
    category: 'general',
    q: 'Do I keep ownership of my client database?',
    a: 'Yes, 100%. At The Travel Agent Next Door, your clients belong strictly to you. If you ever decide to leave or retire, your client database and relationships remain your intellectual property. We never solicit or market to your clients without your explicit instruction.'
  },
  {
    category: 'new',
    q: 'I have never worked in the travel industry before. Can I really succeed?',
    a: 'Absolutely. Over 600 of our successful agent partners started with zero travel industry experience. Our award-winning STEP (Student Travel Educational Program) provides comprehensive self-paced modules, live coaching, mock booking workshops, and dedicated study prep for your provincial regulatory exam (TICO/CPBC).'
  },
  {
    category: 'new',
    q: 'How long does it take from signing up to booking my first trip?',
    a: 'Most new advisors complete their provincial exam and STEP onboarding within 3 to 6 weeks. You can begin quoting and issuing real bookings as soon as your provincial certification is granted and your initial system setup is completed.'
  },
  {
    category: 'experienced',
    q: 'How easy is it to transfer my existing client records and active bookings?',
    a: 'Our dedicated transition specialists handle the heavy lifting for you. We provide step-by-step guidance on importing client CRM profiles, transferring pending PNRs and group allocations, and setting up your custom email and marketing tools without disrupting your day-to-day client communications.'
  },
  {
    category: 'experienced',
    q: 'Are there hidden monthly technology fees or marketing deductions?',
    a: 'None whatsoever. Unlike many host agencies that nickel-and-dime for CRM access, GDS terminals, or marketing mailers, TTAND operates on complete transparency. You keep up to 100% of commission on preferred suppliers with no sneaky back-end administrative deductions.'
  },
  {
    category: 'agency',
    q: 'Can I bring my existing team of sub-advisors or storefront associates?',
    a: 'Yes. Our Agency & Team program is built specifically for agency owners. You can maintain your primary agency master account while seamlessly provisioning sub-agent accounts with individual logins, custom commission splits, and centralized financial reporting.'
  },
  {
    category: 'agency',
    q: 'Does TTAND handle trust accounting, ticketing, and regulatory reporting for my agency?',
    a: 'Yes. Our Canadian accounting and ticketing desks manage merchant credit card processing, merchant fee reconciliation, trust compliance, and airline ticketing so you and your team can focus exclusively on selling and client care.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenConsultation,
  onOpenWebinar
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'new' | 'experienced' | 'agency'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = selectedCategory === 'all' 
    ? FAQS 
    : FAQS.filter(f => f.category === selectedCategory);

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E85D04] block mb-2">
            Clear Answers & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C1E3A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have questions about commission splits, technology, or licensing? Everything you need to know about partnering with TTAND.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="reveal-on-scroll reveal-delay-75 flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`slide-up-hover-sm px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0C1E3A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Questions
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('general')}
            className={`slide-up-hover-sm px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === 'general'
                ? 'bg-[#0C1E3A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            General Questions
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('new')}
            className={`slide-up-hover-sm px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === 'new'
                ? 'bg-[#E85D04] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            New to Industry
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('experienced')}
            className={`slide-up-hover-sm px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === 'experienced'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Experienced Advisors
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('agency')}
            className={`slide-up-hover-sm px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === 'agency'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Agencies & Teams
          </button>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const delays = [
              'reveal-delay-75',
              'reveal-delay-100',
              'reveal-delay-150',
              'reveal-delay-200',
              'reveal-delay-250',
              'reveal-delay-300'
            ];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={index}
                className={`reveal-on-scroll ${delayClass} slide-up-hover border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer transition"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0C1E3A]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#E85D04] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="reveal-on-scroll reveal-delay-200 slide-up-hover mt-12 p-6 sm:p-8 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left hover:shadow-lg transition-all">
          <div>
            <h3 className="text-lg font-bold text-[#0C1E3A]">
              Have a specific question about your agency?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak directly with an advisor relations director for confidential, tailored advice.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D04F00] text-white text-xs sm:text-sm font-bold tracking-tight transition shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Speak With Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
