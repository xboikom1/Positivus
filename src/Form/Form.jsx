import { useId } from 'react';
import css from './Form.module.css';
import { Form, Formik, Field } from 'formik';

const Contact_Form = () => {
  const initialValues = {
    username: '',
    email: '',
    message: '',
    intention: 'greeting',
  };

  const id = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.radioContainer}>
            <label className={css.radioLabel}>
              <Field
                type="radio"
                name="intention"
                value="greeting"
                className={css.realRadio}
              />
              <span className={css.customRadio} />
              Say Hi
            </label>
            <label className={css.radioLabel}>
              <Field
                type="radio"
                name="intention"
                value="quote"
                className={css.realRadio}
              />
              <span className={css.customRadio} />
              Get a Quote
            </label>
          </div>

          <div className={css.inputsContainer}>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} username`}>Name</label>
              <Field
                type="text"
                name="username"
                className={css.input}
                id={`${id} username`}
              />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} email`}>Email*</label>
              <Field
                type="email"
                name="email"
                className={css.input}
                id={`${id} email`}
                required
              />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} message`}>Message*</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                id={`${id} message`}
                required
                className={css.textarea}
              />
            </div>
          </div>

          <button type="submit" className={css.submitBtn}>
            Send Message
          </button>
        </Form>
      </Formik>
      <img
        src="/src/images/contact-us-image.png"
        className={css.formImg}
        alt="Decorative image"
      />
    </div>
  );
};

export default Contact_Form;
