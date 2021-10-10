import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import registerReducer from "./user-slice";
import Reducer from "./user-slice";

export default configureStore({
  reducer: {
    user: userReducer,
    registerUser: registerReducer

  },
});
