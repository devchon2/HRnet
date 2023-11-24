import {configureStore, combineReducers  } from '@reduxjs/toolkit'
import infos from './InfosSlice'
import onBoardingSlice from './onBoardingSlice.js'
import contactSlice from './contactSlice.js'
import database from './dataBaseSlice.js'

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


console.log(store.getState())

export default store