import css from './Logotypes.module.css';

const Logotypes = () => {
  return (
    <ul className={css.linkList}>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoIcon}
            width="124px"
            height="48px"
            aria-label="Amazon logo"
          >
            <use href="/images/icons/sprite.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoIcon}
            width="128px"
            height="48px"
            aria-label="Dribble logo"
          >
            <use href="/images/icons/sprite.svg#icon-dribble"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://www.hubspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoIcon}
            width="124px"
            height="48px"
            aria-label="Hubspot logo"
          >
            <use href="/images/icons/sprite.svg#icon-hubspot"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://www.notion.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoIcon}
            width="148px"
            height="48px"
            aria-label="Notion logo"
          >
            <use href="/images/icons/sprite.svg#icon-notion"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://www.netflix.com/browse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoNetflixIcon}
            width="124px"
            height="48px"
            aria-label="Netflix logo"
          >
            <use href="/images/icons/sprite.svg#icon-netflix"></use>
          </svg>
        </a>
      </li>
      <li className={css.linkListItem}>
        <a
          className={css.link}
          href="https://www.zoom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={css.logoZoomIcon}
            width="112px"
            height="48px"
            aria-label="Zoom logo"
          >
            <use href="/images/icons/sprite.svg#icon-zoom"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Logotypes;
