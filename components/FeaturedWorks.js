import styles from '../styles/FeaturedWorks.module.css';

const works = [
  { tag: 'Portrait Study', title: 'Realistic Portrait Sketches', icon: 'fas fa-user' },
  { tag: 'Pencil Art', title: 'Black & White Pencil Art', icon: 'fas fa-pencil-alt' },
  { tag: 'Nature', title: 'Nature & Creative Drawings', icon: 'fas fa-leaf' },
  { tag: 'Character', title: 'Character Illustrations', icon: 'fas fa-magic' },
  { tag: 'Commission', title: 'Custom Commission Pieces', icon: 'fas fa-star' },
  { tag: 'Mixed', title: 'Sketch Collections', icon: 'fas fa-layer-group' },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.worksHeader}>
        <div className={styles.worksHeaderText}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Artwork</em>
          </h2>
        </div>
        <p className={styles.worksDesc}>
          A curated collection of selected works showcasing pencil shading,
          portrait studies, and creative illustrations.
        </p>
      </div>

      <div className={styles.worksGrid}>
        {works.map((work, i) => (
          <div key={i} className={styles.workItem}>
            <div className={styles.workPlaceholder}>
              <i className={work.icon}></i>
              <span>Artwork {i + 1}</span>
            </div>
            <div className={styles.workOverlay}>
              <p className={styles.workTag}>{work.tag}</p>
              <h3 className={styles.workTitle}>{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
