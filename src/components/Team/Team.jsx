import css from './Team.module.css';

const Team = () => {
  return (
    <section className="section" id="team">
      <div className="titleContainer">
        <h2 className={css.title}>Team</h2>
        <p className={css.titleText}>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_1.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>John Smith</h4>
              <p>CEO and Founder</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_2.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>Jane Doe</h4>
              <p>Director of Operations</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_3.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>Michael Brown</h4>
              <p>Senior SEO Specialist</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_4.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>Emily Johnson</h4>
              <p>PPC Manager</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_5.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>Brian Williams</h4>
              <p>Social Media Specialist</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.personInfoContainer}>
            <img
              src="/src/images/team-images/card_6.png"
              alt="Team person photo"
            />
            <div className={css.pesronInfo}>
              <h4>Sarah Kim</h4>
              <p>Content Creator</p>
            </div>
            <a
              className={css.iconLink}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <svg
                className={css.linkedinIcon}
                width="18px"
                height="18px"
                aria-label="linkedin icon"
              >
                <use href="/src/images/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
