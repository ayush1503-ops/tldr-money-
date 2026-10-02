import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Landmark, ShieldCheck, ArrowUpRight, DollarSign } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';

export default function NetWorthTracker() {
  const assets = [
    { title: 'Mutual Funds & ETFs', desc: 'Auto-synced via official CAMS / KFintech consolidated account statements (CAS).', icon: TrendingUp },
    { title: 'Indian & US Equities', desc: 'Holdings imported from Zerodha, Groww, AngelOne, or CDSL/NSDL e-CAS.', icon: Landmark },
    { title: 'EPF, PPF & NPS', desc: 'Track retirement safety nets with accurate compounding interest tracking.', icon: ShieldCheck },
    { title: 'Gold, Sovereign Gold Bonds & Real Estate', desc: 'Physical sovereign gold bond redemption value and conservative property valuations.', icon: DollarSign },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6"
        >
          <PieChart className="w-4 h-4 mr-2" /> Consolidated Net Worth
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight"
        >
          One honest number. <br />
          <span className="text-[var(--color-fg-muted)]">Across every Indian asset class.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          No inflated real estate guesses, no hidden loan omissions. See liquid assets vs illiquid capital, real debt liabilities, and clean monthly progress.
        </motion.p>

        {/* Real App Screenshot Showcase */}
        <div className="max-w-3xl mx-auto my-10 p-4 rounded-[40px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50">
          <div className="rounded-[30px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
            <img
              src="/src/assets/images/networth_breakdown_ui_1790949140162.jpg"
              alt="TLDR Money Net Worth Interface"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-xs font-bold text-[var(--color-fg-primary)] border border-white/40">
              Live Interface • Indian Multi-Asset Consolidated Net Worth
            </div>
          </div>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {assets.map((item, idx) => (
          <div key={idx} className="p-8 rounded-[32px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all">
            <div className="w-14 h-14 rounded-2xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)] mb-6">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
            <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Simulated Net Worth Card */}
      <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[40px] shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-stone-300/40">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-fg-muted)]">Simulated Portfolio</span>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold mt-1">₹ 1,42,80,000</h3>
            <span className="inline-flex items-center text-xs font-bold text-emerald-600 mt-1">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> +14.2% annualized IRR
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-fg-muted)]">Liquid vs Fixed</span>
            <div className="text-lg font-bold mt-1">68% Liquid / 32% Fixed</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <span className="text-xs text-[var(--color-fg-muted)] block">Equity MF</span>
            <strong className="text-base font-bold">₹ 78.4 L</strong>
          </div>
          <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <span className="text-xs text-[var(--color-fg-muted)] block">EPF / PPF</span>
            <strong className="text-base font-bold">₹ 28.5 L</strong>
          </div>
          <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <span className="text-xs text-[var(--color-fg-muted)] block">Direct Stocks</span>
            <strong className="text-base font-bold">₹ 22.1 L</strong>
          </div>
          <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <span className="text-xs text-[var(--color-fg-muted)] block">SGB & Gold</span>
            <strong className="text-base font-bold">₹ 13.8 L</strong>
          </div>
        </div>
      </div>

      {/* Waitlist CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Track your true net worth</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">Join thousands of Indians on the early access list.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
