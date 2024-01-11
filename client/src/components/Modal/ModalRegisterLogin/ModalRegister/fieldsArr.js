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


const fieldsData = [
  {
    type: 'text',
    name: 'userName',
    placeholder: '*Name',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: '*Email',
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: '*Phone',
    component: PhoneInput,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: '*Password',
  },
  {
    type: 'password',
    name: 'repeatPassword',
    placeholder: '*Repeat password',
  },
];

export default fieldsData;