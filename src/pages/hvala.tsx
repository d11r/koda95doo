import React from 'react';

import { Checkmark } from '../application/Checkmark';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';

const ThanksPage = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 flex flex-col items-center min-h-screen">
      <Logo xl />
      <div className="w-full max-w-3xl mt-4">
        <div className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 overflow-x-hidden">
          <div className="w-full flex flex-col items-center">
            <Checkmark />
            <h3 className="text-xl md:text-2xl mt-4 mb-4">Uspješna prijava!</h3>
            <p className="text-md md:text-xl text-gray-600 text-center">
              Hvala! Zapremili smo tvoju prijavu. Kada se prilika ukaže,
              javićemo ti putem br. telefona ili e-pošte.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export default ThanksPage;
