import React from 'react';

import { InputLabel } from './InputLabel';
import { useEducation } from './useEducation';
import { useOccupations } from './useOccupations';

const WorkExperienceForm = () => {
  const { occupationList } = useOccupations();
  const { eduList } = useEducation();
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputLabel for="occupation" label="Zanimanje" />
          <select
            className="select select-bordered w-full"
            defaultValue="Odaberi svoje zanimanje"
            id="occupation"
          >
            <option disabled={true}>Odaberi svoje zanimanje</option>
            {occupationList.map((option) => (
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
          >
            <option disabled={true}>Odaberi nivo obrazovanja</option>
            {eduList.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="w-full px-3 mt-0 mb-6 md:mt-6">
          <InputLabel
            for="experience"
            label="Opis prethodnih poslova"
            tooltip="Navedi svoje prijašnje poslodavce, te opiši šta su ti poslovi obuhvatali."
          />
          <textarea
            className="textarea h-24 textarea-bordered w-full"
            placeholder="Detaljno opišite svoje prošlo radno iskustvo."
            id="experience"
          />
        </div>
      </div>
    </>
  );
};

export { WorkExperienceForm };
