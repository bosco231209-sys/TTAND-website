import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Award } from 'lucide-react';

interface CommissionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CommissionCalculatorModal: React.FC<CommissionCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'checklist' | 'risingstar'>('calculator');
  const [annualSales, setAnnualSales] = useState<number>(600000);
  const [supplierCommissionRate, setSupplierCommissionRate] = useState<number>(12); // 12%
  const [ttandTier, setTtandTier] = useState<number>(100); // 100%

  if (!isOpen) return null;

  // Calculation Math
  const totalGrossSupplierCommission = Math.round(annualSales * (supplierCommissionRate / 100));
  const ttandAnnualEarnings = Math.round(totalGrossSupplierCommission * (ttandTier / 100));
  
  // Competitor comparison (Competitor typical: 80% split + $175/mo tech fee + $45/mo admin fee)
  const competitorSplit = 0.80;
  const competitorAnnualFees = 175 * 12 + 45 * 12; // $2,640/yr in fees
  const competitorAnnualEarnings = Math.round((totalGrossSupplierCommission * competitorSplit) - competitorAnnualFees);
  const extraEarningsWithTTAND = Math.max(0, ttandAnnualEarnings - competitorAnnualEarnings);

  const checklistItems = [
    { title: '100% Client Database Ownership', ttand: true, typical: false, note: 'Your clients remain your legal property forever' },
    { title: 'Zero Hidden Tech / GDS Monthly Deductions', ttand: true, typical: false, note: 'No CRM or system software surcharges' },
    { title: 'Up to 100% Preferred Supplier Commission', ttand: true, typical: false, note: 'Direct deposit twice monthly on time' },
    { title: 'Proprietary Phenix Multi-Supplier Engine', ttand: true, typical: false, note: 'Book air, vacations, cruises in one screen' },
    { title: '70+ Canadian-Based Support Specialists', ttand: true, typical: false, note: 'Live human assistance with zero hold times' },
    { title: 'Direct Mail Consumer Magazines with Your Brand', ttand: true, typical: false, note: 'Full luxury print direct mailed to clients' },
    { title: 'Complete TICO, CPBC & OPC Provincial Protection', ttand: true, typical: true, note: 'Full regulatory compliance coverage' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#0C1E3A] text-white border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E85D04] text-white flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Compare Host Agencies
              </h3>
              <p className="text-xs text-slate-300">
                Commission Calculator · Host Agency Checklist · Rising Star Chart
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

        {/* Sub-Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`py-3.5 px-5 transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === 'calculator'
                ? 'border-[#E85D04] text-[#E85D04] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Commission Calculator</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`py-3.5 px-5 transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'border-[#E85D04] text-[#E85D04] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Host Agency Checklist</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('risingstar')}
            className={`py-3.5 px-5 transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === 'risingstar'
                ? 'border-[#E85D04] text-[#E85D04] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Rising Star Progression</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grow">
          {activeTab === 'calculator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sliders (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Annual Gross Travel Sales
                    </label>
                    <span className="text-base font-extrabold text-[#0C1E3A] tabular-nums">
                      ${annualSales.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={2500000}
                    step={25000}
                    value={annualSales}
                    onChange={(e) => setAnnualSales(Number(e.target.value))}
                    className="w-full accent-[#E85D04] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>$100,000</span>
                    <span>$1,000,000</span>
                    <span>$2,500,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Average Supplier Commission Rate
                    </label>
                    <span className="text-base font-extrabold text-[#0C1E3A] tabular-nums">
                      {supplierCommissionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={16}
                    step={0.5}
                    value={supplierCommissionRate}
                    onChange={(e) => setSupplierCommissionRate(Number(e.target.value))}
                    className="w-full accent-[#E85D04] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>8% (Standard Air/Hotel)</span>
                    <span>12% (Vacations/Cruise)</span>
                    <span>16% (Top Preferred)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Your TTAND Plan Commission Split
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[80, 90, 100].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setTtandTier(tier)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                          ttandTier === tier
                            ? 'bg-[#0C1E3A] text-white border-[#0C1E3A]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {tier}% Plan
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-slate-700 leading-relaxed">
                  💡 <strong>TTAND Advantage:</strong> On preferred suppliers, TTAND passes through up to 100% of the commission with zero monthly desk fees and zero IT deductions.
                </div>
              </div>

              {/* Net Earnings Output Card (Right) */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Your Projected Net Payout
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums">
                    ${ttandAnnualEarnings.toLocaleString()}
                  </div>
                  <span className="text-xs text-slate-400">per year with TTAND</span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Total Supplier Commission:</span>
                    <span className="text-white font-medium tabular-nums">${totalGrossSupplierCommission.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Competitor Model (80% - fees):</span>
                    <span className="text-slate-300 font-medium tabular-nums">${competitorAnnualEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-amber-400 font-bold pt-2 border-t border-slate-800">
                    <span>Extra in your pocket:</span>
                    <span className="text-base tabular-nums">+${extraEarningsWithTTAND.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#E85D04] hover:bg-[#D04F00] text-white text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  Review Your Custom Pro Forma
                </button>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Use this 7-point checklist when evaluating Canadian host agencies. TTAND is proud of our complete transparency.
              </p>

              <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-start justify-between gap-4 bg-white hover:bg-slate-50">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>TTAND: YES</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'risingstar' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                The TTAND Rising Star progression rewards advisors as their booking volume scales, providing bonus supplier perks, conference invites, and executive club status.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-bold text-[#E85D04] uppercase">Level 1</div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Rising Star</h4>
                  <p className="text-xs text-slate-600 mt-1">$250K - $500K Gross Sales</p>
                  <ul className="mt-3 text-xs text-slate-500 space-y-1">
                    <li>✓ National conference invitation</li>
                    <li>✓ Preferred supplier bonus overrides</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
                  <div className="text-xs font-bold text-blue-700 uppercase">Level 2</div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Director's Club</h4>
                  <p className="text-xs text-slate-600 mt-1">$500K - $1M Gross Sales</p>
                  <ul className="mt-3 text-xs text-slate-500 space-y-1">
                    <li>✓ VIP supplier executive access</li>
                    <li>✓ Dedicated ticketing specialist</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60">
                  <div className="text-xs font-bold text-amber-700 uppercase">Level 3</div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">President's Club</h4>
                  <p className="text-xs text-slate-600 mt-1">$1M+ Gross Sales</p>
                  <ul className="mt-3 text-xs text-slate-500 space-y-1">
                    <li>✓ All-inclusive luxury retreat trip</li>
                    <li>✓ 100% preferred commission split</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
