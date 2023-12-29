import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet, useLocation } from 'react-router-dom'


export default function Layout() {
 const location = useLocation()

 console.log(location.pathname)

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
