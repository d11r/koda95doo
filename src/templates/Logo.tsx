import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();

  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src={`${router.basePath}/assets/images/logo.png`}
        alt="KODA95 Logo"
        className="max-h-6 mr-2"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
