/* Navbar.jsx
 * Navbar component for the header of the app.
 *
 */

import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  // Hook to get the current location (path) in the app
  const location = useLocation();

  // Navigation buttons for valid routes
  const validRouteButtons = (
    <>
      {/* NavLink for creating a new employee */}
      <NavLink
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

      {/* NavLink for viewing current employees */}
      <NavLink
        id="showLink"
        className={({ isActive }) =>
          isActive ? `${style.showLink}  ${style.active}` : `${style.showLink}`
        }
        to="/showEmployees"
      >
        View current Employees
      </NavLink>
    </>
  );

  // Navigation button for error route
  const errorRouteButtons = (
    <>
      {/* NavLink to return to the home page from an error page */}
      <NavLink
        id="errorLink"
        className={({ isActive }) =>
          isActive
            ? `${style.errorLink}  ${style.active}`
            : `${style.errorLink}`
        }
        to="/"
      >
        Return to Home
      </NavLink>
    </>
  );

  return (
    // Render the navigation bar with appropriate links based on the current path
    <nav id="nav" className={style.nav}>
      {location.pathname !== "/error" ? validRouteButtons : errorRouteButtons}
    </nav>
  );
}
