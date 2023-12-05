import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


export default function DateTimePicker() {
  

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} locale='en-US' showIcon onChange={(date) => setStartDate(date)}
    />
  );
};
