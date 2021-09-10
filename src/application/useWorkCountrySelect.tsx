import * as React from 'react';

const workCountryList = [
  'Hrvatska',
  'Slovenija',
  'Austrija',
  'Njemačka',
  'Italija',
  'Bilo koja država EU',
] as const;

export type WorkCountryUnionType = typeof workCountryList[number];
export type WorkCountryType = typeof workCountryList;

const useWorkCountrySelect = () => {
  const [selected, setSelected] = React.useState<WorkCountryUnionType[]>([]);

  const toggleSelected = (country: WorkCountryUnionType) => {
    if (selected.includes(country)) {
      setSelected(selected.filter((s) => s !== country));
    } else {
      setSelected([...selected, country]);
    }
  };

  return { countryList: workCountryList, selected, toggle: toggleSelected };
};

export { useWorkCountrySelect };
