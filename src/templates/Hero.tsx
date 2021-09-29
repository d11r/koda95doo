import React from 'react';

import { Background } from '../background/Background';
import { CTAApply } from '../cta/CTAApply';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { NavItems } from '../navigation/NavItems';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-3">
      <NavbarTwoColumns logo={<Logo xl />}>
        <NavItems topHeader={true} />
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-2 md:pt-6 pb-8">
      <HeroOneButton
        title={
          <>
            {'Posao u Evropskoj Uniji uz '}
            <span className="text-primary-500">KODA95</span>
          </>
        }
        description="Najlakši put do posla u EU za sve profesije"
        button={<CTAApply />}
      />
    </Section>
  </Background>
);

export { Hero };
