import { useContext } from 'react';

import { SpinnerContext } from '../contexts/SpinnerContext';

export const useSpinner = () => {
  return useContext(SpinnerContext);
};
