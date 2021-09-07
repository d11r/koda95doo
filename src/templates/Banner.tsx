import { CTAApply } from '../cta/CTAApply';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tražite posao u EU?"
      subtitle="Prijavi se besplatno danas."
      button={<CTAApply />}
    />
  </Section>
);

export { Banner };
