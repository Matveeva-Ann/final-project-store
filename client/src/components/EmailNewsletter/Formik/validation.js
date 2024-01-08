import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Неправильный формат email')
    .required('Email обязателен')
    .min(2, 'Слишком короткий email')
    .max(70, 'Слишком длинный email')
    .required('Обовʼязкове поле'),

});
