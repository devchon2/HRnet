/**
 * This file contains a React component used for onboarding new employees.
 * It demonstrates the use of React hooks, form handling, and Redux for state management.
 * The component manages various form fields, handles state changes, and validates input data.
 * It is structured to include several child components like CustomSelect and DateTimePicker for better user experience.
 */

import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { departments, states } from "../../../utils/utils.js";
import { add_infos, remove_infos } from "../../../Redux/InfosSlice.js";
import { add_contact, remove_contact } from "../../../Redux/contactSlice.js";
import {
  add_onboarding,
  remove_onboarding,
} from "../../../Redux/onBoardingSlice.js";
import { add_employee } from "../../../Redux/dataBaseSlice.js";
import CustomSelect from "../Select/CustomSelect.jsx";
import DateTimePicker from "../DateTimePicker/DateTimePicker.jsx";
import store from "../../../Redux/store.js"

// Main functional component for the onboarding form

/**
 * Represents a form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.isActive - Indicates if the modale is active.
 * @param {function} props.setValidateForm - Callback function to set the form validation status.
 * @returns {JSX.Element} The form component.
 */
export default function Form({ isModaleActive, setValidateForm,setNeedClose, needClose }) {
  // Constants for age limits
  const maxAge = 70;
  const minAge = 18;

  // State hooks for handling form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
const [birthDate, setBirthDate] = useState(new Date(new Date().setFullYear(startDate.getFullYear() - 18)));
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
  const [contact, setContact] = useState({ street: "", city: "", zip: "", state: ""});
  const [infos, setInfos] = useState({ firstName: "", lastName: "", birthDate: "" });
  const [onBoarding, setOnboarding] = useState({ startDate: "", department: "" });

  // State hooks for managing selections in CustomSelect components
  const [selectedStateLocation, setSelectedStateLocation] = useState((states[0]));
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
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      birthDate: ConvertDate(birthDate),
    });

    setContact({
      street: street.toUpperCase(),
      city: city.toUpperCase(),
      state: stateLocation,
      zip: zip,
    });

    setOnboarding({ 
      startDate: ConvertDate(startDate), 
      department: department.toUpperCase() 
    });
    

      if (needClose) {
        resetForm();
        setValidateForm(false);
        setNeedClose(false)
        
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
  let formattedDate =  date.getMonth()  + '/' + date.getDate() + '/' + date.getFullYear();
  return formattedDate;
}



  // Function for validating age
  function CalculatedBirthdate(birthDate, startDate) {
    const onBoardingDay = Number(new Date(startDate).getDay());
    const onBoardingMonth = Number(new Date(startDate).getMonth());
    const onBoardingYear = Number(new Date(startDate).getFullYear());

    const birthday = Number(new Date(birthDate).getDay());
    const birthmonth = Number(new Date(birthDate).getMonth());
    const birthyear = Number(new Date(birthDate).getFullYear());

    const notYearAged =
      +onBoardingYear - birthyear < 18 || onBoardingYear - birthyear > 100;
    const notMonthAged =
      onBoardingMonth - birthmonth < 0 || onBoardingMonth - birthmonth > 12;
    const notDayAged =
      onBoardingDay - birthday < -31 || onBoardingDay - birthday > 0;

    if (notYearAged || (!notYearAged && notMonthAged && notDayAged)) {
      
      return false;
    }

    return true;
  }

  function checkFields() {
    const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const textRegEx = /^[a-zA-Z'-]+$/;
    const zipRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const dateRegEx = /^\d{2}\/\d{2}\/\d{4}$/;

    let validate = true;
    const errorClass = style.error_Message;
    const validClass = style.hidden;

    const elements = [
      {
        type: "firstname",
        element: firstName,
        tests: textRegEx.test(firstName) && firstName.trim().length > 2,
        act: setFirstNameErrorCls,
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

    elements.forEach((el) => {
      const { element, act, tests } = el;
      if (!tests && element.length < 2) {
        act(errorClass);
        validate = false;
      } else {

        act(validClass);
      }
    });
    return validate;
  }

  function checkForm() {
    if (checkFields()) {
      
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

        setOnboarding({ startDate: startDate, department: department });

        return true;
      
    }

    return false;
  }

  function resetState() {
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setZip("");
    setStartDate(new Date());    
    setBirthDate(new Date(new Date().setFullYear(startDate.getFullYear() - 18)));

    setContact({ street: "", city: "", zip: "", state: ""});
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
    dispatch(remove_infos());
    dispatch(remove_contact());
    dispatch(remove_onboarding());
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
    
    resetState();
  }

  function migrateToState() {

    dispatch(add_infos({ firstName: infos.firstName, lastName: infos.lastName, birthDate:infos.birthDate }));
    dispatch(add_contact({ street: contact.street, city: contact.city, state: contact.state, zip: contact.zip }));
    dispatch(add_onboarding({ startDate: onBoarding.startDate, department: onBoarding.department }));


    const employee = store.getState().employee;
    const infosSelector = employee.infos;
    const contactSelector = employee.contact;
    const onboardingSelector = employee.onboarding;

    dispatch(
      add_employee({ infos: {...infosSelector}, contact: {...contactSelector}, onBoarding: {...onboardingSelector}})
    );

  }

  function Handle_Submit(e) {
    e.preventDefault();

    if (checkForm()) {
      migrateToState()
      setValidateForm(true);
    
  }
  }

  return (
    <form onSubmit={Handle_Submit} className={style.form}>
      <div className={style.container_corps_infos}>
        <h2>Onboarding</h2>
        <div className={style.onboarding_Group}>
          <div className={style.form_group}>
            <label htmlFor="startDate">Start Date</label>
            <DateTimePicker
              id="startDate"
              element={startDate}
              setElement={setStartDate}
              minDate={minStartDate}
              maxDate={maxStartDate}
              fixedHeight={true}

            />

            <p id="StartDateError" className={StartDateErrorCls}>
              Start Date required!
            </p>
          </div>
          <div className={style.form_group}>
            <label htmlFor="department">Department</label>
            <CustomSelect
              id="department"
              element={selectedDepartment}
              setElement={setSelectedDepartment}
              options={departments}
            />
          </div>
        </div>
      </div>
      <div className={style.container_infos}>
        <div className={style.container_employee_infos}>
          <h2>Employee</h2>
          <div className={style.employee_Group}>
            <div className={style.form_group}>
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
              />
              <p id="firstNameError" className={FirstNameErrorCls}>
                FirstName required!
              </p>
            </div>

            <div className={style.form_group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
              />
              <p id="lastNameError" className={LastNameErrorCls}>
                LastName required!
              </p>
            </div>

            <div className={style.form_group}>
              <label htmlFor="birthDate">Date of birth</label>
              <DateTimePicker
                id="birthDate"
                fixedHeight={true}
                element={birthDate}
                setElement={setBirthDate}
                minDate={minBirthDate}
                maxDate={maxBirthDate}
              />
              <p id="birthdateError" className={BirthdateErrorCls}>
                BirthDate required!
              </p>
            </div>
          </div>
        </div>

        <div className={style.container_contact_infos}>
          <h2>Contact</h2>
          <div className={style.contact_Group}>
            <div className={style.form_group}>
              <label htmlFor="Street">Street</label>
              <input
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                id="Street"
                name="Street"
              />
              <p id="streetError" className={StreetErrorCls}>
                Street required!
              </p>
            </div>

            <div className={style.form_group}>
              <label htmlFor="City">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="City"
                name="City"
              />
              <p id="CityError" className={CityErrorCls}>
                City required!
              </p>
            </div>

            <div className={style.form_group}>
              <label htmlFor="selectStates">State</label>
              <CustomSelect
                id="selectStates"
                element={selectedStateLocation}
                setElement={setSelectedStateLocation}
                options={states}
              />
            </div>

            <div className={style.form_group}>
              <label htmlFor="Zip">Zip Code</label>
              <input
                onChange={(e) => setZip(e.target.value)}
                type="text"
                id="Zip"
                name="Zip"
              />
              <p id="ZipCodeError" className={ZipCodeErrorCls}>
                ZipCode required!
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={style.container_button}>
        <button className={style.submit_button} type="submit">
          save
        </button>
      </div>
    </form>
  );
}
