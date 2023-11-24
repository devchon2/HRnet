import { useEffect, useState } from "react";
import style from "./CreateUserPage.module.css";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { departments, states } from "../../utils/utils.js";
import { add_infos } from "../../Redux/InfosSlice.js";
import { add_contact } from "../../Redux/contactSlice.js";
import { add_onboarding } from "../../Redux/onBoardingSlice.js";
import { add_employee } from "../../Redux/dataBaseSlice.js";

export default function CreateUserPage() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateLocation, setStateLocation] = useState("");
  const [zip, setZip] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");
  const [infos, setInfos] = useState("");
  const [onBoarding, setOnboarding] = useState("");
  const [SelectedStateLocation, setSelectedStateLocation] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();






  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
    setBirthDate(birthDate);
    setStreet(street);
    setCity(city);
    setStateLocation(stateLocation);
    setZip(zip);
    setStartDate(startDate);
    setDepartment(department);
  }, [
    firstName,
    lastName,
    birthDate,
    street,
    city,
    stateLocation,
    zip,
    startDate,
    department,
  ]);

  function checkForm() {

    console.log("stateLocation, department", stateLocation, department)
    const infosDatas = [firstName, lastName, birthDate];
    const contactDatas = [street, city, stateLocation, zip];
    const onBoardingDatas = [startDate, department];
    const checkInfos = infosDatas.every(element => element !== "");
    const checkContact = contactDatas.every(element => element !== "");
    const checkOnBoarding = onBoardingDatas.every(element => element !== "");
    let validate = true;


    console.log("checkForm", checkInfos, checkContact, checkOnBoarding)

    if (checkInfos) {

      setInfos({ firstName: firstName, lastName: lastName, birthDate: birthDate });
      console.log("checkInfos OK");
    } else {

      validate = false;
      console.log("checkInfos ko", { firstName: firstName, lastName: lastName, birthDate: birthDate })
    }

    if (checkContact) {

      console.log("checkContact", contact);
      setContact(JSON.stringify({ street: street, city: city, state: stateLocation, zip: zip }));
      console.log("checkContact OK");
    } else {

      console.log("checkContact ko", { street: street, city: city, state: stateLocation, zip: zip })
      validate = false;
    }

    if (checkOnBoarding) {

      setOnboarding(JSON.stringify({ startDate: startDate, department: department }));
      console.log("checkOnBoarding OK");
    } else {

      console.log("checkOnBoarding ko", { startDate: startDate, department: department })
      validate = false;
    }

    return validate;

  }


  function Handle_Submit(e) {
    e.preventDefault();

    if(checkForm()) {

    dispatch(add_infos(infos));
    console.log("dispatch infos", infos);
    dispatch(add_contact(contact));
    console.log("dispatch contact", contact);
    dispatch(add_onboarding(onBoarding));
    console.log("dispatch onBoarding", onBoarding);

    //Fonction de vérification des éléments de formulaire a implémenter
    
     dispatch(add_employee({ infos: infos, contact: contact, onBoarding: onBoarding }));

      console.log("submit");
    }
  }
  return (
    <main>
      <h1 className={style.page_Title}>Create Employees</h1>

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
            </div>

            <div className={style.form_group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
              />
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
            </div>

            <div className={style.form_group}>
              <label htmlFor="City">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="City"
                name="City"
              />
            </div>

            <div className={style.form_group}>
              <label htmlFor="selectStates">State</label>
              <Select
                value={states[0]}
                onChange={setStateLocation}
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
            </div>
            <div className={style.form_group}>
              <label htmlFor="department">Department</label>
              <Select
                type="text"
                value={department[0]}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: 'orange',
                  }),
                }}
                onChange={setDepartment}
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
    </main>
  )
}
