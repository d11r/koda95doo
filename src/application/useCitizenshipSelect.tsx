import * as React from 'react';

const citizenshipList = [
  'Srbija',
  'Bosna i Hercegovina',
  'Hrvatska',
  'Makedonija',
  'Crna Gora',
  'Drugo (van EU)',
  'Drugo (unutar EU)',
] as const;

export type CitizenshipUnionType = typeof citizenshipList[number];
export type CitizenshipCountriesType = typeof citizenshipList;

const useCitizenshipSelect = () => {
  const [selected, setSelected] = React.useState<CitizenshipUnionType[]>([]);

  const toggleSelected = (country: CitizenshipUnionType) => {
    if (selected.includes(country)) {
      setSelected(selected.filter((s) => s !== country));
    } else {
      setSelected([...selected, country]);
    }
  };

  return { countryList: citizenshipList, selected, toggle: toggleSelected };
};

export { useCitizenshipSelect };
