import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Compare', path: '/compare' },
    { name: 'How we make money', path: '/how-we-make-money' },
    { name: 'Security', path: '/security' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Delete account', path: '/delete-account' },
  ];

  const legalLinks = [
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  const socialLinks = [
    { name: 'YouTube', path: 'https://www.youtube.com/@moneywithtldr' },
    { name: 'Instagram', path: 'https://www.instagram.com/tldr_money/' },
  ];

  return (
    <footer className="bg-[var(--color-bg-base)] pt-20 pb-10 mt-20 rounded-t-[32px] shadow-[var(--shadow-neo-base)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-bold font-display tracking-tight text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 px-4 py-2 rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] active:shadow-[var(--shadow-neo-inset)] -ml-4 mb-8">
              TLDR<span className="text-[var(--color-fg-muted)]">MONEY</span>
            </Link>
            <p className="text-[var(--color-fg-muted)] text-lg leading-relaxed max-w-md">
              Start understanding your money. Funded by subscription when it arrives — no ads, no referrals, no commissions. Nothing is charged today.
            </p>
            <div className="mt-8">
              <a href="mailto:hello@tldrmoney.in" className="inline-flex items-center px-6 py-3 bg-[var(--color-bg-base)] text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] rounded-2xl shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] active:shadow-[var(--shadow-neo-inset)] transition-all duration-300 font-medium">
                hello@tldrmoney.in
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:translate-x-1 inline-block transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded px-1 -ml-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Socials</h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:translate-x-1 inline-block transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded px-1 -ml-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between shadow-[var(--shadow-neo-inset-sm)] rounded-2xl px-6 py-4 bg-[var(--color-bg-base)]">
          <p className="text-[var(--color-fg-muted)] text-sm mb-4 md:mb-0">
            tldrmoney.in is operated by Sonal Systems Private Limited.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded px-1 -ml-1">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
