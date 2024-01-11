import { ErrorMessage } from 'formik';
import { ErrorMessageStyle, FieldStyle } from './ModalRegisterLogin.style';

export default function ModalField({ fieldData }) {
  return (
    <>
      <FieldStyle 
          type={fieldData.type} 
          name={fieldData.name} 
          component={fieldData.component}
          placeholder={fieldData.placeholder} />
      <ErrorMessageStyle>
        <ErrorMessage name={fieldData.name} />
      </ErrorMessageStyle>
    </>
  );
}
