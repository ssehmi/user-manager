import { Dispatch } from 'redux';
import removeUser from '../../services/user/removeUser';
import { ActionTypes, RemoveUserAction } from './types';

const removeUserSuccess = (id: string): RemoveUserAction => ({
    type: ActionTypes.DELETE_USER,
    payload: id,
});

const removeUserAction = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const response = await removeUser(userId);
        if (response.status === 204) {
            return dispatch(removeUserSuccess(userId));
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default removeUserAction;
