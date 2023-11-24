import './App.css';
import CreateUserPage from './Pages/CreateUserPage/CreateUserPage.jsx';
import ShowUserPage from './Pages/ShowUsersPage/ShowUsersPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Components/Layout.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';



function App() {    
  


  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<CreateUserPage />} />
        <Route path='/showemployees' element={<ShowUserPage />} />
            <Route path='*' element={<ErrorPage/>}/>
</Route>
    </Routes>
  )
}

export default App;

