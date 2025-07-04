import { useId } from 'react';
import css from './Contact form.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const Contact_Form = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must not exceed 50 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(5, 'Message must be at least 5 characters')
      .required('Message is required'),
    intention: Yup.string()
      .oneOf(['greeting', 'quote'], 'Invalid intention')
      .required('Intention is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    message: '',
    intention: 'greeting',
  };

  const id = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    toast.success('Message sent successfully!');
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
            <ErrorMessage
              name="intention"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <div className={css.inputsContainer}>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} username`}>Name</label>
              <Field
                type="text"
                name="username"
                placeholder="Name"
                className={css.input}
                id={`${id} username`}
              />
              <ErrorMessage
                name="username"
                component="span"
                className={css.errorMessage}
              />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} email`}>Email*</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={css.input}
                id={`${id} email`}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMessage}
              />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={`${id} message`}>Message*</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                id={`${id} message`}
                className={css.textarea}
              />
              <ErrorMessage
                name="message"
                component="span"
                className={css.errorMessage}
              />
            </div>
          </div>

          <button type="submit" className={css.submitBtn}>
            Send Message
          </button>
        </Form>
      </Formik>
      <img
        src="/images/contact-us-image.png"
        className={css.formImg}
        alt="Decorative image"
      />
    </div>
  );
};

export default Contact_Form;
