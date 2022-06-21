import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import  {publicRequest}  from "../Service/api";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("Login Success");
  } catch (err) {
    dispatch(loginFailure());
  }
};