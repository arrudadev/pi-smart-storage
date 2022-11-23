import { useContext } from 'react';

import { CalendarContext } from '../contexts/CalendarContext';

export const useCalendar = () => {
  return useContext(CalendarContext);
};
