import css from './Logotypes.module.css';

const Logotypes = () => {
  return (
    <ul className={css.linkList}>
      <li className={css.linkListItem}>
        <a className={css.link} href="https://www.amazon.com" target="blank">
          <svg
            className="logo-icon"
            width="124px"
            height="48px"
            aria-label="Amazon logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a className={css.link} href="https://dribbble.com" target="blank">
          <svg
            className="logo-icon"
            width="128px"
            height="48px"
            aria-label="Dribble logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-dribble"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a className={css.link} href="https://www.hubspot.com" target="blank">
          <svg
            className="logo-icon"
            width="124px"
            height="48px"
            aria-label="Hubspot logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-hubspot"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a className={css.link} href="./index.html" target="blank">
          <svg
            className="logo-icon"
            width="124px"
            height="48px"
            aria-label="Positivus logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a className={css.link} href="./index.html" target="blank">
          <svg
            className="logo-icon"
            width="124px"
            height="48px"
            aria-label="Positivus logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a className={css.link} href="./index.html" target="blank">
          <svg
            className="logo-icon"
            width="124px"
            height="48px"
            aria-label="Positivus logo"
          >
            <use href="/src/images/icons/sprite.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Logotypes;
