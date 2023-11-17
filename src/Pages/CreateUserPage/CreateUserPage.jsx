import style from "./CreateUserPage.module.css";

export default function CreateUserPage() {
  return (
    <main>

      <h1 className={style.page_Title}>Create Employees</h1>

      <form className={style.form}>

        <div className={style.container_user_infos}>
          <div className={style.container_personals_infos}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />

            <label htmlFor="birthDate">Birth Date</label>
            <input type="date" id="birthDate" name="birthDate" />
          </div>

          <div className={style.container_contact_infos}>
            <label htmlFor="Street">Street</label>
            <input type="text" id="Street" name="Street" />

            <label htmlFor="City">City</label>
            <input type="text" id="City" name="City" />

            <label htmlFor="State">State</label>
            <input type="text" id="State" name="State" />

            <label htmlFor="Zip">Zip Code</label>
            <input type="text" id="Zip" name="Zip" />
          </div>
        </div>
        <div className={style.container_corps_infos}>

          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" />

          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" />

        </div>

        <button className={style.submit_button} type="submit">save</button>
      </form>

    </main>
  );

}
