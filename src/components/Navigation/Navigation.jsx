import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navContainer}>
      <h1>Positivus</h1>
      <ul className={css.navList}>
        <li>
          <p>About us</p>
        </li>
        <li>
          <p>Services</p>
        </li>
        <li>
          <p>Use Cases</p>
        </li>
        <li>
          <p>Prices</p>
        </li>
        <li>
          <p>Blog</p>
        </li>
        <button>Request a quote</button>
      </ul>
    </nav>
  );
};

export default Navigation;
