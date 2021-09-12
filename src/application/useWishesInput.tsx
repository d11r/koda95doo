import React from 'react';

const useWishesInput = () => {
  const [isAvailableNow, setIsAvailableNow] = React.useState(false);
  const [specialRequests, setSpecialRequests] = React.useState('');

  return {
    availableNow: {
      value: isAvailableNow,
      setValue: () => setIsAvailableNow(!isAvailableNow),
      isValid: true,
    },
    specialRequests: {
      value: specialRequests,
      setValue: setSpecialRequests,
      isValid: specialRequests.length >= 0,
    },
  };
};

export { useWishesInput };
