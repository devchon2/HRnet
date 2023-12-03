import { createSlice } from "@reduxjs/toolkit";

const dataBaseSlice = createSlice({
  name: "EmployeeList",
  initialState: [],
  reducers: {
    add_employee: (state, action) => {
      console.log(action.payload.infos);
      console.log(action.payload.contact);
      console.log(action.payload.onBoarding);
      state.push({user: {infos: action.payload.infos, contact: action.payload.contact, onboarding: action.payload.onBoarding }});
      
    },
    
    remove_employee: (state, action) => {
      state = [];
    }
  }
});

export const { add_employee, remove_employee } = dataBaseSlice.actions;
export default dataBaseSlice.reducer;