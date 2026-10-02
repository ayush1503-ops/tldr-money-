import { Link } from 'react-router-dom';
import { Flame, Calculator, TrendingUp, ArrowRight, DollarSign } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';

export default function Calculators() {
  const tools = [
    {
      title: 'India FIRE Calculator',
      desc: 'Calculate your exact Financial Independence number, target retirement year, and Lean/Standard/Fat FIRE thresholds adjusted for Indian inflation.',
      link: '/fire-calculator-india',
      icon: Flame,
      tag: 'Interactive Tool'
    },
    {
      title: 'Expense Run-Rate Simulator',
      desc: 'Understand how daily micro-expenses (chai, Swiggy, Uber) alter your 10-year compounding portfolio.',
      link: '/expense-tracker-india',
      icon: TrendingUp,
      tag: 'Budgeting'
    },
    {
      title: 'Consolidated Net Worth Planner',
      desc: 'Model your asset allocation across Mutual Funds, Equities, EPF, PPF, Real Estate, and Sovereign Gold Bonds.',
      link: '/net-worth-tracker-india',
      icon: DollarSign,
      tag: 'Portfolio'
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6">
          <Calculator className="w-4 h-4 mr-2" /> Financial Engines
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight">
          Tools to master your money.
        </h1>
        <p className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed">
          Free financial calculators built specifically for the Indian tax code and inflation reality. No phone number or login required.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {tools.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-between p-8 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)]">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-fg-muted)]">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed mb-6">{item.desc}</p>
            </div>
            <Link
              to={item.link}
              className="inline-flex items-center justify-center w-full py-4 rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-inset)] text-[var(--color-accent)] font-bold text-sm transition-all"
            >
              Open Calculator <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Want automatic calculation based on live data?</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">Join the TLDR Money waitlist.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
