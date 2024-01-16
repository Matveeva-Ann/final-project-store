import i18next from "i18next";
import { PatternFormat } from "react-number-format";

const PhoneInput = ({ field, ...props }) => {
  return (
    <PatternFormat
      {...field}
      {...props}

      format="+38 (0##) ### ## ##"
      mask="_"
      allowEmptyFormatting
    />
  );
}

const translate = key => {
  return i18next.t(key);
};

const fieldsData = [
  {
    type: 'text',
    name: 'userName',
    placeholder:  translate('modals.placeholders.name'),
  },
  {
    type: 'text',
    name: 'email',
    placeholder: translate('modals.placeholders.email'),
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: translate('modals.placeholders.phone'),
    component: PhoneInput,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: translate('modals.placeholders.password'),
  },
  {
    type: 'password',
    name: 'repeatPassword',
    placeholder: translate('modals.placeholders.repeatPassword'),
  },
];

export default fieldsData;