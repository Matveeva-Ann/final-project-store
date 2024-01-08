import { ErrorMessage} from 'formik';
import React, { useState } from 'react';

import {Input,InputWrapper,Label,Error,FormikWrapper } from '../../EmailNewsletter/EmailNewsletter.style';

export default function FieldWrapper({ name, children }) {

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setFocused(true);

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  }

  const handleChange = e => setValue(e.target.value);

  return (
    <FormikWrapper>
      <InputWrapper focused={focused} value={value}>
        <Label className={value ? 'active' : ''} htmlFor="email">{children}</Label>
        <Input 
        id={name} 
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="email"
        required
        />
      </InputWrapper>
      <ErrorMessage name={name} >
      {(msg) => <Error>{msg}</Error>}
      </ErrorMessage>
    </FormikWrapper>
  );
}
