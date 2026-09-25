import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  PhoneCall, 
  Play, 
  HelpCircle, 
  Sparkles, 
  Compass, 
  Users, 
  DollarSign, 
  Laptop, 
  CheckCircle2, 
  FileText, 
  ShieldCheck,
  X,
  MessageCircleQuestion,
  ExternalLink
} from 'lucide-react';

interface FaqPageProps {
  onBackToHome: () => void;
  onOpenConsultation: () => void;
  onOpenWebinar: (path?: 'new' | 'experienced' | 'agency') => void;
  initialCategory?: string;
}

export type FaqCategoryKey = 'all' | 'general' | 'new' | 'experienced' | 'agency' | 'commissions' | 'technology';

interface FaqItem {
  id: string;
  category: FaqCategoryKey;
  categoryLabel: string;
  question: string;
  answer: string;
  keyPoints?: string[];
  tags: string[];
}

const FAQ_DATA: FaqItem[] = [
  // 1. GENERAL & HOST MODEL
  {
    id: 'gen-1',
    category: 'general',
    categoryLabel: 'General & Host Model',
    question: 'How does a host agency like The Travel Agent Next Door work?',
    answer: 'As your host agency, The Travel Agent Next Door (TTAND) provides the accredited licensing (TICO, CPBC, OPC), tier-one supplier contracts, proprietary booking technology (Phenix), trust accounting, and operational support infrastructure. You own and operate your independent travel business under your chosen brand name, set your own schedule, and earn up to 100% of your commissions while we handle the complex back-office administration.',
    keyPoints: [
      'Operate legally across Canada under our certified registrations',
      'Choose your own business name and unique brand identity',
      'Eliminate the high overhead of standalone storefront licensing'
    ],
    tags: ['host agency', 'how it works', 'licensing', 'business model', 'independence']
  },
  {
    id: 'gen-2',
    category: 'general',
    categoryLabel: 'General & Host Model',
    question: 'Do I keep 100% ownership of my client database and customer files?',
    answer: 'Yes, absolutely and without exception. At The Travel Agent Next Door, your clients belong strictly to you. If you ever decide to transition or retire, your client database and relationships remain your intellectual property. We never solicit, contact, or market to your clients without your explicit consent and branded signature.',
    keyPoints: [
      'Client list remains your exclusive business property',
      'No restrictive covenants prohibiting your clients from following you',
      'All marketing material is delivered under your personal branding'
    ],
    tags: ['ownership', 'client list', 'confidentiality', 'contracts', 'privacy']
  },
  {
    id: 'gen-3',
    category: 'general',
    categoryLabel: 'General & Host Model',
    question: 'What regulatory accreditations and industry affiliations does TTAND provide?',
    answer: 'TTAND holds full accreditations across Canada, including TICO (Ontario), CPBC (British Columbia), and OPC (Quebec), along with premier memberships in ACTA (Association of Canadian Travel Agencies), CLIA, and IATA. You are legally covered and protected by provincial travel compensation funds under our umbrella.',
    keyPoints: [
      'Fully compliant with Ontario TICO, British Columbia CPBC, and Quebec OPC regulations',
      'IATA and CLIA recognized worldwide by airlines, cruise lines, and resorts',
      'Access to ACTA advocacy and group benefits'
    ],
    tags: ['tico', 'cpbc', 'opc', 'iata', 'clia', 'acta', 'regulations', 'canada']
  },
  {
    id: 'gen-4',
    category: 'general',
    categoryLabel: 'General & Host Model',
    question: 'Can I operate under my own travel brand name and logo?',
    answer: 'Yes. You have total creative freedom to market under your own custom brand name, logo, website, and social media handles (with the standard provincial endorsement "affiliated with The Travel Agent Next Door"). Alternatively, if you do not have your own brand, you can co-brand directly with The Travel Agent Next Door.',
    tags: ['branding', 'business name', 'logo', 'identity', 'marketing']
  },

  // 2. NEW TO INDUSTRY & LICENSING
  {
    id: 'new-1',
    category: 'new',
    categoryLabel: 'New to Industry',
    question: 'I have never worked in the travel industry before. Can I really succeed?',
    answer: 'Over 600 of our highest-earning agent partners joined TTAND with zero prior travel industry experience. We built our award-winning STEP (Student Travel Educational Program) specifically to train career changers, passion entrepreneurs, and new professionals from scratch. You receive interactive coursework, mock booking workshops, and dedicated 1-on-1 mentorship.',
    keyPoints: [
      'Comprehensive 18-module STEP online curriculum with lifetime access',
      'Personal assigned mentor advisor for your first year',
      'Live weekly booking labs and product masterclasses'
    ],
    tags: ['new to travel', 'step program', 'career change', 'training', 'beginner', 'mentorship']
  },
  {
    id: 'new-2',
    category: 'new',
    categoryLabel: 'New to Industry',
    question: 'How long does it take from joining to making my first real client booking?',
    answer: 'Most new advisors complete their provincial exam and STEP onboarding within 3 to 6 weeks. As soon as your provincial certification is issued and your TTAND systems are configured, you can immediately begin quoting and ticketing flights, vacation packages, cruises, and custom itineraries for clients.',
    tags: ['timeline', 'getting started', 'fast track', 'onboarding']
  },
  {
    id: 'new-3',
    category: 'new',
    categoryLabel: 'New to Industry',
    question: 'How do I obtain my required provincial travel counseling certification (TICO, CPBC)?',
    answer: 'We guide you step-by-step through the registration, study materials, and practice exams for your provincial regulator (such as TICO in Ontario). Our study materials boast an over 94% first-time pass rate among our candidates. Once certified, we link your registration to our agency license immediately.',
    keyPoints: [
      'Curated exam study guides and mock practice tests provided',
      'Fast-track provincial agency linkage upon exam completion',
      'Ongoing regulatory compliance guidance provided year-round'
    ],
    tags: ['tico exam', 'certification', 'ontario', 'study guide', 'compliance']
  },
  {
    id: 'new-4',
    category: 'new',
    categoryLabel: 'New to Industry',
    question: 'Can I run my travel advisory business part-time while keeping my day job?',
    answer: 'Yes! Many of our most successful advisors started part-time in evenings and weekends before transitioning to full-time once their booking volume and client base reached sustainable revenue goals. There are no mandatory shift hours or sales quotas.',
    tags: ['part-time', 'schedule', 'flexibility', 'second career', 'side business']
  },

  // 3. EXPERIENCED ADVISORS
  {
    id: 'exp-1',
    category: 'experienced',
    categoryLabel: 'Experienced Advisors',
    question: 'How smooth is the transition process for an established advisor with active bookings?',
    answer: 'We have a dedicated, white-glove Transition Concierge team that coordinates your entire onboarding. We assist with client CRM database migrations, pending PNR booking transfers with preferred suppliers, GDS setup, custom email routing, and marketing setup so that your existing clients never experience a moment of downtime.',
    keyPoints: [
      'Dedicated transition specialist assigned to handle your file handoff',
      'Seamless transfer of future travel credits, group files, and pending commissions',
      'Zero interruption to your client communications'
    ],
    tags: ['transition', 'switching host', 'transfer bookings', 'crm migration', 'concierge']
  },
  {
    id: 'exp-2',
    category: 'experienced',
    categoryLabel: 'Experienced Advisors',
    question: 'Are there hidden monthly technology fees, software charges, or marketing deductions?',
    answer: 'None. Complete transparency is the cornerstone of our company values. Unlike many traditional host agencies that bill for CRM access, email addresses, GDS connection fees, or marketing programs, TTAND provides our core suite at zero unexpected cost. What you see is what you earn.',
    tags: ['fees', 'no hidden fees', 'technology cost', 'transparent', 'pricing']
  },
  {
    id: 'exp-3',
    category: 'experienced',
    categoryLabel: 'Experienced Advisors',
    question: 'Can I keep my GDS credentials (Sabre, Amadeus)?',
    answer: 'Yes. We support active GDS users with dedicated PCCs and Sabre/Amadeus access, enabling advisors who prefer command-line booking to quote, issue tickets, and manage complex air itineraries with full ticketing desk backup.',
    tags: ['gds', 'sabre', 'amadeus', 'ticketing', 'air booking']
  },
  {
    id: 'exp-4',
    category: 'experienced',
    categoryLabel: 'Experienced Advisors',
    question: 'What commission split tiers are available for high-volume producers?',
    answer: 'Experienced advisors can earn up to 100% of commissions on preferred suppliers through our top-tier commission plans and Rising Star incentive milestones, without paying exorbitant monthly desk fees.',
    tags: ['commission tier', '100 percent', 'high volume', 'splits']
  },

  // 4. AGENCIES & TEAMS
  {
    id: 'agency-1',
    category: 'agency',
    categoryLabel: 'Agencies & Teams',
    question: 'Can I bring my entire agency or team of sub-advisors under TTAND?',
    answer: 'Yes! Our Agency & Team architecture is engineered specifically for agency owners and team leaders. You retain master administrative oversight, custom split configurations for each team member, centralized monthly financial accounting, and group production tracking.',
    keyPoints: [
      'Master agency dashboard with granular sub-agent permissions',
      'Customizable commission splits for each individual team member',
      'Cohesive team branding across all client-facing collateral'
    ],
    tags: ['agency owner', 'sub-agents', 'teams', 'storefront', 'scale', 'multi-advisor']
  },
  {
    id: 'agency-2',
    category: 'agency',
    categoryLabel: 'Agencies & Teams',
    question: 'Does TTAND handle trust accounting, ticketing, and compliance for my team?',
    answer: 'Yes. Our 70+ support team specialists manage provincial trust accounting, merchant credit card processing, reconciliation, BSP airline ticketing, and compliance audits so you can step away from admin headaches and focus on coaching and sales.',
    tags: ['trust accounting', 'merchant', 'bsp', 'compliance', 'financials']
  },

  // 5. COMMISSIONS & FINANCE
  {
    id: 'comm-1',
    category: 'commissions',
    categoryLabel: 'Commissions & Payouts',
    question: 'When and how are commissions paid out to advisors?',
    answer: 'Commissions are deposited directly into your bank account twice per month via automated direct deposit. Every payout includes a detailed, line-item reconciliation statement showing supplier, client name, booking reference, gross commission, and net payout.',
    keyPoints: [
      'Predictable twice-monthly direct deposit schedule',
      'Transparent itemized digital statements for bookkeeping and tax preparation',
      'Automated tracking of upcoming and pending supplier payments'
    ],
    tags: ['payment schedule', 'direct deposit', 'statements', 'accounting', 'reconciliation']
  },
  {
    id: 'comm-2',
    category: 'commissions',
    categoryLabel: 'Commissions & Payouts',
    question: 'Do I get top-tier commission overrides with major suppliers and cruise lines?',
    answer: 'Because TTAND represents over 1,600 advisors and hundreds of millions in collective sales, our advisors automatically qualify for the highest top-tier preferred commission brackets and exclusive overrides with Air Canada Vacations, Transat, WestJet, Royal Caribbean, Celebrity, Viking, AmaWaterways, and more.',
    tags: ['preferred suppliers', 'overrides', 'cruises', 'tour operators', 'high commission']
  },
  {
    id: 'comm-3',
    category: 'commissions',
    categoryLabel: 'Commissions & Payouts',
    question: 'How do client credit card merchant processing fees work?',
    answer: 'When booking through our preferred supplier portals and merchant accounts, credit card transaction fees are typically absorbed by the supplier or handled through our negotiated merchant terms, protecting your hard-earned commission from heavy merchant discounts.',
    tags: ['credit card', 'merchant fees', 'processing', 'protection']
  },

  // 6. TECHNOLOGY & SYSTEMS
  {
    id: 'tech-1',
    category: 'technology',
    categoryLabel: 'Technology & Systems',
    question: 'What is Phenix and how does it speed up my daily workflow?',
    answer: 'Phenix is TTAND’s proprietary booking and search platform. It aggregates live airfares, package holidays, hotels, rental cars, and travel insurance into one fast, intuitive dashboard. You can compare suppliers side-by-side, package dynamic components, and generate live quotes in seconds.',
    keyPoints: [
      'Proprietary Canadian engine tailored specifically for Canadian market currency & suppliers',
      'Side-by-side comparison across all preferred package and flight inventory',
      'One-click push into TripBuilder proposals and client invoices'
    ],
    tags: ['phenix', 'booking engine', 'software', 'technology', 'speed', 'automation']
  },
  {
    id: 'tech-2',
    category: 'technology',
    categoryLabel: 'Technology & Systems',
    question: 'What marketing tools and automated client touchpoints are included?',
    answer: 'You receive automated digital marketing (customized email newsletters sent on your behalf with your contact details), social media content calendars, TripBuilder interactive digital itinerary proposals, and optional seasonal glossy print direct mailers sent directly to your VIP clients.',
    tags: ['marketing', 'email marketing', 'tripbuilder', 'direct mail', 'social media']
  },
  {
    id: 'tech-3',
    category: 'technology',
    categoryLabel: 'Technology & Systems',
    question: 'Can I run my travel agency while traveling abroad as a digital nomad?',
    answer: '100% yes. All TTAND software, Phenix booking portals, email systems, and support ticketing platforms are cloud-based and accessible anywhere in the world with a secure internet connection.',
    tags: ['remote work', 'travel while working', 'cloud', 'digital nomad']
  }
];

