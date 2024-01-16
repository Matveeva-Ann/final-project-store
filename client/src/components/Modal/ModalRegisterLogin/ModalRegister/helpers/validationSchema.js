import i18next from "i18next";
import * as Yup from "yup";

const translate = key => {
  return i18next.t(key);
};

const SchemaRegister = Yup.object().shape({
  userName: Yup.string()
    .required(translate('modals.validation.required')),
  email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, translate('modals.validation.email'))
    .required(translate('modals.validation.required')),
  phone: Yup.string()
    .matches(/^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/, translate('modals.validation.phone'))
    .required(translate('modals.validation.required')),
  password: Yup.string()
    .required(translate('modals.validation.required'))
    .min(7, translate('modals.validation.password'))
    .max(30, translate('modals.validation.password')),
  repeatPassword: Yup.string()
    .required(translate('modals.validation.required'))
    .min(7, translate('modals.validation.password'))
    .max(30, translate('modals.validation.password'))
    .oneOf([Yup.ref('password')], translate('modals.validation.repeatPassword')),
  agree:  Yup.boolean()
    .oneOf([true], translate('modals.validation.agree')),
});


export {SchemaRegister};
