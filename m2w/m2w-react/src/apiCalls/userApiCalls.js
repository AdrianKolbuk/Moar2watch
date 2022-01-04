const usersBaseUrl = 'http://localhost:3000/api/users'

export function getUsersApiCall() {
    const promise = fetch(usersBaseUrl)
    return promise;
}

export function addUserApiCall(user) {
    const userString = JSON.stringify(user)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userString
    }
    const promise = fetch(usersBaseUrl, options);
    return promise;
}

export function updateUserApiCall(userId, user) {
    const url = `${usersBaseUrl}/${userId}`
    const userString = JSON.stringify(user)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userString
    }
    const promise = fetch(url, options);
    return promise;
}

export function getUserByIdApiCall(userId) {
    const url = `${usersBaseUrl}/${userId}`;
    const promise = fetch(url);
    return promise;
}