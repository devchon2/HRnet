import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { registerLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';

registerLocale('en', en)


export default function DateTimePicker({ id, setElement  }) {
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
setElement(startDate,startDate)  }, [startDate]);
 

  return (
    <DatePicker
    

      id={id}
      placeholderText="Select Date"
      selected={startDate}
      locale="en"
      styles={
        {
          width: "100%",
          height:"1vw",
          border: "none",
          outline: "none",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "5px",
          minHeight: "1.2vw",
          fontSize: "1vw",
          padding: "0.6vw 0",
          "&:focus": {
            outline: "none",
          },
        }
        
      }
      showIcon
      onChange={(date) => {
        console.log(date);
        setStartDate(date);}
      }
    />
  );
}
