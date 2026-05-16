import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      {/* LEFT: Image panel */}
      <div className={styles.heroRight}>
        <div className={styles.heroImageWrap}>
          <img
            src="images/hero.jpg"
            alt="Featured artwork by Jayani Pravindi"
            className={styles.heroImg}
          />
          <div className={styles.heroImageOverlay}></div>
        </div>
        <div className={styles.heroBadge}>
          <div className={styles.heroBadgeNum}>100+</div>
          <div className={styles.heroBadgeText}>Artworks Created</div>
        </div>
      </div>

      {/* RIGHT: Text content */}
      <div className={styles.heroLeft}>
        <div className={styles.heroEyebrow}>
          <span className={styles.heroEyebrowLine}></span>
          <span className={styles.heroEyebrowText}>Pencil Art &amp; Illustrations</span>
        </div>

        <h1 className={styles.heroTitle}>
          Art by<br /><em>Pravi</em>
        </h1>

        <p className={styles.heroSubtitle}>
          Handcrafted Pencil Art &amp; Creative Illustrations
        </p>

        <p className={styles.heroDesc}>
          Expressive sketches, detailed portraits, and meaningful artwork
          created with passion and creativity.
        </p>

        <div className={styles.heroActions}>
          <a href="#works" className="btn btn-primary">
            <i className="fas fa-images"></i> View Artwork
          </a>
          <a href="https://www.instagram.com/artby.pravi" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            <i className="fab fa-instagram"></i> Follow on Instagram
          </a>
        </div>

        <div className={styles.heroScroll}>
          <span className={styles.scrollLine}></span>
          <span>Scroll to explore</span>
        </div>
      </div>

    </section>
  );
}