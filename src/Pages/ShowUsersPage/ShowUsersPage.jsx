import style from './ShowUsersPage.module.css'
import EmployeesTable from '../Components/Table/Table.jsx'

export default function ShowUserPage() {
  

return (
  <main className={style.main}>

    <h1 className={style.page_Title}>Database</h1>
    
      <EmployeesTable   />

  </main>
)
}