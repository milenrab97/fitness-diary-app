import { useState } from 'react';
import * as React from 'react';
import DP from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DP
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      className="text-gray-900 bg-white border border-gray-400 rounded-md p-2 font-semibold"
    />
  );
};

export default DatePicker;
