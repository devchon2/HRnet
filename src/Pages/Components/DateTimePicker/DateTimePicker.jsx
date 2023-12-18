import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { registerLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
import "./DateTimePicker.module.css";

registerLocale('en', en)


export default function DateTimePicker({ id, setElement, element, minDate, maxDate  }) {
  const [dateParams, setDateParams] = useState(element);
  

  useEffect(() => {
    setDateParams(element);
  }
  , [element]);


  return (
    <DatePicker
    

      id={id}
      placeholderText="Select Date"
      selected={dateParams}
      locale="en"
      minDate={minDate ? minDate : null}
      maxDate={maxDate ? maxDate : null}
      
      showYearDropdown
      scrollableYearDropdown
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
      onChange={(date) => setElement(new Date(date))}
    />
  );
}
