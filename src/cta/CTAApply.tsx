import Link from 'next/link';

import { Button } from '../button/Button';

const CTAApply = () => (
  <Link href="/">
    <a>
      <Button>Apliciraj besplatno</Button>
    </a>
  </Link>
);

export { CTAApply };
