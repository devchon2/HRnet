import React from 'react'
import style from './Header.module.css'
import logo from '../../../assets/hr_logo.png'
import Navbar from './NavBar/Navbar.jsx';

export default function Header() {
  // The Header function component renders the header section of the web application.

  return (
    // JSX structure for the header
    <header className={style.header}>
      {/* Container for the application logo and title */}
      <div className={style.hrnet}>
        {/* Image tag for displaying the logo */}
        <img src={logo} className={style.logo} alt="Logo" />
        {/* Heading for the application title */}
        <h1 className={style.application_Title}>HRnet</h1>
      </div>
      {/* Embedding the Navbar component */}
      <Navbar/>
    </header>
  )
}
