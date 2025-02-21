import css from './Navigation.module.css';

const Navigation = () => {
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
          <a href="#about-us" className={css.navLink}>
            About us
          </a>
        </li>
        <li className={css.navListItem}>
          <a href="#services" className={css.navLink}>
            Services
          </a>
        </li>
        <li className={css.navListItem}>
          <a href="" className={css.navLink}>
            Use Cases
          </a>
        </li>
        <li className={css.navListItem}>
          <a href="" className={css.navLink}>
            Prices
          </a>
        </li>
        <li className={css.navListItem}>
          <a href="" className={css.navLink}>
            Blog
          </a>
        </li>
        <button type="button" className={css.requestBtn}>
          Request a quote
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
