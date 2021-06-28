import { Dispatch } from 'redux';
import addUser, { userData } from '../../services/user/addUser';
import { User } from '../../types/User';
import { ActionTypes, AddUserAction } from './types';

const addUserSuccess = (user: User): AddUserAction => ({
    type: ActionTypes.ADD_USER,
    payload: user,
});

const addUserAction = (data: userData) => async (dispatch: Dispatch) => {
    try {
        const response = await addUser(data);
        const { id } = response;
        const userData = {
            ...data,
            id,
        };
        return dispatch(addUserSuccess(userData));
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default addUserAction;
