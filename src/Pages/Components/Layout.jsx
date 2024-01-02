import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  // Layout is a functional component that serves as the layout structure for the application.

  return (
    // JSX structure for the Layout component
    <>
      {/* Including the Header component at the top of the layout */}
      <Header/>

      {/* Outlet component from React Router */}
      {/* This acts as a placeholder for the routed content which will be rendered here */}
      <Outlet/>
    </>
  )
}
