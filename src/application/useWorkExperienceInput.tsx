import React from 'react';

const useWorkExperienceInput = () => {
  const [yoe, setYoe] = React.useState(undefined);
  const [currentlyEmployed, setCurrentlyEmployed] = React.useState(false);
  const [previousExp, setPreviousExp] = React.useState('');

  return {
    yoe: {
      value: yoe,
      setValue: setYoe,
      isValid: yoe !== '' && yoe != null && yoe >= 0,
    },
    employed: {
      value: currentlyEmployed,
      setValue: () => {
        setCurrentlyEmployed(!currentlyEmployed); // toggle
      },
      isValid: true, // always true because by default it is false
    },
    exp: {
      value: previousExp,
      setValue: setPreviousExp,
      isValid: previousExp.length > 0,
    },
  };
};

export { useWorkExperienceInput };
