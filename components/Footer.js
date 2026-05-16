import styles from '../styles/Footer.module.css';

const footerSocials = [
  { icon: 'fab fa-instagram',  href: 'https://instagram.com/artbypravi',  label: 'Instagram' },
  { icon: 'fab fa-tiktok',     href: 'https://tiktok.com/@artbypravi',    label: 'TikTok'    },
  { icon: 'fab fa-facebook-f', href: 'https://facebook.com/artbypravi',   label: 'Facebook'  },
  { icon: 'fab fa-youtube',    href: 'https://youtube.com/@artbypravi',   label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>Art by <span>Pravi</span></div>
        <div className={styles.footerCopy}>
          <p>© 2026 Art by Pravi. All rights reserved.</p>
        </div>
        <div className={styles.footerSocials}>
          {footerSocials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
               className={styles.footerSocialLink} aria-label={s.label}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
