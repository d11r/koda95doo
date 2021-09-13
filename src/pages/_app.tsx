import React from 'react';

import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { resetIdCounter } from 'react-tabs';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  resetIdCounter();
  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    if (mountedRef.current === false) {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          if (process.env.NEXT_PUBLIC_PIXEL_ID) {
            ReactPixel.init(process.env.NEXT_PUBLIC_PIXEL_ID);
            ReactPixel.pageView();

            Router.events.on('routeChangeComplete', () => {
              ReactPixel.pageView();
            });
          }
        });
      mountedRef.current = true;
    }
  });

  return <Component {...pageProps} />;
};

export default MyApp;
