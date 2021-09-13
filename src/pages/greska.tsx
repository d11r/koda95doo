import React from 'react';

import { Cross } from '../application/Cross';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';

const ErrorPage = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 flex flex-col items-center min-h-screen">
      <Logo xl />
      <div className="w-full max-w-3xl mt-4">
        <div className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 overflow-x-hidden">
          <div className="w-full flex flex-col items-center">
            <Cross />
            <h3 className="text-xl md:text-2xl mt-4 mb-4">
              Neuspješna prijava.
            </h3>
            <p className="text-md md:text-xl text-gray-600 text-center">
              Hvala! Nažalost nismo uspjeli da procesiramo tvoju prijavu.
              Najvjerovatnije je naša greška koju već pokušavamo riješiti.
              Probajte ponovo kasnije. Ukoliko se greška opet desi, pošaljite
              e-mail na posao@koda95doo.com.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export default ErrorPage;
