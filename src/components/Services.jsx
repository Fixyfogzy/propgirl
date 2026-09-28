import './Services.css';

const ICONS = {
  sales: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22 24 8l18 14" />
      <path d="M11 19v21h26V19" />
      <path d="M20 40V28h8v12" />
    </svg>
  ),
  acquisition: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="21" cy="21" r="12" />
      <path d="m30 30 12 12" />
      <path d="M16 22l4 4 7-8" />
    </svg>
  ),
  leasing: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="24" r="8" />
      <path d="M24 24h20" />
      <path d="M38 24v8" />
      <path d="M32 24v6" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 40h36" />
      <path d="M10 40V26" />
      <path d="M20 40V18" />
      <path d="M30 40V22" />
      <path d="M40 40V10" />
      <path d="M8 20l12-8 10 6 10-10" />
    </svg>
  ),
};

const SERVICES = [
  {
    icon: 'sales',
    title: 'Property Sales',
    text: 'Professional pricing, presentation and negotiation to sell your property for what it is worth, with a smooth path to completion.',
  },
  {
    icon: 'acquisition',
    title: 'Property Acquisition',
    text: 'A private search for homes and investments that match your brief, including off-market opportunities and full due diligence.',
  },
  {
    icon: 'leasing',
    title: 'Property Leasing',
    text: 'Finding reliable tenants for landlords, and the right home for tenants, with clear terms and properly managed agreements.',
  },
  {
    icon: 'advisory',
    title: 'Real Estate Advisory',
    text: 'Honest guidance on value, location and long-term returns, so you can make confident decisions before you commit.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="services__header">
          <h2>Support at every stage of your property journey</h2>
          <p>
            Buying, selling, leasing or simply weighing your options, you get
            one point of contact and advice you can trust.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service">
              <div className="service__icon">{ICONS[service.icon]}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}