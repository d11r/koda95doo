import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ApplicationAlert } from '../alert/ApplicationAlert';
import { LangLicenceForm } from '../application/LangLicenceForm';
import { PersonalDetailsForm } from '../application/PersonalDetailsForm';
import { useCitizenshipSelect } from '../application/useCitizenshipSelect';
import { useEducation } from '../application/useEducation';
import { useFormStep } from '../application/useFormStep';
import { useOccupations } from '../application/useOccupations';
import { usePersonalInfoInput } from '../application/usePersonalInfoInput';
import { WishesForm } from '../application/WishesForm';
import { WorkExperienceForm } from '../application/WorkExperienceForm';
import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const finish = () => {
  // TODO: implement end of application
  // TODO: submit all data
};

const Application = () => {
  const { step, goBack, goForward, MAX } = useFormStep();
  const isFinalStep = step === MAX;
  const [isNextPageClicked, setIsNextPageClicked] = React.useState(false);

  // for validation
  // 1: personal
  const personalInfo = usePersonalInfoInput();
  const { name, surname, email, phone, yob } = personalInfo;
  const countries = useCitizenshipSelect();
  const { selected } = countries;
  const isPersonalDetailsOK =
    name.isValid &&
    surname.isValid &&
    email.isValid &&
    phone.isValid &&
    yob.isValid &&
    selected.length > 0;

  // for work experience
  const occupation = useOccupations();
  const education = useEducation();

  const handleForward = () => {
    // TODO: do for all steps
    if (step === 0) {
      if (isPersonalDetailsOK) {
        goForward();
      } else {
        setIsNextPageClicked(true);
      }
    }
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6 flex flex-col items-center min-h-screen">
        <Logo xl />
        <div className="w-full max-w-3xl mt-4">
          <form className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 overflow-x-hidden">
            <ApplicationAlert
              title="Detaljno ispunite formu"
              description="Sva polja su obavezna. Što više informacija imamo o tvojim prošlim radnim iskustvima to ćemo te bolje moći spojiti sa poslodavcem."
            />

            <Tabs selectedIndex={step} onSelect={() => {}}>
              <TabList className="my-6 w-full steps hidden sm:grid">
                <Tab
                  data-content="1"
                  className={`step${step === 0 ? ' step-info' : ''}`}
                >
                  Lični podaci
                </Tab>
                <Tab
                  data-content="2"
                  className={`step${step === 1 ? ' step-info' : ''}`}
                >
                  Radno iskustvo
                </Tab>
                <Tab
                  data-content="3"
                  className={`step${step === 2 ? ' step-info' : ''}`}
                >
                  Jezik i licence
                </Tab>
                <Tab
                  data-content="4"
                  className={`step${step === 3 ? ' step-info' : ''}`}
                >
                  Želje i očekivanja
                </Tab>
              </TabList>

              <TabPanel>
                <PersonalDetailsForm
                  clickedNext={step === 0 && isNextPageClicked}
                  info={{ ...personalInfo, countries }}
                />
              </TabPanel>
              <TabPanel>
                <WorkExperienceForm
                  occupation={occupation}
                  education={education}
                />
              </TabPanel>
              <TabPanel>
                <LangLicenceForm />
              </TabPanel>
              <TabPanel>
                <WishesForm />
              </TabPanel>

              <div className="flex items-center justify-between flex-row">
                <div className="w-full flex justify-start mr-2">
                  {step > 0 && (
                    <button
                      className="btn btn-outline w-full sm:w-auto"
                      type="button"
                      onClick={goBack}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                      </svg>
                      Nazad
                    </button>
                  )}
                </div>
                <div className="w-full flex justify-end ml-2">
                  {step >= 0 && step <= MAX && (
                    <button
                      className={`btn w-full sm:w-auto${
                        isFinalStep ? ' btn-primary' : ''
                      }`}
                      type="button"
                      onClick={() => {
                        if (!isFinalStep) handleForward();
                        else finish();
                      }}
                    >
                      {isFinalStep ? 'Pošalji' : 'Dalje '}
                      {!isFinalStep && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </Tabs>
          </form>
          <div className="text-center text-gray-500 text-xs">
            <FooterCopyright />
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Application };
