import clsx from 'clsx';
import css from './Header.module.css';

const Header = () => {
  const handleClick = e => {
    e.preventDefault();
    const elementID = 'contacts';
    if (elementID) {
      document.getElementById(elementID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={css.headerContainer}>
      <div className={css.textContainer}>
        <h1 className={css.title}>
          Navigating the digital landscape for success
        </h1>
        <p className={css.text}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button
          type="button"
          className={clsx(css.bookBtn, css.bookBtnDesktop)}
          onClick={handleClick}
        >
          Book a consultation
        </button>
      </div>
      <img
        src="/src/images/header-image.png"
        alt="Decoration image"
        className={css.image}
      />
      <button
        type="button"
        className={clsx(css.bookBtn, css.bookBtnMobile)}
        onClick={handleClick}
      >
        Book a consultation
      </button>
    </div>
  );
};

export default Header;
