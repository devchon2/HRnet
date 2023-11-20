import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    
      street: "",
      city: "",
      state: "",
      zip: "",
      
  },
  reducers: {
    add_contact: (state, action) => {
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zip = action.payload.zip;
    },
    remove_contact: (state, action) => {
      state.street = "";
      state.city = "";
      state.state = "";
      state.zip = "";
    },
    modify_contact: (state, action) => {
      switch (action.payload){
        case "street":
          state.street = action.payload.street;
          break;
        case "city":
          state.city = action.payload.city;
          break;
        case "state":
          state.state = action.payload.state;
          break;
        case "zip":
          state.zip = action.payload.zip;
          break;
        default: 
          break;
      }
    }
  }
});

export const { set_contact, remove_contact } = contactSlice.actions;
export default contactSlice.reducer;