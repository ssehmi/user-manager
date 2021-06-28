import { Dispatch } from 'redux';
import editUser from '../../services/user/editUser';
import { User } from '../../types/User';
import { ActionTypes, EditUserAction } from './types';

const editUserSuccess = (user: User): EditUserAction => ({
    type: ActionTypes.UPDATE_USER,
    payload: user,
});

const editUserAction = (data: User) => async (dispatch: Dispatch) => {
    try {
        await editUser(data);
        return dispatch(editUserSuccess(data));
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default editUserAction;
