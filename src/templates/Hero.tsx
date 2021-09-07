import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { NavItems } from '../navigation/NavItems';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <NavItems />
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 pb-8">
      <HeroOneButton
        title={
          <>
            {'Posao u Evropskoj Uniji uz '}
            <span className="text-primary-500">KODA95</span>
          </>
        }
        description="Najlakši i najefektivniji put do posla u EU za sve struke"
        button={
          <Link href="/">
            <a>
              <Button xl>Apliciraj besplatno</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
