import React from 'react';

import { InputLabel } from './InputLabel';
import { useCitizenshipSelect } from './useCitizenshipSelect';

const PersonalDetailsForm = () => {
  const { countryList, selected, toggle } = useCitizenshipSelect();
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel for="first-name" label="Ime" />
          <input
            type="text"
            id="first-name"
            autoComplete="given-name"
            className="input input-bordered w-full"
            placeholder="Ime kao na pasošu"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputLabel for="last-name" label="Prezime" />
          <input
            className="input input-bordered w-full"
            id="last-name"
            autoComplete="family-name"
            type="text"
            placeholder="Prezime kao na pasošu"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 my-6 md:mb-0">
          <InputLabel for="email" label="E-pošta" />
          <input
            type="email"
            id="email"
            autoComplete="email"
            className="input input-bordered w-full"
            placeholder="primjer@domen.com"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel for="tel" label="Broj mobilnog telefona" />
          <input
            type="tel"
            id="tel"
            autoComplete="tel"
            className="input input-bordered w-full"
            placeholder="Sa pozivnim kodom, npr. +387 65 123 456"
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

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export { PersonalDetailsForm };
