/**
 * Redux slice for managing employee data in the database.
 * @module Redux/databaseSlice/dataBaseSlice
 */
/**
 * @fileoverview This file contains the Redux slice for managing employee data in the database.
 * @module Redux/databaseSlice/dataBaseSlice
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing employee data in the Redux store.
 * @type {import("@reduxjs/toolkit").Slice}
 */
const dataBaseSlice = createSlice({
  name: "EmployeeList", // Name of the slice
  initialState: [], // Initial state of the slice, an empty array
  reducers: {
    /**
     * Reducer function for adding an employee.
     * @param {Array} state - The current state of the slice.
     * @param {import("@reduxjs/toolkit").PayloadAction} action - The action containing the employee data.
     */
    add_employee: (state, action) => {
      // Adds a new employee object to the state array
      state.push({
        'infos': action.payload.infos,
        'contact': action.payload.contact,
        'onboarding': action.payload.onBoarding
      });
    },
    /**
     * Reducer function for removing all employees.
     * @param {Array} state - The current state of the slice.
     */
    remove_employee: (state) => {
      state = []; // Resets the state to an empty array
    }
  }
});

// Exporting the action creators
export const { add_employee, remove_employee } = dataBaseSlice.actions;

// Exporting the reducer
export default dataBaseSlice.reducer;
