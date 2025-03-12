import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import css from './Swiper.module.css';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/zoom';
import clsx from 'clsx';

export default () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={2}
      spaceBetween={50}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      className={css.swiperContainer}
    >
      <SwiperSlide className={clsx(css.swiperContainer, css.swiperSlide)}>
        <svg className={css.bubbleIcon} aria-label="message icon">
          <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
        </svg>
        <p className={css.bubbleText}>
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business.
        </p>

        <div className={css.authorInfoContainer}>
          <h5 className={css.authorName}>John Smith</h5>
          <p className={css.authorText}>Marketing Director at XYZ Corp</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={clsx(css.swiperContainer, css.swiperSlide)}>
        <svg className={css.bubbleIcon} aria-label="message icon">
          <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
        </svg>
        <p className={css.bubbleText}>
          "Positivus helped us transform our online presence. Their expertise in
          SEO and digital marketing significantly increased our customer
          engagement and sales."
        </p>
        <div className={css.authorInfoContainer}>
          <h5 className={css.authorName}>Emily Johnson</h5>
          <p className={css.authorText}>CEO at TechWave</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={clsx(css.swiperContainer, css.swiperSlide)}>
        <svg className={css.bubbleIcon} aria-label="message icon">
          <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
        </svg>
        <p className={css.bubbleText}>
          "Thanks to Positivus, we have seen a drastic improvement in our
          website traffic. Their strategic approach is simply outstanding!"
        </p>
        <div className={css.authorInfoContainer}>
          <h5 className={css.authorName}>Michael Brown</h5>
          <p className={css.authorText}>Founder of MarketFlow</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={clsx(css.swiperContainer, css.swiperSlide)}>
        <svg className={css.bubbleIcon} aria-label="message icon">
          <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
        </svg>
        <p className={css.bubbleText}>
          "Working with Positivus has been a game-changer for us. Their team is
          responsive, innovative, and truly understands our brand needs."
        </p>
        <div className={css.authorInfoContainer}>
          <h5 className={css.authorName}>Sophia Lee</h5>
          <p className={css.authorText}>
            Head of Digital at Creative Solutions
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={clsx(css.swiperContainer, css.swiperSlide)}>
        <svg className={css.bubbleIcon} aria-label="message icon">
          <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
        </svg>
        <p className={css.bubbleText}>
          "Positivus provided excellent insights that helped us redefine our
          social media strategy. We highly recommend their services!"
        </p>
        <div className={css.authorInfoContainer}>
          <h5 className={css.authorName}>David Wilson</h5>
          <p className={css.authorText}>Marketing Manager at BrightAds</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
