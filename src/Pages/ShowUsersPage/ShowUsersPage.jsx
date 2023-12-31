import style from './ShowUsersPage.module.css'
import EmployeesTable from '../Components/Table/Table.jsx'
import { useSelector } from 'react-redux'
  // import JSONDatas from '../../utils/mockDatas.json'


export default function ShowUserPage() {
  const JSONDatas = useSelector((state) => state.database);

  

  const flated = JSONDatas.flatMap((item) => { //flat the data
    const { infos, contact, onboarding } = item;
    const { firstName, lastName, birthDate,  } = infos;
    const { street, city, state , zip } = contact;
    const { abbreviation } = state;
    const { startDate,department} = onboarding;
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
  <main className={style.main}>

    <h1 className={style.page_Title}>Database</h1>
    
      <EmployeesTable datas={flated}  />

  </main>
)
}