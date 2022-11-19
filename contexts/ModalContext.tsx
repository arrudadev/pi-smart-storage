import { createContext, ReactNode, useState } from 'react';

type ModalContextData = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextData);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
