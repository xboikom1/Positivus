import clsx from 'clsx';
import css from './CTA block.module.css';

const CTA_block = () => {
  return (
    <section className={clsx(css.sectionContainer, 'section')}>
      <div className={css.textContainer}>
        <h3 className={css.title}>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button type="button" className={css.btn}>
          Get your free proposal
        </button>
      </div>
      <img
        src="/src/images/CTA-image.png"
        alt="Decorative image"
        className={css.image}
      />
    </section>
  );
};

export default CTA_block;
