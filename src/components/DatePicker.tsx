import { useState } from "react";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DatePickerProps = {};

export default function DatePicker({}: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const selectionRange: Range = {
    startDate,
    endDate,
    key: "selection",
  };

  const onDateChange = (rangesByKey: RangeKeyDict) => {
    setStartDate(rangesByKey.selection.startDate as Date);
    setEndDate(rangesByKey.selection.endDate as Date);
  };

  return (
    <div className="flex flex-col col-span-3 mx-auto">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#3182f6"]}
        onChange={onDateChange}
        dateDisplayFormat="yyyy-MM-dd"
      />
    </div>
  );
}
