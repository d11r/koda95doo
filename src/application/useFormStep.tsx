import * as React from 'react';

const useFormStep = () => {
  const MAX = 3;
  const [step, setStep] = React.useState(0);

  const goForward = () => setStep(Math.min(step + 1, MAX));
  const goBack = () => setStep(Math.max(0, step - 1));
  const jump = (stepInput: number) => setStep(stepInput);

  return { step, goForward, goBack, jump, MAX };
};

export { useFormStep };
