import React from 'react';

import { PhoneNumberUtil } from 'google-libphonenumber';
import isEmail from 'validator/lib/isEmail';

function validateEmail(email: string): boolean {
  return isEmail(email);
}

function validatePhone(phone: string): boolean {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.isValidNumber(phoneUtil.parse(`+${phone}`));
  } catch (e: any) {
    return false;
  }
}

function validateYob(userYob?: Date): boolean {
  const currentYear = new Date().getFullYear();
  const legalAgeWork = 17;
  if (!userYob) return false;
  const userYobYear = userYob.getFullYear();
  return userYobYear <= currentYear - legalAgeWork && userYobYear >= 1930;
}

const usePersonalInfoInput = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [yob, setYob] = React.useState();

  return {
    name: {
      value: name,
      setValue: setName,
      isValid: name.length > 1,
    },
    surname: {
      value: surname,
      setValue: setSurname,
      isValid: surname.length > 1,
    },
    email: {
      value: email,
      setValue: setEmail,
      isValid: validateEmail(email),
    },
    phone: {
      value: phone,
      setValue: setPhone,
      isValid: validatePhone(phone),
    },
    yob: {
      value: yob,
      setValue: setYob,
      isValid: validateYob(yob),
    },
  };
};

export { usePersonalInfoInput };
