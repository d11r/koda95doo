import { CTAApply } from '../cta/CTAApply';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tražiš posao u EU?"
      subtitle="Prijavi se odmah."
      button={<CTAApply />}
    />
  </Section>
);

export { Banner };
