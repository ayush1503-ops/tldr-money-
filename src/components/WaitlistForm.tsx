import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Smartphone, Laptop } from 'lucide-react';

interface WaitlistFormProps {
  className?: string;
  id?: string;
}

export const WaitlistForm = ({ className = '', id = 'waitlist' }: WaitlistFormProps) => {
  const [email, setEmail] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('tldr_waitlist_email') || '' : '';
  });
  const [platform, setPlatform] = useState<'ios' | 'android' | 'web'>('ios');
  const [waitlistNumber, setWaitlistNumber] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;
    const savedNum = localStorage.getItem('tldr_waitlist_num');
    return savedNum ? parseInt(savedNum, 10) : null;
  });
  const [submitted, setSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(localStorage.getItem('tldr_waitlist_email'));
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      const randomNum = Math.floor(1400 + Math.random() * 85);
      setWaitlistNumber(randomNum);
      setSubmitted(true);
      setLoading(false);
      localStorage.setItem('tldr_waitlist_email', email);
      localStorage.setItem('tldr_waitlist_num', randomNum.toString());
      localStorage.setItem('tldr_waitlist_platform', platform);
    }, 400);
  };

  const handleReset = () => {
    localStorage.removeItem('tldr_waitlist_email');
    localStorage.removeItem('tldr_waitlist_num');
    setSubmitted(false);
    setEmail('');
  };

  return (
    <div id={id} className={`max-w-xl mx-auto ${className}`}>
      {submitted ? (
        <div className="p-8 md:p-10 rounded-[32px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/20 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full shadow-[var(--shadow-neo-inset)] flex items-center justify-center text-[var(--color-accent)]">
            <CheckCircle2 className="w-8 h-8 text-[var(--color-success)]" />
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs uppercase tracking-widest font-bold text-[var(--color-accent)] mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Early Access Confirmed
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[var(--color-fg-primary)]">
            You're #{waitlistNumber?.toLocaleString()} in line!
          </h3>
          <p className="text-[var(--color-fg-muted)] mb-6 text-base leading-relaxed">
            We've saved your spot for early access on <span className="font-semibold capitalize text-[var(--color-fg-primary)]">{platform}</span>. We'll send an invite to <strong className="text-[var(--color-fg-primary)]">{email}</strong> before public release.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleReset}
              className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors py-2 px-4 rounded-xl shadow-[var(--shadow-neo-sm)]"
            >
              Register another email
            </button>
          </div>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/30"
        >
          {/* Platform selector */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => setPlatform('ios')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                platform === 'ios'
                  ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                  : 'shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> iOS
            </button>
            <button
              type="button"
              onClick={() => setPlatform('android')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                platform === 'android'
                  ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                  : 'shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Android
            </button>
            <button
              type="button"
              onClick={() => setPlatform('web')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                platform === 'web'
                  ? 'shadow-[var(--shadow-neo-inset-deep)] text-[var(--color-accent)] bg-[var(--color-bg-base)]'
                  : 'shadow-[var(--shadow-neo-sm)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)]'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" /> Web
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-2xl bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset)] text-[var(--color-fg-primary)] placeholder-[var(--color-fg-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all text-base"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl font-bold shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-0.5 active:shadow-[var(--shadow-neo-inset)] active:translate-y-0.5 transition-all text-base disabled:opacity-70 whitespace-nowrap cursor-pointer"
            >
              {loading ? (
                <span className="inline-block animate-pulse">Securing spot...</span>
              ) : (
                <>
                  Join waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-[var(--color-fg-muted)] text-center">
            No spam, ever. Only early beta invites and build logs.
          </p>
        </form>
      )}
    </div>
  );
};
