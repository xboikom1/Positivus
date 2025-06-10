import Contact_Form from '../Contact form/Contact form';
import css from './Contact us.module.css';

const ContactUs = () => {
  return (
    <section className="section" id="contacts">
      <div className="titleContainer">
        <h2 className={css.title}>Contact Us</h2>
        <p className={css.titleText}>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <Contact_Form />
    </section>
  );
};

export default ContactUs;
