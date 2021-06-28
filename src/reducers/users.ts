import { ActionTypes } from '../actions/user/types';
import { UserActions } from '../actions/user/types';
import type { User } from '../types/User';

const users = (state: User[] = [], action: UserActions) => {
    switch (action.type) {
        case ActionTypes.GET_USERS_SUCCESS:
            return action.payload;
        case ActionTypes.DELETE_USER:
            return state.filter(
                (user) => user.id.toString() !== action.payload
            );
        case ActionTypes.ADD_USER:
            return [action.payload, ...state];
        default:
            return state;
    }
};

export default users;
