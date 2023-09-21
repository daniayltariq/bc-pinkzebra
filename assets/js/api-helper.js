const callApi = async ({
    method, endpoint, body, headers,
}) => {
    const url = `${endpoint}`;
    const options = {
        method,
        headers: headers || { 'Content-Type': 'application/json' },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Failed to ${method} ${url}`);
    }

    const result = await response.json();

    return result;
};

export const getData = async (endpoint) => callApi({ method: 'GET', endpoint });

export const getData_Post = async (endpoint, body) => callApi({ method: 'POST', endpoint, body });

export const createData = async (endpoint, body) => callApi({ method: 'POST', endpoint, body });

// const updateData = async (endpoint, body) => callApi({ method: 'PUT', endpoint, body });

// const deleteData = async (endpoint) => callApi({ method: 'DELETE', endpoint });
