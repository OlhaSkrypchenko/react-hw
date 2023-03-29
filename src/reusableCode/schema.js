import * as Yup from 'yup';

 const schema = Yup.object().shape({
  userName: Yup.string()
    .required('Required')
    .matches(/^\D*$/g, 'Name should have more than 1 character and no digits')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string()
    .required('Required')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email'),
  password: Yup.string()
    .required('Required')
    .min(5, 'Password should have more than 4 characters'),
});


export default schema;