import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, TrendingUp, Flame } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export default function HeroAppPreview() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const highlights = [
    { id: 1, title: 'Live Gmail Parsing', desc: 'No bank login needed', icon: Zap, pos: 'top-6 left-6' },
    { id: 2, title: '₹1.42 Cr Net Worth', desc: '+14.2% Annualized IRR', icon: TrendingUp, pos: 'top-10 right-6' },
    { id: 3, title: 'Freedom Year: 2034', desc: 'Inflation-adjusted FIRE', icon: Flame, pos: 'bottom-8 left-8' },
  ];

  return (
    <div className="relative max-w-5xl mx-auto my-12 group">
      {/* Neumorphic outer container */}
      <div className="p-4 md:p-6 rounded-[44px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-500 border border-white/50 relative overflow-hidden">
        
        {/* Screenshot canvas */}
        <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] bg-[var(--color-bg-base)]">
          <img
            src={APP_IMAGES.heroDashboard}
            alt="TLDR Money App Dashboard Preview"
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Overlay gradient for clean depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Interactive Floating Hotspots */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[var(--color-bg-base)]/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-sm)] border border-white/40 flex items-center gap-2.5 text-xs font-bold text-[var(--color-fg-primary)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live On-Device Parser Active</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[var(--color-bg-base)]/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-sm)] border border-white/40 flex items-center gap-2 text-xs font-bold text-[var(--color-accent)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Subscribed by user • Zero ads</span>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pointer-events-auto mt-auto">
              <div className="hidden sm:flex items-center gap-2 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-sm)] border border-white/40 text-xs font-semibold text-[var(--color-fg-muted)]">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>India DPDP Act Compliant</span>
              </div>

              <div className="bg-[var(--color-bg-base)]/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-sm)] border border-white/40 text-xs font-bold text-[var(--color-fg-primary)] ml-auto">
                <span>Automatic 90-day backfill</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights bar below preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-2">
          {highlights.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveHighlight(item.id)}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-4 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                activeHighlight === item.id
                  ? 'shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)]'
                  : 'shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] hover:shadow-[var(--shadow-neo-base)]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs md:text-sm text-[var(--color-fg-primary)]">{item.title}</h4>
                <p className="text-[11px] text-[var(--color-fg-muted)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
