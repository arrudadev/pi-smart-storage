import { forwardRef, useState } from 'react';
import ReactDatepicker from 'react-datepicker';

import ptBR from 'date-fns/locale/pt-BR';

import { useCalendar } from '../../hooks/useCalendar';

export const Datepicker = () => {
  const { handleChangeMonth, selectedYear, selectedMonth } = useCalendar();

  const [selectedDate, setSelectedDate] = useState(
    new Date(selectedYear, selectedMonth - 1),
  );

  const CustomButton = forwardRef(({ value, onClick }: any, ref: any) => (
    <button
      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-24"
      onClick={(event: any) => {
        event.preventDefault();

        onClick();
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  function handleChangeDate(date: Date) {
    setSelectedDate(date);

    handleChangeMonth(date);
  }

  return (
    <ReactDatepicker
      selected={selectedDate}
      onChange={handleChangeDate}
      dateFormat="MM/yyyy"
      locale={ptBR}
      customInput={<CustomButton />}
      showMonthYearPicker
      showFullMonthYearPicker
    />
  );
};
