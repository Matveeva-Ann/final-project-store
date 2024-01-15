import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';

import {Input,InputWrapper,Label,Error,FormikWrapper } from '../../EmailNewsletter/EmailNewsletter.style';

export default function FieldWrapper({ name, children }) {

  const [focused, setFocused] = useState(false);
  const [field, meta] = useField(name);

  const handleFocus = () => setFocused(true);

  const handleBlur = () => {
    if (!field.value) {
      setFocused(false);
    }
  }

  return (
    <FormikWrapper>
      <InputWrapper focused={focused} value={field.value}>
        <Label className={field.value ? 'active' : ''} htmlFor={name}>{children}</Label>
        <Input 
        id={name} 
        name={name}
        value={field.value}
        onChange={field.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        required
        />
      </InputWrapper>
      <ErrorMessage name={name} >
      {(msg) => <Error>{msg}</Error>}
      </ErrorMessage>
    </FormikWrapper>
  );
}