import './form.css';
import { Formik, Field, Form } from 'formik';
import Button from '../Button/Button';
import schema from '../../reusableCode/schema';

function FormBasedOnFormik() {
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' });
      }}>
      {({ errors, touched, submitCount }) => (
        <Form className='form'>
          <label>
            <span>Name</span>
            <Field
              name='userName'
              className={errors.userName ? 'invalid' : ''}
            />
            {errors.userName && touched.userName && submitCount ? (
              <span>{errors.userName}</span>
            ) : null}
          </label>
          <label>
            <span>Email</span>
            <Field
              name='email'
              type='email'
              className={errors.email ? 'invalid' : ''}
            />
            {errors.email && touched.email && submitCount ? (
              <span>{errors.email}</span>
            ) : null}
          </label>
          <label>
            <span>Password</span>
            <Field
              name='password'
              type='password'
              className={errors.password ? 'invalid' : ''}
            />
            {errors.password && touched.password && submitCount ? (
              <span>{errors.password}</span>
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
