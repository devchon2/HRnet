import { createSlice } from "@reduxjs/toolkit";

// Define a slice for handling onboarding data
const onBoardingSlice = createSlice({
  name: "onBoarding", // Name of the slice
  initialState: {
    // The initial state contains two properties: startDate and department
    startDate: "",
    department: "",
  },
  reducers: {
    // Reducer for adding or updating onboarding information
    add_onboarding: (state, action) => {
      // Updates the startDate and department based on the action payload
      state.startDate = action.payload.startDate;
      state.department = action.payload.department;
    },
    // Reducer for removing onboarding information
    remove_onboarding: (state) => {
      // Resets the startDate and department to empty strings
      state.startDate = "";
      state.department = "";
    }
  }
});

// Export action creators for adding and removing onboarding information
export const { add_onboarding, remove_onboarding } = onBoardingSlice.actions;

// Export the reducer
export default onBoardingSlice.reducer;
