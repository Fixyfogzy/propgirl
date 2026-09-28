import './Footer.css';

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348000000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20l1.2-4.2A8 8 0 1 1 8.400 18.800L4 20z" />
        <path d="M9 9c0 3 3 6 6 6l1-1.500-2-1-1 .8c-.8-.4-1.600-1.200-2-2l.8-1-1-2L9 9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              Amara<span>Chidinma</span>
            </a>
            <p>Luxury real estate across Lekki, Ikoyi, Victoria Island and Banana Island.</p>
          </div>

          <div className="footer__contact">
            <a href="tel:+2348000000000">+234 800 000 0000</a>
            <a href="mailto:hello@amarachidinma.com">hello@amarachidinma.com</a>
            <p>14 Admiralty Way, Lekki Phase 1, Lagos</p>
          </div>

          <ul className="footer__socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Amara Chidinma. All rights reserved.</p>
          <p>Demo concept. All content is placeholder.</p>
        </div>
      </div>
    </footer>
  );
}