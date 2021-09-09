import * as React from 'react';

const workCountryList = [
  'Hrvatska',
  'Slovenija',
  'Austrija',
  'Njemačka',
  'Italija',
  'Bilo koja država EU',
] as const;

type WorkCountryUnionType = typeof workCountryList[number];

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
