import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.navLogo}>
          Art by <span>Pravi</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#commission">Commissions</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#commission" className={styles.navCta}>Commission Art</a></li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="#about"      onClick={closeMenu}>About</a></li>
          <li><a href="#works"      onClick={closeMenu}>Works</a></li>
          <li><a href="#commission" onClick={closeMenu}>Commissions</a></li>
          <li><a href="#contact"    onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="#commission" onClick={closeMenu} className={styles.mobileCta}>
              Commission Art
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} />
      )}
    </>
  );
}
