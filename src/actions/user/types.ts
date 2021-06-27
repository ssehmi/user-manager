import type { User } from '../../types/User';

export enum ActionTypes {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    DELETE_USER,
    UPDATE_USER,
    ADD_USER,
}

export interface GetUsersAction {
    type: ActionTypes.GET_USERS_SUCCESS;
    payload: User[];
}

export interface RemoveUserAction {
    type: ActionTypes.DELETE_USER;
    payload: string;
}

export interface GetUsersError {
    type: ActionTypes.GET_USERS_ERROR;
    error: string;
}

export type UserActions = GetUsersAction | RemoveUserAction | GetUsersError;
