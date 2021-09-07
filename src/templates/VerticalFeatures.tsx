import { ReactNode } from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const StepNumber = ({ children }: { children: ReactNode }) => {
  return <span className="text-primary-500">{children}</span>;
};

const VerticalFeatures = () => (
  <Section
    customTitle={
      <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">
        Do posla u <span className="underline">samo</span>{' '}
        <StepNumber>3</StepNumber> koraka
      </h2>
    }
    description="Nakon što ispunite prijavu koja uključuje Vaše iskustvo, želje i očekivanja, mi radimo sve što je u našoj moći da Vas spojimo sa poslodavcem. Poslije toga samo čekate da Vam se obratimo."
  >
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>1. </StepNumber> Ispunite prijavu
        </h3>
      }
      description="Trebamo znati Vaš nivo iskustva, poznavanje jezika, države u kojima želite zaposlenje, i očekivanja. I naravno kontakt podatke za sljedeći korak!"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>2. </StepNumber> Čekajte da Vam se obratimo
        </h3>
      }
      description="Naš tim analizira Vašu prijavu i pokušava Vas spojiti sa partnerskim poslodavcima. Ukoliko budete odabrani, javićemo Vam se putem e-pošte ili kontakt telefona koji nam date."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>3.</StepNumber> Finaliziranje detalja
        </h3>
      }
      description="Čestitamo. Došli ste do konačnog koraka. Na ovom koraku radimo zajedno da utvrdimo svu neophodnu papirologiju prije početka rada. Nakon ovog koraka spremni ste za rad!"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
