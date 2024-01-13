import UserActionTypes from "./action-types";

export const loguinUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
