import { createSlice } from "@reduxjs/toolkit";

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState: {
    
      firstName: "",
      lastName: "",
      birthdate: "",
      
  },
  reducers: {
    set_onBoarding: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthdate = action.payload.birthdate;
    },
    remove_onBoarding: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.birthdate = "";
    }
  }
});

export const { set_onBoarding, remove_onBoarding } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;