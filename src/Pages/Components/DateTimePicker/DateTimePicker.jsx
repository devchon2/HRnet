import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState, forwardRef } from "react";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/es";
import style from "./DateTimePicker.module.css";
import React from "react";
registerLocale("en", en); //register the locale for the datepicker

/**
 * A component for selecting a date and time.
 *
 * @component
 * @param {string} id - The ID of the DateTimePicker component.
 * @param {function} setElement - The function to set the selected date and time.
 * @param {Date} element - The selected date and time.
 * @param {Date} minDate - The minimum selectable date.
 * @param {Date} maxDate - The maximum selectable date.
 * @returns {JSX.Element} The DateTimePicker component.
 */
export default function DateTimePicker({
  id,
  setElement,
  element,
  minDate,
  maxDate,
}) {
    // State to keep track of the selected date.
    const [dateParams, setDateParams] = useState(element);
    const [clsName, setClsName] = useState('');

    // useEffect hook to update dateParams when the element prop changes.
    useEffect(() => {
      setDateParams(element);
      setClsName(id === 'startDate' ? style.startDateInput : style.BirthdateInput);
    }, [element,id]);
    
    const CustomInput = forwardRef(({ value, id, onClick, onChange }, ref) => (
      <input id={id} className={clsName} onClick={onClick} ref={ref} onChange={onChange} value={value} />
  ));

    return (
      <DatePicker
        id={id}
        selected={dateParams}
        minDate={minDate ? minDate : null}  // Conditional rendering of calculated minDate.
        maxDate={maxDate ? maxDate : null}  // Conditional rendering of calculated maxDate.
        showYearDropdown  // Enable dropdown for year selection.
        scrollableYearDropdown  // Enable scrolling within the year dropdown.
        onChange={(date) => setElement(new Date(date))}  // Handler for date changes.
        showIcon
        calendarIconClassname={style.CalendarIcon}
        calendarClassName={style.CalendarContainer} // Custom styles for the calendar popup.
        CalendarContainer={style.CalendarContainer} // Custom styles for the calendar popup.
        wrapperClassName={style.wrapper}
        popperClassName={style.popper}
        showPopperArrow={false} // Hide the arrow for the calendar popup.
        dateFormat={"dd/MM/yyyy"} // Format for the date display.
        customInput={<CustomInput />} // Custom input component for the datepicker.
        />
      
    );
  }