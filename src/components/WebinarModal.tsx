import React, { useState } from 'react';
import { X, Play, CheckCircle2, Clock, Calendar, Sparkles, Compass, Users } from 'lucide-react';

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPath?: 'new' | 'experienced' | 'agency';
}

export const WebinarModal: React.FC<WebinarModalProps> = ({
  isOpen,
  onClose,
  initialPath = 'new'
}) => {
  const [selectedPath, setSelectedPath] = useState<'new' | 'experienced' | 'agency'>(initialPath);
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: 'Ontario'
  });

  if (!isOpen) return null;

  const pathDetails = {
    new: {
      title: 'New to the Travel Industry Webinar',
      badge: 'Zero Experience Required',
      icon: <Sparkles className="w-5 h-5 text-[#E85D04]" />,
      desc: 'Everything you need to know about starting an independent travel agency in Canada, provincial licensing (TICO, CPBC, OPC), the STEP education program, and building your first $100K in sales.',
      duration: '42 Minutes · On-Demand + Live Q&A',
      host: 'Led by TTAND Training & Onboarding Team'
    },
    experienced: {
      title: 'Experienced Travel Advisor Webinar',
      badge: 'Up to 100% Commission',
      icon: <Compass className="w-5 h-5 text-[#0C1E3A]" />,
      desc: 'Discover why high-producing advisors switch to TTAND: Keep 100% of preferred supplier commission with zero tech fees, test-drive Phenix multi-supplier engine, and learn how we protect your client ownership.',
      duration: '38 Minutes · On-Demand',
      host: 'Led by Flemming Friisdahl (CEO) & Tech Directors'
    },
    agency: {
      title: 'Agency & Team Owners Webinar',
      badge: 'Scale Your Agency',
      icon: <Users className="w-5 h-5 text-emerald-700" />,
      desc: 'Streamline team operations, associate advisor accounts, centralized trust accounting, and custom commission split structures while preserving your local agency identity and storefront brand.',
      duration: '45 Minutes · On-Demand',
      host: 'Led by TTAND Agency Operations Specialists'
    }
  };

  const current = pathDetails[selectedPath];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E85D04] text-white flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Watch Your Information Webinar
              </h3>
              <p className="text-xs text-slate-400">
                Tailored for where you are in your travel career
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Path Selector Tabs */}
        <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs font-bold">
          <button
            type="button"
            onClick={() => { setSelectedPath('new'); setIsPlayingTeaser(false); }}
            className={`py-3.5 px-3 text-center transition cursor-pointer border-b-2 ${
              selectedPath === 'new'
                ? 'border-[#E85D04] text-[#E85D04] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            New to Industry
          </button>
          <button
            type="button"
            onClick={() => { setSelectedPath('experienced'); setIsPlayingTeaser(false); }}
            className={`py-3.5 px-3 text-center transition cursor-pointer border-b-2 ${
              selectedPath === 'experienced'
                ? 'border-[#0C1E3A] text-[#0C1E3A] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Experienced Advisor
          </button>
          <button
            type="button"
            onClick={() => { setSelectedPath('agency'); setIsPlayingTeaser(false); }}
            className={`py-3.5 px-3 text-center transition cursor-pointer border-b-2 ${
              selectedPath === 'agency'
                ? 'border-emerald-700 text-emerald-800 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Agency or Team
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Webinar Preview Card */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-orange-100 text-[#E85D04]">
                    {current.badge}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#0C1E3A] tracking-tight">
                  {current.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{current.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{current.host}</span>
                  </div>
                </div>

                {/* Video Preview Box */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                  {!isPlayingTeaser ? (
                    <div className="text-center p-4">
                      <button
                        type="button"
                        onClick={() => setIsPlayingTeaser(true)}
                        className="w-12 h-12 rounded-full bg-[#E85D04] text-white flex items-center justify-center mx-auto hover:scale-110 transition shadow-lg cursor-pointer"
                      >
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </button>
                      <div className="text-xs text-white font-semibold mt-2">
                        Preview 2-Minute Teaser
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://player.vimeo.com/video/76979871?autoplay=1"
                      title="Webinar Preview Teaser"
                      className="w-full h-full border-0"
                      allow="autoplay; fullscreen"
                    />
                  )}
                </div>
              </div>

              {/* Right Column: Instant Access Form */}
              <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h5 className="text-sm font-bold text-[#0C1E3A]">
                  Watch the Full Webinar Instantly
                </h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  Enter your details to receive private access and slide materials.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Miller"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E85D04] bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E85D04] bg-white text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(416) 555-0199"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E85D04] bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Province
                      </label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E85D04] bg-white text-slate-900"
                      >
                        <option value="Ontario">Ontario (TICO)</option>
                        <option value="British Columbia">British Columbia (CPBC)</option>
                        <option value="Quebec">Quebec (OPC)</option>
                        <option value="Alberta">Alberta</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Other">Other Canadian Province</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#E85D04] hover:bg-[#D04F00] text-white text-xs font-bold rounded-xl transition duration-150 shadow-sm cursor-pointer mt-2"
                  >
                    Unlock Full Webinar & Guide
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 Zero spam. We never share your contact information.
                  </p>
                </form>
              </div>

            </div>
          ) : (
            /* Successful Registration Screen */
            <div className="text-center py-10 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#0C1E3A]">
                You're All Set, {formData.name}!
              </h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                We've unlocked the full <strong>{current.title}</strong>. A direct link and your complimentary Host Agency Comparison Guide have been sent to <strong>{formData.email}</strong>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="font-bold text-slate-900">What to expect next:</div>
                <div className="text-slate-600">✓ On-demand streaming access with full pause/resume capabilities</div>
                <div className="text-slate-600">✓ Breakdown of Canadian licensing requirements and commission structures</div>
                <div className="text-slate-600">✓ Option to schedule a private 1-on-1 Q&A session with our directors</div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0C1E3A] text-white text-xs font-bold hover:bg-[#142E57] transition"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
