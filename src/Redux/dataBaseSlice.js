import { createSlice } from "@reduxjs/toolkit";

const dataBaseSlice = createSlice({
  name: "EmployeeList",
  initialState: [],
  reducers: {
    add_employee: (state, action) => {
      console.log(action.payload.infos);
      console.log(action.payload.contact);
      console.log(action.payload.onBoarding);
      state.push({infos: action.payload.infos, contact: action.payload.contact, onboarding: action.payload.onBoarding });
      
    },
    
    remove_employee: (state, action) => {
      state.employees.infos = "";
      state.employees.contact = "";
      state.employees.onBoarding = "";
    }
  }
});

export const { add_employee, remove_employee } = dataBaseSlice.actions;
export default dataBaseSlice.reducer;