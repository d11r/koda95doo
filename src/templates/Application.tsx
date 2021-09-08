import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ApplicationAlert } from '../alert/ApplicationAlert';
import { PersonalDetailsForm } from '../application/PersonalDetailsForm';
import { useFormStep } from '../application/useFormStep';
import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const finish = () => {
  console.log('finish');
};

const Application = () => {
  const { step, jump, goBack, goForward, MAX } = useFormStep();
  const isFinalStep = step === MAX;
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6 flex flex-col items-center min-h-screen">
        <Logo xl />
        <div className="w-full max-w-3xl mt-4">
          <form className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4">
            <ApplicationAlert
              title="Detaljno ispunite formu"
              description="Što više informacija imamo o tvojim prošlim radnim iskustvima to ćemo te bolje moći spojiti sa poslodavcem."
            />

            <Tabs selectedIndex={step} onSelect={(idx) => jump(idx)}>
              <TabList className="my-6 w-full steps hidden sm:grid">
                <Tab
                  data-content="1"
                  className={`step cursor-pointer${
                    step === 0 ? ' step-info' : ''
                  }`}
                >
                  Lični podaci
                </Tab>
                <Tab
                  data-content="2"
                  className={`step cursor-pointer${
                    step === 1 ? ' step-info' : ''
                  }`}
                >
                  Radno iskustvo
                </Tab>
                <Tab
                  data-content="3"
                  className={`step cursor-pointer${
                    step === 2 ? ' step-info' : ''
                  }`}
                >
                  Poznavanje jezika
                </Tab>
                <Tab
                  data-content="4"
                  className={`step cursor-pointer${
                    step === 3 ? ' step-info' : ''
                  }`}
                >
                  Želje i očekivanja
                </Tab>
              </TabList>

              <TabPanel>
                <PersonalDetailsForm />
              </TabPanel>
              <TabPanel>
                <p>2</p>
              </TabPanel>
              <TabPanel>
                <p>3</p>
              </TabPanel>
              <TabPanel>
                <p>4</p>
              </TabPanel>

              <div className="flex items-center justify-between">
                <div className="w-1/2 flex justify-start">
                  {step > 0 && (
                    <button className="btn" type="button" onClick={goBack}>
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

                <div className="w-1/2 flex justify-end">
                  {step >= 0 && step <= MAX && (
                    <button
                      className={`btn${isFinalStep ? ' btn-primary' : ''}`}
                      type="button"
                      onClick={() => {
                        if (!isFinalStep) goForward();
                        else finish();
                      }}
                    >
                      {isFinalStep ? 'Pošalji prijavu ' : 'Dalje '}
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
