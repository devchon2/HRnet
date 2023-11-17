import logo from './logo.svg';
import './App.css';
import CreateUserPage from './Pages/CreateUserPage.jsx';
import ShowUserPage from './Pages/ShowUsersPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Components/Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index path='/createemployees' element={<CreateUserPage />} />
        <Route path='/showemployees' element={<ShowUserPage />} />
      </Route>
    </Routes>
  )
}

export default App;

