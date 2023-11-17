import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    
       <header>
        <h1>HRnet</h1>
      <nav>
        <NavLink to="/createemployees">Create new Employee</NavLink>
        <NavLink to="/showEmployees">View current Employees</NavLink>
      </nav></header>
        )
}
