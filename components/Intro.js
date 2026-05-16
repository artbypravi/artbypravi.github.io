import styles from '../styles/Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introInner}>
        <div className={styles.introAvatar}>
          <div className={styles.introAvatarImg}>
            <i className="fas fa-user"></i>
          </div>
          <div className={styles.introAvatarTag}>The Artist</div>
        </div>

        <div className={styles.introContent}>
          <span className="section-label">A short introduction</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            Hi, I&apos;m Jayani<br /><em style={{ fontStyle: 'italic' }}>Pravindi</em>
          </h2>
          <div className="divider"></div>
          <p className={styles.introText}>
            I create pencil drawings, portraits, and artistic illustrations
            inspired by emotions, people, and everyday moments. Every piece is
            carefully handcrafted with attention to detail and a love for
            traditional art.
          </p>
          <div className={styles.introSig}>Jayani Pravindi</div>
        </div>
      </div>
    </section>
  );
}