const CATEGORIES: { key: FaqCategoryKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'all', label: 'All Questions', icon: MessageCircleQuestion },
  { key: 'general', label: 'General & Host Model', icon: HelpCircle },
  { key: 'new', label: 'New to Industry', icon: Sparkles },
  { key: 'experienced', label: 'Experienced Advisors', icon: Compass },
  { key: 'agency', label: 'Agencies & Teams', icon: Users },
  { key: 'commissions', label: 'Commissions & Payouts', icon: DollarSign },
  { key: 'technology', label: 'Technology & Phenix', icon: Laptop },
];

export const FaqPage: React.FC<FaqPageProps> = ({
  onBackToHome,
  onOpenConsultation,
  onOpenWebinar,
  initialCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategoryKey>(() => {
    if (initialCategory && ['general', 'new', 'experienced', 'agency', 'commissions', 'technology'].includes(initialCategory)) {
      return initialCategory as FaqCategoryKey;
    }
    return 'all';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set(['gen-1', 'new-1']));

  // Toggle single item
  const toggleFaq = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all / collapse all
  const areAllExpanded = useMemo(() => {
    return FAQ_DATA.length > 0 && expandedIds.size >= FAQ_DATA.length;
  }, [expandedIds]);

  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(FAQ_DATA.map(f => f.id)));
    }
  };

  // Filtered FAQs based on category & search
  const filteredFaqs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FAQ_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const inQuestion = item.question.toLowerCase().includes(q);
      const inAnswer = item.answer.toLowerCase().includes(q);
      const inCategory = item.categoryLabel.toLowerCase().includes(q);
      const inTags = item.tags.some(tag => tag.toLowerCase().includes(q));
      const inKeyPoints = item.keyPoints?.some(kp => kp.toLowerCase().includes(q));

      return inQuestion || inAnswer || inCategory || inTags || inKeyPoints;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <nav className="flex items-center text-xs sm:text-sm text-slate-500 gap-2">
            <button
              type="button"
              onClick={onBackToHome}
              className="text-[#E85D04] hover:text-[#D04F00] font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">Frequently Asked Questions</span>
          </nav>

          <button
            type="button"
            onClick={onBackToHome}
            className="slide-up-hover inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 hover:border-slate-300 transition cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </button>
        </div>
      </div>

      {/* Main Page Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="reveal-on-scroll bg-gradient-to-br from-[#0C1E3A] via-[#102A4E] to-[#0C1E3A] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-bold tracking-wide uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>KNOWLEDGE HUB & FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Everything you need to know about <span className="text-[#FF7A00]">The Travel Agent Next Door</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Clear, transparent answers on host agency licensing, commission structures, Phenix booking technology, STEP education, client database ownership, and onboarding timelines.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 relative max-w-2xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by keyword (e.g. TICO, Phenix, 100% commission, STEP, clients)..."
                  className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 transition p-1"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Navigation & Controls */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="reveal-on-scroll reveal-delay-75 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.key;
              const count = cat.key === 'all' 
                ? FAQ_DATA.length 
                : FAQ_DATA.filter(f => f.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`slide-up-hover-sm inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#0C1E3A] text-white shadow-sm ring-1 ring-[#0C1E3A]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse All Button & Match Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <span className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
            </span>

            <button
              type="button"
              onClick={toggleExpandAll}
              className="text-xs font-semibold text-[#E85D04] hover:text-[#D04F00] hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              {areAllExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Expand All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accordion FAQ Question List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800">No matching questions found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try a different keyword or reset filters to see all available questions.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E85D04] text-white text-xs font-bold hover:bg-[#D04F00] transition cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className="reveal-on-scroll slide-up-hover bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:shadow-md hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#E85D04] uppercase tracking-wider bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0C1E3A] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'bg-orange-100 text-[#E85D04] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>

                      {/* Bulleted Highlights if available */}
                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                            Key Takeaways:
                          </span>
                          <ul className="space-y-2">
                            {faq.keyPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Topic Tags */}
                      <div className="mt-5 flex flex-wrap items-center gap-1.5">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Still Have Questions? Conversion Block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="reveal-on-scroll slide-up-hover bg-gradient-to-r from-orange-500 to-[#E85D04] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-200 block mb-2">
              DISCOVERY & CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
              Have a specific question about your individual business situation?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-orange-100 font-normal leading-relaxed">
              Every travel business is unique. Speak directly with our advisor relations specialists for a confidential, no-pressure discovery conversation about your path, commission forecasts, and transition roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#0C1E3A] hover:bg-slate-100 text-sm sm:text-base font-extrabold shadow-md transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#E85D04]" />
              <span>Book 1-on-1 Discovery Call</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenWebinar()}
              className="slide-up-hover inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0C1E3A] text-white hover:bg-[#122A50] text-sm sm:text-base font-bold shadow-md transition cursor-pointer"
            >
              <Play className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Watch 25-Min Webinar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
