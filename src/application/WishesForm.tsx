import React from 'react';

import { InputLabel } from './InputLabel';
import { useWorkCountrySelect } from './useWorkCountrySelect';

const WishesForm = () => {
  const { countryList, selected, toggle } = useWorkCountrySelect();
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel
            for="work-country"
            label="Željena država"
            tooltip="Države/regioni gdje bi želio/željela raditi."
          />
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
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel
            for="available-now"
            label="Dostupan/na odmah?"
            tooltip="Da li bi mogao/mogla početi odmah?"
          />
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Možeš početi odmah?</span>
              <input type="checkbox" id="available-now" className="checkbox" />
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
            className="textarea h-24 textarea-bordered w-full"
            placeholder="Napiši sve svoje zahtjeve i posebne uslove koje tražiš. Ukoliko nisi siguran/na, napiši da nemaš posebne uslove."
            id="wishes"
          />
        </div>
      </div>
    </>
  );
};

export { WishesForm };
