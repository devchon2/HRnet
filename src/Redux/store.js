import {configureStore, combineReducers  } from '@reduxjs/toolkit'
import infos from './EmployeesSlices/InfosSlice.js'
import onBoardingSlice from './EmployeesSlices/onBoardingSlice.js'
import contactSlice from './EmployeesSlices/contactSlice.js'
import database from './databaseSlice/dataBaseSlice.js'

const employee = combineReducers({
  infos:infos,
  contact: contactSlice,
  onboarding: onBoardingSlice
})


const rootReducer = combineReducers({
  employee: employee,
  database
  
})

const store = configureStore({
  reducer: rootReducer
})


export default store