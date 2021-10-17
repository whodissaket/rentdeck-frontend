import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./user-slice";
import { registerFailure, registerStart, registerSuccess } from "./register-slice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  axios
    .post("http://localhost:5000/api/users/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(loginFailure());
    });
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  axios
    .post("http://localhost:5000/api/users/", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(registerSuccess(response.data));
    })
    .catch((error) => {
      dispatch(registerFailure());
    });
};
