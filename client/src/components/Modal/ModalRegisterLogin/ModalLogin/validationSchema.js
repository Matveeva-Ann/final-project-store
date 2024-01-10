import * as Yup from "yup";

const SchemaLogin = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, '*Введіть коректну електронну пошту')
    .required('*Це поле обов’язкове для заповнення'),
  password: Yup.string()
    .required('*Це поле обов’язкове для заповнення'),
});

export default SchemaLogin;