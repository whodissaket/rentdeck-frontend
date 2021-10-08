import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./user-slice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  axios
    .post("http://localhost:5000/api/users/login", {
      headers: {
        "Content-Type": "application/json",
      },
      user,
    })
    .then((response) => {
      dispatch(loginSuccess(response.data));
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(loginFailure());
    });
};
