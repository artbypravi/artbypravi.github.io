import styles from '../styles/Commission.module.css';

const commissionTypes = [
  { icon: 'fas fa-portrait', label: 'Portrait drawings' },
  { icon: 'fas fa-heart', label: 'Couple sketches' },
  { icon: 'fas fa-paw', label: 'Pet portraits' },
  { icon: 'fas fa-dragon', label: 'Character art' },
  { icon: 'fas fa-gift', label: 'Personalized gifts' },
];

export default function Commission() {
  return (
    <section id="commission" className={styles.commission}>
      <div className={styles.commissionInner}>
        <div className={styles.commissionContent}>
          <span className="section-label">Work with me</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            Custom Artwork <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Commissions</em>
          </h2>
          <div className="divider"></div>
          <p className={styles.commissionText}>
            Looking for a personalized artwork or portrait? Commissions are
            open and tailored to capture what matters most to you — a person,
            a pet, a moment, or a character.
          </p>

          <ul className={styles.commissionTypes}>
            {commissionTypes.map((item, i) => (
              <li key={i}>
                <i className={item.icon}></i>
                {item.label}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--cream)' }}>
            <i className="fas fa-envelope"></i> Get in Touch
          </a>
          <p className={styles.commissionNote}>
            For pricing and availability, reach out through social media or email.
          </p>
        </div>

        <div className={styles.commissionVisual}>
          <div className={styles.commissionCard}>
            <div className={styles.commissionIcon}>
              <i className="fas fa-pencil-alt"></i>
            </div>
            <h3 className={styles.commissionCardTitle}>Every piece is one of a kind</h3>
            <p className={styles.commissionCardText}>
              Each commission is drawn entirely by hand using traditional pencil
              techniques — no digital filters, no shortcuts. Just patience,
              skill, and care.
            </p>
            <div className={styles.commissionCardDivider}></div>
            <span className={styles.commissionSocialHint}>
              <i className="fab fa-instagram"></i>&nbsp; DM on Instagram to start
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
