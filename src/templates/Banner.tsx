import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tražite posao u EU?"
      subtitle="Prijavi se besplatno danas."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Apliciraj besplatno</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
