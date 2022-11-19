import { useContext } from 'react';

import { ModalContext } from '../contexts/ModalContext';

type UseModalReturn = [boolean, (isModalOpen: boolean) => void];

export const useModal = (): UseModalReturn => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return [isModalOpen, setIsModalOpen];
};
