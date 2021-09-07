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
        Do željenog posla u <span className="underline">samo</span>{' '}
        <StepNumber>3</StepNumber> koraka
      </h2>
    }
  >
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>1. </StepNumber> Popuni prijavu
        </h3>
      }
      description="Potrebno je navesti lične podatke, kontakt telefon i e-poštu, radno iskustvo, poznavanje jezika države u kojoj tražiš zaposlenje, te tvoje želje i očekivanja."
      image="/assets/images/feature.svg"
      imageAlt="Ispunjavanje prijave"
    />
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>2. </StepNumber> Čekaj da ti se obratimo
        </h3>
      }
      description="Naš tim će analizirati tvoju prijavu i zapremiti je u našu bazu podataka. Kada se ukaže prilika, kontaktiraćemo te preko e-pošte ili telefona."
      image="/assets/images/feature2.svg"
      imageAlt="Čekanje da Vam se operater obrati"
      reverse
    />
    <VerticalFeatureRow
      title={
        <h3 className="text-2xl md:text-3xl text-gray-900 font-semibold">
          <StepNumber>3.</StepNumber> Finalizacija
        </h3>
      }
      description="Nakon što ti prezentujemo ponudu poslodavca i ti je prihvatiš, obezbjeđujemo ti neophodnu dokumentaciju."
      image="/assets/images/feature3.svg"
      imageAlt="Potpisivanje ugovora i izdavanje dokumentacije"
    />
  </Section>
);

export { VerticalFeatures };
