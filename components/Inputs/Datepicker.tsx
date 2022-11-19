import { forwardRef, useState } from 'react';
import ReactDatepicker from 'react-datepicker';

import ptBR from 'date-fns/locale/pt-BR';

export const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
