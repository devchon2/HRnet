import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { departments, states } from "../../../utils/utils.js"
import { add_infos, remove_infos } from "../../../Redux/InfosSlice.js";
import { add_contact, remove_contact } from "../../../Redux/contactSlice.js";
import { add_onboarding, remove_onboarding } from "../../../Redux/onBoardingSlice.js";
import { add_employee } from "../../../Redux/dataBaseSlice.js";


export default function Form(
  Show,action
) {
  const [firstName, setFirstName] = useState(document.querySelector("input#firstName"));
  const [lastName, setLastName] = useState(document.querySelector("input#lastName"));
  const [birthDate, setBirthDate] = useState(document.querySelector("input#birthDate"));
  const [street, setStreet] = useState(document.querySelector("input#Street"));
  const [city, setCity] = useState(document.querySelector("input#City"));
  const [zip, setZip] = useState(document.querySelector("input#Zip"));
  const [startDate, setStartDate] = useState(document.querySelector("input#startDate"));
  const [contact, setContact] = useState('');
  const [infos, setInfos] = useState('');
  const [onBoarding, setOnboarding] = useState("");
  const [selectedStateLocation, setSelectedStateLocation] = useState(states[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);  
  const [stateLocation, setStateLocation] = useState(selectedStateLocation.value);  
  const [department, setDepartment] = useState(selectedDepartment.value);
  const [view, setView] = useState(Show);
  const [FirstNameErrorCls, setFirstNameErrorCls] = useState(style.hidden);
  const [LastNameErrorCls, setLastNameErrorCls] = useState(style.hidden);
  const [BirthdateErrorCls, setBirthdateErrorCls] = useState(style.hidden);
  const [StreetErrorCls, setStreetErrorCls] = useState(style.hidden);
  const [CityErrorCls, setCityErrorCls] = useState(style.hidden);
  const [ZipCodeErrorCls, setZipCodeErrorCls] = useState(style.hidden);
  const [StartDateErrorCls, setStartDateErrorCls] = useState(style.hidden);

  
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(document.querySelector("input#firstName").value);
    setLastName(document.querySelector("input#lastName").value);
    setBirthDate(document.querySelector("input#birthDate").value);
    setStreet(document.querySelector("input#Street").value);
    setCity(document.querySelector("input#City").value);
    setZip(document.querySelector("input#Zip").value);
    setStartDate(document.querySelector("input#startDate").value);
    setContact({ 'street': street, 'city': city, 'state': stateLocation, 'zip': zip });
    setInfos({ 'firstName': firstName, 'lastName': lastName, 'birthDate': birthDate });
    setOnboarding({ 'startDate': startDate, 'department': department });
    setStateLocation(selectedStateLocation.value);
    setDepartment(selectedDepartment.value);
    setView(Show);
    
    
  }, [selectedStateLocation, selectedDepartment, firstName, lastName, birthDate, street, city, stateLocation, zip, startDate, department, Show]);

  function checkFields(){
    const textRegEx = /^[a-zA-Z]+$/;
      const zipRegEx = /^[0-9]{5}$/;
      const dateRegEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
      textRegEx.test(firstName) ? setFirstNameErrorCls(style.hidden) : setFirstNameErrorCls(style.error_Message);
      textRegEx.test(lastName) ? setLastNameErrorCls(style.hidden) : setLastNameErrorCls(style.error_Message);
      dateRegEx.test(birthDate) ? setBirthdateErrorCls(style.hidden) : setBirthdateErrorCls(style.error_Message);
      textRegEx.test(street) ? setStreetErrorCls(style.hidden) : setStreetErrorCls(style.error_Message);
      textRegEx.test(city) ? setCityErrorCls(style.hidden) : setCityErrorCls(style.error_Message);
      zipRegEx.test(zip) ? setZipCodeErrorCls(style.hidden) : setZipCodeErrorCls(style.error_Message);
      dateRegEx.test(startDate) ? setStartDateErrorCls(style.hidden) : setStartDateErrorCls(style.error_Message);
  }

  function checkForm() {

      
      
    checkFields();
      
      
      const infosDatas = [firstName, lastName, birthDate];
      const contactDatas = [street, city, stateLocation, zip];
      const onBoardingDatas = [startDate, department];
      const checkInfos = infosDatas.every(element => element !== "");
      const checkContact = contactDatas.every(element => element !== "");
      const checkOnBoarding = onBoardingDatas.every(element => element !== "");
      let validate = true;
  
      console.log("checkForm", checkInfos, checkContact, checkOnBoarding)
  
      if (checkInfos) {
  
        setInfos({ 'firstName': infosDatas[0], 'lastName': infosDatas[1], 'birthDate': infosDatas[2] });
        console.log("checkInfos OK", { 'firstName': infosDatas[0], 'lastName': infosDatas[1], 'birthDate': infosDatas[2] });
      } else {
  
        validate = false;
        console.log("checkInfos ko", { 'firstName': infosDatas[0], 'lastName': infosDatas[1], 'birthDate': infosDatas[2]  })
      }
  
      if (checkContact) {
  
        console.log("checkContact", contact);
        setContact({ 'street': contactDatas[0], 'city': contactDatas[1], 'state': contactDatas[2], 'zip': contactDatas[3] });
        console.log("checkContact OK", { 'street': contactDatas[0], 'city': contactDatas[1], 'state': contactDatas[2], 'zip': contactDatas[3] });
      } else {
  
        console.log("checkContact ko", { 'street': contactDatas[0], 'city': contactDatas[1], 'state': contactDatas[2], 'zip': contactDatas[3] })
        validate = false;
      }
  
      if (checkOnBoarding) {
  
        setOnboarding({ 'startDate': onBoardingDatas[0], 'department': onBoardingDatas[1] });
        console.log("checkOnBoarding OK", { 'startDate': startDate, 'department': department });
      } else {
  
        console.log("checkOnBoarding ko", { 'startDate': startDate, 'department': department })
        validate = false;
      }
  
      return validate;
  
    }

    function resetForm() {
      
    
      dispatch(add_infos({ 'firstName': '', 'lastName': '', 'birthDate': ''}));
        dispatch(remove_infos());
        dispatch(remove_contact());
        dispatch(remove_onboarding());
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
          input.value = "";
        });
        setSelectedStateLocation(states[0]);
        setSelectedDepartment(departments[0]);
  }

  function Handle_Submit(e) {
    e.preventDefault();
    
    
    
    if (checkForm()) {
      console.log({'infos': infos, 'contact': contact, 'onBoarding': onBoarding})
      dispatch(add_infos(infos));
      console.log("dispatch infos", infos);
      dispatch(add_contact(contact));
      console.log("dispatch contact", contact);
      dispatch(add_onboarding(onBoarding));
      console.log("dispatch onBoarding", onBoarding);


      dispatch(add_employee({ infos: infos, 'contact': contact, 'onBoarding': onBoarding }));
      setView(true);
      console.log(action);
      console.log("submit");
      
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
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
              />
              <p id='firstNameError' className={FirstNameErrorCls}>FirstName required!</p>
            </div>

            <div className={style.form_group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
              />
                            <p id='lastNameError' className={LastNameErrorCls}>LastName required!</p>

            </div>

            <div className={style.form_group}>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}

                type="date"
                id="birthDate"
                name="birthDate"
              />
                            <p id='birthdateError' className={BirthdateErrorCls}>BirthDate required!</p>

            </div>
          </div>

          <div className={style.container_contact_infos}>
            <h2>contact</h2>

            <div className={style.form_group}>
              <label htmlFor="Street">Street</label>
              <input
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                id="Street"
                name="Street"
              />
                            <p id='streetError' className={StreetErrorCls}>Street required!</p>

            </div>

            <div className={style.form_group}>
              <label htmlFor="City">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="City"
                name="City"
              />
                            <p id='CityError' className={CityErrorCls}>City required!</p>

            </div>

            <div className={style.form_group}>
              <label htmlFor="selectStates">State</label>
              <Select
                type="text"
                value={selectedStateLocation}

                onChange={setSelectedStateLocation}
                placeholder={states[0].value}
                name="selectStates"
                inputId="selectStates"
                options={states}
              />            </div>

            <div className={style.form_group}>
              <label htmlFor="Zip">Zip Code</label>
              <input
                onChange={(e) => setZip(e.target.value)}
                type="text"
                id="Zip"
                name="Zip"
              />
                            <p id='ZipCodeError' className={ZipCodeErrorCls}>ZipCode required!</p>

            </div>
          </div>
        </div>
        <div className={style.container_corps_infos}>
          <h2>Onboarding</h2>
          <div className={style.onboardingGroup}>
            <div className={style.form_group}>
              <label htmlFor="startDate">Start Date</label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
                id="startDate"
                name="startDate"
              />
              <p id='StartDateError' className={StartDateErrorCls}>Start Date required!</p>

            </div>
            <div className={style.form_group}>
              <label htmlFor="department">Department</label>
              <Select
                type="text"
                value={selectedDepartment}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: 'orange',
                  }),
                }}
                onChange={setSelectedDepartment}
                options={departments}
                placeholder={departments[0].value}
                inputId={"department"}
                name="department"
              />

            </div>
          </div>
        </div>
        <button className={style.submit_button} type="submit">
          save
        </button>
      </form>
  )
}


