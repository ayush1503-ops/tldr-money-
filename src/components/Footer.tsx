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
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border-main)] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-bold font-['Fraunces'] tracking-tight mb-6">
              TLDR<span className="text-[var(--color-text-secondary)]">MONEY</span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-md">
              Start understanding your money. Funded by subscription when it arrives — no ads, no referrals, no commissions. Nothing is charged today.
            </p>
            <div className="mt-8">
              <a href="mailto:hello@tldrmoney.in" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors font-medium relative group inline-block">
                hello@tldrmoney.in
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Fraunces'] text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:translate-x-1 inline-block transition-transform duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Fraunces'] text-lg mb-6">Socials</h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:translate-x-1 inline-block transition-transform duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-border-main)] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[var(--color-text-tertiary)] text-sm mb-4 md:mb-0">
            tldrmoney.in is operated by Sonal Systems Private Limited.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
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
