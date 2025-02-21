import css from './Header.module.css';

const Header = () => {
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
        <button type="button" className={css.bookBtn}>
          Book a consultation
        </button>
      </div>
      <img src="/src/images/header-image.png" alt="Decoration image" />
    </div>
  );
};

export default Header;
