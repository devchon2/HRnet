import { createSlice } from "@reduxjs/toolkit";

const infosSlice = createSlice({
  name: "infos",
  initialState: {
    
      firstName: "",
      lastName: "",
      birthDate: "",
      
  },
  reducers: {
    add_infos: (state, action) => {
      if (action.payload) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthDate = action.payload.birthdate;
      } else {
      state = {...state}
      }
    },
    remove_infos: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.birthDate = "";
    }
  }
});

export const { add_infos, remove_infos } = infosSlice.actions;
export default infosSlice.reducer;