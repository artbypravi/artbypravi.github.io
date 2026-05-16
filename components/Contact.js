import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up Formspree / EmailJS here
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactContent}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let&apos;s <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Connect</em>
          </h2>
          <div className="divider"></div>
          <p className={styles.contactText}>
            For commissions, collaborations, or inquiries, feel free to reach
            out via email or through social media. I&apos;ll get back to you as
            soon as possible.
          </p>

          <div className={styles.contactItem}>
            <div className={styles.contactItemIcon}><i className="fas fa-envelope"></i></div>
            <div>
              <div className={styles.contactItemLabel}>Email</div>
              <div className={styles.contactItemValue}>
                <a href="mailto:hello@artbypravi.com">hello@artbypravi.com</a>
              </div>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactItemIcon}><i className="fab fa-instagram"></i></div>
            <div>
              <div className={styles.contactItemLabel}>Instagram DM</div>
              <div className={styles.contactItemValue}>
                <a href="https://instagram.com/artbypravi" target="_blank" rel="noopener noreferrer">@artbypravi</a>
              </div>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactItemIcon}><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <div className={styles.contactItemLabel}>Based in</div>
              <div className={styles.contactItemValue}>Sri Lanka</div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem', paddingTop:'2rem' }}>
              <div style={{ fontSize:'2.5rem', color:'var(--accent)' }}><i className="fas fa-check-circle"></i></div>
              <p className="section-title" style={{ fontSize:'1.8rem' }}>Message sent!</p>
              <p style={{ color:'var(--warm-gray)', fontSize:'0.9rem' }}>
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <p className={styles.formTitle}>Send a message</p>

              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe"
                  value={form.name} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com"
                  value={form.email} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"
                  placeholder="Tell me about your commission or inquiry..."
                  value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.formSubmit}`}>
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
