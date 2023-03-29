import './form.css';

import Button from '../Button/Button';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\D*$/g, 'no digits')
    .required('Required'),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().min(5, 'Too Short!').required('Required'),
});

function FormBasedOnFormik() {
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}

      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({ errors, touched, submitCount }) => (
        <Form className='form'>
          <label>
            <span>Name</span>
            <Field
              name='userName'
              className={errors.userName ? 'invalid' : ''} />
            {errors.userName && touched.userName && submitCount ? (
              <div>{errors.userName}</div>
            ) : null}
          </label>
          <label>
            <span>Email</span>
            <Field
              name='email'
              type='email'
              className={errors.email ? 'invalid' : ''} />
            {errors.email && touched.email && submitCount ? <div>{errors.email}</div> : null}
          </label>
          <label>
            <span>Password</span>
            <Field
              name='password'
              type='password'
              className={errors.password ? 'invalid' : ''} />
            {errors.password && touched.password && submitCount ? (
              <div>{errors.password}</div>
            ) : null}
          </label>
          <div className='btn-wrapper'>
            <Button
              type='submit'
              color='dark'>
              Create an account
            </Button>
            <Button
              type='button'
              color='light'>
              Sign up with Google
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormBasedOnFormik;
