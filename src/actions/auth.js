import axios from "axios";
import { setAlert } from "./alert";

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT, 
  USER_LOADED,
  AUTH_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { Navigate } from "react-router-dom";

export const loadUser = () => async (dispath) => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth`);
    dispath({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispath({
      type: AUTH_ERROR,
    });
  }
};

// Register
export const register =
  ({ username, password, email, name, profile, role }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      username,
      password,
      email,
      name,
      profile,
      role,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        body,
        config
      );
      if (res.status === 200) {
        dispatch(setAlert(res.data.message+". You can Login Now.", "error"));
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        // return <Navigate to="/login" />;
      }
    } catch (err) {
      if (!err.response) {
        dispatch(setAlert("Server error", "error"));
      } else {
        const errors = err.response.data.message;
        if (errors) {
          dispatch(setAlert(errors, "error"));
        }
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//  Login
export const login =
  ({ username, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      username,
      password,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        body,
        config
      );
      if (res.status === 200) {
        dispatch(setAlert(res.data.message, "error"));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      const errors = err.response.data.message;
      if (errors) {
        dispatch(setAlert(errors, "error"));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout
export const logout = () => (dispatch) => {
  dispatch(setAlert("You are Logout Successfully", "error"));
  dispatch({
    type: LOGOUT,
  });
};