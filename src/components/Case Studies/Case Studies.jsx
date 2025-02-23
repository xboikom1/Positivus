import css from './Case Studies.module.css';

const Case_Studies = () => {
  return (
    <section className="section" id="case">
      <div className="titleContainer">
        <h2 className={css.title}>Case Studies</h2>
        <p className={css.titleText}>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.listItemText}>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className={css.link} href="#case">
            <p className={css.linkText}>Learn more</p>
            <svg
              className={css.arrowIcon}
              width="20px"
              height="20px"
              aria-label="Arrow icon"
            >
              <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
            </svg>
          </a>
        </li>
        <li className={css.listItem}>
          <p className={css.listItemText}>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a className={css.link} href="#case">
            <p className={css.linkText}>Learn more</p>
            <svg
              className={css.arrowIcon}
              width="20px"
              height="20px"
              aria-label="Arrow icon"
            >
              <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
            </svg>
          </a>
        </li>
        <li className={css.listItem}>
          <p className={css.listItemText}>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a className={css.link} href="#case">
            <p className={css.linkText}>Learn more</p>
            <svg
              className={css.arrowIcon}
              width="20px"
              height="20px"
              aria-label="Arrow icon"
            >
              <use href="/src/images/icons/sprite.svg#icon-Arrow"></use>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Case_Studies;
