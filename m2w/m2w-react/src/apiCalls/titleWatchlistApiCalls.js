const titleWatchlistBaseUrl = 'http://localhost:3000/api/titleWatchlists';

export function getTitleWatchlistsApiCall() {
    const promise = fetch(titleWatchlistBaseUrl)
    return promise;
}

export function addTitleWatchlistApiCall(titleWatchlist) {
    const titleWatchlistString = JSON.stringify(titleWatchlist)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: titleWatchlistString
    }
    const promise = fetch(titleWatchlistBaseUrl, options);
    return promise;
}

export function deleteTitleWatchlistApiCall(titleWatchlistId) {
    const url = `${titleWatchlistBaseUrl}/${titleWatchlistId}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, options);
}