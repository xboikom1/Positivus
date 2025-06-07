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
            <div>
              <h3 className={css.cardTitle}>Search engine</h3>
              <h3 className={css.cardTitle}>optimization</h3>
            </div>
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
            src="/src/images/services-images/card-1.png"
            alt="Engine optimization illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <div>
              <h3 className={css.cardTitle}>Pay-per-click</h3>
              <h3 className={css.cardTitle}>advertising</h3>
            </div>
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
            src="/src/images/services-images/card-2.png"
            alt="Pay-per-click illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <div>
              <h3 className={css.cardTitle}>Social Media</h3>
              <h3 className={css.cardTitle}>Marketing</h3>
            </div>
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
            src="/src/images/services-images/card-3.png"
            alt="Social Media Marketing illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <div>
              <h3 className={css.cardTitle}>Email</h3>
              <h3 className={css.cardTitle}>Marketing</h3>
            </div>
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
            src="/src/images/services-images/card-4.png"
            alt="Email Marketing illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <div>
              <h3 className={css.cardTitle}>Content</h3>
              <h3 className={css.cardTitle}>Creation</h3>
            </div>
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
            src="/src/images/services-images/card-5.png"
            alt="Content creation illustration"
          />
        </li>
        <li className={css.cardListItem}>
          <div className={css.cardInfo}>
            <div>
              <h3 className={css.cardTitle}>Analytics and</h3>
              <h3 className={css.cardTitle}>Tracking</h3>
            </div>
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
            src="/src/images/services-images/card-6.png"
            alt="Analytics and Tracking illustration"
          />
        </li>
      </ul>
    </section>
  );
};

export default Services;
