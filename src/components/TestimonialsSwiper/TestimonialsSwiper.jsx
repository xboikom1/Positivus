import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import css from './TestimonialsSwiper.module.css';
import './swiperActiveStyles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSwiper = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={css.swiperContainer}>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={isMobile ? 20 : 50}
        centeredSlides={true}
        navigation={{
          nextEl: `.${css.swiperButtonNext}`,
          prevEl: `.${css.swiperButtonPrev}`,
        }}
        pagination={{
          el: `.${css.customPagination}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="${className}">
                <svg class="customBulletIcon" aria-label="star icon">
                  <use href="/src/images/icons/sprite.svg#icon-star"></use>
                </svg>
              </div>`;
          },
        }}
        className={css.swiperWrapper}
      >
        <SwiperSlide className={css.swiperSlide}>
          <svg className={css.bubbleIcon} aria-label="message icon">
            <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
          </svg>
          <p className={css.bubbleText}>
            &ldquo;We have been working with Positivus for the past year and
            have seen a significant increase in website traffic and leads. The
            team is professional, responsive, and truly cares about the success
            of our business.&rdquo;
          </p>
          <div className={css.authorInfoContainer}>
            <h5 className={css.authorName}>John Smith</h5>
            <p className={css.authorText}>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <svg className={css.bubbleIcon} aria-label="message icon">
            <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
          </svg>
          <p className={css.bubbleText}>
            &ldquo;Positivus helped us transform our online presence. Their
            expertise in SEO and digital marketing significantly increased our
            customer engagement and sales.&rdquo;
          </p>
          <div className={css.authorInfoContainer}>
            <h5 className={css.authorName}>Emily Johnson</h5>
            <p className={css.authorText}>CEO at TechWave</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <svg className={css.bubbleIcon} aria-label="message icon">
            <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
          </svg>
          <p className={css.bubbleText}>
            &ldquo;Thanks to Positivus, we have seen a drastic improvement in
            our website traffic. Their strategic approach is simply
            outstanding!&rdquo;
          </p>
          <div className={css.authorInfoContainer}>
            <h5 className={css.authorName}>Michael Brown</h5>
            <p className={css.authorText}>Founder of MarketFlow</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <svg className={css.bubbleIcon} aria-label="message icon">
            <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
          </svg>
          <p className={css.bubbleText}>
            &ldquo;Working with Positivus has been a game-changer for us. Their
            team is responsive, innovative, and truly understands our brand
            needs.&rdquo;
          </p>
          <div className={css.authorInfoContainer}>
            <h5 className={css.authorName}>Sophia Lee</h5>
            <p className={css.authorText}>
              Head of Digital at Creative Solutions
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <svg className={css.bubbleIcon} aria-label="message icon">
            <use href="/src/images/icons/sprite.svg#icon-bubble"></use>
          </svg>
          <p className={css.bubbleText}>
            &ldquo;Positivus provided excellent insights that helped us redefine
            our social media strategy. We highly recommend their
            services!&rdquo;
          </p>
          <div className={css.authorInfoContainer}>
            <h5 className={css.authorName}>David Wilson</h5>
            <p className={css.authorText}>Marketing Manager at BrightAds</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <svg className={css.swiperButtonPrev} aria-label="prev button">
        <use href="/src/images/icons/sprite.svg#icon-Arrow-right"></use>
      </svg>
      <svg className={css.swiperButtonNext} aria-label="next button">
        <use href="/src/images/icons/sprite.svg#icon-Arrow-right"></use>
      </svg>

      <div className={css.customPagination}></div>
    </div>
  );
};

export default TestimonialsSwiper;
