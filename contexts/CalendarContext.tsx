import { createContext, ReactNode, useState } from 'react';

type CalendarContextData = {
  selectedMonth: number;
  selectedYear: number;
  selectedMothDescription: string;
  handleChangeMonth: (date: Date) => void;
};

type CalendarContextProviderProps = {
  children: ReactNode;
};

export const CalendarContext = createContext({} as CalendarContextData);

export const CalendarContextProvider = ({
  children,
}: CalendarContextProviderProps) => {
  const currentDate = new Date();

  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.getMonth() + 1, // 👈️ months are 0-based
  );

  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const [selectedMothDescription, setSelectedDescription] = useState(
    currentDate.toLocaleString('default', { month: 'long' }),
  );

  function handleChangeMonth(date: Date) {
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
    setSelectedDescription(date.toLocaleString('default', { month: 'long' }));
  }

  return (
    <CalendarContext.Provider
      value={{
        selectedMonth,
        selectedYear,
        selectedMothDescription,
        handleChangeMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
