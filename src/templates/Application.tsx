import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ApplicationAlert } from '../alert/ApplicationAlert';
import { PersonalDetailsForm } from '../application/PersonalDetailsForm';
import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Application = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 flex flex-col items-center min-h-screen">
      <Logo xl />
      <div className="w-full max-w-3xl mt-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <ApplicationAlert
            title="Detaljno ispunite formu"
            description="Što više informacija imamo o tvojim prošlim radnim iskustvima to ćemo te bolje moći spojiti sa poslodavcem."
          />

          <Tabs>
            <TabList className="my-6 w-full steps">
              <Tab
                data-content="1"
                className="step step-primary cursor-pointer"
              >
                Lični podaci
              </Tab>
              <Tab data-content="2" className="step cursor-pointer">
                Radno iskustvo
              </Tab>
              <Tab data-content="3" className="step cursor-pointer">
                Poznavanje jezika
              </Tab>
              <Tab data-content="4" className="step cursor-pointer">
                Želje i očekivanja
              </Tab>
              <div data-content="✓" className="step ">
                Uspjeh!
              </div>
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
          </Tabs>
        </form>
        <div className="text-center text-gray-500 text-xs">
          <FooterCopyright />
        </div>
      </div>
    </Section>
  </Background>
);

export { Application };
