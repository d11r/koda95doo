import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ApplicationAlert } from '../alert/ApplicationAlert';
import { LangLicenceForm } from '../application/LangLicenceForm';
import { PersonalDetailsForm } from '../application/PersonalDetailsForm';
import { useCertInput } from '../application/useCertInput';
import { useCitizenshipSelect } from '../application/useCitizenshipSelect';
import { useEducation } from '../application/useEducation';
import { useFormStep } from '../application/useFormStep';
import { useLangInput } from '../application/useLangInput';
import { useOccupations } from '../application/useOccupations';
import { usePersonalInfoInput } from '../application/usePersonalInfoInput';
import { useWishesInput } from '../application/useWishesInput';
import { useWorkCountrySelect } from '../application/useWorkCountrySelect';
import { useWorkExperienceInput } from '../application/useWorkExperienceInput';
import { WishesForm } from '../application/WishesForm';
import { WorkExperienceForm } from '../application/WorkExperienceForm';
import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

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
  const workExperience = useWorkExperienceInput();
  const isWorkExpOK =
    occupation.value != null &&
    education.value != null &&
    workExperience.yoe.isValid &&
    workExperience.employed.isValid &&
    workExperience.exp.isValid;

  // for language & certs
  const language = useLangInput();
  const langAndCert = useCertInput();
  const isLangAndCertOK = langAndCert.isValid;

  // for wishes and expectations
  const workCountry = useWorkCountrySelect();
  const wishes = useWishesInput();
  const isWishesOK =
    workCountry.selected.length > 0 &&
    wishes.availableNow.isValid &&
    wishes.specialRequests.isValid;

  const handleForward = () => {
    if (step === 0) {
      if (isPersonalDetailsOK) {
        goForward();
        setIsNextPageClicked(false); // reset
      } else {
        setIsNextPageClicked(true);
      }
    } else if (step === 1) {
      if (isWorkExpOK) {
        goForward();
        setIsNextPageClicked(false); // reset
      } else {
        setIsNextPageClicked(true);
      }
    } else if (step === 2) {
      if (isLangAndCertOK) {
        goForward();
        setIsNextPageClicked(false); // reset
      } else {
        setIsNextPageClicked(true);
      }
    }
  };

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const sendToNetlify = async () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'form-name',
        // 1st page
        name,
        surname,
        email,
        phone,
        'year-of-birth': yob,
        citizenship: selected,
        // 2nd page
        occupation: occupation.value,
        education: education.value,
        'years-of-experience': workExperience.yoe.value,
        'currently-employed': workExperience.employed.value,
        'previous-job-desc': workExperience.exp.value,
        // 3rd page
        languages: language.level,
        licences: langAndCert.value,
        // 4th page
        'countries-of-work': workCountry.selected,
        'immediately-available': wishes.availableNow.value,
        'special-requests': wishes.specialRequests.value,
      }),
    })
      .then(() => alert('submitted'))
      .catch((error) => alert(error));
  };

  const finish = () => {
    if (isWishesOK) {
      // TODO: submit all data
      // maybe netlify forms? or firebase
      sendToNetlify();
    } else {
      setIsNextPageClicked(true);
    }
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6 flex flex-col items-center min-h-screen">
        <Logo xl />
        <div className="w-full max-w-3xl mt-4">
          <form
            data-netlify="true"
            className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 overflow-x-hidden"
          >
            <input
              type="hidden"
              name="form-name"
              value="netlify-form-submission"
            />
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
                  clickedNext={step === 1 && isNextPageClicked}
                  occupation={occupation}
                  education={education}
                  workExperience={workExperience}
                />
              </TabPanel>
              <TabPanel>
                <LangLicenceForm
                  clickedNext={step === 2 && isNextPageClicked}
                  language={language}
                  langAndCert={langAndCert}
                />
              </TabPanel>
              <TabPanel>
                <WishesForm
                  clickedNext={step === 3 && isNextPageClicked}
                  workCountry={workCountry}
                  wishes={wishes}
                />
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
