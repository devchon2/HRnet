import './App.css';
import CreateUserPage from './Pages/CreateUserPage/CreateUserPage.jsx';
import ShowUserPage from './Pages/ShowUsersPage/ShowUsersPage.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Pages/Components/Layout.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import { Navigate } from 'react-router-dom';



function App() {

const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<CreateUserPage />} />
        <Route path='/showemployees' element={<ShowUserPage />} />
        <Route path='error' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to={'/error'}  />} />
      </Route>
    </Routes>
  )
}

export default App;

