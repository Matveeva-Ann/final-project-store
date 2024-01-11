import * as Yup from "yup";

const SchemaRegister = Yup.object().shape({
  userName: Yup.string()
    .required('*Це поле обов’язкове для заповнення'),
  email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, '*Введіть коректну електронну пошту')
    .required('*Це поле обов’язкове для заповнення'),
  phone: Yup.string()
    .matches(/^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/, '*Введіть коректний номер телефону')
    .required('*Це поле обов’язкове для заповнення'),
  password: Yup.string()
    .required('*Це поле обов’язкове для заповнення'),
  repeatPassword: Yup.string()
    .required('*Це поле обов’язкове для заповнення'),
  agree:  Yup.boolean()
    .oneOf([true], 'Треба погодитись з правилами користування'),
});

export default SchemaRegister;
