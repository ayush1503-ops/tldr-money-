import { useLocation } from 'react-router-dom';
import { Shield, FileText, HelpCircle, Mail, DollarSign, UserCheck, Trash2, BookOpen } from 'lucide-react';
import { WaitlistForm } from '../components/WaitlistForm';

export default function InfoPage() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const contentMap: Record<string, { title: string; subtitle: string; icon: any; body: React.ReactNode }> = {
    about: {
      title: 'About TLDR Money',
      subtitle: 'Building deliberate personal finance software for independent Indians.',
      icon: UserCheck,
      body: (
        <div className="space-y-6 text-lg text-[var(--color-fg-muted)] leading-relaxed">
          <p>
            Personal finance in India is broken. The most popular apps are owned by discount brokerages, NBFCs, and credit card companies whose incentive is to keep you borrowing, transacting, and speculating.
          </p>
          <p>
            TLDR Money was founded with a singular, radical belief: <strong className="text-[var(--color-fg-primary)]">software should work exclusively for the person paying for it</strong>. By charging an honest annual subscription, we eliminate every conflicting interest.
          </p>
          <p>
            We operate out of India under Sonal Systems Private Limited, strictly complying with the Digital Personal Data Protection Act (DPDP Act).
          </p>
        </div>
      )
    },
    'how-we-make-money': {
      title: 'How We Make Money',
      subtitle: 'Direct customer subscriptions. That is the entire business model.',
      icon: DollarSign,
      body: (
        <div className="space-y-6 text-lg text-[var(--color-fg-muted)] leading-relaxed">
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-xl mb-3">100% Subscription Revenue</h4>
            <p>
              When TLDR Money launches paid plans, you pay a simple annual subscription fee. In exchange, you get uninterrupted tracking, net worth updates, and privacy protections.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]">
              <strong className="block text-red-500 font-bold mb-1">No Ads</strong>
              <span className="text-xs">No banner ads or sponsored merchants</span>
            </div>
            <div className="p-5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]">
              <strong className="block text-red-500 font-bold mb-1">No Loan Kickbacks</strong>
              <span className="text-xs">Zero referral fees on credit cards or personal loans</span>
            </div>
            <div className="p-5 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]">
              <strong className="block text-red-500 font-bold mb-1">No Data Selling</strong>
              <span className="text-xs">Your financial alerts are never monetized</span>
            </div>
          </div>
        </div>
      )
    },
    security: {
      title: 'Security Architecture',
      subtitle: 'Engineered from day zero with client-side isolation.',
      icon: Shield,
      body: (
        <div className="space-y-6 text-lg text-[var(--color-fg-muted)] leading-relaxed">
          <p>
            Most finance apps request unrestricted access to your email inbox, upload your raw messages to their remote servers, and run OCR scrapers.
          </p>
          <div className="p-8 rounded-[32px] shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)] space-y-4">
            <h4 className="font-display font-bold text-xl text-[var(--color-fg-primary)]">The TLDR Client-Side Sandbox</h4>
            <ul className="space-y-3 text-base">
              <li>• <strong>Local Parsing:</strong> The email transaction parser runs directly inside your phone's runtime.</li>
              <li>• <strong>Immediate Redaction:</strong> Card CVVs, bank account balances, full names, and personal correspondence are filtered out locally before saving.</li>
              <li>• <strong>AES-256 Encryption:</strong> Any stored merchant summaries are encrypted using user-controlled device keys.</li>
            </ul>
          </div>
        </div>
      )
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about TLDR Money and waitlist access.',
      icon: HelpCircle,
      body: (
        <div className="space-y-6 text-[var(--color-fg-muted)]">
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">When does early access open?</h4>
            <p>We are rolling out invites in weekly cohorts to early waitlist subscribers starting next month.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Will it support all Indian banks?</h4>
            <p>Yes. Any bank or UPI app sending standard debit, credit, or salary email alerts (HDFC, ICICI, SBI, Axis, Kotak, Google Pay, PhonePe, Paytm, CRED) is supported.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-base)]">
            <h4 className="font-bold text-[var(--color-fg-primary)] text-lg mb-2">Can I use it if I only have iOS or Android?</h4>
            <p>Both native iOS and Android apps are being prepared, along with a progressive web application for desktop use.</p>
          </div>
        </div>
      )
    },
    blog: {
      title: 'TLDR Money Dispatch',
      subtitle: 'Essays on Indian personal finance, FIRE mathematics, and privacy.',
      icon: BookOpen,
      body: (
        <div className="space-y-8">
          <article className="p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-accent)] mb-2 block">Essay #01</span>
            <h3 className="text-2xl font-display font-bold mb-3">The Real Cost of "Free" Finance Apps in India</h3>
            <p className="text-[var(--color-fg-muted)] leading-relaxed mb-4">
              Why giving away net worth dashboards is the easiest way to build a pipeline of high-margin personal loan borrowers.
            </p>
            <span className="text-xs text-[var(--color-fg-muted)]">5 min read • By TLDR Research</span>
          </article>
          <article className="p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
            <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-accent)] mb-2 block">Guide #02</span>
            <h3 className="text-2xl font-display font-bold mb-3">Adjusting the 4% FIRE Rule for Indian Inflation & Healthcare</h3>
            <p className="text-[var(--color-fg-muted)] leading-relaxed mb-4">
              Why relying on US Trinity study math in Bangalore or Mumbai will leave you underfunded by age 55.
            </p>
            <span className="text-xs text-[var(--color-fg-muted)]">8 min read • By TLDR Research</span>
          </article>
        </div>
      )
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Questions, feedback, or partnership inquiries.',
      icon: Mail,
      body: (
        <div className="p-8 rounded-[36px] shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] max-w-xl mx-auto text-center space-y-6">
          <p className="text-lg text-[var(--color-fg-muted)] leading-relaxed">
            We love hearing from fellow savers, developers, and early testers.
          </p>
          <a
            href="mailto:hello@tldrmoney.in"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl font-bold shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all text-lg"
          >
            hello@tldrmoney.in
          </a>
          <p className="text-xs text-[var(--color-fg-muted)]">
            Sonal Systems Private Limited • Bengaluru, Karnataka, India
          </p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Built strictly around India’s Digital Personal Data Protection Act.',
      icon: FileText,
      body: (
        <div className="space-y-6 text-base text-[var(--color-fg-muted)] leading-relaxed">
          <p>
            At TLDR Money, we believe that privacy is not just a policy document — it is an engineering requirement.
          </p>
          <h4 className="font-bold text-[var(--color-fg-primary)] text-lg">1. Data Minimization</h4>
          <p>We do not collect banking passwords, debit card numbers, PINs, or raw email bodies. We only record normalized transaction records (Amount, Date, Merchant, Category).</p>
          <h4 className="font-bold text-[var(--color-fg-primary)] text-lg">2. No Third-Party Analytics Trackers</h4>
          <p>We do not run third-party advertising scripts, Facebook SDKs, or data broker pixels on our application.</p>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Clear, straightforward rules for using TLDR Money.',
      icon: FileText,
      body: (
        <div className="space-y-6 text-base text-[var(--color-fg-muted)] leading-relaxed">
          <h4 className="font-bold text-[var(--color-fg-primary)] text-lg">1. Service Scope</h4>
          <p>TLDR Money provides personal financial tracking tools. We do not provide SEBI-registered investment advice, stock recommendations, or portfolio management services.</p>
          <h4 className="font-bold text-[var(--color-fg-primary)] text-lg">2. Subscriptions & Refunds</h4>
          <p>Once paid plans launch, you may cancel at any time directly in the app. Unused full months are eligible for pro-rated refunds upon request.</p>
        </div>
      )
    },
    'delete-account': {
      title: 'Delete Your Account',
      subtitle: 'Complete data eradication in one click.',
      icon: Trash2,
      body: (
        <div className="p-8 rounded-[36px] shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] max-w-xl mx-auto text-center space-y-6">
          <p className="text-lg text-[var(--color-fg-muted)] leading-relaxed">
            You own your data completely. In TLDR Money, deleting your account permanently purges your profile, connected email tokens, and transaction summaries immediately from all databases.
          </p>
          <p className="text-sm font-semibold text-[var(--color-accent)]">
            Currently in early waitlist phase. To remove your waitlist spot, email us at hello@tldrmoney.in with subject "Remove from Waitlist".
          </p>
        </div>
      )
    }
  };

  const current = contentMap[path] || contentMap.about;
  const IconComponent = current.icon;

  return (
    <div className="container mx-auto px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest mb-6">
          <IconComponent className="w-4 h-4 mr-2" /> {current.title}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
          {current.title}
        </h1>
        <p className="text-xl text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed">
          {current.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-20">
        {current.body}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Ready to take control of your finances?</h2>
        <p className="text-[var(--color-fg-muted)] mb-8">Join the private beta waitlist.</p>
        <WaitlistForm />
      </div>
    </div>
  );
}
