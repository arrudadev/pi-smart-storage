import type { AppProps } from 'next/app';

import { CalendarContextProvider } from '../contexts/CalendarContext';
import { ModalContextProvider } from '../contexts/ModalContext';
import { ProductContextProvider } from '../contexts/ProductContext';
import { SpinnerContextProvider } from '../contexts/SpinnerContext';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/global.css';
import '../styles/react-datepicker.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpinnerContextProvider>
      <CalendarContextProvider>
        <ModalContextProvider>
          <ProductContextProvider>
            <Component {...pageProps} />
          </ProductContextProvider>
        </ModalContextProvider>
      </CalendarContextProvider>
    </SpinnerContextProvider>
  );
}
