import { baseUserApiUrl } from '../../api/constants';
import { User } from '../../types/User';
import makeRequest from '../../utils/makeRequest';

const editUser = async (data: User) => {
    const reqUrl = `${baseUserApiUrl}/${data.id}`;
    const { id, ...rest } = data;
    const response = await makeRequest(reqUrl, {
        method: 'PATCH',
        body: JSON.stringify(rest),
    });
    return response;
};

export default editUser;
