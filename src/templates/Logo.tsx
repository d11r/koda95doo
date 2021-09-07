import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 811 517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <g filter="url(#filter0_b)">
          <rect
            width="568.429"
            height="166.369"
            rx="30"
            transform="matrix(1 0 -0.424357 0.905495 242.515 0)"
            fill="url(#paint0_linear)"
          />
        </g>
        <g filter="url(#filter1_b)">
          <rect
            width="568.429"
            height="166.369"
            rx="30"
            transform="matrix(1 0 -0.424357 0.905495 156.558 183.006)"
            fill="url(#paint1_linear)"
          />
        </g>
        <g filter="url(#filter2_b)">
          <rect
            width="568.429"
            height="166.369"
            rx="30"
            transform="matrix(1 0 -0.424357 0.905495 70.6001 366.013)"
            fill="url(#paint2_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="178.048"
            y="-4"
            width="626.763"
            height="158.647"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b"
            x="92.0904"
            y="179.006"
            width="626.763"
            height="158.647"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b"
            x="6.13287"
            y="362.013"
            width="626.763"
            height="158.647"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="284.214"
            y1="0"
            x2="339.525"
            y2="550.767"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E3F5FE" />
            <stop offset="1" stopColor="#33BBFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="284.214"
            y1="0"
            x2="339.525"
            y2="550.767"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E3F5FE" />
            <stop offset="1" stopColor="#33BBFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="284.214"
            y1="0"
            x2="339.525"
            y2="550.767"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E3F5FE" />
            <stop offset="1" stopColor="#33BBFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
