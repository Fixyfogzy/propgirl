import PlaceholderImage from './PlaceholderImage';
import './About.css';

const STATS = [
  { value: '12+', label: 'Years in Lagos real estate' },
  { value: '350+', label: 'Properties sold' },
  { value: '400+', label: 'Clients served' },
  { value: '₦40bn', label: 'In transactions closed' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner about__grid">
        <div className="about__portrait">
         <PlaceholderImage
  variant="portrait"
  tone="light"
  label="Add broker portrait"
  src="/images/amara.png"
  alt="Amara Chidinma"
/>
        </div>

        <div className="about__content">
          <p className="about__kicker">About Amara</p>
          <h2>Property advice from someone who has done this hundreds of times.</h2>

          <div className="about__text">
            <p>
              I&rsquo;m Amara Chidinma, a Lagos-based real estate broker working
              across Lekki, Ikoyi, Victoria Island and Banana Island. Whether
              you&rsquo;re buying your first home, selling a family property, or
              building an investment portfolio, I guide you through each decision
              with clear advice and honest numbers.
            </p>
            <p>
              I take on a small number of clients at a time, so every search gets
              my full attention. You&rsquo;ll deal with me directly, from the first
              viewing to the day you get your keys.
            </p>
          </div>

          <dl className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}