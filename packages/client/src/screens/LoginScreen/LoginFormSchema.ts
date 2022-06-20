import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      // .min(2, 'Password is too short')
      // .max(40, 'Password is too long')
      .required('Required')
  });

export default LoginSchema