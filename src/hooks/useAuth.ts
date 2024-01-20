import React, { Dispatch } from "react";
import { IUserLogin } from "../utils/types";
import { IActionType, IUser, Types, initialState } from "../context/AppReducer";

const useAuth = () => {
  const userLogin = (dispatch: Dispatch<IActionType>, user: IUserLogin) => {
    let isAdmin = false;
    const adminEmail = process.env.USER_EMAIL || "admin@gmail.com";
    const adminPwd = process.env.USER_PASSWORD || "admin";
    if (user.email == adminEmail && user.password == adminPwd) {
      const admin: IUser = {
        name: "Admin",
        role: "ADMIN",
        id: "adminEmail"
      };
      dispatch({
        type: Types.User,
        payload: {
          ...initialState,
          user: admin
        }
      });
      isAdmin = true;
    }
    return isAdmin;
  };

  return { userLogin };
};

export default useAuth;
