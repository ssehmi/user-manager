import { baseUserApiUrl } from '../../api/constants';
import makeRequest from '../../utils/makeRequest';

const removeUser = async (userId: string) => {
    const deleteReqUrl = `${baseUserApiUrl}/${userId}`;
    const response = await makeRequest(deleteReqUrl, { method: 'DELETE' });

    return response;
};

export default removeUser;
