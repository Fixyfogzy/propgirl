import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setName(String(data.get('name') || '').split(' ')[0]);
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner contact__grid">
        <div className="contact__intro">
          <h2>Ready to find your next property, or sell your current one?</h2>
          <p>
            Tell me what you&rsquo;re looking for and I&rsquo;ll respond
            personally, usually within one business day.
          </p>

          <div className="contact__actions">
            
             <a href="https://wa.me/2348000000000"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
            
              Chat on WhatsApp
            </a>
            <a href="tel:+2348000000000" className="btn btn-ghost on-light">
              Call +234 800 000 0000
            </a>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__thanks" role="status">
              <h3>Thank you{name ? `, ${name}` : ''}.</h3>
              <p>
                Your enquiry has been received. This form is a demo, so
                nothing was actually sent.
              </p>
              <button className="contact__again" onClick={() => setSent(false)}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="reach">Email or phone number</label>
                <input id="reach" name="reach" type="text" required />
              </div>

              <div className="field">
                <label htmlFor="message">How can I help?</label>
                <textarea id="message" name="message" rows="4" required />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}