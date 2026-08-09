import { Shield } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Download', href: '#download' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#dde4ed]/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="clay-icon p-1.5">
                <Shield className="w-4 h-4 text-[#FF6B6B]" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-sm text-foreground">Digital Wellbeing Guard</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Helping you build a healthier relationship with technology, one mindful moment at a
              time.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-foreground mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-[#FF6B6B] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#dde4ed]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Digital Wellbeing Guard. All rights reserved.
          </p>
          <p className="text-xs text-muted">Made with care for your attention.</p>
        </div>
      </div>
    </footer>
  );
}
