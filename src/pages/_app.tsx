import { AppProps } from 'next/app';
import { resetIdCounter } from 'react-tabs';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  resetIdCounter();
  return <Component {...pageProps} />;
};

export default MyApp;
