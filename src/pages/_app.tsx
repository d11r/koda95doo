import { AppProps } from 'next/app';
import { resetIdCounter } from 'react-tabs';
import '../styles/main.css';

resetIdCounter();
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
