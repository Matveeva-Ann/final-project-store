import { ErrorMessage, Field, Formik } from 'formik';
import ModalBtn from '../ModalBtn/ModalBtn';
import { ErrorMessageStyle, FormStyle, FormWrapper } from '../ModalRegisterLogin.style';
import { LinkStyle, Wrapper } from './ModalRegister.style';
import ModalField from '../ModalField';
import { useState } from 'react';
import { fieldsData, initValue, SchemaRegister, sendRegisterData } from './helpers';
import './style.css';
import { useTranslation } from 'react-i18next';


export default function ModalRegister() {
  const [errStatus, setErrStatus] = useState(false);
  const { t } = useTranslation();

  const handelSubmit = (values, { resetForm }) => {
    if (values.password !== values.repeatPassword) {
      return;
    }
    delete values.repeatPassword;
    delete values.agree;
    values.isAdmin = false;
    sendRegisterData(values, setErrStatus, resetForm);
  };

  return (
    <>
      <FormWrapper>
        <Formik initialValues={initValue} onSubmit={handelSubmit} validationSchema={SchemaRegister}>
          <FormStyle action="">
            {fieldsData.map(fieldData => (
              <div style={{ position: 'relative' }} key={fieldData.name}>
                <ModalField fieldData={fieldData}></ModalField>
              </div>
            ))}

            <div style={{ position: 'relative', margin: '-20px 0 0 0' }}>
              <Wrapper>
                <Field className="inputStyle" name="agree" type="checkbox" id="myCheckbox" />
                <label className="labelStyle" htmlFor="myCheckbox" style={{ margin: '16px 0' }}>
                  {t('modals.modalRegister.agree')}
                </label>
                <LinkStyle href="url_to_terms">{t('modals.modalRegister.rules')}</LinkStyle>
              </Wrapper>

              <ErrorMessageStyle>
                <ErrorMessage name="agree" />
              </ErrorMessageStyle>
              {errStatus && <ErrorMessageStyle>{t('modals.validation.duplicateEmail')}</ErrorMessageStyle>}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <ModalBtn>{t('modals.modalRegister.registerBtn')}</ModalBtn>
            </div>
          </FormStyle>
        </Formik>
      </FormWrapper>
    </>
  );
}
