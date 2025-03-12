import Swiper from '../Swiper/Swiper';
import css from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className="section" id="case">
      <div className="titleContainer">
        <h2 className={css.title}>Team</h2>
        <p className={css.titleText}>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <Swiper />
    </section>
  );
};

export default Testimonials;
