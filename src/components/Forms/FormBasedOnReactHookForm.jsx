import './form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../Button/Button';
import schema from '../../reusableCode/schema';

export default function FormBasedOnReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formValues,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='form'>
      <label>
        <span>Name</span>
        <input
          type='text'
          defaultValue={''}
          {...register('userName')}
          className={errors.userName ? 'invalid' : ''}
        />
        <span>{errors.userName?.message}</span>
      </label>

      <label>
        <span>Email</span>
        <input
          type='email'
          {...register('email')}
          className={errors.email ? 'invalid' : ''}
        />
        <span>{errors.email?.message}</span>
      </label>

      <label>
        <span>Password</span>
        <input
          type='password'
          {...register('password')}
          className={errors.password ? 'invalid' : ''}
        />
        <span>{errors.password?.message}</span>
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
    </form>
  );
}
