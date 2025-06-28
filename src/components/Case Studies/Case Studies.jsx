import css from './Case Studies.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Case_Studies = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const caseStudiesData = [
    {
      text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
      id: 1,
    },
    {
      text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
      id: 2,
    },
    {
      text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
      id: 3,
    },
  ];

  const renderCaseStudyItem = item => (
    <div className={css.listItem} key={item.id}>
      <p className={css.listItemText}>{item.text}</p>
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
    </div>
  );

  return (
    <section className="section" id="case">
      <div className="titleContainer">
        <h2 className={css.title}>Case Studies</h2>
        <p className={css.titleText}>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {isMobile ? (
        <div className={css.mobileContainer}>
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            className={css.mobileSwiper}
          >
            {caseStudiesData.map(item => (
              <SwiperSlide key={item.id} className={css.swiperSlide}>
                {renderCaseStudyItem(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <ul className={css.list}>
          {caseStudiesData.map(item => (
            <li key={item.id} className={css.listItem}>
              {renderCaseStudyItem(item)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Case_Studies;
