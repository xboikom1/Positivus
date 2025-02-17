import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navContainer}>
      <a className={css.logo} href="./index.html">
        <svg
          className="logo-icon"
          width="36px"
          height="36px"
          aria-label="Positivus logo"
        >
          <use href="/src/images/icons/sprite.svg#icon-star"></use>
        </svg>
        <h1>Positivus</h1>
      </a>
      <ul className={css.navList}>
        <li>
          <a href="#about-us">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="">Use Cases</a>
        </li>
        <li>
          <a href="">Prices</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <button>Request a quote</button>
      </ul>
    </nav>
  );
};

export default Navigation;
