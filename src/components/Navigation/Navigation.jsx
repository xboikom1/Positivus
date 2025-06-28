import { useState, useEffect } from 'react';
import css from './Navigation.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

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
      <button
        className={css.mobileMenuOpenBtn}
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={handleBurgerClick}
      >
        <RxHamburgerMenu className={css.mobileMenuIcon} />
      </button>

      {isMenuOpen && (
        <div className={css.mobileMenu}>
          <button
            className={css.mobileMenuCloseBtn}
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose className={css.mobileMenuIcon} />
          </button>
          <ul className={css.mobileNavList}>
            <li>
              <a
                href="#working-process"
                className={css.navLink}
                onClick={handleNavLinkMobileClick}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={css.navLink}
                onClick={handleNavLinkMobileClick}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#case"
                className={css.navLink}
                onClick={handleNavLinkMobileClick}
              >
                Use Cases
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={css.navLink}
                onClick={handleNavLinkMobileClick}
              >
                Prices
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={css.navLink}
                onClick={handleNavLinkMobileClick}
              >
                Blog
              </a>
            </li>
            <li>
              <button
                type="button"
                className={css.requestBtn}
                onClick={handleRequestMobileClick}
              >
                Request a quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
