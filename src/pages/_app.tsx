import { AppProps } from 'next/app';
import '../styles/main.css';
import { resetIdCounter } from 'react-tabs';

const MyApp = ({ Component, pageProps }: AppProps) => {
  resetIdCounter();
  return <Component {...pageProps} />;
};

export default MyApp;
