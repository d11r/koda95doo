import React from 'react';

import className from 'classnames';
import DatePicker from 'react-datepicker';

import { InputLabel } from './InputLabel';
import {
  CitizenshipCountriesType,
  CitizenshipUnionType,
} from './useCitizenshipSelect';
import { WarningAlert } from './WarningAlert';

import 'react-datepicker/dist/react-datepicker.css';

const handleChange =
  (updater: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updater(e.target.value);
  };

const PersonalDetailsForm = (props: {
  clickedNext: boolean;
  info: {
    name: { value: string; setValue: Function; isValid: boolean };
    surname: { value: string; setValue: Function; isValid: boolean };
    email: { value: string; setValue: Function; isValid: boolean };
    phone: { value: string; setValue: Function; isValid: boolean };
    yob: { value: Date | undefined; setValue: Function; isValid: boolean };
    countries: {
      countryList: CitizenshipCountriesType;
      selected: CitizenshipUnionType[];
      toggle: (country: CitizenshipUnionType) => void;
    };
  };
}) => {
  const { name, surname, email, phone, yob, countries } = props.info;
  const { countryList, selected, toggle } = countries;

  const inputCN = {
    input: true,
    'input-bordered': true,
    'w-full': true,
  };

  const nameCN = className(inputCN, { 'input-warning': !name.isValid });
  const surnameCN = className(inputCN, { 'input-warning': !surname.isValid });
  const emailCN = className(inputCN, { 'input-warning': !email.isValid });
  const phoneCN = className(inputCN, { 'input-warning': !phone.isValid });
  const yobCN = className(inputCN, { 'input-warning': !yob.isValid });

  const getErrors = () => {
    const errors = [];
    if (!name.isValid) errors.push('Polje ime je obavezno');
    if (!surname.isValid) errors.push('Polje prezime je obavezno');
    if (!email.isValid) errors.push('Polje e-pošta nije pravilno uneseno');
    if (!phone.isValid) errors.push('Unesi br. telefona sa pozivnim brojem');
    if (!yob.isValid) errors.push('Unesi godinu rođenja');
    if (selected.length === 0) errors.push('Odaberi zemlju državljanstva');
    return errors;
  };
  const errors = getErrors();

  return (
    <>
      <WarningAlert isOpen={props.clickedNext && errors.length > 0}>
        <ul>
          {getErrors().map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </WarningAlert>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel for="first-name" label="Ime" />
          <input
            type="text"
            id="first-name"
            autoComplete="given-name"
            className={nameCN}
            placeholder="Ime kao na pasošu"
            value={name.value}
            onChange={handleChange(name.setValue)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputLabel for="last-name" label="Prezime" />
          <input
            className={surnameCN}
            id="last-name"
            autoComplete="family-name"
            type="text"
            placeholder="Prezime kao na pasošu"
            value={surname.value}
            onChange={handleChange(surname.setValue)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 my-6 md:mb-0">
          <InputLabel for="email" label="E-pošta" />
          <input
            type="email"
            id="email"
            autoComplete="email"
            className={emailCN}
            placeholder="primjer@domen.com"
            value={email.value}
            onChange={handleChange(email.setValue)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel
            for="tel"
            label="Broj mobilnog telefona"
            tooltip="Sa pozivnim brojem"
          />
          <input
            type="tel"
            id="tel"
            autoComplete="tel"
            className={phoneCN}
            placeholder="Sa pozivnim kodom, npr. +387 65 123 456"
            value={phone.value}
            onChange={handleChange(phone.setValue)}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel for="yob" label="Datum rođenja" />
          <DatePicker
            selected={yob.value}
            onChange={(date: Date) => yob.setValue(date)}
            className={yobCN}
            placeholderText="Datum rođenja kao na pasošu"
            maxDate={new Date(`${new Date().getFullYear() - 17}`)}
            minDate={new Date('1930')}
            dateFormat="dd.MM.yyyy"
            autoComplete="bday"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel for="country" label="Državljanstvo" />

          <div className="form-control">
            {countryList.map((country) => (
              <label className="cursor-pointer label" key={country}>
                <span className="label-text">{country}</span>
                <input
                  type="checkbox"
                  checked={selected.includes(country)}
                  onChange={() => toggle(country)}
                  className="checkbox"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { PersonalDetailsForm };
