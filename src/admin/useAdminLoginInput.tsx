import * as React from 'react';

const useAdminLoginInput = () => {
  const [pw, setPw] = React.useState('');

  return { value: pw, setValue: setPw };
};

export { useAdminLoginInput };
