import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Flame, 
  MousePointer
} from 'lucide-react';

interface InteractiveFeatureDemoProps {
  demoId?: 'expenses' | 'networth' | 'fire';
}

export default function InteractiveFeatureDemo({ demoId = 'expenses' }: InteractiveFeatureDemoProps) {
  const [selectedDemo, setSelectedDemo] = useState<'expenses' | 'networth' | 'fire'>(demoId);
  
  // Auto-play / step state
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoPlayTimerRef = useRef<any>(null);
  const itemCounterRef = useRef(100);

  // Demo 1 State (Expenses)
  const [selectedMerchant, setSelectedMerchant] = useState('Swiggy Food');
  const [expenseAmount, setExpenseAmount] = useState(480);
  const [expenseCategory, setExpenseCategory] = useState('Food & Dining');
  const [totalToday, setTotalToday] = useState(1420);
  const [recentFeed, setRecentFeed] = useState([
    { id: 1, name: 'Swiggy Food', amount: 480, category: 'Food & Dining', time: 'Just now' },
    { id: 2, name: 'Uber Premier', amount: 340, category: 'Commute', time: '1h ago' },
    { id: 3, name: 'Blue Tokai Cafe', amount: 240, category: 'Cafe', time: '3h ago' },
  ]);

  // Demo 2 State (Net Worth)
  const [activeAssetTab, setActiveAssetTab] = useState<'all' | 'mf' | 'stocks' | 'epf' | 'sgb'>('all');
  const portfolioValue = 14280000;

  // Demo 3 State (FIRE)
  const [fireMonthlySpend, setFireMonthlySpend] = useState(65000);
  const [fireTier, setFireTier] = useState<'lean' | 'standard' | 'fat'>('standard');

  // Compute virtual cursor position purely from state
  const cursorPos = useMemo(() => {
    if (selectedDemo === 'expenses') {
      if (currentStep === 1) return { x: 30, y: 25, opacity: 1, clicked: false };
      if (currentStep === 2) return { x: 45, y: 40, opacity: 1, clicked: true };
      if (currentStep === 3) return { x: 70, y: 55, opacity: 1, clicked: false };
      return { x: 60, y: 75, opacity: 0.8, clicked: false };
    }
    if (selectedDemo === 'networth') {
      if (currentStep === 1) return { x: 25, y: 35, opacity: 1, clicked: false };
      if (currentStep === 2) return { x: 40, y: 45, opacity: 1, clicked: true };
      if (currentStep === 3) return { x: 65, y: 45, opacity: 1, clicked: true };
      return { x: 80, y: 45, opacity: 1, clicked: false };
    }
    // fire
    if (currentStep === 1) return { x: 35, y: 30, opacity: 1, clicked: false };
    if (currentStep === 2) return { x: 50, y: 45, opacity: 1, clicked: true };
    if (currentStep === 3) return { x: 70, y: 45, opacity: 1, clicked: true };
    return { x: 55, y: 70, opacity: 1, clicked: false };
  }, [currentStep, selectedDemo]);

  // Auto-advance steps if playing and not paused by user
  useEffect(() => {
    if (!isPlaying || userInteracted) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentStep(prev => (prev >= 4 ? 1 : prev + 1));
    }, 3800);

    return () => clearInterval(autoPlayTimerRef.current);
  }, [isPlaying, userInteracted, selectedDemo]);

  // Interactive merchant simulator trigger
  const handleSimulateSpend = (name: string, amt: number, cat: string) => {
    setUserInteracted(true);
    setIsPlaying(false);
    setSelectedMerchant(name);
    setExpenseAmount(amt);
    setExpenseCategory(cat);
    
    itemCounterRef.current += 1;
    const newItem = {
      id: itemCounterRef.current,
      name,
      amount: amt,
      category: cat,
      time: 'Just now'
    };
    setRecentFeed(prev => [newItem, ...prev.slice(0, 3)]);
    setTotalToday(prev => prev + amt);
  };

  // Reset demo
  const handleReset = () => {
    setUserInteracted(false);
    setIsPlaying(true);
    setCurrentStep(1);
    setTotalToday(1420);
    setActiveAssetTab('all');
    setFireMonthlySpend(65000);
    setFireTier('standard');
  };

  // Computed FIRE target
  const annualExpense = fireMonthlySpend * 12;
  const regularCorpus = annualExpense * 30;
  const leanCorpus = annualExpense * 22;
  const fatCorpus = annualExpense * 40;
  const currentCorpus = fireTier === 'lean' ? leanCorpus : fireTier === 'fat' ? fatCorpus : regularCorpus;
  const targetYear = 2026 + Math.max(3, Math.round((currentCorpus - 1500000) / (annualExpense * 0.75)));

  const formatRupees = (amount: number) => {
    if (amount >= 10000000) return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000) return `₹ ${(amount / 100000).toFixed(2)} L`;
    return `₹ ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-2 sm:px-4">
      {/* Feature Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-2 border-b border-stone-300/40">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => { setSelectedDemo('expenses'); handleReset(); }}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
              selectedDemo === 'expenses'
                ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)] bg-[var(--color-bg-base)]'
            }`}
          >
            <Zap className="w-4 h-4 text-[var(--color-accent)]" />
            1. Automated UPI Tracker
          </button>

          <button
            onClick={() => { setSelectedDemo('networth'); handleReset(); }}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
              selectedDemo === 'networth'
                ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)] bg-[var(--color-bg-base)]'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
            2. Net Worth Engine
          </button>

          <button
            onClick={() => { setSelectedDemo('fire'); handleReset(); }}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
              selectedDemo === 'fire'
                ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)] bg-[var(--color-bg-base)]'
            }`}
          >
            <Flame className="w-4 h-4 text-[var(--color-accent)]" />
            3. FIRE Freedom Date
          </button>
        </div>

        {/* Demo Playback & Interactive Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setIsPlaying(!isPlaying); setUserInteracted(false); }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-inset)] text-xs font-bold text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-all cursor-pointer bg-[var(--color-bg-base)]"
            title={isPlaying ? 'Pause Auto Animation' : 'Play Auto Animation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Auto' : 'Auto Play'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-inset)] text-xs font-bold text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-all cursor-pointer bg-[var(--color-bg-base)]"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div className="p-6 md:p-10 rounded-[44px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50 relative overflow-hidden">
        
        {/* Step-by-Step Interactive Workflow Breadcrumbs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { step: 1, label: selectedDemo === 'expenses' ? '1. Incoming Alert' : selectedDemo === 'networth' ? '1. CAMS e-CAS Sync' : '1. Spends Baseline', desc: selectedDemo === 'expenses' ? 'Email alert from HDFC' : selectedDemo === 'networth' ? 'Consolidated statement' : '₹65,000/mo spend' },
            { step: 2, label: selectedDemo === 'expenses' ? '2. Device Parser' : selectedDemo === 'networth' ? '2. Daily NAV Feed' : '2. 6% Inflation SWR', desc: selectedDemo === 'expenses' ? 'Personal PII stripped' : selectedDemo === 'networth' ? 'Official AMFI valuation' : '30x India standard' },
            { step: 3, label: selectedDemo === 'expenses' ? '3. Auto-Category' : selectedDemo === 'networth' ? '3. Asset Slicing' : '3. Lean vs Fat Tiers', desc: selectedDemo === 'expenses' ? 'Swiggy → Food & Dining' : selectedDemo === 'networth' ? 'Liquid vs illiquid' : 'Pick your target' },
            { step: 4, label: selectedDemo === 'expenses' ? '4. Live Dashboard' : selectedDemo === 'networth' ? '4. +14.2% IRR' : '4. Target: 2034', desc: selectedDemo === 'expenses' ? '₹1,900 today total' : selectedDemo === 'networth' ? 'One verified trend' : 'Work is optional' },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => { setCurrentStep(item.step); setUserInteracted(false); }}
              className={`p-3.5 rounded-2xl transition-all cursor-pointer ${
                currentStep === item.step
                  ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                  : 'shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-extrabold ${currentStep === item.step ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'}`}>
                  {item.label}
                </span>
                {currentStep === item.step && (
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
                )}
              </div>
              <span className="text-[11px] text-[var(--color-fg-muted)] leading-tight block">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* DEMO 1: Automated Expenses Workflow */}
        {selectedDemo === 'expenses' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Controller & Step visualizer */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Step {currentStep} of 4: {currentStep === 1 ? 'Alert Arrives' : currentStep === 2 ? 'Local Sandboxed Parsing' : currentStep === 3 ? 'Auto Categorization' : 'Instant Feed Reflection'}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--color-fg-primary)]">
                  Watch a UPI payment turn into a tracked spend in 0.4s.
                </h3>
              </div>

              {/* Action → Response → Result Sequence Box */}
              <div className="p-5 rounded-3xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] space-y-3.5">
                <div className="flex items-center justify-between text-xs font-extrabold">
                  <span className="text-[var(--color-fg-muted)] uppercase tracking-wider">Simulated Pipeline:</span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Device-Local Regex (Zero Cloud API)
                  </span>
                </div>

                {/* Step 1 highlight */}
                <div className={`p-3.5 rounded-2xl transition-all ${currentStep === 1 ? 'shadow-[var(--shadow-neo-base)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]' : 'opacity-60'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] block">1. User Action / Trigger</span>
                  <div className="text-xs font-medium text-[var(--color-fg-primary)] mt-0.5">
                    HDFC Bank sends alert: <code className="bg-black/5 px-2 py-0.5 rounded text-stone-800">INR {expenseAmount} debited to {selectedMerchant}</code>
                  </div>
                </div>

                {/* Step 2 highlight */}
                <div className={`p-3.5 rounded-2xl transition-all ${currentStep === 2 ? 'shadow-[var(--shadow-neo-base)] border border-emerald-500/40 bg-[var(--color-bg-base)]' : 'opacity-60'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">2. App Response</span>
                  <div className="text-xs font-medium text-[var(--color-fg-primary)] mt-0.5">
                    Parser extracts amount (₹{expenseAmount}) and strips card CVV, account numbers, and email headers in-memory.
                  </div>
                </div>

                {/* Step 3 & 4 highlight */}
                <div className={`p-3.5 rounded-2xl transition-all ${currentStep >= 3 ? 'shadow-[var(--shadow-neo-base)] border border-amber-500/40 bg-[var(--color-bg-base)]' : 'opacity-60'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">3 & 4. Final Result</span>
                  <div className="text-xs font-medium text-[var(--color-fg-primary)] mt-0.5">
                    Saved as <strong className="text-[var(--color-accent)]">{selectedMerchant}</strong> in <strong className="text-stone-900">{expenseCategory}</strong>. Today's total increments to <strong>₹{totalToday.toLocaleString('en-IN')}</strong>.
                  </div>
                </div>
              </div>

              {/* Interactive Test Selector */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg-muted)] block mb-2.5">
                  Try it yourself — Click any test merchant below:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'Swiggy Food', amt: 480, cat: 'Food & Dining' },
                    { name: 'Uber Premier', amt: 340, cat: 'Commute' },
                    { name: 'Blue Tokai Cafe', amt: 240, cat: 'Cafe' },
                    { name: 'Zepto Quick', amt: 190, cat: 'Groceries' },
                  ].map((m) => (
                    <button
                      key={m.name}
                      onClick={() => handleSimulateSpend(m.name, m.amt, m.cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedMerchant === m.name
                          ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                          : 'shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] text-[var(--color-fg-primary)] bg-[var(--color-bg-base)]'
                      }`}
                    >
                      {m.name} (₹{m.amt})
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Mini Feed */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-fg-muted)] block">
                  Simulated Live Feed:
                </span>
                <div className="space-y-1.5">
                  {recentFeed.slice(0, 3).map((item) => (
                    <div key={item.id} className="p-2.5 rounded-xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] flex justify-between items-center text-xs">
                      <span className="font-semibold">{item.name}</span>
                      <span className="font-extrabold text-[var(--color-accent)]">₹{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Realistic App Mockup with Real Screenshot & Visual Callouts */}
            <div className="lg:col-span-6 relative">
              <div className="p-4 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50 relative overflow-hidden group">
                <div className="rounded-[28px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
                  <img
                    src="/src/assets/images/expense_feed_ui_1790949127767.jpg"
                    alt="TLDR Money Expense Tracker Interface"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Animated Callout Badge 1: Top Bar */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute top-4 left-4 bg-[var(--color-bg-base)]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] border border-white/40 text-[11px] font-bold text-[var(--color-fg-primary)] flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Auto-Synced: 90-Day Backfill</span>
                  </motion.div>

                  {/* Animated Callout Badge 2: Floating Result Tag */}
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-6 right-6 bg-[var(--color-bg-base)]/95 backdrop-blur-md p-3 rounded-2xl shadow-[var(--shadow-neo-base)] border border-white/50 max-w-[210px]"
                  >
                    <span className="text-[10px] uppercase font-extrabold text-[var(--color-accent)] block">
                      Live Spend Metric
                    </span>
                    <span className="text-sm font-extrabold block text-[var(--color-fg-primary)]">
                      ₹{totalToday.toLocaleString('en-IN')} Total Today
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                      ✓ No credit cards pushed
                    </span>
                  </motion.div>

                  {/* Virtual Animated Cursor Indicator */}
                  {!userInteracted && isPlaying && (
                    <motion.div
                      animate={{
                        x: `${cursorPos.x}%`,
                        y: `${cursorPos.y}%`,
                        scale: cursorPos.clicked ? 0.85 : 1,
                      }}
                      transition={{ ease: 'easeInOut', duration: 0.6 }}
                      className="absolute pointer-events-none z-20"
                      style={{ top: 0, left: 0 }}
                    >
                      <div className="relative">
                        <MousePointer className="w-6 h-6 text-stone-900 fill-[var(--color-accent)] drop-shadow-md" />
                        {cursorPos.clicked && (
                          <span className="absolute -inset-2 rounded-full bg-[var(--color-accent)]/40 animate-ping" />
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DEMO 2: Consolidated Net Worth Workflow */}
        {selectedDemo === 'networth' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Step {currentStep} of 4: {currentStep === 1 ? 'Importing Statements' : currentStep === 2 ? 'Official NAV Feed' : currentStep === 3 ? 'Asset Slicing' : 'Annualized IRR Valuation'}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--color-fg-primary)]">
                  Every asset class aggregated into one honest trendline.
                </h3>
              </div>

              {/* Action → Response → Result Sequence */}
              <div className="p-5 rounded-3xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold">
                  <span className="text-[var(--color-fg-muted)] uppercase tracking-wider">Multi-Asset Engine:</span>
                  <span className="text-emerald-700 font-bold">+14.2% True Portfolio IRR</span>
                </div>

                <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-[var(--color-fg-muted)] font-bold">Consolidated Valuation</span>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                      Live CDSL & AMFI Sync
                    </span>
                  </div>
                  <div className="text-3xl font-display font-extrabold text-[var(--color-fg-primary)]">
                    {formatRupees(portfolioValue)}
                  </div>
                </div>

                {/* Asset Class Filter Toggles */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {[
                    { id: 'mf', label: 'Mutual Funds (55%)', val: '₹ 78.4 L', source: 'CAMS CAS' },
                    { id: 'stocks', label: 'Equities (15%)', val: '₹ 22.1 L', source: 'Zerodha Demat' },
                    { id: 'epf', label: 'EPF & PPF (20%)', val: '₹ 28.5 L', source: 'EPFO Passbook' },
                    { id: 'sgb', label: 'SGB & Gold (10%)', val: '₹ 13.8 L', source: 'RBI Tranche' },
                  ].map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => {
                        setUserInteracted(true);
                        setIsPlaying(false);
                        setActiveAssetTab(asset.id as any);
                      }}
                      className={`p-3 rounded-2xl transition-all cursor-pointer ${
                        activeAssetTab === asset.id
                          ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                          : 'shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-[var(--color-fg-primary)]">{asset.label}</span>
                        <span className="text-[10px] text-[var(--color-accent)] font-extrabold">{asset.val}</span>
                      </div>
                      <span className="text-[10px] text-[var(--color-fg-muted)] mt-1 block">{asset.source}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] text-xs text-[var(--color-fg-muted)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero broker kickbacks or commission distributor models.</span>
              </div>
            </div>

            {/* Right: Net Worth App Screenshot with Visual Hotspots */}
            <div className="lg:col-span-6 relative">
              <div className="p-4 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50 relative overflow-hidden group">
                <div className="rounded-[28px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
                  <img
                    src="/src/assets/images/networth_breakdown_ui_1790949140162.jpg"
                    alt="TLDR Money Net Worth Dashboard Interface"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Pointing Callout 1 */}
                  <div className="absolute top-6 right-6 bg-[var(--color-bg-base)]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-[var(--shadow-neo-base)] border border-white/40 max-w-[190px]">
                    <span className="text-[10px] uppercase font-extrabold text-[var(--color-accent)] block">
                      Liquid vs Illiquid
                    </span>
                    <span className="text-xs font-bold text-[var(--color-fg-primary)] block">
                      68% Liquid / 32% Pension
                    </span>
                  </div>

                  {/* Virtual Cursor */}
                  {!userInteracted && isPlaying && (
                    <motion.div
                      animate={{
                        x: `${cursorPos.x}%`,
                        y: `${cursorPos.y}%`,
                        scale: cursorPos.clicked ? 0.85 : 1,
                      }}
                      transition={{ ease: 'easeInOut', duration: 0.6 }}
                      className="absolute pointer-events-none z-20"
                      style={{ top: 0, left: 0 }}
                    >
                      <MousePointer className="w-6 h-6 text-stone-900 fill-[var(--color-accent)] drop-shadow-md" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DEMO 3: FIRE Freedom Projection Workflow */}
        {selectedDemo === 'fire' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-[var(--color-accent)]">
                  <Flame className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  Step {currentStep} of 4: {currentStep === 1 ? 'Expense Calibration' : currentStep === 2 ? 'Lean FIRE Target' : currentStep === 3 ? 'Fat FIRE Luxury' : 'Freedom Year Recalculation'}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--color-fg-primary)]">
                  Your exact independence date, updated in real time.
                </h3>
              </div>

              {/* Action → Response → Result Sequence */}
              <div className="p-6 rounded-3xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-fg-muted)]">
                    Adjust Monthly Expense:
                  </span>
                  <span className="text-sm font-extrabold font-display px-3 py-1 rounded-xl shadow-[var(--shadow-neo-inset-sm)]">
                    ₹ {fireMonthlySpend.toLocaleString('en-IN')}/mo
                  </span>
                </div>

                <input
                  type="range"
                  min={30000}
                  max={150000}
                  step={5000}
                  value={fireMonthlySpend}
                  onChange={(e) => {
                    setUserInteracted(true);
                    setIsPlaying(false);
                    setFireMonthlySpend(Number(e.target.value));
                  }}
                  className="w-full accent-[var(--color-accent)] cursor-pointer"
                />

                {/* Tier Switcher Buttons */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <button
                    onClick={() => { setUserInteracted(true); setFireTier('lean'); }}
                    className={`p-3 rounded-2xl text-center transition-all cursor-pointer ${
                      fireTier === 'lean'
                        ? 'shadow-[var(--shadow-neo-inset-deep)] border border-emerald-500/40 bg-[var(--color-bg-base)]'
                        : 'shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-emerald-700 block">Lean FIRE</span>
                    <span className="text-xs font-extrabold text-emerald-800">{formatRupees(leanCorpus)}</span>
                  </button>

                  <button
                    onClick={() => { setUserInteracted(true); setFireTier('standard'); }}
                    className={`p-3 rounded-2xl text-center transition-all cursor-pointer ${
                      fireTier === 'standard'
                        ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                        : 'shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-[var(--color-accent)] block">Standard</span>
                    <span className="text-xs font-extrabold text-[var(--color-accent)]">{formatRupees(regularCorpus)}</span>
                  </button>

                  <button
                    onClick={() => { setUserInteracted(true); setFireTier('fat'); }}
                    className={`p-3 rounded-2xl text-center transition-all cursor-pointer ${
                      fireTier === 'fat'
                        ? 'shadow-[var(--shadow-neo-inset-deep)] border border-amber-500/40 bg-[var(--color-bg-base)]'
                        : 'shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-amber-700 block">Fat FIRE</span>
                    <span className="text-xs font-extrabold text-amber-800">{formatRupees(fatCorpus)}</span>
                  </button>
                </div>
              </div>

              {/* Freedom Outcome Badge */}
              <div className="p-5 rounded-3xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-accent)] block">
                    Calculated Freedom Target
                  </span>
                  <span className="text-3xl font-display font-extrabold text-[var(--color-fg-primary)] mt-0.5 block">
                    Year {targetYear}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[var(--color-fg-muted)] block">Required Nest Egg</span>
                  <span className="text-base font-extrabold font-display text-[var(--color-accent)]">
                    {formatRupees(currentCorpus)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Realistic FIRE App Screenshot */}
            <div className="lg:col-span-6 relative">
              <div className="p-4 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50 relative overflow-hidden group">
                <div className="rounded-[28px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
                  <img
                    src="/src/assets/images/fire_calculator_ui_1790949151843.jpg"
                    alt="TLDR Money FIRE Freedom Calculator Interface"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hotspot callout */}
                  <div className="absolute top-6 left-6 bg-[var(--color-bg-base)]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-[var(--shadow-neo-base)] border border-white/40">
                    <span className="text-[10px] uppercase font-extrabold text-[var(--color-accent)] block">
                      Dynamic Safe Withdrawal
                    </span>
                    <span className="text-xs font-bold text-[var(--color-fg-primary)] block">
                      3.33% SWR (India Adjusted)
                    </span>
                  </div>

                  {/* Virtual Cursor */}
                  {!userInteracted && isPlaying && (
                    <motion.div
                      animate={{
                        x: `${cursorPos.x}%`,
                        y: `${cursorPos.y}%`,
                        scale: cursorPos.clicked ? 0.85 : 1,
                      }}
                      transition={{ ease: 'easeInOut', duration: 0.6 }}
                      className="absolute pointer-events-none z-20"
                      style={{ top: 0, left: 0 }}
                    >
                      <MousePointer className="w-6 h-6 text-stone-900 fill-[var(--color-accent)] drop-shadow-md" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
