import React from 'react';

const languageLevels = [
  'Bez znanja',
  'Osnovne fraze i izrazi (A1)',
  'Osnovno sporazumijevanje (A2)',
  'Samostalno sporazumijevanje (B1)',
  'Komplikovani razgovori (B2)',
  'Razgovor bez zastoja (C1)',
  'Potpuno vladanje jezikom (C2)',
];

const initialState = {
  en: { label: 'Engleski', value: languageLevels[0] },
  de: { label: 'Njemački', value: languageLevels[0] },
  sl: { label: 'Slovenački', value: languageLevels[0] },
  it: { label: 'Italijanski', value: languageLevels[0] },
  fr: { label: 'Francuski', value: languageLevels[0] },
  ru: { label: 'Ruski', value: languageLevels[0] },
  uk: { label: 'Ukrajinski', value: languageLevels[0] },
} as const;

export const isoCodes = ['en', 'de', 'sl', 'it', 'fr', 'ru', 'uk'] as const;
export type CountryISOCode = typeof isoCodes[number];
export type LanguageKnowledgeUnionType = typeof languageLevels[number];
export type LanguageKnowledgeType = typeof languageLevels;
export type LanguageStateType = typeof initialState;
export type LanguageLabel =
  | 'Engleski'
  | 'Njemački'
  | 'Slovenački'
  | 'Italijanski'
  | 'Francuski'
  | 'Ruski'
  | 'Ukrajinski';

const useLangInput = () => {
  const [knowledgeLevelsPerLanguage, setKnowledgeLevelsPerLanguage] =
    React.useState(initialState);

  const changeLevelForCode = (
    code: CountryISOCode,
    value: LanguageKnowledgeUnionType
  ) => {
    setKnowledgeLevelsPerLanguage({
      ...knowledgeLevelsPerLanguage,
      [code]: { ...initialState[code], value },
    });
  };

  return {
    languageLevels,
    level: knowledgeLevelsPerLanguage,
    changeLevel: changeLevelForCode,
  };
};

export { useLangInput };
