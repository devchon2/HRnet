import style from './ShowUsersPage.module.css'
import EmployeesTable from '../Components/Table/Table.jsx'
import { useSelector } from 'react-redux' // comment this line to use data from MokeDatas.json
// import JSONDatas from '../../utils/mockDatas.json' // uncomment this line to use data from MokeDatas.json

export default function ShowUserPage() {
  // comment below to use data from MokeDatas.json
  const JSONDatas = useSelector((state) => state.database);

  // Flattening and restructuring the JSON data for the table
  const flated = JSONDatas.flatMap((item) => {
    const { infos, contact, onboarding } = item;
    const { firstName, lastName, birthDate } = infos;
    const { street, city, state, zip } = contact;
    const { abbreviation } = state;
    const { startDate, department } = onboarding;

    // Returning a flat structure of the data for each row in the table
    return {
      firstName,
      lastName,
      birthDate,
      department,
      street,
      city,
      abbreviation,
      zip,
      startDate
    };
  });    

  return (
    // JSX structure for the ShowUserPage component
    <main className={style.main}>
      {/* Page title */}
      <h1 className={style.page_Title}>Database</h1>

      {/* EmployeesTable component to display the table with the flattened data */}
      <EmployeesTable datas={flated} />
    </main>
  )
}
