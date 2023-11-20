import { createSlice } from "@reduxjs/toolkit";

const infosSlice = createSlice({
  name: "infos",
  initialState: {
    
      firstName: "",
      lastName: "",
      birthdate: "",
      
  },
  reducers: {
    set_Infos: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthdate = action.payload.birthdate;
    },
    remove_Infos: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.birthdate = "";
    }
  }
});

export const { set_Infos, remove_Infos } = infosSlice.actions;
export default infosSlice.reducer;