import makeRequest from "../../utils/makeRequest";
import { baseUserApiUrl } from "../../api/constants";
import type { GetUserResponse } from "../../types/User";

const getUsers = async (): Promise<GetUserResponse> => {
  const response = await makeRequest(baseUserApiUrl);
  return response;
};

export default getUsers;
