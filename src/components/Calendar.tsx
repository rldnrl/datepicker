import { useState } from "react";
import { Calendar as ReactCalendar } from "react-date-range";
import { ko } from "date-fns/locale";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <ReactCalendar
      dateDisplayFormat="yyyy-MM-dd"
      locale={ko}
      minDate={new Date()}
      color="#3182f6"
      date={selectedDate}
      onChange={onDateChange}
    />
  );
}
