import axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
    axios
      .post("http://localhost:5000/api/users/login", {username , password}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: response.data,
          })
          localStorage.setItem('userInfo', JSON.stringify(response.data))
      })
      .catch((error) => {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
      });
  };
  
  export const register =(username, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
      })
  
    axios
      .post("http://localhost:5000/api/users/", { username, email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: response.data,
          })
          localStorage.setItem('userInfo', JSON.stringify(response.data))
      })
      .catch((error) => {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
      });
  };