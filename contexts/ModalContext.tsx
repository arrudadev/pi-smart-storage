import { createContext, ReactNode, useState } from 'react';

type ModalContextData = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  action: string;
  setAction: (action: 'CREATE' | 'UPDATE') => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextData);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState('');

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        action,
        setAction,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
