import type { AppProps } from 'next/app';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/global.css';
import '../styles/react-datepicker.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
