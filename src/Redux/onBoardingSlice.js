import { createSlice } from "@reduxjs/toolkit";

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState: {
      
        startDate: "",
        department: "",
      
  },
  reducers: {
    add_onboarding: (state, action) => {
      if (action.payload) {
      state.startDate = action.payload.startDate;
      state.department = action.payload.department
    } else {
      state = {...state}
      }},

    remove_onboarding: (state) => {
      state.startDate = "";
      state.department = "";
    }
  }
});

export const { add_onboarding, remove_onboarding } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;