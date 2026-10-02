import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Flame, 
  Bell, 
  Search, 
  PieChart, 
  Clock, 
  Smartphone
} from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export default function PhoneMockupShowcase() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'spends' | 'fire'>('portfolio');
  const [activeRange, setActiveRange] = useState<'1D' | '1W' | '1M' | '1Y' | 'ALL'>('1M');
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'interactive' | 'screenshot'>('interactive');
  const [showTransactionAlert, setShowTransactionAlert] = useState(false);

  // Timeframe values and simulated chart points
  const chartData = {
    '1D': { value: '₹ 1,42,80,000', change: '+₹12,400 (0.09%) Today', path: 'M0,60 C40,55 80,65 120,40 C160,20 200,35 240,15 C280,10 320,25 360,5' },
    '1W': { value: '₹ 1,42,80,000', change: '+₹48,200 (0.34%) This Week', path: 'M0,70 C50,60 100,75 150,45 C200,30 250,50 300,20 C330,15 360,5' },
    '1M': { value: '₹ 1,42,80,000', change: '+₹1,84,000 (1.3%) This Month', path: 'M0,80 C40,75 80,60 120,65 C160,45 200,50 240,30 C280,20 320,15 360,5' },
    '1Y': { value: '₹ 1,42,80,000', change: '+₹14,20,000 (11.1%) Past Year', path: 'M0,90 C60,85 120,70 180,55 C240,40 300,25 360,5' },
    'ALL': { value: '₹ 1,42,80,000', change: '+14.2% Annualized IRR', path: 'M0,95 C50,85 100,70 150,60 C200,45 250,30 300,20 360,5' }
  };

  const handleTriggerSimulatedAlert = () => {
    setShowTransactionAlert(true);
    setTimeout(() => {
      setShowTransactionAlert(false);
    }, 3500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-20 px-4">
      {/* Section Header with Mobbin / Public.com Inspiration Note */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-4">
          <Smartphone className="w-4 h-4" /> Mobbin Featured Interface • Public.com Style
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4 text-[var(--color-fg-primary)]">
          The iPhone experience. <br className="hidden sm:block" />
          <span className="text-[var(--color-fg-muted)]">Crafted for clarity, speed, and zero fluff.</span>
        </h2>
        <p className="text-base md:text-lg text-[var(--color-fg-muted)]">
          Clean typographic hierarchy, dynamic performance sparklines, and seamless on-device categorization inspired by the best of iOS fintech design.
        </p>

        {/* View Mode Toggle */}
        <div className="inline-flex items-center gap-2 mt-6 p-1.5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
          <button
            onClick={() => setViewMode('interactive')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'interactive'
                ? 'shadow-[var(--shadow-neo-base)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
            }`}
          >
            Live Interactive iPhone
          </button>
          <button
            onClick={() => setViewMode('screenshot')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'screenshot'
                ? 'shadow-[var(--shadow-neo-base)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
            }`}
          >
            Full-Res Screenshot View
          </button>
        </div>
      </div>

      {/* Main Display Stage */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Interactive Guide Callouts */}
        <div className="w-full lg:w-1/3 space-y-5 order-2 lg:order-1">
          <div 
            onClick={() => setActiveTab('portfolio')}
            className={`p-5 rounded-3xl transition-all cursor-pointer ${
              activeTab === 'portfolio'
                ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] bg-[var(--color-bg-base)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-[var(--color-fg-primary)]">Public.com Style Sparkline</h3>
            </div>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              Touch to toggle 1D, 1W, 1M, 1Y, and ALL timeframes. Real-time +14.2% annualized IRR computed across all holdings.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('spends')}
            className={`p-5 rounded-3xl transition-all cursor-pointer ${
              activeTab === 'spends'
                ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] bg-[var(--color-bg-base)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-[var(--color-fg-primary)]">Dynamic Island Transaction Alerts</h3>
            </div>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              When an alert lands, the Dynamic Island expands to show parsed merchant and amount before adding to feed.
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); handleTriggerSimulatedAlert(); }}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent)] hover:underline cursor-pointer"
            >
              Test Dynamic Island Alert <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div 
            onClick={() => setActiveTab('fire')}
            className={`p-5 rounded-3xl transition-all cursor-pointer ${
              activeTab === 'fire'
                ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/40 bg-[var(--color-bg-base)]'
                : 'shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] bg-[var(--color-bg-base)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)]">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-[var(--color-fg-primary)]">FIRE Countdown Widget</h3>
            </div>
            <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
              Live retirement projection bar calculating years to financial independence based on current savings rate.
            </p>
          </div>
        </div>

        {/* Center: The Phone Mockup */}
        <div className="order-1 lg:order-2">
          {viewMode === 'screenshot' ? (
            /* Screenshot Mode */
            <div className="w-[340px] sm:w-[380px] p-4 rounded-[54px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/60">
              <div className="rounded-[44px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
                <img
                  src={APP_IMAGES.publicIosPhone}
                  alt="Public iOS Inspired Mobile Interface"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-[10px] font-bold text-[var(--color-fg-primary)]">
                  Public iOS Design Reference
                </div>
              </div>
            </div>
          ) : (
            /* Live Interactive Phone Frame */
            <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[54px] bg-stone-900 p-3 shadow-2xl shadow-stone-900/40 ring-1 ring-white/20 select-none">
              
              {/* Titanium Bezel Edge Reflections */}
              <div className="absolute inset-0 rounded-[54px] border-2 border-stone-700/50 pointer-events-none" />

              {/* iPhone Screen Area */}
              <div className="w-full h-full rounded-[44px] bg-[var(--color-bg-base)] overflow-hidden flex flex-col relative text-[var(--color-fg-primary)] font-sans">
                
                {/* Status Bar */}
                <div className="pt-3 px-7 flex justify-between items-center z-30 shrink-0">
                  <span className="text-xs font-bold font-sans">9:41</span>
                  
                  {/* Dynamic Island */}
                  <div className="relative">
                    <motion.div 
                      animate={showTransactionAlert ? { width: 220, height: 40 } : { width: 95, height: 26 }}
                      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                      className="bg-black rounded-full mx-auto flex items-center justify-between px-3 cursor-pointer overflow-hidden shadow-md"
                    >
                      {showTransactionAlert ? (
                        <div className="w-full flex items-center justify-between text-white text-[10px] animate-in fade-in duration-200">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-bold">Swiggy UPI</span>
                          </div>
                          <span className="font-extrabold text-amber-300">-₹480</span>
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between">
                          <div className="w-2.5 h-2.5 rounded-full bg-stone-800/80" />
                          <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Battery & Signal */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-[10px] font-bold">5G</span>
                    <div className="w-5 h-2.5 rounded-sm border border-stone-800 p-0.5 flex items-center">
                      <div className="w-full h-full bg-stone-800 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* In-App Header */}
                <div className="px-5 pt-4 pb-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] flex items-center justify-center font-bold text-xs text-[var(--color-accent)]">
                      TM
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--color-fg-muted)] font-bold uppercase tracking-wider">Portfolio</div>
                      <div className="text-xs font-extrabold">All Assets</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleTriggerSimulatedAlert}
                      className="w-8 h-8 rounded-full shadow-[var(--shadow-neo-base)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] text-xs cursor-pointer"
                      title="Trigger UPI Notification"
                    >
                      <Bell className="w-4 h-4" />
                    </button>
                    <div className="w-8 h-8 rounded-full shadow-[var(--shadow-neo-base)] flex items-center justify-center text-[var(--color-fg-muted)] text-xs">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Scrollable Screen Content */}
                <div className="flex-1 overflow-y-auto px-5 py-2 space-y-5 scrollbar-none">
                  
                  {/* TAB 1: PORTFOLIO / OVERVIEW (Public.com style) */}
                  {activeTab === 'portfolio' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Big Balance & Pill */}
                      <div>
                        <span className="text-[11px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                          Consolidated Net Worth
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mt-0.5 text-[var(--color-fg-primary)]">
                          {chartData[activeRange].value}
                        </h1>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-[11px] font-extrabold text-emerald-700 mt-2">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          <span>{chartData[activeRange].change}</span>
                        </div>
                      </div>

                      {/* Interactive Smooth Curve Chart */}
                      <div className="h-28 w-full relative flex items-end pt-2">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 360 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#E35234" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#E35234" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d={chartData[activeRange].path}
                            fill="none"
                            stroke="#E35234"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                          />
                        </svg>
                      </div>

                      {/* Timeframe Chips (1D, 1W, 1M, 1Y, ALL) */}
                      <div className="flex items-center justify-between px-1 py-1 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
                        {(['1D', '1W', '1M', '1Y', 'ALL'] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => setActiveRange(r)}
                            className={`px-3 py-1 rounded-xl text-[10px] font-extrabold transition-all cursor-pointer ${
                              activeRange === r
                                ? 'shadow-[var(--shadow-neo-base)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                                : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>

                      {/* Asset Class Pills Carousel */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[11px] font-bold text-[var(--color-fg-muted)]">
                          <span>Holdings Breakdown</span>
                          <span>Allocation</span>
                        </div>

                        <div className="space-y-2">
                          {[
                            { name: 'Equity Mutual Funds', amt: '₹ 78.4 L', share: '55%', return: '+15.2%', source: 'CAMS CAS' },
                            { name: 'Direct Equities', amt: '₹ 22.1 L', share: '15%', return: '+18.4%', source: 'Zerodha' },
                            { name: 'EPF & PPF Pension', amt: '₹ 28.5 L', share: '20%', return: '8.15%', source: 'EPFO' },
                            { name: 'Sovereign Gold Bonds', amt: '₹ 13.8 L', share: '10%', return: '+12.6%', source: 'RBI' },
                          ].map((item, idx) => (
                            <div 
                              key={idx}
                              onClick={() => setSelectedAsset(selectedAsset === item.name ? null : item.name)}
                              className={`p-3 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                                selectedAsset === item.name
                                  ? 'shadow-[var(--shadow-neo-inset-deep)] border border-[var(--color-accent)]/30 bg-[var(--color-bg-base)]'
                                  : 'shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)]'
                              }`}
                            >
                              <div>
                                <span className="font-bold text-xs block">{item.name}</span>
                                <span className="text-[10px] text-[var(--color-fg-muted)]">{item.source} • {item.share}</span>
                              </div>
                              <div className="text-right">
                                <span className="font-extrabold text-xs block">{item.amt}</span>
                                <span className="text-[10px] text-emerald-600 font-bold">{item.return}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: SPENDS / ACTIVITY */}
                  {activeTab === 'spends' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div>
                        <span className="text-[11px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                          This Month's Burn Rate
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mt-0.5">
                          ₹ 48,250
                        </h1>
                        <span className="text-[11px] text-[var(--color-fg-muted)] block mt-1">
                          28 transactions automatically categorized
                        </span>
                      </div>

                      {/* Transaction List */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-[var(--color-fg-muted)] uppercase tracking-wider block">
                          Recent Activity
                        </span>

                        {[
                          { title: 'Swiggy Food', cat: 'Food & Dining', amt: '-₹480', time: '2m ago', alert: 'HDFC Alert' },
                          { title: 'Uber Premier', cat: 'Commute', amt: '-₹340', time: '1h ago', alert: 'ICICI Alert' },
                          { title: 'Blue Tokai Cafe', cat: 'Beverages', amt: '-₹240', time: '4h ago', alert: 'Axis Alert' },
                          { title: 'HDFC Salary Credit', cat: 'Income', amt: '+₹1,85,000', time: 'Yesterday', alert: 'Direct NEFT' },
                          { title: 'Zerodha Nifty 50 SIP', cat: 'Investment', amt: '-₹25,000', time: '2d ago', alert: 'Auto-Debit' },
                        ].map((tx, i) => (
                          <div key={i} className="p-3 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-xs font-extrabold ${tx.amt.startsWith('+') ? 'text-emerald-600' : 'text-[var(--color-accent)]'}`}>
                                {tx.amt.startsWith('+') ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                              </div>
                              <div>
                                <span className="font-bold text-xs block">{tx.title}</span>
                                <span className="text-[10px] text-[var(--color-fg-muted)]">{tx.cat} • {tx.time}</span>
                              </div>
                            </div>
                            <span className={`font-extrabold text-xs ${tx.amt.startsWith('+') ? 'text-emerald-700' : 'text-[var(--color-fg-primary)]'}`}>
                              {tx.amt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: FIRE PLANNER */}
                  {activeTab === 'fire' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div>
                        <span className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider block">
                          Projected Independence
                        </span>
                        <h1 className="text-3xl font-display font-extrabold tracking-tight mt-0.5">
                          Year 2034
                        </h1>
                        <span className="text-[11px] text-[var(--color-fg-muted)] block mt-1">
                          8 years, 2 months until work is optional
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] space-y-3">
                        <div className="flex justify-between text-xs font-bold">
                          <span>Target: ₹1.8 Cr (30x)</span>
                          <span className="text-[var(--color-accent)]">68% Done</span>
                        </div>
                        <div className="w-full h-3 rounded-full shadow-[var(--shadow-neo-inset-sm)] overflow-hidden p-0.5 bg-[var(--color-bg-base)]">
                          <div className="h-full bg-[var(--color-accent)] rounded-full w-[68%]" />
                        </div>
                        <span className="text-[10px] text-[var(--color-fg-muted)] block">
                          Calculated with 6% annual inflation & 3.33% safe withdrawal rate.
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-2xl shadow-[var(--shadow-neo-sm)] text-center">
                          <span className="text-[10px] font-bold text-emerald-700 block">Lean FIRE</span>
                          <span className="text-xs font-extrabold block mt-0.5">₹ 1.2 Cr</span>
                        </div>
                        <div className="p-3 rounded-2xl shadow-[var(--shadow-neo-sm)] text-center">
                          <span className="text-[10px] font-bold text-amber-700 block">Fat FIRE</span>
                          <span className="text-xs font-extrabold block mt-0.5">₹ 2.6 Cr</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom iOS Navigation Bar (Public.com style) */}
                <div className="px-6 py-3 border-t border-stone-300/40 bg-[var(--color-bg-base)] shrink-0 flex items-center justify-between z-20">
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                      activeTab === 'portfolio' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                    }`}
                  >
                    <PieChart className="w-4 h-4" />
                    <span className="text-[9px] font-extrabold">Net Worth</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('spends')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                      activeTab === 'spends' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span className="text-[9px] font-extrabold">Spends</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('fire')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                      activeTab === 'fire' ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                    }`}
                  >
                    <Flame className="w-4 h-4" />
                    <span className="text-[9px] font-extrabold">FIRE</span>
                  </button>
                </div>

                {/* iPhone Home Indicator Bar */}
                <div className="pb-1.5 pt-0.5 flex justify-center bg-[var(--color-bg-base)]">
                  <div className="w-28 h-1 rounded-full bg-stone-700/60" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
