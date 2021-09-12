import React from 'react';

const edu = [
  'Bez edukacije',
  'Četiri razreda osnovne škole',
  'Osnovna škola',
  'Srednja stručna škola',
  'Srednja škola',
  'Viša škola',
  'Visoka škola',
  'Master',
  'Doktor nauka',
];

export type EducationUnionType = typeof edu[number];
export type EducationsType = typeof edu;

const useEducation = () => {
  const [selectedEducationLevel, setSelectedEducationLevel] =
    React.useState<EducationUnionType>();
  return {
    eduList: edu,
    value: selectedEducationLevel,
    setValue: setSelectedEducationLevel,
  };
};

export { useEducation };
