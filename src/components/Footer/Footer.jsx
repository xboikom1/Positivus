import clsx from 'clsx';
import css from './Footer.module.css';
import { Form, Formik, Field } from 'formik';

const Footer = () => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

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

  return (
    <section className={clsx('section', css.footer)} id="footer">
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
            <a
              href="#case"
              className={css.navLink}
              onClick={handleNavLinkClick}
            >
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
        </ul>
        <ul className={css.socialLinks}>
          <a
            className={css.iconLink}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="15px" height="15px" aria-label="linkedin icon">
              <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
          <a
            className={css.iconLink}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={css.icon}
              width="30px"
              height="30px"
              aria-label="facebook icon"
            >
              <use href="/src/images/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            className={css.iconLink}
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18px" height="15px" aria-label="twitter icon">
              <use href="/src/images/icons/sprite.svg#icon-twitter"></use>
            </svg>
          </a>
        </ul>
      </nav>
      <div className={css.contactsContainer}>
        <div className={css.contactInfo}>
          <h4 className={css.contactsHeader}>Contact us:</h4>
          <address className={css.addressContainer}>
            <p className={css.adressInfo}>
              Email:
              <a href="mailto:info@positivus.com" className={css.adressLinks}>
                info@positivus.com
              </a>
            </p>
            <p className={css.adressInfo}>
              Phone:
              <a href="tel:5555678901" className={css.adressLinks}>
                555-567-8901
              </a>
            </p>
            <p className={css.adressInfo}>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </address>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
              required
            />
            <button type="submit" className={css.submitBtn}>
              Subscribe to news
            </button>
          </Form>
        </Formik>

        <ul className={css.socialLinks}>
          <a
            className={css.iconLink}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="15px" height="15px" aria-label="linkedin icon">
              <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
          <a
            className={css.iconLink}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={css.icon}
              width="30px"
              height="30px"
              aria-label="facebook icon"
            >
              <use href="/src/images/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            className={css.iconLink}
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18px" height="15px" aria-label="twitter icon">
              <use href="/src/images/icons/sprite.svg#icon-twitter"></use>
            </svg>
          </a>
        </ul>
      </div>
      <div className={css.copyrightBlock}>
        <p className={css.copyrightInfo}>
          © 2023 Positivus. All Rights Reserved.
        </p>
        <a href="#footer" className={css.privacyLink}>
          Privacy Policy
        </a>
      </div>
    </section>
  );
};

export default Footer;
