import React from 'react';

import className from 'classnames';

import { InputLabel } from './InputLabel';
import {
  CountryISOCode,
  isoCodes,
  LanguageKnowledgeType,
  LanguageKnowledgeUnionType,
  LanguageLabel,
  LanguageStateType,
} from './useLangInput';
import { WarningAlert } from './WarningAlert';

const handleLangChange =
  (updater: Function) =>
  (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    updater(e.target.id, e.target.value);
  };

const handleChange =
  (updater: Function) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updater(e.target.value);
  };

const LangKnowledgeLevels = (props: {
  id: CountryISOCode;
  levels: LanguageKnowledgeType;
  value: LanguageKnowledgeUnionType;
  changeValue: (
    code: CountryISOCode,
    value: LanguageKnowledgeUnionType
  ) => void;
}) => (
  <select
    className="select select-bordered flex-grow ml-2 w-1/2"
    id={props.id}
    value={props.value}
    onChange={handleLangChange(props.changeValue)}
  >
    {props.levels.map((level) => (
      <option key={level}>{level}</option>
    ))}
  </select>
);

const Lang = (props: {
  code: CountryISOCode;
  label: LanguageLabel;
  levels: LanguageKnowledgeType;
  value: LanguageKnowledgeUnionType;
  changeValue: (
    code: CountryISOCode,
    value: LanguageKnowledgeUnionType
  ) => void;
}) => (
  <div className="flex items-center justify-between mb-2">
    <label htmlFor={props.code} className="w-1/2">
      {props.label}
    </label>
    <LangKnowledgeLevels
      id={props.code}
      levels={props.levels}
      value={props.value}
      changeValue={props.changeValue}
    />
  </div>
);

const LangLicenceForm = (props: {
  language: {
    languageLevels: LanguageKnowledgeType;
    level: LanguageStateType;
    changeLevel: (
      code: CountryISOCode,
      value: LanguageKnowledgeUnionType
    ) => void;
  };
  langAndCert: {
    value: string;
    setValue: Function;
    isValid: boolean;
  };
  clickedNext: boolean;
}) => {
  const expCN = className({
    textarea: true,
    'h-24': true,
    'textarea-bordered': true,
    'w-full': true,
    'textarea-warning': !props.langAndCert.isValid,
  });

  const getErrors = () => {
    const errors = [];
    if (!props.langAndCert.isValid)
      errors.push(
        'Unesi svoje licence, priznanja, i slično. Ukoliko nemaš, upiši tako.'
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
        <div className="w-full px-3 mb-6 md:mb-0">
          <InputLabel for="lang" label="Poznavanje jezika" />
          {isoCodes.map((key) => (
            <Lang
              key={key}
              code={key}
              label={props.language.level[key].label}
              levels={props.language.languageLevels}
              value={props.language.level[key].value || ''}
              changeValue={props.language.changeLevel}
            />
          ))}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <InputLabel
            for="licence"
            label="Licence, kursevi, priznanja i nagrade"
            tooltip="Navedi sve misliš da bi nam pomoglo pri selekciji"
          />
          <textarea
            className={expCN}
            placeholder="Profesionalne i/ili licence za poznavanje jezika"
            id="licence"
            value={props.langAndCert.value}
            onChange={handleChange(props.langAndCert.setValue)}
          />
        </div>
      </div>
    </>
  );
};

export { LangLicenceForm };
