const makeRequest = async (req: RequestInfo, fetchOptions?: RequestInit) => {
    const response = await fetch(req, fetchOptions);

    if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
    }
    if (response.status === 204) {
        return { status: response.status };
    }
    console.log('response from makereq', response.json);
    const jsonResponse = await response?.json();

    return jsonResponse;
};

export default makeRequest;
