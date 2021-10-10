import React from 'react';

const occupations = [
  'Armirač',
  'Autolakirer',
  'Autolimar',
  'Automehaničar',
  'Betonirac',
  'Bravar',
  'Dizajner',
  'Električar Održavanja',
  'Elektroinstalater',
  'Elektromonter',
  'Fasader',
  'Hidtroizolater',
  'Instalater Grijanja i Klimatizacije',
  'Izolater',
  'Klesar',
  'Kožarski Radnik',
  'Krojitelj Krzna i Kože',
  'Krovopokrivač',
  'Kuhar',
  'Limar',
  'Mesar',
  'Monter Cjevovoda',
  'Monter Građevinskih Elemenata',
  'Monter Metalnih Konstrukcija',
  'Pekar',
  'Podopolagač',
  'Polagač Keramičkih Pločica',
  'Programer',
  'Radnik Niskogradnje',
  'Radnik Visokogradnje',
  'Rukovatelj Građevinskim Strojevima',
  'Rukovatelj Kranom',
  'Sistemski Administrator',
  'Slastičar',
  'Soboslikar i Ličilac',
  'Stolar',
  'Tesar',
  'Vodoinstalater',
  'Vozač Teretnog Vozila',
  'Vozač Teretnog Vozila sa Prikolicom',
  'Zavarivač',
  'Zidar',
  'Njegovatelj',
  'Drugo (navedi u opisu posla)',
];

export type OccupationUnionType = typeof occupations[number];
export type OccupationsType = typeof occupations;

const useOccupations = () => {
  const [selectedOccupation, setSelectedOccupation] =
    React.useState<OccupationUnionType>();
  return {
    occupationList: occupations,
    value: selectedOccupation,
    setValue: setSelectedOccupation,
  };
};

export { useOccupations };
