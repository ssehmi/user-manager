import { Dispatch } from "redux";
import getUsers from "../../services/user/getUsers";
import { User } from "../../types/User";
import { ActionTypes, GetUsersAction } from "./types";

const getUsersSuccess = (users: User[]): GetUsersAction => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: users,
});

const getUsersError = (error: string) => ({
  type: ActionTypes.GET_USERS_ERROR,
  error,
});

const getUsersAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await getUsers();
    return dispatch(getUsersSuccess(response.data));
  } catch (err) {
    return dispatch(getUsersError(err));
  }
};

export default getUsersAction;
