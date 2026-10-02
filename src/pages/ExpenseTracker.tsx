import { motion } from 'framer-motion';
import { Mail, Smartphone, Zap, RefreshCw } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';
import { APP_IMAGES } from '../assets/images';

export default function ExpenseTracker() {
  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      {/* Hero */}
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6"
        >
          <Zap className="w-4 h-4 mr-2" /> Expense Tracker for India
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight"
        >
          Every UPI transaction sorted. <br />
          <span className="text-[var(--color-fg-muted)]">Without sharing bank passwords.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          TLDR Money reads your Gmail transaction alerts on your device, strips out all personal identifying info, and categorizes chai, Swiggy, rent, and investments automatically.
        </motion.p>

        {/* Real App Screenshot Showcase */}
        <div className="max-w-3xl mx-auto my-10 p-4 rounded-[40px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/50">
          <div className="rounded-[30px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)] relative">
            <img
              src={APP_IMAGES.expenseFeed}
              alt="TLDR Money Expense Tracker Interface"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-[var(--shadow-neo-sm)] text-xs font-bold text-[var(--color-fg-primary)] border border-white/40">
              Live Interface • On-Device Transaction Feed
            </div>
          </div>
        </div>
      </div>

      {/* 3 Step Interactive Card Flow */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        <div className="p-8 rounded-[32px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all">
          <div className="w-14 h-14 rounded-2xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)] mb-6">
            <Mail className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">1. Connect Gmail alerts</h3>
          <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed">
            Read-only access strictly restricted to transaction subject lines from HDFC, ICICI, SBI, Axis, Cred, and UPI apps.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all">
          <div className="w-14 h-14 rounded-2xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)] mb-6">
            <Smartphone className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">2. Parsed on your device</h3>
          <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed">
            Parsing logic runs locally in your browser/app. Your emails never touch any external server; only the final cleaned merchant and amount are recorded.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all">
          <div className="w-14 h-14 rounded-2xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)] mb-6">
            <RefreshCw className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">3. 90-day backfill</h3>
          <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed">
            When you connect, TLDR backfills the last 3 months of bank alerts so your expense trends, monthly averages, and burn rate work from second one.
          </p>
        </div>
      </div>

      {/* Feature Deep Dive */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[40px] shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] mb-20">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 text-center">
          Built for India's chaotic UPI ecosystem
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-[var(--color-fg-muted)]">
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Smart Merchant Normalization</h4>
            <p className="text-sm">
              Converts obscure VPA handles like <code className="px-2 py-0.5 rounded shadow-[var(--shadow-neo-inset-sm)] text-xs">swiggybndle@hdfcbank</code> to clean, readable "Swiggy Food".
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Split & Cash Support</h4>
            <p className="text-sm">
              Quickly split group restaurant bills, or enter manual cash spends with a 3-tap interface designed for fast thumbs.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Refunds & Transfer Matching</h4>
            <p className="text-sm">
              Transfers between your own savings accounts and credit card payments are not counted twice as expenses.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Zero Ads or Cross-Selling</h4>
            <p className="text-sm">
              No popups asking you to take an instant personal loan or apply for a co-branded card. Pure budgeting clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Be the first to get expense tracking</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">Join the private beta waitlist.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
