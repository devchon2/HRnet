/**
 * Redux store configuration.
 * @module Redux/store
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import infos from './EmployeesSlices/InfosSlice.js';
import onBoardingSlice from './EmployeesSlices/onBoardingSlice.js';
import contactSlice from './EmployeesSlices/contactSlice.js';
import database from './databaseSlice/dataBaseSlice.js';

/**
 * Combines multiple reducers into a single reducer function.
 * @type {Function}
 */
const employee = combineReducers({
  infos: infos,
  contact: contactSlice,
  onboarding: onBoardingSlice
});

/**
 * Combines the employee reducer and the database reducer into a single reducer function.
 * @type {Function}
 */
const rootReducer = combineReducers({
  employee: employee,
  database
});

/**
 * Creates a Redux store with the specified reducer.
 * @type {Object}
 */
const store = configureStore({
  reducer: rootReducer
});

export default store;
