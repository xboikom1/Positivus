import css from './Services.module.css';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="titleContainer">
        <h2 className={css.title}>Services</h2>
        <p className={css.titleText}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <ul className={css.cardList}>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
          <img
            src="/src/images/card-images/card-1.png"
            alt="Engine optimization illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3 className={css.cardTitle}>Search engine</h3>
            <h3 className={css.cardTitle}>optimization</h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="20px"
                height="20px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
