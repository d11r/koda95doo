import React from 'react';

import { InputLabel } from './InputLabel';

const languageLevels = [
  'Bez znanja',
  'Osnovne fraze i izrazi (A1)',
  'Osnovno sporazumijevanje (A2)',
  'Samostalno sporazumijevanje (B1)',
  'Komplikovani razgovori (B2)',
  'Razgovor bez zastoja (C1)',
  'Potpuno vladanje jezikom (C2)',
];

const LangKnowledgeLevels = (props: { id: string }) => (
  <select
    className="select select-bordered flex-grow ml-2 w-1/2"
    defaultValue={
      props.id === 'sr'
        ? languageLevels[languageLevels.length - 1]
        : languageLevels[0]
    }
    id={props.id}
  >
    {languageLevels.map((level) => (
      <option key={level}>{level}</option>
    ))}
  </select>
);

const Lang = (props: { code: string; label: string }) => (
  <div className="flex items-center justify-between mb-2">
    <label htmlFor={props.code} className="w-1/2">
      {props.label}
    </label>
    <LangKnowledgeLevels id={props.code} />
  </div>
);

const LangLicenceForm = () => (
  <>
    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
      <div className="w-full px-3 mb-6 md:mb-0">
        <InputLabel for="lang" label="Poznavanje jezika" />
        <Lang code="sr" label="SRB/CRO/BIH/MNE" />
        <Lang code="en" label="Engleski" />
        <Lang code="de" label="Njemački" />
        <Lang code="sl" label="Slovenački" />
        <Lang code="it" label="Italijanski" />
        <Lang code="fr" label="Francuski" />
        <Lang code="ru" label="Ruski" />
        <Lang code="uk" label="Ukrajinski" />
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <InputLabel
          for="licence"
          label="Licence, kursevi, priznanja i nagrade"
          tooltip="Navedi sve vrste licenci, završenih kurseva, priznanja i nagrada koje direktno ili indirektno utiču na tvoje kvalifikacije."
        />
        <textarea
          className="textarea h-24 textarea-bordered w-full"
          placeholder="Profesionalne i/ili licence za poznavanje jezika"
          id="licence"
        />
      </div>
    </div>
  </>
);

export { LangLicenceForm };
