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
            <h3>
              <span className={css.cardTitle}>Search engine</span>
              <span className={css.cardTitle}>optimization</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p className={css.cardLinkText}>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-1.png"
            alt="Engine optimization illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3>
              <span className={css.cardTitle}>Pay-per-click</span>
              <span className={css.cardTitle}>advertising</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-2.png"
            alt="Pay-per-click illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3>
              <span className={css.cardTitle}>Social Media</span>
              <span className={css.cardTitle}>Marketing</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p className={css.linkText}>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-3.png"
            alt="Social Media Marketing illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3>
              <span className={css.cardTitle}>Email</span>
              <span className={css.cardTitle}>Marketing</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-4.png"
            alt="Email Marketing illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3>
              <span className={css.cardTitle}>Content</span>
              <span className={css.cardTitle}>Creation</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-5.png"
            alt="Content creation illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <h3>
              <span className={css.cardTitle}>Analytics and</span>
              <span className={css.cardTitle}>Tracking</span>
            </h3>
            <a className={css.cardLink} href="#services">
              <svg
                className={css.arrowIcon}
                width="42px"
                height="42px"
                aria-label="Arrow icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
              </svg>
              <p className={css.linkText}>Learn more</p>
            </a>
          </div>
          <img
            className={css.cardImg}
            src="/src/images/services-images/card-6.png"
            alt="Analytics and Tracking illustration"
          />
        </li>
      </ul>
    </section>
  );
};

export default Services;
