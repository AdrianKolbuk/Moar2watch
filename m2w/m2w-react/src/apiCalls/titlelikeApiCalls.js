const titleLikeBaseUrl = 'http://localhost:3000/api/titleLikes';

export function getTitleLikesApiCall() {
    const promise = fetch(titleLikeBaseUrl)
    return promise;
}

export function addTitleLikeApiCall(titlelike) {
    const titlelikeString = JSON.stringify(titlelike)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: titlelikeString
    }
    const promise = fetch(titleLikeBaseUrl, options);
    return promise;
}

export function deleteTitleLikeApiCall(titlelikeId) {
    const url = `${titleLikeBaseUrl}/${titlelikeId}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, options);
}