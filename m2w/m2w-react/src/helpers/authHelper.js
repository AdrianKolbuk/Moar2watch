export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function isAuthenticated() {
    const user = getCurrentUser()
    //return !!user;
    if (user) {
        return true
    }
    return false
}