import React from 'react'
import { NavLink } from "react-router-dom";
import style from './Header.module.css'
import logo from '../../../assets/hr_logo.png'

export default function Header() {



  return (

    <header className={style.header}>
      <div className={style.hrnet}>
        <img src={logo} className={style.logo}  alt="Logo" />
        <h1 className={style.application_Title} >HRnet</h1>
      </div>

      <nav id='nav' className={style.nav}>
        <NavLink id='createLink' className={({isActive}) =>  isActive ? `${style.createLink}  ${style.active}` : `${style.createLink}` } to="/">Create new Employee</NavLink>
        <NavLink id="showLink" className={({isActive}) =>  isActive ? `${style.showLink}  ${style.active}` : `${style.showLink}` } to="/showEmployees">View current Employees</NavLink>
      </nav></header>
  )
}
