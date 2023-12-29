import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useLocation} from "react-router-dom";


export default function Navbar() {
  const location = useLocation();

  const validRouteButtons = (<><NavLink
  id="createLink"
  className={({ isActive }) =>
    isActive
      ? `${style.createLink}  ${style.active}`
      : `${style.createLink}`
  }
  to="/"
>
  Create new Employee
</NavLink>
<NavLink
  id="showLink"
  className={({ isActive }) =>
    isActive ? `${style.showLink}  ${style.active}` : `${style.showLink}`
  }
  to="/showEmployees"
>
  View current Employees
</NavLink></>)

const errorRouteButtons = (<><NavLink
  id="errorLink"
  className={({ isActive }) =>
    isActive ? `${style.errorLink}  ${style.active}` : `${style.errorLink}`
  }
  to="/"
>
  Return to Home
</NavLink>  </>)

  return (

  <nav id="nav" className={style.nav}>
      {location.pathname !== "/error" ? 
       validRouteButtons
      : 
      errorRouteButtons
      }
    </nav>
  );
}
