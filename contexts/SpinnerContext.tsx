import { createContext, ReactNode, useState } from 'react';

type SpinnerContextData = {
  isSpinnerVisible: boolean;
  setIsSpinnerVisible: (isVisible: boolean) => void;
};

type SpinnerContextProviderProps = {
  children: ReactNode;
};

export const SpinnerContext = createContext({} as SpinnerContextData);

export const SpinnerContextProvider = ({
  children,
}: SpinnerContextProviderProps) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  return (
    <SpinnerContext.Provider
      value={{
        isSpinnerVisible,
        setIsSpinnerVisible,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};
