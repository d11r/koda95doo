import React from 'react';

import className from 'classnames';

import { InputLabel } from './InputLabel';
import { EducationsType } from './useEducation';
import { OccupationsType } from './useOccupations';
import { WarningAlert } from './WarningAlert';

const handleChange =
  (updater: Function) =>
  (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    updater(e.target.value);
  };

const WorkExperienceForm = (props: {
  clickedNext: boolean;
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
  workExperience: {
    yoe: { value: number | undefined; setValue: Function; isValid: boolean };
    employed: { value: boolean; setValue: Function; isValid: boolean };
    exp: { value: string; setValue: Function; isValid: boolean };
  };
}) => {
  const inputCN = {
    input: true,
    'input-bordered': true,
    'w-full': true,
    'text-base': true,
  };
  const selectCN = {
    select: true,
    'select-bordered': true,
    'w-full': true,
    'text-base': true,
  };

  const occupationCN = className(selectCN, {
    'select-warning': props.occupation.value === undefined,
  });
  const eduCN = className(selectCN, {
    'select-warning': props.education.value === undefined,
  });
  const yoeCN = className(inputCN, {
    'input-warning': !props.workExperience.yoe.isValid,
  });
  const expCN = className({
    textarea: true,
    'h-24': true,
    'textarea-bordered': true,
    'w-full': true,
    'textarea-warning': !props.workExperience.exp.isValid,
    'text-base': true,
  });

  const getErrors = () => {
    const errors = [];
    if (props.occupation.value === undefined)
      errors.push('Unesi svoje zanimanje');
    if (props.education.value === undefined)
      errors.push('Unesi stručnu spremu');
    if (!props.workExperience.yoe.isValid)
      errors.push('Unesi broj godina iskustva');
    if (!props.workExperience.employed.isValid)
      errors.push('Polje za trenutno zaposlenje je obavezno');
    if (!props.workExperience.exp.isValid)
      errors.push(
        'Polje u kojem detaljno opisuješ svoju pozadinu je obavezno.'
      );
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
          <InputLabel for="occupation" label="Zanimanje" />
          <select
            className={occupationCN}
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
            className={eduCN}
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
            className={yoeCN}
            placeholder="XX"
            value={props.workExperience.yoe.value || ''}
            onChange={handleChange(props.workExperience.yoe.setValue)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mt-6 md:mb-0">
          <InputLabel for="currently-employed" label="Trenutno zaposlenje" />
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-base">Trenutno zaposlen/a?</span>
              <input
                type="checkbox"
                id="currently-employed"
                className="checkbox"
                checked={props.workExperience.employed.value}
                onChange={handleChange(props.workExperience.employed.setValue)}
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
            className={expCN}
            placeholder="Detaljno opiši svoje prošlo radno iskustvo."
            id="experience"
            value={props.workExperience.exp.value}
            onChange={handleChange(props.workExperience.exp.setValue)}
          />
        </div>
      </div>
    </>
  );
};

export { WorkExperienceForm };
