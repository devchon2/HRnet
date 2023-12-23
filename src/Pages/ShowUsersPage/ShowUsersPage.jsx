import style from './ShowUsersPage.module.css'
import EmployeeTable from '../Components/Table/Table.jsx'

export default function ShowUserPage() {
  

return (
  <main className={style.main}>

    <h1 className={style.page_Title}>Database</h1>
    
      <EmployeeTable  />

  </main>
)
}