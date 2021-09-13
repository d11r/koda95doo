import React from 'react';

const useCertInput = () => {
  const [field, setField] = React.useState('');

  return { value: field, setValue: setField, isValid: field.length >= 0 };
};

export { useCertInput };
