import React from 'react';

import className from 'classnames';

import { InputLabel } from './InputLabel';
import { WorkCountryType, WorkCountryUnionType } from './useWorkCountrySelect';
import { WarningAlert } from './WarningAlert';

const handleChange =
  (updater: Function) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updater(e.target.value);
  };

const WishesForm = (props: {
  workCountry: {
    countryList: WorkCountryType;
    selected: WorkCountryUnionType[];
    toggle: (country: WorkCountryUnionType) => void;
  };
  wishes: {
    availableNow: { value: boolean; setValue: Function; isValid: boolean };
    specialRequests: { value: string; setValue: Function; isValid: boolean };
  };
  clickedNext: boolean;
}) => {
  const specialRequestsCN = className({
    textarea: true,
    'h-24': true,
    'textarea-bordered': true,
    'w-full': true,
    'textarea-warning': !props.wishes.specialRequests.isValid,
    'text-base': true,
  });
  const getErrors = () => {
    const errors = [];
    if (props.workCountry.selected.length === 0)
      errors.push('Odaberi države u kojima bi htio/htjela raditi.');
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
          <InputLabel
            for="work-country"
            label="Željena država"
            tooltip="Države/regioni gdje bi želio/željela raditi."
          />
          <div className="form-control">
            {props.workCountry.countryList.map((country) => (
              <label className="cursor-pointer label" key={country}>
                <span className="label-text text-base">{country}</span>
                <input
                  type="checkbox"
                  checked={props.workCountry.selected.includes(country)}
                  onChange={() => props.workCountry.toggle(country)}
                  className="checkbox"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel
            for="available-now"
            label="Dostupan/na odmah?"
            tooltip="Da li bi mogao/mogla početi odmah?"
          />
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-base">Možeš početi odmah?</span>
              <input
                type="checkbox"
                checked={props.wishes.availableNow.value}
                onChange={() => props.wishes.availableNow.setValue()}
                id="available-now"
                className="checkbox"
              />
            </label>
          </div>
        </div>
        <div className="w-full px-3 mt-0 mb-6 md:mt-6">
          <InputLabel
            for="wishes"
            label="Posebni zahtjevi i uslovi"
            tooltip="Ukoliko imaš neke posebne uslove koje tražiš, napiši ih ovdje."
          />
          <textarea
            className={specialRequestsCN}
            placeholder="Napiši sve svoje zahtjeve i posebne uslove koje tražiš za posao u EU."
            id="wishes"
            value={props.wishes.specialRequests.value}
            onChange={handleChange(props.wishes.specialRequests.setValue)}
          />
        </div>
      </div>
    </>
  );
};

export { WishesForm };
