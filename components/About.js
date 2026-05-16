import styles from '../styles/About.module.css';

const artTypes = [
  { icon: 'fas fa-portrait', label: 'Pencil portraits' },
  { icon: 'fas fa-pen-nib', label: 'Sketch art' },
  { icon: 'fas fa-star', label: 'Custom commissions' },
  { icon: 'fas fa-paint-brush', label: 'Creative illustrations' },
  { icon: 'fas fa-hand-holding-heart', label: 'Handcrafted traditional artwork' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutContent}>
          <span className="section-label">About the Artist</span>
          <h2 className="section-title">
            About the <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Artist</em>
          </h2>
          <div className="divider"></div>
          <p className={styles.aboutText}>
            Art has always been a special way for me to express creativity and
            emotion. I enjoy creating realistic pencil portraits, sketch art, and
            unique illustrations that capture personality and feeling. Each
            artwork is created with patience, detail, and care.
          </p>
          <ul className={styles.aboutList}>
            {artTypes.map((item, i) => (
              <li key={i}>
                <i className={item.icon}></i>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.aboutVisual}>
          <div className={styles.aboutImgMain}>
            <i className="fas fa-pencil-alt" style={{ fontSize: '4rem', opacity: 0.25 }}></i>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStatsNum}>5+</div>
            <div className={styles.aboutStatsLabel}>Years of<br />Dedication</div>
          </div>
          <div className={styles.aboutImgAccent}>
            <p className={styles.aboutImgAccentText}>
              &ldquo;Every stroke tells a story&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
