/**
 * This file contains a React component used for onboarding new employees.
 * It demonstrates the use of React hooks, form handling, and Redux for state management.
 * The component manages various form fields, handles state changes, and validates input data.
 * It is structured to include several child components like CustomSelect and DateTimePicker for better user experience.
 */

import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { departments, states } from "../../../utils/utils.js";
import {
  add_infos,
  remove_infos,
} from "../../../Redux/EmployeesSlices/InfosSlice.js";
import {
  add_contact,
  remove_contact,
} from "../../../Redux/EmployeesSlices/contactSlice.js";
import {
  add_onboarding,
  remove_onboarding,
} from "../../../Redux/EmployeesSlices/onBoardingSlice.js";
import { add_employee } from "../../../Redux/databaseSlice/dataBaseSlice.js";
import CustomSelect from "../Select/CustomSelect.jsx";
import DateTimePicker from "../DateTimePicker/DateTimePicker.jsx";
import store from "../../../Redux/store.js";

/**
 * Represents the main onboarding form component in the application.
 * This component is responsible for gathering and validating the new employee's data.
 *
 * @component
 * @param {boolean} props.isModaleActive - Indicates if the modal is active.
 * @param {function} props.setValidateForm - Callback function to set the form validation status.
 * @param {function} props.setNeedClose - Function to handle the state of modal closure.
 * @param {boolean} props.needClose - State to indicate if the modal needs to be closed.
 * @returns {JSX.Element} - The rendered form component.
 */
