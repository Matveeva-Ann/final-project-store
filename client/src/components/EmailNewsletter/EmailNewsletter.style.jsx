import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  /* position: relative; */
`;

export const FormikWrapper = styled.div`
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  position: relative;
  left: 25px;

  &:focus-within label,
  input:not(:placeholder-shown) + label,
  input:valid + label {
    top: -10px;
    font-size: 13px;
    background-color: #fff;
    padding: 0 5px;
    color: #333;
  }

  & .active {
    top: -10px;
    font-size: 13px;
    color: #333;
    background-color: #fff;
    padding: 0 5px;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #ff6347;
`;

export const BtnWrapper = styled.div`
  position: relative;
  right: 17px;
  @media (width < 570px) {
    right: 10px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 12px;
  left: 20px;
  pointer-events: none;
  transition: 0.3s ease all;
  color: #999;
  @media (width < 570px) {
    top: 8px;
  }
`;

export const Input = styled(Field)`
  width: 300px;
  height: 45px;
  font-size: 18px;
  outline: none;
  padding-left: 15px;
  border-radius: 50px;
  border-color: var(--accentColorText);
  @media (width < 570px) {
    width: 220px;
    height: 35px;
    font-size: 15px;
  }
`;
