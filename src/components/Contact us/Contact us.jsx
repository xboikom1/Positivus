import css from './Contact us.module.css';
import Contact_Form from '../../Form/Form';

const ContactUs = () => {
  return (
    <section className="section" id="case">
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
