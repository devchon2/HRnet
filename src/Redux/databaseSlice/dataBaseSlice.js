import { createSlice } from "@reduxjs/toolkit";

// Creation of a slice for managing employee data in the Redux store
const dataBaseSlice = createSlice({
  name: "EmployeeList", // Name of the slice
  initialState: [], // Initial state of the slice, an empty array
  reducers: {
    // Reducer function for adding an employee
    add_employee: (state, action) => {
      // Adds a new employee object to the state array
      state.push({
        'infos': action.payload.infos,
        'contact': action.payload.contact,
        'onboarding': action.payload.onBoarding
      });
    },
    // Reducer function for removing all employees
    remove_employee: (state) => {
      state = []; // Resets the state to an empty array
    }
  }
});

// Exporting the action creators
export const { add_employee, remove_employee } = dataBaseSlice.actions;

// Exporting the reducer
export default dataBaseSlice.reducer;
