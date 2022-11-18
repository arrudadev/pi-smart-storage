import { useState } from 'react';
import ReactDatepicker from 'react-datepicker';

import ptBR from 'date-fns/locale/pt-BR';

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  function handleChangeDate(date: Date) {
    setStartDate(date);
  }

  return (
    <ReactDatepicker
      selected={startDate}
      onChange={handleChangeDate}
      dateFormat="MM/yyyy"
      locale={ptBR}
      showMonthYearPicker
      showFullMonthYearPicker
    />
  );
};
