import React from 'react'
import { NavLink } from "react-router-dom";
import style from './Header.module.css'
import logo from '../../../assets/hr_logo.png'
import Navbar from './NavBar/Navbar.jsx';

export default function Header() {



  return (

    <header className={style.header}>
      <div className={style.hrnet}>
        <img src={logo} className={style.logo}  alt="Logo" />
        <h1 className={style.application_Title} >HRnet</h1>
      </div>
      <Navbar/>

      </header>
  )
}
