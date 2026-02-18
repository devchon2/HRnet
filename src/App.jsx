/**
 * Main Application Component
 * Defines the routing structure for the application.
 *
 * @returns {JSX.Element} The rendered application component.
 */
import './App.css';
import CreateUserPage from './Pages/CreateUserPage/CreateUserPage.jsx';
import ShowUserPage from './Pages/ShowUsersPage/ShowUsersPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Components/Layout.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import { Navigate } from 'react-router-dom';

/**
 * Main Application Component
 * Defines the routing structure for the application.
 */
function App() {
  return (
    <Routes>
      {/* Route configuration starts here */}
      <Route path="/" element={<Layout />} >
        {/* Default index route, renders CreateUserPage */}
        <Route index element={<CreateUserPage />} />

        {/* Route for showing the employees, renders ShowUserPage */}
        <Route path='/showemployees' element={<ShowUserPage />} />

        {/* Route for displaying error page */}
        <Route path='error' element={<ErrorPage />} />

        {/* Catch-all route, redirects to the error page */}
        <Route path='*' element={<Navigate to='/error' />} />
      </Route>
    </Routes>
  )
}

export default App;
