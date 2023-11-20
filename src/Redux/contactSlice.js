import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    
      firstName: "",
      lastName: "",
      birthdate: "",
      
  },
  reducers: {
    set_contact: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthdate = action.payload.birthdate;
    },
    remove_contact: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.birthdate = "";
    }
  }
});

export const { set_contact, remove_contact } = contactSlice.actions;
export default contactSlice.reducer;