export default function Form({
  isModaleActive,
  setValidateForm,
  setNeedClose,
  needClose,
}) {
  // Constants for setting age limits
  const maxAge = 70;
  const minAge = 18;

  // State hooks for handling form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(
    new Date(new Date().setFullYear(startDate.getFullYear() - 18))
  );
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // Calculating maximum and minimum permissible dates
  let date = new Date(startDate);

  let minBirthDate = new Date(startDate);
  minBirthDate.setFullYear(startDate.getFullYear() - maxAge);

  let maxBirthDate = new Date(startDate);
  maxBirthDate.setFullYear(date.getFullYear() - minAge);

  let minStartDate = new Date(startDate);
  minStartDate.setFullYear(date.getFullYear() - 1);

  let maxStartDate = new Date(startDate);
  maxStartDate.setFullYear(date.getFullYear() + 1);

  // State hooks for managing different sections of the form
  const [contact, setContact] = useState({
    street: "",
    city: "",
    zip: "",
    state: "",
  });
  const [infos, setInfos] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
  });
  const [onBoarding, setOnboarding] = useState({
    startDate: "",
    department: "",
  });

  // State hooks for managing selections in CustomSelect components
  const [selectedStateLocation, setSelectedStateLocation] = useState(states[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  // State hooks for internal management of form state
  const [stateLocation, setStateLocation] = useState(
    selectedStateLocation.value
  );
  const [department, setDepartment] = useState(selectedDepartment.value);

  // State hooks for managing error message visibility
  const [FirstNameErrorCls, setFirstNameErrorCls] = useState(style.hidden);
  const [LastNameErrorCls, setLastNameErrorCls] = useState(style.hidden);
  const [BirthdateErrorCls, setBirthdateErrorCls] = useState(style.hidden);
  const [StreetErrorCls, setStreetErrorCls] = useState(style.hidden);
  const [CityErrorCls, setCityErrorCls] = useState(style.hidden);
  const [ZipCodeErrorCls, setZipCodeErrorCls] = useState(style.hidden);
  const [StartDateErrorCls, setStartDateErrorCls] = useState(style.hidden);

  // State hook for form validation
  const [validated, setValidated] = useState(false);

  // Redux dispatch hook for state management
  const dispatch = useDispatch();

  // Effect hook for handling updates to form state
  useEffect(() => {
    setInfos({
      firstName: firstName,
      lastName: lastName,
      birthDate: ConvertDate(birthDate),
    });

    setContact({
      street: street,
      city: city,
      state: stateLocation,
      zip: zip,
    });

    setOnboarding({
      startDate: ConvertDate(startDate),
      department: department,
    });

    if (needClose) {
      // Reset form state when modal is closed
      resetForm();
      setValidateForm(!needClose);
      setNeedClose(!needClose);
    }
  }, [
    isModaleActive,
    firstName,
    lastName,
    birthDate,
    street,
    city,
    zip,
    startDate,
    selectedStateLocation,
    selectedDepartment,
    stateLocation,
    department,
    validated,
    needClose,
  ]);

  function ConvertDate(date) {
    // Function for formatting date
    return new Date(date).toLocaleDateString();
  }

  // Function for validating age
  function CalculatedBirthdate(birthDate, startDate) {
    // Function for validating age

    // Get day, month, and year from date objects
    const onBoardingDay = Number(new Date(startDate).getDay());
    const onBoardingMonth = Number(new Date(startDate).getMonth());
    const onBoardingYear = Number(new Date(startDate).getFullYear());

    const birthday = Number(new Date(birthDate).getDay());
    const birthmonth = Number(new Date(birthDate).getMonth());
    const birthyear = Number(new Date(birthDate).getFullYear());

    // Check if age is within limits
    const notYearAged =
      onBoardingYear - birthyear < 18 || onBoardingYear - birthyear > 100;
    const notMonthAged =
      onBoardingMonth - birthmonth < 0 || onBoardingMonth - birthmonth > 12;
    const notDayAged =
      onBoardingDay - birthday < -31 || onBoardingDay - birthday > 0;

    if (notYearAged || (!notYearAged && notMonthAged && notDayAged)) {
      return false; // Return false if age is not within limits
    }

    return true; // Return true if age is within limits
  }

  function checkFields() {
    // Function for validating form fields

    // Regular expressions for validating input
    const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const textRegEx = /^[a-zA-Z'-]+$/;
    const zipRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const dateRegEx = /^\d{2}\/\d{2}\/\d{4}$/;

    let validate = true;
    const errorClass = style.error_Message; // CSS class for displaying error messages
    const validClass = style.hidden; // CSS class for hiding error messages

    const elements = [
      // Array of form elements to validate
      {
        type: "firstname", // Type of element
        element: firstName, // Element to validate
        tests: textRegEx.test(firstName) && firstName.trim().length > 2, // Test for valid input
        act: setFirstNameErrorCls, // Function to set error message visibility
      },
      {
        type: "lastname",
        element: lastName,
        tests: textRegEx.test(lastName) && lastName.trim().length > 2,
        act: setLastNameErrorCls,
      },
      {
        type: "birthdate",
        element: birthDate,
        tests:
          dateRegEx.test(birthDate.toLocaleDateString()) &&
          CalculatedBirthdate(birthDate, startDate),
        act: setBirthdateErrorCls,
      },
      {
        type: "street",
        element: street,
        tests: streetRegex.test(street) && street.trim().length > 2,
        act: setStreetErrorCls,
      },
      {
        type: "city",
        element: city,
        tests: textRegEx.test(city) && city.trim().length > 2,
        act: setCityErrorCls,
      },
      {
        type: "zip",
        element: zip,
        tests: zipRegEx.test(zip) && zip.trim().length > 2,
        act: setZipCodeErrorCls,
      },
      {
        type: "startDate",
        element: startDate,
        tests: dateRegEx.test(startDate.toLocaleDateString()),
        act: setStartDateErrorCls,
      },
    ];

    elements.map((el) => {
      // Iterate through elements to validate
      if (!el.tests && el.element.length < 2) {
        el.act(errorClass);
        validate = false;
      } else {
        el.act(validClass);
      }
      return null;
    });
    return validate; // Return validation status
  }

  function checkForm() {
    // Function for validating form
    if (checkFields()) {
      // Check if form fields are valid
      setInfos({
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
      });

      setContact({
        street: street,
        city: city,
        state: stateLocation,
        zip: zip,
      });

      setOnboarding({
        startDate: startDate,
        department: department,
      });

      return true; // Return true if form is valid
    }

    return false; // Return false if form is invalid
  }

  function resetState() {
    // Function for resetting form state
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setZip("");
    setStartDate(new Date());
    setBirthDate(
      new Date(new Date().setFullYear(startDate.getFullYear() - 18)) // Set default birthdate to 18 years ago
    );

    setContact({ street: "", city: "", zip: "", state: "" });
    setInfos({ firstName: "", lastName: "", birthDate: "" });
    setOnboarding({ startDate: "", department: "" });
    setSelectedStateLocation(states[0]);
    setSelectedDepartment(departments[0]);
    setStateLocation(selectedStateLocation.value);
    setDepartment(selectedDepartment.value);
    setFirstNameErrorCls(style.hidden);
    setLastNameErrorCls(style.hidden);
    setBirthdateErrorCls(style.hidden);
    setStreetErrorCls(style.hidden);
    setCityErrorCls(style.hidden);
    setZipCodeErrorCls(style.hidden);
    setStartDateErrorCls(style.hidden);
    setValidated(false);
    setValidateForm(false);
    dispatch(remove_infos()); // Dispatch action to remove infos from Redux state
    dispatch(remove_contact()); // Dispatch action to remove contact from Redux state
    dispatch(remove_onboarding()); // Dispatch action to remove onboarding from Redux state
  }

  function resetForm() {
    // Function for resetting form
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.map((input) => (input.value = "")); // Clear input fields

    resetState(); // Reset form state
  }

  function migrateToState() {
    // Function for migrating form data to Redux state if valid
    dispatch(
      add_infos({ // Dispatch action to add infos to Redux state
        firstName: infos.firstName,
        lastName: infos.lastName,
        birthDate: infos.birthDate,
      })
    );
    dispatch(
      add_contact({ // Dispatch action to add contact to Redux state
        street: contact.street,
        city: contact.city,
        state: contact.state,
        zip: contact.zip,
      })
    );
    dispatch( 
      add_onboarding({ // Dispatch action to add onboarding to Redux state
        startDate: onBoarding.startDate,
        department: onBoarding.department,
      })
    );

    // Get employee data from Redux state
    const employee = store.getState().employee;
    const infosSelector = employee.infos;
    const contactSelector = employee.contact;
    const onboardingSelector = employee.onboarding;

    dispatch(
      add_employee({ // Dispatch action to add employee to Redux state
        infos: { ...infosSelector },
        contact: { ...contactSelector },
        onBoarding: { ...onboardingSelector },
      })
    );
  }

  function Handle_Submit(e) {
    // Function for handling form submission
    e.preventDefault();

    if (checkForm()) {
      // Check if form is valid
      migrateToState(); // Migrate form data to Redux state
      setValidateForm(true); // Set form validation status
    }
  }

  return (
    <form onSubmit={Handle_Submit} className={style.form}>
  {/* Onboarding section of the form */}
  <div className={style.container_corps_infos}>
    <h2>Onboarding</h2>
    {/* Group of inputs related to onboarding */}
    <div className={style.onboarding_Group}>
      {/* Form group for start date selection */}
      <div className={style.form_group}>
        <label htmlFor="startDate">Start Date</label>
        {/* Custom date picker component for selecting start date */}
        <DateTimePicker
          id="startDate"
          element={startDate}
          setElement={setStartDate}
          minDate={minStartDate}
          maxDate={maxStartDate}
          fixedHeight={true}
        />
        {/* Error message for start date */}
        <p id="StartDateError" className={StartDateErrorCls}>
          Start Date required!
        </p>
      </div>

      {/* Form group for department selection */}
      <div className={style.form_group}>
        <label htmlFor="department">Department</label>
        {/* Custom select component for choosing department */}
        <CustomSelect
          id="department"
          element={selectedDepartment}
          setElement={setSelectedDepartment}
          options={departments}
        />
      </div>
    </div>
  </div>

  {/* Employee section of the form */}
  <div className={style.container_infos}>
    <div className={style.container_employee_infos}>
      <h2>Employee</h2>
      {/* Group of inputs related to employee information */}
      <div className={style.employee_Group}>
        {/* Form group for first name input */}
        <div className={style.form_group}>
          <label htmlFor="firstName">First Name</label>
          {/* Input for first name */}
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
          />
          {/* Error message for first name */}
          <p id="firstNameError" className={FirstNameErrorCls}>
            FirstName required!
          </p>
        </div>

        {/* Form group for last name input */}
        <div className={style.form_group}>
          <label htmlFor="lastName">Last Name</label>
          {/* Input for last name */}
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
          />
          {/* Error message for last name */}
          <p id="lastNameError" className={LastNameErrorCls}>
            LastName required!
          </p>
        </div>

        {/* Form group for birth date selection */}
        <div className={style.form_group}>
          <label htmlFor="birthDate">Date of birth</label>
          {/* Custom date picker component for selecting birth date */}
          <DateTimePicker
            id="birthDate"
            fixedHeight={true}
            element={birthDate}
            setElement={setBirthDate}
            minDate={minBirthDate}
            maxDate={maxBirthDate}
          />
          {/* Error message for birth date */}
          <p id="birthdateError" className={BirthdateErrorCls}>
            BirthDate required!
          </p>
        </div>
      </div>
    </div>

    {/* Contact section of the form */}
    <div className={style.container_contact_infos}>
      <h2>Contact</h2>
      {/* Group of inputs related to contact information */}
      <div className={style.contact_Group}>
        {/* Form group for street input */}
        <div className={style.form_group}>
          <label htmlFor="Street">Street</label>
          {/* Input for street */}
          <input
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            id="Street"
            name="Street"
          />
          {/* Error message for street */}
          <p id="streetError" className={StreetErrorCls}>
            Street required!
          </p>
        </div>

        {/* Form group for city input */}
        <div className={style.form_group}>
          <label htmlFor="City">City</label>
          {/* Input for city */}
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            id="City"
            name="City"
          />
          {/* Error message for city */}
          <p id="CityError" className={CityErrorCls}>
            City required!
          </p>
        </div>

        {/* Form group for state selection */}
        <div className={style.form_group}>
          <label htmlFor="selectStates">State</label>
          {/* Custom select component for choosing state */}
          <CustomSelect
            id="selectStates"
            element={selectedStateLocation}
            setElement={setSelectedStateLocation}
            options={states}
          />
        </div>

        {/* Form group for zip code input */}
        <div className={style.form_group}>
          <label htmlFor="Zip">Zip Code</label>
          {/* Input for zip code */}
          <input
            onChange={(e) => setZip(e.target.value)}
            type="text"
            id="Zip"
            name="Zip"
          />
          {/* Error message for zip code */}
          <p id="ZipCodeError" className={ZipCodeErrorCls}>
            ZipCode required!
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Submit button for the form */}
  <div className={style.container_button}>
    <button className={style.submit_button} type="submit">
      Save
    </button>
  </div>
</form>

  );
}
