const getToken = () => {
    return window.localStorage.getItem('token');
}

const setToken = (token: string) => {
    window.localStorage.setItem('token', token);
}

const removeToken = () => {
    window.localStorage.removeItem('token');
}

const commonService = {
    getToken,
    setToken,
    removeToken
}

export default commonService;