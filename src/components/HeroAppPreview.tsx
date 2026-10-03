import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingUp, 
  Flame, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  PieChart, 
  Bell, 
  Search, 
  Play, 
  Pause,
  CheckCircle2
} from 'lucide-react';
export default function HeroAppPreview() {
  const [activeTab, setActiveTab] = useState<'networth' | 'spends' | 'fire'>('networth');
  const [timeRange, setTimeRange] = useState<'1D' | '1W' | '1M' | '1Y' | 'ALL'>('1M');
  const [showUpiAlert, setShowUpiAlert] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Sparkline data corresponding to Fast Budget precision data points
  const timeSeries = {
    '1D': { val: '₹ 1,42,80,000', change: '+₹14,200 (+0.10%) Today', path: 'M0,55 C40,50 80,60 120,40 C160,25 200,38 240,18 C280,12 320,24 360,6' },
    '1W': { val: '₹ 1,42,80,000', change: '+₹46,800 (+0.33%) Past 7 Days', path: 'M0,65 C50,58 100,70 150,42 C200,32 250,48 300,18 C330,12 360,6' },
    '1M': { val: '₹ 1,42,80,000', change: '+₹1,84,000 (+1.31%) This Month', path: 'M0,75 C40,70 80,58 120,62 C160,42 200,48 240,26 C280,18 320,12 360,6' },
    '1Y': { val: '₹ 1,42,80,000', change: '+₹14,20,000 (+11.1%) Past Year', path: 'M0,85 C60,80 120,65 180,52 C240,38 300,22 360,6' },
    'ALL': { val: '₹ 1,42,80,000', change: '+14.2% Annualized True IRR', path: 'M0,90 C50,82 100,68 150,56 C200,42 250,28 300,16 360,6' },
  };

  // Auto-cycle through features if user hasn't intervened
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'networth') return 'spends';
        if (prev === 'spends') return 'fire';
        return 'networth';
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const triggerDynamicAlert = () => {
    setIsAutoCycling(false);
    setShowUpiAlert(true);
    setTimeout(() => setShowUpiAlert(false), 3600);
  };

  return (
    <div className="relative max-w-6xl mx-auto my-16 px-4">
      {/* Background Soft Blobs following Fast Budget v2_blob specifications */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[rgba(13,92,191,0.06)] blur-3xl pointer-events-none animate-blob-slow" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[rgba(227,82,52,0.06)] blur-3xl pointer-events-none animate-blob-slow" style={{ animationDelay: '-6s' }} />

      {/* Floating Control Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
          {(['networth', 'spends', 'fire'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setIsAutoCycling(false); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize ${
                activeTab === tab
                  ? 'shadow-[var(--shadow-neo-base)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                  : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
              }`}
            >
              {tab === 'networth' ? 'Net Worth' : tab === 'spends' ? 'Spends' : 'FIRE Date'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={triggerDynamicAlert}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-inset)] text-xs font-bold text-[var(--color-accent-blue)] bg-[var(--color-bg-base)] transition-all cursor-pointer"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Simulate UPI Alert</span>
          </button>

          <button
            onClick={() => setIsAutoCycling(!isAutoCycling)}
            className="p-2 rounded-xl shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-inset)] text-xs font-bold text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-all cursor-pointer bg-[var(--color-bg-base)]"
            title={isAutoCycling ? 'Pause feature rotation' : 'Resume feature rotation'}
          >
            {isAutoCycling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Floating Centerpiece Stage */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

        {/* LEFT FLOATING ORBIT CARD: 14.2% True IRR & On-Device Security */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:block w-72 space-y-5 select-none"
        >
          {/* Card 1: On-Device Regex */}
          <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-fb-sm)] border border-white/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-blue)] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Sandboxed Local Engine
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">0.38s</span>
            </div>
            <h4 className="text-sm font-bold text-[var(--color-fg-primary)]">Parsed on your phone</h4>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              Account numbers, signatures and emails stripped before anything is recorded. Never sent to remote LLM servers.
            </p>
          </div>

          {/* Card 2: Asset Consolidation */}
          <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-fb-md)] border border-white/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> AMFI & CDSL Sync
              </span>
              <span className="text-[10px] font-bold text-stone-700">+14.2% IRR</span>
            </div>
            <h4 className="text-sm font-bold text-[var(--color-fg-primary)]">₹ 1.42 Cr Net Worth</h4>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              Mutual funds, Zerodha demat, PPF, and Gold tranches roll into one honest trendline with zero sales pitch.
            </p>
          </div>
        </motion.div>

        {/* CENTER: THE FLOATING IPHONE MOCKUP */}
        <div className="relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[rgba(13,92,191,0.25)] via-[rgba(227,82,52,0.2)] to-transparent rounded-[64px] blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

          {/* The Phone Chassis with Fast Budget Floating Physics */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 0.4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[330px] sm:w-[370px] h-[700px] rounded-[54px] bg-stone-900 p-3 shadow-[var(--shadow-phone-float)] ring-1 ring-white/20 select-none cursor-default"
          >
            {/* Titanium Chassis Rim */}
            <div className="absolute inset-0 rounded-[54px] border-2 border-stone-700/60 pointer-events-none" />

            {/* Inner Display Canvas */}
            <div className="w-full h-full rounded-[44px] bg-[var(--color-bg-base)] overflow-hidden flex flex-col relative text-[var(--color-fg-primary)] font-sans">
              
              {/* TOP STATUS BAR */}
              <div className="pt-3 px-6 flex justify-between items-center z-40 shrink-0">
                <span className="text-xs font-bold font-sans">9:41</span>

                {/* DYNAMIC ISLAND WITH EXPANDABLE ANIMATION */}
                <div className="relative">
                  <motion.div
                    animate={showUpiAlert ? { width: 220, height: 38 } : { width: 96, height: 26 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 350 }}
                    onClick={triggerDynamicAlert}
                    className="bg-black rounded-full mx-auto flex items-center justify-between px-3 cursor-pointer overflow-hidden shadow-lg shadow-black/30"
                  >
                    {showUpiAlert ? (
                      <div className="w-full flex items-center justify-between text-white text-[10px] animate-in fade-in duration-200">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-bold">Swiggy UPI</span>
                        </div>
                        <span className="font-extrabold text-amber-300">-₹480</span>
                      </div>
                    ) : (
                      <div className="w-full flex items-center justify-between">
                        <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
                        <div className="w-2 h-2 rounded-full bg-blue-900/80" />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Connectivity */}
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-[10px] font-bold">5G</span>
                  <div className="w-5 h-2.5 rounded-sm border border-stone-800 p-0.5 flex items-center">
                    <div className="w-full h-full bg-stone-800 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* IN-APP HEADER */}
              <div className="px-5 pt-3 pb-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] flex items-center justify-center font-bold text-xs text-[var(--color-accent)]">
                    TM
                  </div>
                  <div>
                    <div className="text-[9px] text-[var(--color-fg-muted)] font-bold uppercase tracking-wider">TLDR Money</div>
                    <div className="text-xs font-extrabold capitalize">{activeTab === 'networth' ? 'Net Worth Engine' : activeTab === 'spends' ? 'Real-Time Spends' : 'FIRE Freedom Projection'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={triggerDynamicAlert}
                    className="w-7 h-7 rounded-full shadow-[var(--shadow-neo-sm)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] text-xs cursor-pointer"
                    title="Simulate UPI Notification"
                  >
                    <Bell className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-7 h-7 rounded-full shadow-[var(--shadow-neo-sm)] flex items-center justify-center text-[var(--color-fg-muted)] text-xs">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* SCREEN CONTENT AREA */}
              <div className="flex-1 overflow-y-auto px-5 py-1 space-y-4 scrollbar-none">
                <AnimatePresence mode="wait">
                  {/* TAB 1: NET WORTH OVERVIEW */}
                  {activeTab === 'networth' && (
                      <motion.div
                        key="networth-tab"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                            Consolidated Net Worth
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mt-0.5 text-[var(--color-fg-primary)]">
                            {timeSeries[timeRange].val}
                          </h2>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-[10px] font-extrabold text-emerald-700 mt-1.5">
                            <ArrowUpRight className="w-3 h-3" />
                            <span>{timeSeries[timeRange].change}</span>
                          </div>
                        </div>

                        {/* Sparkline Curve */}
                        <div className="h-24 w-full relative flex items-end pt-1">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 360 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="heroCurveGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#E35234" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#E35234" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <motion.path
                              d={timeSeries[timeRange].path}
                              fill="none"
                              stroke="#E35234"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.7 }}
                            />
                          </svg>
                        </div>

                        {/* Interactive Timeframe Chips */}
                        <div className="flex items-center justify-between px-1 py-1 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
                          {(['1D', '1W', '1M', '1Y', 'ALL'] as const).map((r) => (
                            <button
                              key={r}
                              onClick={() => { setTimeRange(r); setIsAutoCycling(false); }}
                              className={`px-3 py-1 rounded-xl text-[10px] font-extrabold transition-all cursor-pointer ${
                                timeRange === r
                                  ? 'shadow-[var(--shadow-neo-base)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                                  : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>

                        {/* Asset Summary Cards */}
                        <div className="space-y-2 pt-1">
                          <div className="flex justify-between items-center text-[10px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider">
                            <span>Holdings</span>
                            <span>Live Return</span>
                          </div>
                          {[
                            { name: 'Equity Mutual Funds', amt: '₹ 78.4 L', share: '55%', return: '+15.2%', badge: 'CAMS CAS' },
                            { name: 'Zerodha Demat Equities', amt: '₹ 22.1 L', share: '15%', return: '+18.4%', badge: 'Kite API' },
                            { name: 'EPFO Provident Fund', amt: '₹ 28.5 L', share: '20%', return: '8.15%', badge: 'Passbook' },
                          ].map((item, idx) => (
                            <div key={idx} className="p-2.5 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] flex items-center justify-between">
                              <div>
                                <span className="font-bold text-xs block">{item.name}</span>
                                <span className="text-[9px] text-[var(--color-fg-muted)]">{item.badge} • {item.share}</span>
                              </div>
                              <div className="text-right">
                                <span className="font-extrabold text-xs block">{item.amt}</span>
                                <span className="text-[10px] text-emerald-600 font-bold">{item.return}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: SPENDS FEED */}
                    {activeTab === 'spends' && (
                      <motion.div
                        key="spends-tab"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                            This Month's Burn Rate
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mt-0.5 text-[var(--color-fg-primary)]">
                            ₹ 48,250
                          </h2>
                          <span className="text-[10px] text-emerald-700 font-bold block mt-1">
                            ✓ 28 receipts parsed locally on device
                          </span>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                            Today's Activity
                          </span>
                          {[
                            { title: 'Swiggy Food', cat: 'Dining', amt: '-₹480', time: '2m ago' },
                            { title: 'Uber Premier', cat: 'Commute', amt: '-₹340', time: '1h ago' },
                            { title: 'Blue Tokai Cafe', cat: 'Beverages', amt: '-₹240', time: '4h ago' },
                            { title: 'HDFC Salary Credit', cat: 'Income', amt: '+₹1,85,000', time: 'Yesterday' },
                          ].map((tx, idx) => (
                            <div key={idx} className="p-2.5 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-xs font-extrabold ${tx.amt.startsWith('+') ? 'text-emerald-600' : 'text-[var(--color-accent)]'}`}>
                                  {tx.amt.startsWith('+') ? <ArrowDownLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                                </div>
                                <div>
                                  <span className="font-bold text-xs block">{tx.title}</span>
                                  <span className="text-[9px] text-[var(--color-fg-muted)]">{tx.cat} • {tx.time}</span>
                                </div>
                              </div>
                              <span className={`font-extrabold text-xs ${tx.amt.startsWith('+') ? 'text-emerald-700' : 'text-[var(--color-fg-primary)]'}`}>
                                {tx.amt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 3: FIRE FREEDOM DATE */}
                    {activeTab === 'fire' && (
                      <motion.div
                        key="fire-tab"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block">
                            Projected Freedom Year
                          </span>
                          <h2 className="text-3xl font-display font-extrabold tracking-tight mt-0.5 text-[var(--color-fg-primary)]">
                            Year 2034
                          </h2>
                          <span className="text-[10px] text-[var(--color-fg-muted)] block mt-0.5">
                            8 yrs, 2 mos until work is optional
                          </span>
                        </div>

                        {/* Progress Bar Widget */}
                        <div className="p-3.5 rounded-2xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] space-y-2">
                          <div className="flex justify-between text-xs font-bold">
                            <span>Target: ₹1.8 Cr (30x)</span>
                            <span className="text-[var(--color-accent)]">68% Done</span>
                          </div>
                          <div className="w-full h-2.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] overflow-hidden p-0.5 bg-[var(--color-bg-base)]">
                            <div className="h-full bg-[var(--color-accent)] rounded-full w-[68%]" />
                          </div>
                          <span className="text-[9px] text-[var(--color-fg-muted)] block">
                            6% inflation & 3.33% safe withdrawal rate
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-2xl shadow-[var(--shadow-neo-sm)] text-center">
                            <span className="text-[9px] font-bold text-emerald-700 block">Lean FIRE</span>
                            <span className="text-xs font-extrabold block mt-0.5">₹ 1.2 Cr</span>
                          </div>
                          <div className="p-2.5 rounded-2xl shadow-[var(--shadow-neo-sm)] text-center">
                            <span className="text-[9px] font-bold text-amber-700 block">Fat FIRE</span>
                            <span className="text-xs font-extrabold block mt-0.5">₹ 2.6 Cr</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>

              {/* BOTTOM NAVIGATION DOCK */}
              <div className="px-6 py-2.5 border-t border-stone-300/40 bg-[var(--color-bg-base)] shrink-0 flex items-center justify-between z-30">
                <button
                  onClick={() => { setActiveTab('networth'); setIsAutoCycling(false); }}
                  className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    activeTab === 'networth' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                  }`}
                >
                  <PieChart className="w-4 h-4" />
                  <span className="text-[9px] font-extrabold">Net Worth</span>
                </button>

                <button
                  onClick={() => { setActiveTab('spends'); setIsAutoCycling(false); }}
                  className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    activeTab === 'spends' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span className="text-[9px] font-extrabold">Spends</span>
                </button>

                <button
                  onClick={() => { setActiveTab('fire'); setIsAutoCycling(false); }}
                  className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    activeTab === 'fire' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  <span className="text-[9px] font-extrabold">FIRE</span>
                </button>
              </div>

              {/* Home Indicator */}
              <div className="pb-1.5 pt-0.5 flex justify-center bg-[var(--color-bg-base)]">
                <div className="w-28 h-1 rounded-full bg-stone-700/60" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT FLOATING ORBIT CARD: FIRE Date & Zero Ads */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hidden lg:block w-72 space-y-5 select-none"
        >
          {/* Card 3: 30x FIRE Formula */}
          <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-fb-sm)] border border-white/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> 30x Multiplier
              </span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full">Target 2034</span>
            </div>
            <h4 className="text-sm font-bold text-[var(--color-fg-primary)]">Work is optional</h4>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              Calculates your personal freedom number based on your live burn rate, factoring in 6% Indian inflation.
            </p>
          </div>

          {/* Card 4: Honest Subscription Model */}
          <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-fb-md)] border border-white/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pure Subscription
              </span>
              <span className="text-[10px] font-bold text-emerald-800">Zero Kickbacks</span>
            </div>
            <h4 className="text-sm font-bold text-[var(--color-fg-primary)]">No credit card push</h4>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              No lending arms, no mutual fund distributor cuts, no spam calls. You are the customer, not the lead.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
