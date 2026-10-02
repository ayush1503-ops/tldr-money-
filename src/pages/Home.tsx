import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
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
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.section 
          className="max-w-4xl mb-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-['Fraunces'] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-8"
            variants={fadeInUp}
          >
            TLDR Money is an expense tracker for India.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10"
            variants={fadeInUp}
          >
            Automatic transaction tracking, net worth valuation and a projected FIRE date are in development. To be funded by subscription, not ads.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              to="#waitlist" 
              className="inline-flex items-center px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full text-lg font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              Join the waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section 
          className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="lg:col-span-5" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold leading-tight mb-6 relative">
              A free finance app still has to make money.
              <br />
              <span className="text-[var(--color-text-secondary)] italic">Just not from you.</span>
            </h2>
          </motion.div>
          
          <motion.div className="lg:col-span-7" variants={fadeInUp}>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              When the tracking is free, the revenue comes from somewhere else — and that somewhere else is usually a product being sold back to you. We took the other path.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-white border border-[var(--color-border-main)] rounded-xl opacity-70">
                <ul className="space-y-4 text-[var(--color-text-tertiary)]">
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Brokerage commissions on trades</li>
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Loan and credit-card referrals</li>
                  <li className="flex items-start line-through"><ArrowRight className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> Distribution fees on the funds they sell you</li>
                </ul>
                <p className="mt-4 text-sm italic">All legitimate. But each one gives the app a reason to sell you something.</p>
              </div>
              
              <div className="p-6 bg-[var(--color-bg-secondary)] border border-[var(--color-accent)]/30 rounded-xl shadow-sm relative overflow-hidden group hover:border-[var(--color-accent)] transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                <h3 className="text-xl font-['Fraunces'] font-bold mb-4">Your subscription. That's the whole business model.</h3>
                <ul className="space-y-4 text-[var(--color-text-primary)] relative z-10">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[var(--color-secondary-1)] flex-shrink-0 mt-0.5" /> No lending arm</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[var(--color-secondary-1)] flex-shrink-0 mt-0.5" /> No insurance to sell</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[var(--color-secondary-1)] flex-shrink-0 mt-0.5" /> No payout when you buy a mutual fund</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-[var(--color-text-primary)] font-medium leading-relaxed border-l-2 border-[var(--color-accent)] pl-6 py-2">
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
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-['Fraunces'] font-bold mb-6">Three numbers that actually run your money.</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl">
              Once automatic tracking ships, it will work from day one — including the three months before you signed up.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="group flex flex-col h-full bg-white p-8 border border-[var(--color-border-main)] rounded-2xl hover:border-[var(--color-accent)]/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 relative z-10 group-hover:text-[var(--color-accent)] transition-colors">Every transaction, already sorted</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 flex-grow relative z-10">
                TLDR will read your Gmail UPI and salary alerts and file each one automatically, backfilling three months of history when you connect. That is in development, and is not part of the first version.
              </p>
              <Link to="/expense-tracker-india" className="inline-flex items-center text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-accent)] transition-colors relative z-10 mt-auto">
                <span className="relative overflow-hidden">
                  <span className="inline-block relative z-10">How automatic tracking works</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-accent)] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                </span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="group flex flex-col h-full bg-white p-8 border border-[var(--color-border-main)] rounded-2xl hover:border-[var(--color-accent)]/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 relative z-10 group-hover:text-[var(--color-accent)] transition-colors">Everything you own, one number</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 flex-grow relative z-10">
                Mutual funds, stocks, gold, real estate and FDs roll up into a single net-worth figure with one honest trend line.
              </p>
              <Link to="/net-worth-tracker-india" className="inline-flex items-center text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-accent)] transition-colors relative z-10 mt-auto">
                <span className="relative overflow-hidden">
                  <span className="inline-block relative z-10">Tracking net worth in India</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-accent)] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                </span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="group flex flex-col h-full bg-white p-8 border border-[var(--color-border-main)] rounded-2xl hover:border-[var(--color-accent)]/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 relative z-10 group-hover:text-[var(--color-accent)] transition-colors">Know the date you're free</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 flex-grow relative z-10">
                Your FI number, how far along you are, and a projected retirement date — modelled for Lean, Coast and Fat FIRE.
              </p>
              <Link to="/fire-calculator-india" className="inline-flex items-center text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-accent)] transition-colors relative z-10 mt-auto">
                <span className="relative overflow-hidden">
                  <span className="inline-block relative z-10">Calculating your FIRE number</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-accent)] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                </span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Detailed Sections */}
        <motion.section 
          className="mb-20 max-w-5xl mx-auto space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section 1 */}
          <motion.div className="grid md:grid-cols-2 gap-16 items-center" variants={fadeInUp}>
            <div>
              <div className="text-[var(--color-secondary-1)] font-medium tracking-wide uppercase text-sm mb-4">Activity</div>
              <h3 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-6">Every rupee, in one list.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                One timeline for the month — what came in, what went out, and the category it landed in. Grouped by day and totalled as you scroll, so a heavy week is obvious without you counting anything.
              </p>
              <ul className="space-y-4 text-[var(--color-text-primary)]">
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Grouped by day, and each day totalled at its own header</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> A running net figure for the whole period above the list</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Narrowed from the header when you want one kind of row only</li>
              </ul>
            </div>
            <div className="bg-white border border-[var(--color-border-main)] p-8 rounded-2xl shadow-sm h-80 flex flex-col group hover:shadow-md transition-shadow">
               <div className="w-full bg-[var(--color-bg-primary)] h-12 rounded-lg mb-4 opacity-50 flex items-center px-4"><div className="w-1/3 h-4 bg-[var(--color-border-main)] rounded" /></div>
               <div className="flex justify-between items-center py-4 border-b border-[var(--color-bg-primary)] group-hover:bg-[var(--color-bg-secondary)] transition-colors px-2 rounded-lg -mx-2">
                 <div className="flex items-center"><div className="w-10 h-10 rounded-full bg-[var(--color-secondary-2)] mr-4" /><div className="w-32 h-4 bg-[var(--color-border-main)] rounded" /></div>
                 <div className="w-16 h-4 bg-red-200 rounded" />
               </div>
               <div className="flex justify-between items-center py-4 border-b border-[var(--color-bg-primary)] group-hover:bg-[var(--color-bg-secondary)] transition-colors px-2 rounded-lg -mx-2">
                 <div className="flex items-center"><div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 mr-4" /><div className="w-24 h-4 bg-[var(--color-border-main)] rounded" /></div>
                 <div className="w-20 h-4 bg-green-200 rounded" />
               </div>
               <div className="flex justify-between items-center py-4 group-hover:bg-[var(--color-bg-secondary)] transition-colors px-2 rounded-lg -mx-2">
                 <div className="flex items-center"><div className="w-10 h-10 rounded-full bg-[var(--color-secondary-1)]/30 mr-4" /><div className="w-28 h-4 bg-[var(--color-border-main)] rounded" /></div>
                 <div className="w-14 h-4 bg-red-200 rounded" />
               </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div className="grid md:grid-cols-2 gap-16 items-center" variants={fadeInUp}>
            <div className="order-2 md:order-1 bg-white border border-[var(--color-border-main)] p-8 rounded-2xl shadow-sm h-80 flex flex-col justify-center items-center group hover:shadow-md transition-shadow">
               <div className="w-full max-w-sm space-y-4">
                 <div className="bg-[var(--color-bg-primary)] p-4 rounded-xl border border-[var(--color-border-main)] group-hover:border-[var(--color-accent)] transition-colors">
                   <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Amount</div>
                   <div className="text-xl font-medium">₹ 1,200</div>
                 </div>
                 <div className="bg-[var(--color-bg-primary)] p-4 rounded-xl border border-[var(--color-border-main)] group-hover:border-[var(--color-accent)] transition-colors transition-delay-75">
                   <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Merchant</div>
                   <div className="text-lg">Uber India</div>
                 </div>
                 <div className="bg-[var(--color-accent)]/10 p-4 rounded-xl border border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent)]/20 transition-colors transition-delay-150">
                   <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Category</div>
                   <div className="text-lg text-[var(--color-accent)] font-medium">Transport</div>
                 </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[var(--color-secondary-1)] font-medium tracking-wide uppercase text-sm mb-4">Add expense</div>
              <h3 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-6">Cash takes about five seconds.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                In version one everything gets typed in: amount, category, done — the chai, the auto and the card spend alike. Mail alerts for cards and UPI, and voice entry that drops the amount, the merchant and the date into the right fields on their own, are both in development.
              </p>
              <ul className="space-y-4 text-[var(--color-text-primary)]">
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Amount, merchant, category, save</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> In development: dictate it, and those fields fill themselves</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Income goes in on the same screen, one toggle across</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div className="grid md:grid-cols-2 gap-16 items-center" variants={fadeInUp}>
            <div>
              <div className="text-[var(--color-secondary-1)] font-medium tracking-wide uppercase text-sm mb-4">Categories</div>
              <h3 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-6">Sorting that already knows Indian merchants.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                Fourteen categories to start with, each matching on the merchant names you already see on a statement. Rename them, add your own, and everything after that files itself the same way.
              </p>
              <ul className="space-y-4 text-[var(--color-text-primary)]">
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Fourteen to start with, each with its own colour</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Every one carries the merchant keywords it matches on</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" /> Add your own, or edit any of the defaults</li>
              </ul>
            </div>
            <div className="bg-white border border-[var(--color-border-main)] p-8 rounded-2xl shadow-sm h-80 flex content-center flex-wrap gap-3 group hover:shadow-md transition-shadow">
               {['Food & Dining', 'Groceries', 'Transport', 'Utilities', 'Shopping', 'Entertainment', 'Health', 'Travel', 'Education', 'Investment', 'Housing', 'EMI', 'Cash', 'Other'].map((cat, i) => (
                 <div key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
                    ${i % 3 === 0 ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' : 
                      i % 3 === 1 ? 'bg-[var(--color-secondary-1)]/20 text-[#3a685e]' : 
                      'bg-[var(--color-secondary-2)]/40 text-[var(--color-text-secondary)]'}`}
                 >
                   {cat}
                 </div>
               ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Privacy Section */}
        <motion.section 
          className="mb-32 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] p-10 md:p-16 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-['Fraunces'] font-bold mb-8 max-w-3xl leading-tight">
            Your mailbox is read, stripped and redacted on your own device.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-[var(--color-border-main)] text-lg">
              <p>
                What we store is the result — amount, merchant, date — in India, and deletable by you. <strong className="text-white">The architecture is the privacy policy.</strong>
              </p>
              <p>
                Your mailbox will be parsed on your phone. Headers, signatures and identifying details will be stripped there — only a short redacted snippet will ever be sent on.
              </p>
              <p>
                When mail parsing ships it will categorise spend and detect salary credits from transaction alerts. TLDR can never move money, place trades, or open accounts on your behalf.
              </p>
            </div>
            <div className="space-y-6 text-[var(--color-border-main)] text-lg">
              <div className="p-6 border border-white/20 rounded-xl bg-white/5">
                <p className="mb-4">
                  No third-party data brokers, no ad networks, no anonymised-and-resold loophole. Export or delete everything whenever you want.
                </p>
                <p>
                  Built to India's Digital Personal Data Protection Act, and your transaction data is processed and stored in India. Access, correct and erase it — and withdraw consent any time.
                </p>
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
          <motion.h2 className="text-4xl font-['Fraunces'] font-bold mb-12 text-center" variants={fadeInUp}>FAQ</motion.h2>
          
          <div className="space-y-8">
            <motion.div className="border-b border-[var(--color-border-main)] pb-8 group" variants={fadeInUp}>
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">How is this different from INDmoney, Kuvera, or Groww?</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                They're free because they make money elsewhere — brokerage commissions, loan referrals, distribution fees on the funds they sell you. That means their incentive is to sell you something. TLDR Money has one revenue line: your subscription. We don't have a lending arm, we don't sell insurance, we don't get paid when you buy a mutual fund. That leaves one way for us to earn: build something you keep paying for. We've written the comparisons out one by one — <Link to="/compare" className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 hover:decoration-[var(--color-accent)] underline-offset-4 transition-all">against spreadsheets, Mint, Walnut and broker apps</Link>.
              </p>
            </motion.div>

            <motion.div className="border-b border-[var(--color-border-main)] pb-8 group" variants={fadeInUp}>
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">What data does TLDR Money access?</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                Version one asks for no account access at all. The planned automatic version would use read-only access to the transaction alerts in your Gmail — UPI debits, card spends, salary credits — plus the asset values you add for net worth. The mail would be parsed and redacted on your own device, so no raw email would reach our servers; what we would store is the parsed record — amount, merchant, date — encrypted, in India. We never move money, place trades, sell it, or share it.
              </p>
            </motion.div>
            
            <motion.div className="border-b border-[var(--color-border-main)] pb-8 group" variants={fadeInUp}>
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">How does cancellation work?</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                Nothing to cancel today, because nothing is charged yet. Once paid plans arrive you will cancel in one tap from inside the app, keep full access until the end of the period you already paid for, and be able to export all your data on the way out.
              </p>
            </motion.div>
            
            <motion.div className="pb-8 group" variants={fadeInUp}>
              <h3 className="text-2xl font-['Fraunces'] font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Will there be a free trial when paid plans arrive?</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                That has not been decided, because no paid plan exists yet. What is settled is that nothing is charged today, and you would only ever pay by actively choosing a plan.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center py-20 bg-white border border-[var(--color-border-main)] rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-4xl md:text-5xl font-['Fraunces'] font-bold mb-6" variants={fadeInUp}>Start understanding your money</motion.h2>
          <motion.p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto" variants={fadeInUp}>
            Funded by subscription when it arrives — no ads, no referrals, no commissions. Nothing is charged today.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              to="#waitlist" 
              className="inline-flex items-center px-10 py-5 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              Join the waitlist
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
