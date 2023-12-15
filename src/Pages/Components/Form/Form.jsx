import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

export default function Form({ isActive, setValidateForm }) {
  const [form, setForm] = useState({
    formInputs: {
      contact: {
        street: document.querySelector("input#Street"),
        city: document.querySelector("input#City"),
        state: document.querySelector("input#selectStates"),
        zip: document.querySelector("input#Zip"),
      },
      infos: {
        firstName: document.querySelector("input#firstName"),
        lastName: document.querySelector("input#lastName"),
        birthDate: document.querySelector("input#birthDate"),
      },
      onBoarding: {
        startDate: document.querySelector("input#startDate"),
        department: document.querySelector("input#department"),
      },
    },
    formState: {
      ismodalActive: isActive,
      validated: false,

      FirstNameErrorCls: style.hidden,
      LastNameErrorCls: style.hidden,
      BirthdateErrorCls: style.hidden,
      StreetErrorCls: style.hidden,
      CityErrorCls: style.hidden,
      ZipCodeErrorCls: style.hidden,
      StartDateErrorCls: style.hidden,
    },
  });

  const { contact, infos, onBoarding } = form.formInputs;
  const { street, city, state, zip } = contact;
  const { firstName, lastName, birthDate } = infos;
  const { startDate, department } = onBoarding;

  console.log("form", form);
  console.log("contact", contact);
  console.log("infos", infos);
  console.log("onBoarding", onBoarding);
  console.log("state", state);


  const dispatch = useDispatch();

  useEffect(() => {
    setForm({
      formInputs: {
        contact: {
          street: document.querySelector("input#Street"),
          city: document.querySelector("input#City"),
          state: document.querySelector("input#selectStates"),
          zip: document.querySelector("input#Zip"),
        },
        infos: {
          firstName: document.querySelector("input#firstName"),
          lastName: document.querySelector("input#lastName"),
          birthDate: document.querySelector("input#birthDate"),
        },
        onBoarding: {
          startDate: document.querySelector("input#startDate"),
          department: document.querySelector("input#department"),
        },
      },
      formState: {
        ismodalActive: isActive,

        FirstNameErrorCls: style.hidden,
        LastNameErrorCls: style.hidden,
        BirthdateErrorCls: style.hidden,
        StreetErrorCls: style.hidden,
        CityErrorCls: style.hidden,
        ZipCodeErrorCls: style.hidden,
        StartDateErrorCls: style.hidden,
        validated: false,
      },
    });

    

    if (form.formState.validated) {
      resetForm();
      setValidateForm(false);
    }
  }, [isActive, form.formState.validated ]);

  const {
    ismodalActive,
    validated,
    FirstNameErrorCls,
    LastNameErrorCls,
    BirthdateErrorCls,
    StreetErrorCls,
    CityErrorCls,
    ZipCodeErrorCls,
    StartDateErrorCls,
  } = form.formState;

  

  console.log("forminput", form);

  function setElement(element, value) {
    try {
      setForm({
        ...form,
        formInputs: {
          ...form.formInputs,
          [element]: value,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  function CalculatedBirthdate(birthDate, startDate) {
    console.log("CalculatedBirthdate");
    console.log(birthDate);
    console.log(startDate);
    const RequiredAge = 18;
    const onBoardingDay = Number(new Date(startDate).getDay());
    const onBoardingMonth = Number(new Date(startDate).getMonth());
    const onBoardingYear = Number(new Date(startDate).getFullYear());

    const birthday = Number(new Date(birthDate).getDay());
    const birthmonth = Number(new Date(birthDate).getMonth());
    const birthyear = Number(new Date(birthDate).getFullYear());

    const notYearAged =
      onBoardingYear - birthyear < 18 || onBoardingYear - birthyear > 100;
    const notMonthAged =
      onBoardingMonth - birthmonth < 0 || onBoardingMonth - birthmonth > 12;
    const notDayAged =
      onBoardingDay - birthday < -31 || onBoardingDay - birthday > 0;

    console.log("startDate", onBoardingYear, onBoardingMonth, onBoardingDay);
    console.log("birthdate", birthyear, birthmonth, birthday);

    if (notYearAged || (!notYearAged && notMonthAged && notDayAged)) {
      console.log("NotAged");
      window.alert(
        `Employee does meet the required Age to onboarding: ${RequiredAge}`
      );
      return false;
    }

    return true;
  }

  function checkFields() {
    console.log("checkFields");
    const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const textRegEx = /^[a-zA-Z'-]+$/;
    const zipRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const dateRegEx = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

    let validate = true;
    const errorClass = style.error_Message;
    const validClass = style.hidden;

    const elements = [
      {
        element: firstName,
        tests: [textRegEx.test(firstName)],
        act: setElement,
      },
      {
        element: lastName,
        tests: [textRegEx.test(lastName)],
        act: setElement,
      },
      {
        element: birthDate,
        tests: [dateRegEx.test(birthDate)],
        act: setElement,
      },
      {
        element: street,
        tests: [streetRegex.test(street)],
        act: setElement,
      },
      {
        element: city,
        tests: [textRegEx.test(city)],
        act: setElement,
      },
      {
        element: zip,
        tests: [zipRegEx.test(zip)],
        act: setElement,
      },
      {
        element: startDate,
        tests: [dateRegEx.test(startDate)],
        act: setElement,
      },
      {
        element: department,
        tests: [department.length > 0],
        act: setElement,
      },
      { element: state, tests: [state.length > 0], act: setElement },
    ];

    console.log("boucle sur elements");
    elements.forEach((el) => {
      const { element, act, tests } = el;
      tests.forEach((test, index) => {
        if (test && element.length > 2) {
          act(validClass);
        } else {
          act(errorClass);
          validate = false;
        }

        console.log("fin boucle sur elements");
      });
    });
    return validate;
  }

  function checkForm() {
    console.log("checkForm");
    let validate = true;
    const infosDatas = [firstName, lastName, birthDate];
    const contactDatas = [street, city, state, zip];
    const onBoardingDatas = [startDate, department];

    if (checkFields()) {
      if (!CalculatedBirthdate(birthDate, startDate)) {
        validate = false;
      }

      setForm({
        ...form,
        formInputs: {
          infos: infosDatas,
          contact: contactDatas,
          onBoarding: onBoardingDatas,
        },
        formState: {
          ...form.formState,
          validated: true,
        },
      });
    }
    return validate;
  }

  function resetState() {
    console.log("resetState");
    setForm({
      ...form,
      formState: {
        ...form.formState,
        FirstNameErrorCls: style.hidden,
        LastNameErrorCls: style.hidden,
        BirthdateErrorCls: style.hidden,
        StreetErrorCls: style.hidden,
        CityErrorCls: style.hidden,
        ZipCodeErrorCls: style.hidden,
        StartDateErrorCls: style.hidden,
        validated: false,
      },
    });
  }

  function resetForm() {
    console.log("resetForm");
    dispatch(add_infos({ firstName: "", lastName: "", birthDate: "" }));
    dispatch(remove_infos());
    dispatch(remove_contact());
    dispatch(remove_onboarding());
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
    resetState();
  }

  function migrateToState() {
    console.log("migrateToState");

    dispatch(add_infos({infos: form.formInputs.infos,contact: form.formInputs.contact,onBoarding: form.formInputs.onBoarding}));
    dispatch(add_contact(form.formInputs.contact));
    dispatch(add_onboarding(form.formInputs.onBoarding));

    dispatch(
      add_employee({
        infos: form.formInputs.infos,
        contact: form.formInputs.contact,
        onBoarding: form.formInputs.onBoarding,
      })
    );
  }

  function Handle_Submit(e) {
    e.preventDefault();

    if (checkForm()) {
      migrateToState();
      setValidateForm(true);
    }
  }

  return (
    <form onSubmit={Handle_Submit} className={style.form}>
      <div className={style.container_infos}>
        <div className={style.container_employee_infos}>
          <h2>Employee</h2>

          <div className={style.form_group}>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setElement(firstName, e.target.value)}
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
              onChange={(e) => setElement(lastName, e.target.value)}
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
              element={birthDate}
              setElement={setElement}
            />
            <p id="birthdateError" className={BirthdateErrorCls}>
              BirthDate required!
            </p>
          </div>
        </div>

        <div className={style.container_contact_infos}>
          <h2>Contact</h2>

          <div className={style.form_group}>
            <label htmlFor="Street">Street</label>
            <input
              onChange={(e) => setElement(street, e.target.value)}
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
              onChange={(e) => setElement(city, e.target.value)}
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
              element={state}
              setElement={(e) => setElement(state, e.target.value)}
              options={states}
            />
          </div>

          <div className={style.form_group}>
            <label htmlFor="Zip">Zip Code</label>
            <input
              onChange={(e) => setElement(zip, e.target.value)}
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
      <div className={style.container_corps_infos}>
        <h2>Onboarding</h2>
        <div className={style.onboardingGroup}>
          <div className={style.form_group}>
            <label htmlFor="startDate">Start Date</label>
            {/* <DateTimePicker
              id="startDate"
              element={startDate}
              setElement={(e) => setElement('startDatestartDate',e.target.value)}
            /> */}

            <p id="StartDateError" className={StartDateErrorCls}>
              Start Date required!
            </p>
          </div>
          <div className={style.form_group}>
            <label htmlFor="department">Department</label>
            <CustomSelect
              id="department"
              element={form.formInputs.onBoarding.department}
              setElement={(e) => setElement("department", e.target.value)}
              options={departments}
            />
          </div>
        </div>
      </div>
      <button className={style.submit_button} type="submit">
        save
      </button>
    </form>
  );
}
