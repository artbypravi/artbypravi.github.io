import styles from '../styles/Social.module.css';

const socials = [
  { name: 'Instagram', handle: '@artbypravi', href: 'https://instagram.com/artbypravi', icon: 'fab fa-instagram', colorClass: styles.instagram },
  { name: 'TikTok',    handle: '@artbypravi', href: 'https://tiktok.com/@artbypravi',   icon: 'fab fa-tiktok',     colorClass: styles.tiktok    },
  { name: 'Facebook',  handle: 'Art by Pravi', href: 'https://facebook.com/artbypravi', icon: 'fab fa-facebook-f', colorClass: styles.facebook  },
  { name: 'YouTube',   handle: 'Art by Pravi', href: 'https://youtube.com/@artbypravi', icon: 'fab fa-youtube',    colorClass: styles.youtube   },
];

export default function Social() {
  return (
    <section id="social" className={styles.social}>
      <div className={styles.socialHeader}>
        <span className="section-label">Stay connected</span>
        <h2 className="section-title">
          Follow <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Art by Pravi</em>
        </h2>
        <div className="divider" style={{ margin: '1.5rem auto' }}></div>
        <p className={styles.socialDesc}>
          Stay connected for new artwork, sketches, behind-the-scenes content,
          and creative updates.
        </p>
      </div>

      <div className={styles.socialGrid}>
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <i className={`${s.icon} ${styles.socialIcon} ${s.colorClass}`}></i>
            <div className={styles.socialInfo}>
              <div className={styles.socialName}>{s.name}</div>
              <div className={styles.socialHandle}>{s.handle}</div>
            </div>
            <i className={`fas fa-arrow-right ${styles.socialArrow}`}></i>
          </a>
        ))}
      </div>
    </section>
  );
}
