import { useState } from "react";
import style from "./CreateUserPage.module.css";
import Select from "react-select"
import { SelectStates } from "../../utils/utils.js";

export default function CreateUserPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('')
  const [Contact, setContact] = useState({contact: {street: street, city: city, state: state, zip: zip}})
  const [employee, setEmployee] = useState({employee: {
                                                firstName: firstName, 
                                                lastName: lastName, 
                                                birthDate: birthDate, 
                                                
                                  }})
  const [onboarding, setOnboarding] = useState({onboarding: {
                                                  startDate: startDate, 
                                                  department: department
                                      }})

console.log(firstName, lastName, birthDate, street, city, state, zip, startDate, department, Contact, employee, onboarding)



  return (
    <main>

      <h1 className={style.page_Title}>Create Employees</h1>

      <form className={style.form}>

        <div className={style.container_infos}>
          
          <div className={style.container_employee_infos}>

            <h2>Employee</h2>

            <div className={style.form_group}>
              <label htmlFor="firstName">First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" />
            </div>

            <div className={style.form_group}>
              <label htmlFor="lastName">Last Name</label>
              <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" />
            </div>

            <div className={style.form_group}>
              <label htmlFor="birthDate">Birth Date</label>
              <input onChange={(e) => setBirthDate(e.target.value)} type="date" id="birthDate" name="birthDate" />
            </div>
          
          </div>

          <div className={style.container_contact_infos}>
            
            <h2>Contact</h2>
            
            <div className={style.form_group}>
            <label htmlFor="Street">Street</label>
            <input onChange={(e) => setStreet(e.target.value)} type="text" id="Street" name="Street" />
            </div>

            <div className={style.form_group}>
            <label htmlFor="City">City</label>
            <input onChange={(e) => setCity(e.target.value)} type="text" id="City" name="City" />
            </div>

            <div className={style.form_group}>
            <label htmlFor="State" >State</label>
            <Select id="State" options={SelectStates} onChange={(e) => setState(e.value)}/>
            </div>

            <div className={style.form_group}>
            <label htmlFor="Zip">Zip Code</label>
            <input onChange={(e) => setZip(e.target.value)} type="text" id="Zip" name="Zip" />
            </div>
          </div>

        </div>

        <div className={style.container_corps_infos}>
          <h2>Onboarding</h2>
          <div className={style.onboarding_Group}>
          <div className={style.form_group}>
            <label htmlFor="startDate">Start Date</label>
            <input onChange={(e) => setStartDate(e.target.value)} type="date" id="startDate" name="startDate" />
          </div>

          <div className={style.form_group}>

            <label htmlFor="department">Department</label>
            <input onChange={(e) => setDepartment(e.target.value)} type="text" id="department" name="department" />
          </div>
          </div>
        </div>

        <button className={style.submit_button} type="submit">save</button>
      </form>

    </main>
  );

}
