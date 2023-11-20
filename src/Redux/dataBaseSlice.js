import { createSlice } from "@reduxjs/toolkit";

const dataBaseSlice = createSlice({
  name: "EmployeeList",
  initialState: {
      employees: []      
  },
  reducers: {
    set_Employee: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthdate = action.payload.birthdate;
    },
    remove_Employee: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.birthdate = "";
    }
  }
});

export const { set_dataBase, remove_dataBase } = dataBaseSlice.actions;
export default dataBaseSlice.reducer;