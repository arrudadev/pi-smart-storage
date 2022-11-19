import type { AppProps } from 'next/app';

import { ModalContextProvider } from '../contexts/ModalContext';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/global.css';
import '../styles/react-datepicker.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}
