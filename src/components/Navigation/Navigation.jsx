import { useState } from 'react';
import css from './Navigation.module.css';

const Navigation = () => {
  const handleNavLinkClick = e => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const elementID = href.slice(1);
      const target = document.getElementById(elementID);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  const handleRequestClick = e => {
    e.preventDefault();
    const elementID = 'contacts';
    const target = document.getElementById(elementID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleNavLinkMobileClick = e => {
    handleNavLinkClick(e);
    setIsMenuOpen(false);
  };

  const handleRequestMobileClick = e => {
    handleRequestClick(e);
    setIsMenuOpen(false);
  };

  return (
    <nav className={css.navContainer}>
      <a className={css.logo} href="./index.html">
        <svg width="36px" height="36px" aria-label="Positivus logo">
          <use href="/src/images/icons/sprite.svg#icon-star"></use>
        </svg>
        <h2 className={css.logoText}>Positivus</h2>
      </a>
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <a
            href="#working-process"
            className={css.navLink}
            onClick={handleNavLinkClick}
          >
            About us
          </a>
        </li>
        <li className={css.navListItem}>
          <a
            href="#services"
            className={css.navLink}
            onClick={handleNavLinkClick}
          >
            Services
          </a>
        </li>
        <li className={css.navListItem}>
          <a href="#case" className={css.navLink} onClick={handleNavLinkClick}>
            Use Cases
          </a>
        </li>
        <li className={css.navListItem}>
          <a
            href="#contacts"
            className={css.navLink}
            onClick={handleNavLinkClick}
          >
            Prices
          </a>
        </li>
        <li className={css.navListItem}>
          <a
            href="#testimonials"
            className={css.navLink}
            onClick={handleNavLinkClick}
          >
            Blog
          </a>
        </li>
        <button
          type="button"
          className={css.requestBtn}
          onClick={handleRequestClick}
        >
          Request a quote
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
