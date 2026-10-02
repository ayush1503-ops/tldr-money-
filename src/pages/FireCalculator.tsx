import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flame, Calculator } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';

const currentYear = new Date().getFullYear();

export default function FireCalculator() {
  const [monthlyExpense, setMonthlyExpense] = useState(65000);
  const [currentNetWorth, setCurrentNetWorth] = useState(1500000);
  const [monthlySavings, setMonthlySavings] = useState(45000);
  const [expectedReturn, setExpectedReturn] = useState(11); // 11%
  const [inflation, setInflation] = useState(6); // 6%

  // Real return rate = (1 + r) / (1 + i) - 1
  const realReturnRate = useMemo(() => {
    return (1 + expectedReturn / 100) / (1 + inflation / 100) - 1;
  }, [expectedReturn, inflation]);

  // Annual expense
  const annualExpense = monthlyExpense * 12;

  // FIRE corpus targets
  // Lean FIRE: 25x annual expenses (4% rule)
  // Regular FIRE: 30x annual expenses (3.33% rule, recommended for India due to higher healthcare inflation)
  // Fat FIRE: 40x annual expenses (2.5% rule, luxury lifestyle)
  const regularFireCorpus = annualExpense * 30;
  const leanFireCorpus = annualExpense * 22;
  const fatFireCorpus = annualExpense * 40;

  // Calculate years to FIRE
  const calculation = useMemo(() => {
    let corpus = currentNetWorth;
    const target = regularFireCorpus;
    const monthlyRate = realReturnRate / 12;

    if (corpus >= target) {
      return { years: 0, months: 0, targetYear: currentYear };
    }

    let months = 0;
    const maxMonths = 600; // 50 years cap

    while (corpus < target && months < maxMonths) {
      corpus = corpus * (1 + monthlyRate) + monthlySavings;
      months++;
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    const targetYear = currentYear + years;

    return { years, months: remMonths, targetYear };
  }, [currentNetWorth, regularFireCorpus, realReturnRate, monthlySavings]);

  const progressPercent = Math.min(100, Math.round((currentNetWorth / regularFireCorpus) * 100));

  const formatRupees = (amount: number) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2)} L`;
    }
    return `₹ ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6"
        >
          <Flame className="w-4 h-4 mr-2" /> India FIRE Calculator
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight"
        >
          Know your exact freedom date.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed mb-6"
        >
          Adjust your real monthly spends, current portfolio, and SIP amount to see how many years until work becomes strictly optional.
        </motion.p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 p-8 md:p-10 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] space-y-8">
          <h2 className="text-2xl font-display font-bold flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[var(--color-accent)]" /> Your Numbers
          </h2>

          {/* Monthly Expense */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[var(--color-fg-muted)]">Monthly Expenses</label>
              <span className="text-lg font-bold font-display px-3 py-1 rounded-xl shadow-[var(--shadow-neo-inset-sm)]">
                ₹ {monthlyExpense.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={15000}
              max={500000}
              step={5000}
              value={monthlyExpense}
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
              className="w-full accent-[var(--color-accent)] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[var(--color-fg-muted)] mt-1">
              <span>₹15k/mo</span>
              <span>₹5L/mo</span>
            </div>
          </div>

          {/* Current Net Worth */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[var(--color-fg-muted)]">Current Net Worth (Liquid)</label>
              <span className="text-lg font-bold font-display px-3 py-1 rounded-xl shadow-[var(--shadow-neo-inset-sm)]">
                {formatRupees(currentNetWorth)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50000000}
              step={100000}
              value={currentNetWorth}
              onChange={(e) => setCurrentNetWorth(Number(e.target.value))}
              className="w-full accent-[var(--color-accent)] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[var(--color-fg-muted)] mt-1">
              <span>₹0</span>
              <span>₹5 Cr</span>
            </div>
          </div>

          {/* Monthly Savings */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[var(--color-fg-muted)]">Monthly Investment (SIP)</label>
              <span className="text-lg font-bold font-display px-3 py-1 rounded-xl shadow-[var(--shadow-neo-inset-sm)]">
                ₹ {monthlySavings.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={400000}
              step={5000}
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(Number(e.target.value))}
              className="w-full accent-[var(--color-accent)] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[var(--color-fg-muted)] mt-1">
              <span>₹5k/mo</span>
              <span>₹4L/mo</span>
            </div>
          </div>

          {/* Return & Inflation */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-300/40">
            <div>
              <label className="text-xs font-bold text-[var(--color-fg-muted)] block mb-1">Expected Return ({expectedReturn}%)</label>
              <input
                type="range"
                min={8}
                max={15}
                step={0.5}
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] cursor-pointer"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-fg-muted)] block mb-1">Inflation Assumed ({inflation}%)</label>
              <input
                type="range"
                min={4}
                max={9}
                step={0.5}
                value={inflation}
                onChange={(e) => setInflation(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Outcome Card */}
          <div className="p-8 md:p-10 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset-deep)] relative overflow-hidden">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--color-accent)] block mb-2">
              Projected Independence Target
            </span>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-display font-extrabold tracking-tight">
                {calculation.targetYear}
              </span>
              <span className="text-lg text-[var(--color-fg-muted)] font-medium">
                ({calculation.years} yrs {calculation.months} mos)
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2 text-[var(--color-fg-muted)]">
                <span>Current: {formatRupees(currentNetWorth)}</span>
                <span>{progressPercent}% Achieved</span>
              </div>
              <div className="w-full h-4 rounded-full shadow-[var(--shadow-neo-inset-sm)] overflow-hidden p-0.5 bg-[var(--color-bg-base)]">
                <div
                  className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(2, progressPercent)}%` }}
                />
              </div>
            </div>

            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
              Based on a safe withdrawal rate of 3.3% tailored for Indian inflation, your target nest egg is{' '}
              <strong className="text-[var(--color-fg-primary)]">{formatRupees(regularFireCorpus)}</strong>.
            </p>
          </div>

          {/* 3 Tier Targets */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] text-center">
              <span className="text-xs text-[var(--color-fg-muted)] font-bold block mb-1">Lean FIRE</span>
              <span className="text-base font-extrabold block text-emerald-700">{formatRupees(leanFireCorpus)}</span>
              <span className="text-[10px] text-[var(--color-fg-muted)]">22x essentials</span>
            </div>

            <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-[var(--color-accent)]/30 text-center">
              <span className="text-xs text-[var(--color-accent)] font-bold block mb-1">Standard FIRE</span>
              <span className="text-base font-extrabold block text-[var(--color-accent)]">{formatRupees(regularFireCorpus)}</span>
              <span className="text-[10px] text-[var(--color-fg-muted)]">30x lifestyle</span>
            </div>

            <div className="p-5 rounded-3xl bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] text-center">
              <span className="text-xs text-[var(--color-fg-muted)] font-bold block mb-1">Fat FIRE</span>
              <span className="text-base font-extrabold block text-amber-700">{formatRupees(fatFireCorpus)}</span>
              <span className="text-[10px] text-[var(--color-fg-muted)]">40x luxury</span>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Call to Action */}
      <div className="max-w-3xl mx-auto text-center pt-8">
        <h2 className="text-3xl font-display font-bold mb-4">Want real-time FIRE tracking synced with your bank?</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">TLDR Money updates your freedom date after every transaction.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
