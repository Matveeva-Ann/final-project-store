import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 20px;
  padding: 5px 10px;
  color: var(--textColor);
`;

export const FieldStyle = styled(Field)`
  width: calc(100% - 30px);
  padding: 5px 15px;
  margin-bottom: 25px;
  height: 35px;
  background-color: transparent;
  border: 1px solid var(--socialSvgColor);
  outline: none;
  font-size: 18px;
  &::placeholder {
    color: var(--socialSvgColor);
    font-size: 15px;
  }
`;

export const FormStyle = styled(Form)`
  max-width: 420px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  animation: modalContent 250ms linear;

  @keyframes modalContent {
    0% {
      transform: scale(0.97);
      opacity: 0;
    }
    80% {
      transform: scale(1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ErrorMessageStyle = styled.p`
  position: absolute;
  top: 48%;
  left: 10px;
  color: red;
  font-size: 14px;
`;
