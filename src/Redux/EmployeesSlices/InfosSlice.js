import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for handling information like first name, last name, and birth date
const infosSlice = createSlice({
  name: "infos", // Name of the slice
  initialState: {
    // Initial state with each field set to an empty string
    firstName: "",
    lastName: "",
    birthDate: "",
  },
  reducers: {
    // Reducer for adding or updating information
    add_infos: (state, action) => {
      // Updates each field in the state with new values from the action payload
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthDate = action.payload.birthDate;
    },

    // Reducer for removing information
    remove_infos: (state) => {
      // Resets all fields in the state to empty strings
      state.firstName = "";
      state.lastName = "";
      state.birthDate = "";
    }
  }
});

// Exporting the action creators for adding and removing information
export const { add_infos, remove_infos } = infosSlice.actions;

// Exporting the reducer
export default infosSlice.reducer;
