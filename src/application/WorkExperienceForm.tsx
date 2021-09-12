import React from 'react';

import { InputLabel } from './InputLabel';
import { EducationsType } from './useEducation';
import { OccupationsType } from './useOccupations';

const handleChange =
  (updater: Function) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updater(e.target.value);
  };

const WorkExperienceForm = (props: {
  occupation: {
    occupationList: OccupationsType;
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  education: {
    eduList: EducationsType;
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
}) => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel for="occupation" label="Zanimanje" />
          <select
            className="select select-bordered w-full"
            defaultValue="Odaberi svoje zanimanje"
            id="occupation"
            value={props.occupation.value}
            onChange={handleChange(props.occupation.setValue)}
          >
            <option disabled={true}>Odaberi svoje zanimanje</option>
            {props.occupation.occupationList.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel for="edu" label="Stručna sprema" />
          <select
            className="select select-bordered w-full"
            defaultValue="Odaberi nivo obrazovanja"
            id="edu"
            value={props.education.value}
            onChange={handleChange(props.education.setValue)}
          >
            <option disabled={true}>Odaberi nivo obrazovanja</option>
            {props.education.eduList.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3 mt-0 mb-6 md:mt-6">
          <InputLabel
            for="yoe"
            label="Godine iskustva u struci"
            tooltip="Ako nemaš iskustvo, unesi broj 0"
          />
          <input
            type="number"
            id="yoe"
            autoComplete="off"
            min={0}
            max={100}
            className="input input-bordered w-full"
            placeholder="XX"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel for="currently-employed" label="Trenutno zaposlenje" />
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Trenutno zaposlen/a?</span>
              <input
                type="checkbox"
                id="currently-employed"
                className="checkbox"
              />
            </label>
          </div>
        </div>
        <div className="w-full px-3 mb-6">
          <InputLabel
            for="experience"
            label="Opis prethodnih poslova"
            tooltip="Detaljan opis svih radnih iskustava"
          />
          <textarea
            className="textarea h-24 textarea-bordered w-full"
            placeholder="Detaljno opiši svoje prošlo radno iskustvo."
            id="experience"
          />
        </div>
      </div>
    </>
  );
};

export { WorkExperienceForm };
