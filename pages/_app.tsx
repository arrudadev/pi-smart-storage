import type { AppProps } from 'next/app';

import { ModalContextProvider } from '../contexts/ModalContext';
import { ProductContextProvider } from '../contexts/ProductContext';
import { SpinnerContextProvider } from '../contexts/SpinnerContext';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/global.css';
import '../styles/react-datepicker.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpinnerContextProvider>
      <ModalContextProvider>
        <ProductContextProvider>
          <Component {...pageProps} />
        </ProductContextProvider>
      </ModalContextProvider>
    </SpinnerContextProvider>
  );
}
