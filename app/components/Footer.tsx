import { Shield } from 'lucide-react';

const linkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Download', href: '#download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-accent text-white">
                <Shield className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
              <span className="font-semibold text-sm tracking-tight">Digital Wellbeing Guard</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              A small Android app for people who&rsquo;d rather own their attention. Built slowly,
              on purpose.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="eyebrow mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} Digital Wellbeing Guard
          </p>
          <p className="font-mono text-[11px] text-muted">Made by INFINITTE INTERACTIVE</p>
        </div>
      </div>
    </footer>
  );
}
