import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { departments, states } from "../../../utils/utils.js"
import { add_infos, remove_infos } from "../../../Redux/InfosSlice.js";
import { add_contact, remove_contact } from "../../../Redux/contactSlice.js";
import { add_onboarding, remove_onboarding } from "../../../Redux/onBoardingSlice.js";
import { add_employee } from "../../../Redux/dataBaseSlice.js";
import CustomSelect from "../Select/CustomSelect.jsx";
import DateTimePicker from "../DateTimePicker/DateTimePicker.jsx";


export default function Form({ isActive, setValidateForm }) {
 const maxAge = 70;
  const minAge = 18;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date() );
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  
  const [maxDate, setMaxDate] = useState(new Date().getFullYear() + maxAge);
  const [minDate, setMinDate] = useState(new Date().getFullYear() - minAge);
  const [contact, setContact] = useState('');
  const [infos, setInfos] = useState('');
  const [onBoarding, setOnboarding] = useState('');
  const [selectedStateLocation, setSelectedStateLocation] = useState(states[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [stateLocation, setStateLocation] = useState(selectedStateLocation.value);
  const [department, setDepartment] = useState(selectedDepartment.value);
  const [FirstNameErrorCls, setFirstNameErrorCls] = useState(style.hidden);
  const [LastNameErrorCls, setLastNameErrorCls] = useState(style.hidden);
  const [BirthdateErrorCls, setBirthdateErrorCls] = useState(style.hidden);
  const [StreetErrorCls, setStreetErrorCls] = useState(style.hidden);
  const [CityErrorCls, setCityErrorCls] = useState(style.hidden);
  const [ZipCodeErrorCls, setZipCodeErrorCls] = useState(style.hidden);
  const [StartDateErrorCls, setStartDateErrorCls] = useState(style.hidden);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
 
  useEffect(() => {
    
    setMaxDate(new Date().getFullYear() + maxAge);
    setMinDate(new Date().getFullYear() - minAge);
    

    setContact({ 'street': street, 'city': city, 'state': stateLocation, 'zip': zip });
    setInfos({ 'firstName': firstName, 'lastName': lastName, 'birthDate': birthDate });
    setOnboarding({ 'startDate': startDate, 'department': department });
    setStateLocation(selectedStateLocation.value);
    setDepartment(selectedDepartment.value);
    setValidated(isActive);

    if (validated) {
      resetForm();
      setValidateForm(false);
    }
    
  }, [isActive, firstName, lastName, birthDate, street, city, zip, startDate, selectedStateLocation, selectedDepartment, stateLocation, department, setValidateForm,]);

  function CalculatedBirthdate(birthDate, startDate) {
    console.log("CalculatedBirthdate");
    console.log(birthDate);
    console.log(startDate);
    const RequiredAge = 18;
    const onBoardingDay = Number(new Date(startDate).getDay());
    const onBoardingMonth = Number(new Date(startDate).getMonth());
    const onBoardingYear = Number( new Date(startDate).getFullYear());

    const birthday = Number(new Date(birthDate).getDay());
    const birthmonth = Number(new Date(birthDate).getMonth());
    const birthyear = Number(new Date(birthDate).getFullYear());

    
      const notYearAged = (onBoardingYear - birthyear) <18 || (onBoardingYear - birthyear) > 100;
      const notMonthAged = (onBoardingMonth - birthmonth) < 0 || (onBoardingMonth - birthmonth) > 12;
      const notDayAged =  (onBoardingDay - birthday) < -31 || (onBoardingDay - birthday) > 0;

      console.log('startDate',onBoardingYear,onBoardingMonth,onBoardingDay)
      console.log('birthdate',birthyear,birthmonth,birthday)


      if (notYearAged || (!notYearAged && notMonthAged && notDayAged)) {
        console.log('NotAged');
        window.alert(`Employee does meet the required Age to onboarding: ${RequiredAge}`);
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
    const errorClass = style.error_Message
    const validClass = style.hidden;

    const elements = [{
      element: firstName,
      tests: [textRegEx.test(firstName)],
      act: setFirstNameErrorCls,
    }, {
      element: lastName,
      tests: [textRegEx.test(lastName)],
      act: setLastNameErrorCls,

    }, {
      element: birthDate,
      tests: [dateRegEx.test(birthDate),CalculatedBirthdate(birthDate, startDate)],
      act: setBirthdateErrorCls,

    }, {
      element: street,
      tests: [streetRegex.test(street)],
      act: setStreetErrorCls,

    }, {
      element: city,
      tests: [textRegEx.test(city)],
      act: setCityErrorCls,

    }, {
      element: zip,
      tests: [zipRegEx.test(zip)],
      act: setZipCodeErrorCls,

    }, {
      element: startDate,
      tests: [dateRegEx.test(startDate)],
      act: setStartDateErrorCls,
    }
    ]

    console.log('boucle sur elements');
    elements.forEach(el => {
      const { element, act,tests } = el;
      tests.forEach((test,index) => {
        
        
        if (test && element.length > 2) {
          act(validClass)
        } else  {
          act(errorClass)
          validate = false;
          console.log('boucle sur test');
        console.log(test);
        console.log(index);
        console.log(element);
        }

      console.log('fin boucle sur elements');
    })    
    });
    return validate;

  }

  function checkForm() {
    console.log("checkForm");

    const infosDatas = [firstName, lastName, birthDate];
    const contactDatas = [street, city, stateLocation, zip];
    const onBoardingDatas = [startDate, department];
    

    if (checkFields()) {
      console.log("checkForm checkFields");

      
        setInfos({ 'firstName': infosDatas[0], 'lastName': infosDatas[1], 'birthDate': infosDatas[2] });
        console.log('setInfos');
      
        setContact({ 'street': contactDatas[0], 'city': contactDatas[1], 'state': contactDatas[2], 'zip': contactDatas[3] });
        console.log('setContact');

        setOnboarding({ 'startDate': onBoardingDatas[0], 'department': onBoardingDatas[1] });
        console.log('setOnboarding');
      
      return true;
   }
  return false;
  }

  function resetState() {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setStreet('');
    setCity('');
    setZip('');
    setStartDate('');
    setContact('');
    setInfos('');
    setOnboarding('');
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
    setValidateForm(false);}

  function resetForm() {


    dispatch(add_infos({ 'firstName': '', 'lastName': '', 'birthDate': '' }));
    dispatch(remove_infos());
    dispatch(remove_contact());
    dispatch(remove_onboarding());
    
    resetState();

  }

  function migrateToState() {
    console.log("migrateToState");

    dispatch(add_infos(infos));
    dispatch(add_contact(contact));
    dispatch(add_onboarding(onBoarding));
    
    dispatch(add_employee({ infos: infos, 'contact': contact, 'onBoarding': onBoarding }));
    
    return true;
  }

 



  function Handle_Submit(e) {
    e.preventDefault();

    if (checkForm()) {
      console.log("Handle_Submit");
      if (migrateToState())
      setValidateForm(true)
    }  

  }

  

  return (
    <form onSubmit={Handle_Submit} className={style.form}>
      <div className={style.container_corps_infos}>
        <h2>Onboarding</h2>
        <div className={style.onboarding_Group}>
          <div className={style.form_group}>
            <label htmlFor="startDate">Start Date</label>
             <DateTimePicker id='startDate' element={startDate} setElement={setStartDate}  />
                   
            
            <p id='StartDateError' className={StartDateErrorCls}>Start Date required!</p>

          </div>
          <div className={style.form_group}>
            <label htmlFor="department">Department</label>
            <CustomSelect id='department'  element={selectedDepartment} setElement={setSelectedDepartment}options={departments} />
          </div>
        </div>
      </div>
      
      <div className={style.container_infos}>
        <div className={style.container_employee_infos}>
          <h2>Employee</h2>
          <div className={ style.employee_Group}>
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
            <label htmlFor="birthDate">Date of birth</label>
            <DateTimePicker id='birthDate' element={birthDate} setElement={setBirthDate}  />
            <p id='birthdateError' className={BirthdateErrorCls}>BirthDate required!</p>

          </div>
          </div>
        </div>

        <div className={style.container_contact_infos}>
          <h2>Contact</h2>
        <div className={style.contact_Group} >
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
            <CustomSelect id='selectStates' element={selectedStateLocation} setElement={setSelectedStateLocation} options={states} />
            
            </div>

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
       
      </div> <div className={style.container_button}>
        <button className={style.submit_button} type="submit">
        save
      </button>
      </div>
      
      
    </form>
  )
}
