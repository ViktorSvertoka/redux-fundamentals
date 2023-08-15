import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import userAuthReducer from "./user-auth-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userAuthReducer,
  },
});

export default store;
