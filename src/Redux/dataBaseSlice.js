import { createSlice } from "@reduxjs/toolkit";

const dataBaseSlice = createSlice({
  name: "EmployeeList",
  initialState: [],
  reducers: {
    add_employee: (state, action) => {
      state.push({'infos': action.payload.infos, 'contact': action.payload.contact, 'onboarding': action.payload.onBoarding });
    },
    remove_employee: (state) => {
      state = [];
    }
  }
});

export const { add_employee, remove_employee } = dataBaseSlice.actions;
export default dataBaseSlice.reducer;