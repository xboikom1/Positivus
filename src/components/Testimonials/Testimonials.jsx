import TestimonialsSwiper from '../TestimonialsSwiper/TestimonialsSwiper';
import css from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className="section" id="testimonials">
      <div className="titleContainer">
        <h2 className={css.title}>Testimonials</h2>
        <p className={css.titleText}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <TestimonialsSwiper />
    </section>
  );
};

export default Testimonials;
