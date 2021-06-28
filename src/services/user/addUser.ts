import { baseUserApiUrl } from '../../api/constants';
import { User } from '../../types/User';
import makeRequest from '../../utils/makeRequest';

export type UserData = Pick<
    User,
    'avatar' | 'email' | 'first_name' | 'last_name'
>;

const addUser = async (data: UserData) => {
    const response = await makeRequest(baseUserApiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    return response;
};

export default addUser;
