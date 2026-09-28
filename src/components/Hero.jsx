import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
     <div className="hero__backdrop" aria-hidden="true">
  <img src="/images/hero.jpg.png" alt="" className="hero__photo" />
</div>

      <div className="hero__content">
        <p className="hero__kicker">Lagos &mdash; Lekki, Ikoyi &amp; Banana Island</p>
        <h1 className="hero__headline">
          Find a place worth<br />coming home to.
        </h1>
        <p className="hero__sub">
          I help discerning clients buy, sell, and lease exceptional
          properties across Lagos &mdash; with the discretion, insight, and
          attention a decision this size deserves.
        </p>
        <div className="hero__actions">
          <a href="#properties" className="btn btn-primary">View Properties</a>
          <a href="#contact" className="btn btn-ghost on-dark">Work With Me</a>
        </div>
      </div>

      <a href="#properties" className="hero__scroll" aria-label="Scroll to properties">
        <span />
      </a>
    </section>
  );
}