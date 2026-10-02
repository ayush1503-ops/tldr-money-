import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Flame, 
  CheckCircle2, 
  ShieldCheck, 
  Maximize2,
  RefreshCw,
  Zap
} from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface ShowcaseProps {
  initialTab?: 'expenses' | 'networth' | 'fire';
}

export default function InteractiveFeatureShowcase({ initialTab = 'expenses' }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'expenses' | 'networth' | 'fire'>(initialTab);
  const [simulatedSpends, setSimulatedSpends] = useState([
    { id: 1, merchant: 'Swiggy Food', amount: 480, category: 'Food & Dining', time: '2m ago', alert: 'HDFC UPI Alert: INR 480 paid to Swiggy', bank: 'HDFC' },
    { id: 2, merchant: 'Uber India', amount: 320, category: 'Commute', time: '1h ago', alert: 'ICICI Bank: INR 320 debited for Uber Rides', bank: 'ICICI' },
    { id: 3, merchant: 'Blue Tokai Coffee', amount: 240, category: 'Cafes', time: '4h ago', alert: 'Axis UPI: INR 240 paid to Blue Tokai', bank: 'Axis' },
  ]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<string>('all');
  const [fireMonthlySpend, setFireMonthlySpend] = useState(60000);
  const [showScreenshotModal, setShowScreenshotModal] = useState<string | null>(null);

  // Simulation handler for UPI Transaction alert
  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const sampleAlerts = [
      { merchant: 'Blinkit Grocery', amount: 560, category: 'Groceries', alert: 'SBI UPI: INR 560 debited to Blinkit Quick', bank: 'SBI' },
      { merchant: 'Zepto Quick', amount: 290, category: 'Groceries', alert: 'HDFC Alert: INR 290 paid to Zepto', bank: 'HDFC' },
      { merchant: 'BookMyShow', amount: 720, category: 'Entertainment', alert: 'Axis Bank: INR 720 debited at BookMyShow', bank: 'Axis' },
      { merchant: 'Chai Point', amount: 140, category: 'Beverages', alert: 'ICICI UPI: INR 140 paid to Chai Point', bank: 'ICICI' }
    ];
    const picked = sampleAlerts[Math.floor(Math.random() * sampleAlerts.length)];

    setTimeout(() => {
      setSimulatedSpends(prev => [
        {
          id: Date.now(),
          merchant: picked.merchant,
          amount: picked.amount,
          category: picked.category,
          time: 'Just now',
          alert: picked.alert,
          bank: picked.bank
        },
        ...prev.slice(0, 4)
      ]);
      setIsSimulating(false);
    }, 600);
  };

  // Asset allocation values
  const assetsData = [
    { id: 'mf', name: 'Equity Mutual Funds', value: '₹ 78,40,000', share: '55%', returnRate: '+15.2% IRR', tag: 'CAMS / KFintech CAS' },
    { id: 'stocks', name: 'Direct Equities', value: '₹ 22,10,000', share: '15%', returnRate: '+18.4% IRR', tag: 'Zerodha / CDSL Sync' },
    { id: 'epf', name: 'EPF & PPF Pension', value: '₹ 28,50,000', share: '20%', returnRate: '+8.15% Fixed', tag: 'EPFO Passbook' },
    { id: 'sgb', name: 'Sovereign Gold Bonds', value: '₹ 13,80,000', share: '10%', returnRate: '+12.6% Capital Gain', tag: 'RBI SGB Series' },
  ];

  const totalNetWorth = '₹ 1,42,80,000';

  // FIRE calculation based on monthly spend
  const annualExpense = fireMonthlySpend * 12;
  const regularCorpus = annualExpense * 30; // 30x rule for India
  const leanCorpus = annualExpense * 22;
  const fatCorpus = annualExpense * 40;
  const freedomYear = 2026 + Math.max(4, Math.round((regularCorpus - 1500000) / (annualExpense * 0.8)));

  const formatRupees = (amount: number) => {
    if (amount >= 10000000) return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000) return `₹ ${(amount / 100000).toFixed(2)} L`;
    return `₹ ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="w-full my-12">
      {/* Top Interactive Feature Switcher Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('expenses')}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-bold text-sm transition-all duration-300 cursor-pointer ${
            activeTab === 'expenses'
              ? 'bg-[var(--color-bg-base)] text-[var(--color-accent)] shadow-[var(--shadow-neo-inset-deep)] scale-[1.02]'
              : 'bg-[var(--color-bg-base)] text-[var(--color-fg-muted)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:text-[var(--color-fg-primary)]'
          }`}
        >
          <Zap className="w-4 h-4 text-[var(--color-accent)]" />
          1. Auto UPI Tracking
        </button>

        <button
          onClick={() => setActiveTab('networth')}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-bold text-sm transition-all duration-300 cursor-pointer ${
            activeTab === 'networth'
              ? 'bg-[var(--color-bg-base)] text-[var(--color-accent)] shadow-[var(--shadow-neo-inset-deep)] scale-[1.02]'
              : 'bg-[var(--color-bg-base)] text-[var(--color-fg-muted)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:text-[var(--color-fg-primary)]'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
          2. Net Worth Engine
        </button>

        <button
          onClick={() => setActiveTab('fire')}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-bold text-sm transition-all duration-300 cursor-pointer ${
            activeTab === 'fire'
              ? 'bg-[var(--color-bg-base)] text-[var(--color-accent)] shadow-[var(--shadow-neo-inset-deep)] scale-[1.02]'
              : 'bg-[var(--color-bg-base)] text-[var(--color-fg-muted)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:text-[var(--color-fg-primary)]'
          }`}
        >
          <Flame className="w-4 h-4 text-[var(--color-accent)]" />
          3. FIRE Freedom Date
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 md:p-10 rounded-[40px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/40 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* TAB 1: Auto Expenses Tracking */}
          {activeTab === 'expenses' && (
            <motion.div
              key="expenses-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Interactive Simulation & Proof */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Visual Proof: On-Device Email Parsing
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold leading-tight">
                  Gmail transaction alerts automatically parsed on your device.
                </h3>

                <p className="text-[var(--color-fg-muted)] text-sm md:text-base leading-relaxed">
                  No bank credentials or SMS scraping. When HDFC, ICICI, or Google Pay sends an email receipt, TLDR extracts the merchant and amount on-device, stripping personal identifiers before saving.
                </p>

                {/* Simulation trigger */}
                <div className="p-5 rounded-3xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-fg-muted)] block">
                        Interactive Test Simulator
                      </span>
                      <p className="text-xs text-[var(--color-fg-primary)] font-medium mt-0.5">
                        Simulate an incoming UPI payment alert:
                      </p>
                    </div>

                    <button
                      onClick={triggerSimulation}
                      disabled={isSimulating}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--color-accent)] text-white text-xs font-bold shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] active:shadow-[var(--shadow-neo-inset)] transition-all cursor-pointer disabled:opacity-60 whitespace-nowrap"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                      {isSimulating ? 'Parsing locally...' : 'Send Test UPI Alert'}
                    </button>
                  </div>
                </div>

                {/* Live Activity Stream */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg-muted)] block">
                    Live Parsed Feed (Simulated)
                  </span>

                  {simulatedSpends.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={idx === 0 ? { scale: 0.95, opacity: 0 } : false}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] flex items-center justify-between transition-all hover:shadow-[var(--shadow-neo-hover)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-xs font-extrabold text-[var(--color-accent)]">
                          {item.merchant.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{item.merchant}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-fg-muted)]">
                              {item.category}
                            </span>
                          </div>
                          <span className="text-[11px] text-emerald-700 flex items-center gap-1 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" /> {item.bank} alert parsed • {item.time}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-base font-extrabold font-display text-[var(--color-fg-primary)]">
                          ₹{item.amount}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Actual App Screenshot with interactive expand */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-neo-base)] p-3 bg-[var(--color-bg-base)] group">
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-neo-inset-sm)]">
                    <img
                      src={APP_IMAGES.expenseFeed}
                      alt="TLDR Money Expense Tracker Interface Screenshot"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Screenshot badge */}
                    <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[11px] font-bold text-[var(--color-fg-primary)] flex items-center gap-1.5 border border-white/40">
                      <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                      App Screenshot: Feed & Split Breakdown
                    </div>

                    <button
                      onClick={() => setShowScreenshotModal(APP_IMAGES.expenseFeed)}
                      className="absolute bottom-4 right-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md p-2.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
                      title="View full resolution"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Net Worth Engine */}
          {activeTab === 'networth' && (
            <motion.div
              key="networth-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Interactive Asset Breakdown & Net Worth proof */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  Visual Proof: Consolidated Portfolio
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold leading-tight">
                  One verified valuation across mutual funds, stocks, EPF and gold.
                </h3>

                <p className="text-[var(--color-fg-muted)] text-sm md:text-base leading-relaxed">
                  No copy-pasting numbers into spreadsheet tabs. Consolidated CAS statements from CAMS and KFintech automatically sync alongside your EPF and demat accounts with true IRR calculations.
                </p>

                {/* Net worth highlight card */}
                <div className="p-6 rounded-3xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-fg-muted)] block">
                      Live Consolidated Net Worth
                    </span>
                    <span className="text-3xl md:text-4xl font-display font-extrabold text-[var(--color-fg-primary)] block mt-1">
                      {totalNetWorth}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-xl shadow-[var(--shadow-neo-sm)] text-xs font-bold text-emerald-600 bg-[var(--color-bg-base)]">
                      +14.2% Annualized IRR
                    </span>
                  </div>
                </div>

                {/* Interactive Asset Filter Pills */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg-muted)] block">
                    Click Asset Classes to Inspect Verification Sources:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assetsData.map((asset) => (
                      <div
                        key={asset.id}
                        onClick={() => setSelectedAsset(selectedAsset === asset.id ? 'all' : asset.id)}
                        className={`p-4 rounded-2xl transition-all cursor-pointer ${
                          selectedAsset === asset.id
                            ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                            : 'shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] bg-[var(--color-bg-base)]'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-xs text-[var(--color-fg-primary)]">{asset.name}</span>
                          <span className="text-[11px] font-extrabold text-[var(--color-accent)]">{asset.share}</span>
                        </div>
                        <div className="text-base font-extrabold font-display">{asset.value}</div>
                        <div className="flex justify-between items-center text-[10px] text-[var(--color-fg-muted)] mt-2 pt-2 border-t border-stone-300/40">
                          <span>{asset.tag}</span>
                          <span className="font-bold text-emerald-600">{asset.returnRate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Actual Net Worth Screenshot */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-neo-base)] p-3 bg-[var(--color-bg-base)] group">
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-neo-inset-sm)]">
                    <img
                      src={APP_IMAGES.networthBreakdown}
                      alt="TLDR Money Net Worth Dashboard Screenshot"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[11px] font-bold text-[var(--color-fg-primary)] flex items-center gap-1.5 border border-white/40">
                      <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                      App Screenshot: Asset Allocator & IRR
                    </div>

                    <button
                      onClick={() => setShowScreenshotModal(APP_IMAGES.networthBreakdown)}
                      className="absolute bottom-4 right-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md p-2.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
                      title="View full resolution"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: FIRE Freedom Calculator */}
          {activeTab === 'fire' && (
            <motion.div
              key="fire-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Live FIRE calculation and visual controls */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <Flame className="w-4 h-4 text-[var(--color-accent)]" />
                  Visual Proof: Real-time FIRE Countdown
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold leading-tight">
                  Dynamic freedom date updated with every rupee saved.
                </h3>

                <p className="text-[var(--color-fg-muted)] text-sm md:text-base leading-relaxed">
                  Instead of static rules of thumb from abroad, TLDR adjusts for Indian medical cost escalation, 6% structural inflation, and realistic equity withdrawal glidepaths.
                </p>

                {/* Interactive Slider */}
                <div className="p-6 rounded-3xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-fg-muted)]">
                      Slide Your Monthly Spend
                    </span>
                    <span className="text-base font-extrabold font-display px-3 py-1 rounded-xl shadow-[var(--shadow-neo-inset-sm)]">
                      ₹ {fireMonthlySpend.toLocaleString('en-IN')}/mo
                    </span>
                  </div>

                  <input
                    type="range"
                    min={25000}
                    max={200000}
                    step={5000}
                    value={fireMonthlySpend}
                    onChange={(e) => setFireMonthlySpend(Number(e.target.value))}
                    className="w-full accent-[var(--color-accent)] cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] text-[var(--color-fg-muted)] font-medium">
                    <span>₹25k (Frugal)</span>
                    <span>₹1L (Balanced)</span>
                    <span>₹2L (Abundant)</span>
                  </div>
                </div>

                {/* Dynamic freedom milestone banner */}
                <div className="p-6 rounded-3xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-accent)] block">
                      Target Retirement Year
                    </span>
                    <span className="text-3xl md:text-4xl font-display font-extrabold text-[var(--color-fg-primary)] mt-1 block">
                      {freedomYear}
                    </span>
                    <span className="text-xs text-[var(--color-fg-muted)]">
                      ({freedomYear - 2026} years from today)
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[var(--color-fg-muted)] block">30x Target Corpus</span>
                    <span className="text-lg font-bold font-display text-[var(--color-accent)] mt-0.5 block">
                      {formatRupees(regularCorpus)}
                    </span>
                  </div>
                </div>

                {/* 3 Tier Summary */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]">
                    <span className="text-[10px] font-bold text-emerald-700 block">Lean FIRE</span>
                    <span className="text-xs font-extrabold mt-1 block">{formatRupees(leanCorpus)}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)] border border-[var(--color-accent)]/30">
                    <span className="text-[10px] font-bold text-[var(--color-accent)] block">Standard</span>
                    <span className="text-xs font-extrabold mt-1 block text-[var(--color-accent)]">{formatRupees(regularCorpus)}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]">
                    <span className="text-[10px] font-bold text-amber-700 block">Fat FIRE</span>
                    <span className="text-xs font-extrabold mt-1 block">{formatRupees(fatCorpus)}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Actual FIRE Screenshot */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-neo-base)] p-3 bg-[var(--color-bg-base)] group">
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-neo-inset-sm)]">
                    <img
                      src={APP_IMAGES.fireCalculator}
                      alt="TLDR Money FIRE Calculator Screenshot"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[11px] font-bold text-[var(--color-fg-primary)] flex items-center gap-1.5 border border-white/40">
                      <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                      App Screenshot: Independence Gauge
                    </div>

                    <button
                      onClick={() => setShowScreenshotModal(APP_IMAGES.fireCalculator)}
                      className="absolute bottom-4 right-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md p-2.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
                      title="View full resolution"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-res screenshot lightbox modal */}
      <AnimatePresence>
        {showScreenshotModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowScreenshotModal(null)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[var(--color-bg-base)] p-4 md:p-6 rounded-[36px] shadow-[var(--shadow-neo-base)] z-10 border border-white/40"
            >
              <div className="flex justify-between items-center mb-4 px-2">
                <span className="font-display font-bold text-sm text-[var(--color-fg-primary)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                  TLDR Money High-Resolution Interface Preview
                </span>
                <button
                  onClick={() => setShowScreenshotModal(null)}
                  className="px-3 py-1 rounded-xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-inset)] text-xs font-bold text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-neo-inset-sm)] max-h-[75vh]">
                <img
                  src={showScreenshotModal}
                  alt="High Resolution Screenshot Preview"
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
