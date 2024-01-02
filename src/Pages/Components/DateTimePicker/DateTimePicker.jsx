import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/es";
import style from "./DateTimePicker.module.css";
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

    // useEffect hook to update dateParams when the element prop changes.
    useEffect(() => {
      setDateParams(element);
    }, [element]);
  
    return (
      <DatePicker
        id={id}
        placeholderText="Select Date"
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

        />
      
    );
  }