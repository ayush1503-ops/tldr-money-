import { Shield } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';

export default function Compare() {
  const comparison = [
    {
      feature: 'Business Model',
      tldr: 'Direct Subscription (Paid by user)',
      spreadsheets: 'Free / Manual',
      indmoney: 'Brokerage, loans & cross-sells',
      cred: 'Credit card bill commissions & lending'
    },
    {
      feature: 'Privacy Architecture',
      tldr: 'Device-local parsing (Zero server scraping)',
      spreadsheets: 'Private (Local/Google Drive)',
      indmoney: 'Server email parsing & cloud scraping',
      cred: 'Reads SMS & cloud telemetry'
    },
    {
      feature: 'Automatic UPI & Bank Alerts',
      tldr: 'Yes (Gmail alerts + device redact)',
      spreadsheets: 'No (Every rupee manual)',
      indmoney: 'Yes',
      cred: 'Yes (Credit spends primary)'
    },
    {
      feature: 'Zero Ads or Loan Upsells',
      tldr: 'Guaranteed 100% Ad-Free',
      spreadsheets: 'Ad-free',
      indmoney: 'No (Regular loan & credit prompts)',
      cred: 'No (Shopping & loan carousels)'
    },
    {
      feature: 'Net Worth Across India Assets',
      tldr: 'Mutual funds, Stocks, EPF, SGB, Real Estate',
      spreadsheets: 'Manual setup required',
      indmoney: 'Tracks investments',
      cred: 'Limited investment scope'
    },
    {
      feature: 'Export & Account Deletion',
      tldr: '1-tap CSV export & instantaneous wipe',
      spreadsheets: 'Full ownership',
      indmoney: 'Complex multi-step deletion',
      cred: 'Data retained per terms'
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6">
          <Shield className="w-4 h-4 mr-2" /> Unbiased Comparison
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight">
          How TLDR Money compares.
        </h1>
        <p className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed">
          When a personal finance app is free, you aren't the customer — you're the lead being sold to banks, brokers, and NBFCs.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto mb-20 overflow-x-auto p-4">
        <div className="p-6 md:p-8 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] min-w-[700px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-300/60">
                <th className="py-4 px-4 font-display font-bold text-base text-[var(--color-fg-muted)]">Feature</th>
                <th className="py-4 px-4 font-display font-extrabold text-lg text-[var(--color-accent)] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset-sm)] rounded-2xl">
                  TLDR Money
                </th>
                <th className="py-4 px-4 font-display font-bold text-base text-[var(--color-fg-primary)]">Spreadsheets</th>
                <th className="py-4 px-4 font-display font-bold text-base text-[var(--color-fg-primary)]">INDmoney / Groww</th>
                <th className="py-4 px-4 font-display font-bold text-base text-[var(--color-fg-primary)]">CRED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/50">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-black/[0.015] transition-colors">
                  <td className="py-5 px-4 font-bold text-sm text-[var(--color-fg-primary)]">{row.feature}</td>
                  <td className="py-5 px-4 font-bold text-sm text-[var(--color-accent)] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset-sm)]">
                    {row.tldr}
                  </td>
                  <td className="py-5 px-4 text-xs text-[var(--color-fg-muted)]">{row.spreadsheets}</td>
                  <td className="py-5 px-4 text-xs text-[var(--color-fg-muted)]">{row.indmoney}</td>
                  <td className="py-5 px-4 text-xs text-[var(--color-fg-muted)]">{row.cred}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Choose complete financial alignment</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">We never monetize your data or recommend high-interest credit lines.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
