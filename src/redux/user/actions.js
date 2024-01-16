import UserActionTypes from "./action-types";

<<<<<<< HEAD
export const loginUser = (payload) => ({
=======
export const loguinUser = (payload) => ({
>>>>>>> starter
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
