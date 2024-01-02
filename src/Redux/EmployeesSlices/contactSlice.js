import { createSlice } from "@reduxjs/toolkit";

// Defining a slice for contact information
const contactSlice = createSlice({
  name: "contact", // Name of the slice
  initialState: {
    // Initial state with all contact fields set to empty strings
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  reducers: {
    // Reducer for adding or updating contact information
    add_contact: (state, action) => {
      // Updates each field in the state with new values from the action payload
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zip = action.payload.zip;
    },

    // Reducer for removing contact information
    remove_contact: (state) => {
      // Resets all fields in the state to empty strings
      state.street = "";
      state.city = "";
      state.state = "";
      state.zip = "";
    },
  }
});

// Exporting the action creators for adding and removing contact information
export const { add_contact, remove_contact } = contactSlice.actions;

// Exporting the reducer
export default contactSlice.reducer;
