import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WaitlistForm } from '../components/WaitlistForm';
import HeroAppPreview from '../components/HeroAppPreview';
import InteractiveFeatureDemo from '../components/InteractiveFeatureDemo';
import PhoneMockupShowcase from '../components/PhoneMockupShowcase';
import { APP_IMAGES } from '../assets/images';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="pb-20 overflow-hidden relative">
      {/* Decorative Floating Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full shadow-[var(--shadow-neo-base)] animate-[float_3s_ease-in-out_infinite] hidden lg:block opacity-60 z-0">
        <div className="w-full h-full rounded-full shadow-[var(--shadow-neo-inset-deep)] scale-75 flex items-center justify-center">
           <div className="w-full h-full rounded-full shadow-[var(--shadow-neo-base)] scale-[0.6] bg-[var(--color-bg-base)]"></div>
        </div>
      </div>
      <div className="absolute top-96 left-10 w-32 h-32 rounded-full shadow-[var(--shadow-neo-base)] animate-[float_4s_ease-in-out_infinite_reverse] hidden md:block opacity-40 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="max-w-4xl mb-32 pt-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] tracking-tight mb-8"
            variants={fadeInUp}
          >
            TLDR Money is an expense tracker for India.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl mb-12"
            variants={fadeInUp}
          >
            Automatic transaction tracking, net worth valuation and a projected FIRE date are in development. To be funded by subscription, not ads.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              to="#waitlist" 
              className="inline-flex items-center px-10 py-5 bg-[var(--color-accent)] text-white rounded-2xl text-lg font-bold shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-1 hover:bg-[var(--color-accent-light)] transition-all duration-300 active:shadow-[var(--shadow-neo-inset)] active:translate-y-[0.5px] group focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-4 focus:ring-offset-[var(--color-bg-base)] cursor-pointer"
            >
              Join the waitlist
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Hero App Interface Preview with Animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <HeroAppPreview />
        </motion.div>

        {/* Philosophy Section */}
        <motion.section 
          className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="lg:col-span-5" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)]">
              A free finance app still has to make money.
              <br />
              <span className="text-[var(--color-fg-muted)] text-2xl mt-4 block font-medium">Just not from you.</span>
            </h2>
          </motion.div>
          
          <motion.div className="lg:col-span-7" variants={fadeInUp}>
            <p className="text-lg text-[var(--color-fg-muted)] mb-10 leading-relaxed font-medium">
              When the tracking is free, the revenue comes from somewhere else — and that somewhere else is usually a product being sold back to you. We took the other path.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-8 bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset-sm)] rounded-[32px] opacity-80">
                <ul className="space-y-5 text-[var(--color-fg-muted)]">
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Brokerage commissions on trades</li>
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Loan and credit-card referrals</li>
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Distribution fees on the funds they sell you</li>
                </ul>
                <p className="mt-6 text-sm italic shadow-[var(--shadow-neo-inset)] p-4 rounded-2xl">All legitimate. But each one gives the app a reason to sell you something.</p>
              </div>
              
              <div className="p-8 bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] rounded-[32px] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-display font-bold mb-6 text-[var(--color-accent)]">Your subscription. That's the whole business model.</h3>
                <ul className="space-y-5">
                  <li className="flex items-center p-3 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]"><CheckCircle2 className="w-6 h-6 mr-3 text-[var(--color-success)] shadow-[var(--shadow-neo-sm)] rounded-full bg-[var(--color-bg-base)] p-1 flex-shrink-0" /> <span className="font-medium">No lending arm</span></li>
                  <li className="flex items-center p-3 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]"><CheckCircle2 className="w-6 h-6 mr-3 text-[var(--color-success)] shadow-[var(--shadow-neo-sm)] rounded-full bg-[var(--color-bg-base)] p-1 flex-shrink-0" /> <span className="font-medium">No insurance to sell</span></li>
                  <li className="flex items-center p-3 rounded-2xl shadow-[var(--shadow-neo-inset-sm)]"><CheckCircle2 className="w-6 h-6 mr-3 text-[var(--color-success)] shadow-[var(--shadow-neo-sm)] rounded-full bg-[var(--color-bg-base)] p-1 flex-shrink-0" /> <span className="font-medium">No payout on mutual funds</span></li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg font-medium leading-relaxed p-6 rounded-[32px] shadow-[var(--shadow-neo-inset-deep)]">
              The subscription is the alignment. We only do well if the product is worth paying for — not if we can point you toward something else.
            </p>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="mb-16 max-w-3xl" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Three numbers that actually run your money.</h2>
            <p className="text-xl text-[var(--color-fg-muted)]">
              Once automatic tracking ships, it will work from day one — including the three months before you signed up.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <motion.div 
              className="group flex flex-col h-full bg-[var(--color-bg-base)] p-10 shadow-[var(--shadow-neo-base)] rounded-[32px] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 rounded-full shadow-[var(--shadow-neo-inset-deep)] mb-8 flex items-center justify-center text-[var(--color-accent)] font-display font-bold text-2xl group-hover:scale-105 transition-transform duration-500">1</div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Every transaction, already sorted</h3>
              <p className="text-[var(--color-fg-muted)] mb-8 flex-grow">
                TLDR will read your Gmail UPI and salary alerts and file each one automatically, backfilling three months of history when you connect.
              </p>
              <Link to="/expense-tracker-india" className="inline-flex items-center justify-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] text-[var(--color-fg-primary)] font-medium group-hover:text-[var(--color-accent)] group-hover:shadow-[var(--shadow-neo-inset)] transition-all duration-300 mt-auto focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                How tracking works
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="group flex flex-col h-full bg-[var(--color-bg-base)] p-10 shadow-[var(--shadow-neo-base)] rounded-[32px] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 rounded-full shadow-[var(--shadow-neo-inset-deep)] mb-8 flex items-center justify-center text-[var(--color-accent)] font-display font-bold text-2xl group-hover:scale-105 transition-transform duration-500">2</div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Everything you own, one number</h3>
              <p className="text-[var(--color-fg-muted)] mb-8 flex-grow">
                Mutual funds, stocks, gold, real estate and FDs roll up into a single net-worth figure with one honest trend line.
              </p>
              <Link to="/net-worth-tracker-india" className="inline-flex items-center justify-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] text-[var(--color-fg-primary)] font-medium group-hover:text-[var(--color-accent)] group-hover:shadow-[var(--shadow-neo-inset)] transition-all duration-300 mt-auto focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                Tracking net worth
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="group flex flex-col h-full bg-[var(--color-bg-base)] p-10 shadow-[var(--shadow-neo-base)] rounded-[32px] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 rounded-full shadow-[var(--shadow-neo-inset-deep)] mb-8 flex items-center justify-center text-[var(--color-accent)] font-display font-bold text-2xl group-hover:scale-105 transition-transform duration-500">3</div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Know the date you're free</h3>
              <p className="text-[var(--color-fg-muted)] mb-8 flex-grow">
                Your FI number, how far along you are, and a projected retirement date — modelled for Lean, Coast and Fat FIRE.
              </p>
              <Link to="/fire-calculator-india" className="inline-flex items-center justify-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] text-[var(--color-fg-primary)] font-medium group-hover:text-[var(--color-accent)] group-hover:shadow-[var(--shadow-neo-inset)] transition-all duration-300 mt-auto focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                Calculating FIRE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Interactive Feature Animation & Live Visual Proofs */}
          <div className="mt-16">
            <InteractiveFeatureDemo />
          </div>

          {/* Mobbin Featured Public.com Style iPhone Experience */}
          <PhoneMockupShowcase />
        </motion.section>

        {/* Deep Dive Sections */}
        <motion.section 
          className="mb-24 max-w-6xl mx-auto space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section 1 */}
          <motion.div className="grid md:grid-cols-2 gap-16 items-center" variants={fadeInUp}>
            <div className="pr-8">
              <div className="inline-block px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold tracking-widest uppercase text-xs mb-6">Activity</div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">Every rupee, in one list.</h3>
              <p className="text-lg text-[var(--color-fg-muted)] mb-8 leading-relaxed">
                One timeline for the month — what came in, what went out, and the category it landed in. Grouped by day and totalled as you scroll, so a heavy week is obvious without you counting anything.
              </p>
              <ul className="space-y-5 font-medium">
                <li className="flex items-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-shadow"><Check className="w-5 h-5 text-[var(--color-accent)] mr-4 flex-shrink-0" /> Grouped by day, totalled at headers</li>
                <li className="flex items-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-shadow"><Check className="w-5 h-5 text-[var(--color-accent)] mr-4 flex-shrink-0" /> Running net figure for the period</li>
                <li className="flex items-center p-4 rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-shadow"><Check className="w-5 h-5 text-[var(--color-accent)] mr-4 flex-shrink-0" /> Narrow down from the header instantly</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-[36px] bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-base)] border border-white/40 group overflow-hidden">
              <div className="relative rounded-[28px] overflow-hidden shadow-[var(--shadow-neo-inset-sm)]">
                <img
                  src={APP_IMAGES.expenseFeed}
                  alt="TLDR Money Daily Transaction Feed"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold shadow-[var(--shadow-neo-sm)] border border-white/30 text-[var(--color-accent)]">
                  Live Feed UI
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div className="grid md:grid-cols-2 gap-16 items-center" variants={fadeInUp}>
            <div className="order-2 md:order-1 bg-[var(--color-bg-base)] p-8 md:p-10 rounded-[36px] shadow-[var(--shadow-neo-base)] border border-white/40">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-fg-muted)] block mb-4">
                Interactive Quick-Entry Preview
              </span>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl shadow-[var(--shadow-neo-inset-deep)] bg-[var(--color-bg-base)]">
                  <span className="text-xs text-[var(--color-fg-muted)] font-bold block mb-1">Simulated Amount</span>
                  <div className="text-3xl font-bold font-display text-[var(--color-accent)]">₹ 1,200</div>
                </div>
                <div className="p-5 rounded-2xl shadow-[var(--shadow-neo-base)] bg-[var(--color-bg-base)] flex justify-between items-center">
                  <div>
                    <span className="text-xs text-[var(--color-fg-muted)] block">Merchant</span>
                    <strong className="text-base font-bold">Uber India</strong>
                  </div>
                  <span className="px-3 py-1 rounded-full shadow-[var(--shadow-neo-inset-sm)] text-xs font-bold text-emerald-700">
                    Commute
                  </span>
                </div>
                <div className="p-4 rounded-2xl shadow-[var(--shadow-neo-sm)] bg-[var(--color-bg-base)] text-xs text-[var(--color-fg-muted)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Auto-categorized without manual tagging</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 pl-8">
              <div className="inline-block px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-inset-sm)] text-[var(--color-accent)] font-bold tracking-widest uppercase text-xs mb-6">Add Expense</div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">Cash takes about five seconds.</h3>
              <p className="text-lg text-[var(--color-fg-muted)] mb-8 leading-relaxed">
                In version one everything gets typed in: amount, category, done — the chai, the auto and the card spend alike. Mail alerts and voice entry are both in development.
              </p>
              <div className="p-6 rounded-[32px] shadow-[var(--shadow-neo-base)]">
                <p className="font-medium italic text-[var(--color-fg-muted)] text-center">
                  "Dictate it, and those fields fill themselves. Coming soon."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Privacy Section - Neumorphic Style */}
        <motion.section 
          className="mb-32 bg-[var(--color-bg-base)] shadow-[var(--shadow-neo-inset-deep)] p-10 md:p-16 rounded-[40px] relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Decorative nested circles */}
          <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/3 translate-x-1/3 rounded-full shadow-[var(--shadow-neo-base)] flex items-center justify-center opacity-40">
             <div className="w-64 h-64 rounded-full shadow-[var(--shadow-neo-inset-deep)] flex items-center justify-center">
               <div className="w-32 h-32 rounded-full shadow-[var(--shadow-neo-base)]"></div>
             </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-10 max-w-3xl leading-tight">
              Your mailbox is read, stripped and redacted on your own device.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 text-[var(--color-fg-muted)] text-lg font-medium leading-relaxed">
                <p>
                  What we store is the result — amount, merchant, date — in India, and deletable by you. <strong className="text-[var(--color-fg-primary)] font-bold">The architecture is the privacy policy.</strong>
                </p>
                <p>
                  Your mailbox will be parsed on your phone. Headers, signatures and identifying details will be stripped there — only a short redacted snippet will ever be sent on.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-8 shadow-[var(--shadow-neo-base)] rounded-[32px] bg-[var(--color-bg-base)] hover:shadow-[var(--shadow-neo-hover)] transition-shadow duration-300">
                  <p className="mb-4 text-[var(--color-fg-primary)] font-medium">
                    No third-party data brokers, no ad networks, no anonymised-and-resold loophole. Export or delete everything whenever you want.
                  </p>
                  <p className="text-[var(--color-fg-muted)] text-sm">
                    Built to India's Digital Personal Data Protection Act.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="mb-32 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="flex justify-center mb-16" variants={fadeInUp}>
             <h2 className="text-4xl font-display font-bold px-12 py-4 rounded-[32px] shadow-[var(--shadow-neo-base)]">FAQ</h2>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div className="p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 group" variants={fadeInUp}>
              <h3 className="text-2xl font-display font-bold mb-4 text-[var(--color-fg-primary)] group-hover:text-[var(--color-accent)] transition-colors">How is this different from INDmoney, Kuvera, or Groww?</h3>
              <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed shadow-[var(--shadow-neo-inset-sm)] p-6 rounded-2xl mt-6">
                They're free because they make money elsewhere. TLDR Money has one revenue line: your subscription. We don't have a lending arm, we don't sell insurance. We've written the comparisons out one by one — <Link to="/compare" className="text-[var(--color-accent)] font-bold hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded">against spreadsheets, Mint, Walnut and broker apps</Link>.
              </p>
            </motion.div>

            <motion.div className="p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 group" variants={fadeInUp}>
              <h3 className="text-2xl font-display font-bold mb-4 text-[var(--color-fg-primary)] group-hover:text-[var(--color-accent)] transition-colors">What data does TLDR Money access?</h3>
              <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed">
                Version one asks for no account access at all. The planned automatic version would use read-only access to the transaction alerts in your Gmail. The mail would be parsed and redacted on your own device.
              </p>
            </motion.div>
            
            <motion.div className="p-8 rounded-[32px] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] transition-all duration-300 group" variants={fadeInUp}>
              <h3 className="text-2xl font-display font-bold mb-4 text-[var(--color-fg-primary)] group-hover:text-[var(--color-accent)] transition-colors">How does cancellation work?</h3>
              <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed">
                Nothing to cancel today, because nothing is charged yet. Once paid plans arrive you will cancel in one tap from inside the app, keep full access until the end, and be able to export all your data.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          id="waitlist"
          className="text-center py-20 px-4 md:px-8 rounded-[40px] shadow-[var(--shadow-neo-inset-deep)] relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Decorative ambient motion */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full shadow-[var(--shadow-neo-base)] opacity-30 animate-[float_5s_ease-in-out_infinite] pointer-events-none" />
          
          <div className="relative z-10 px-4 max-w-3xl mx-auto">
            <motion.h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight" variants={fadeInUp}>
              Start understanding your money
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-[var(--color-fg-muted)] font-medium mb-10 mx-auto shadow-[var(--shadow-neo-base)] p-6 rounded-[32px] bg-[var(--color-bg-base)]" variants={fadeInUp}>
              Funded by subscription when it arrives — no ads, no referrals, no commissions. Nothing is charged today.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <WaitlistForm id="waitlist-card" />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
