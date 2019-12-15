export const getToken = () => JSON.parse(localStorage.getItem('token'))

export const setToken = (token = null) => localStorage.setItem('token', JSON.stringify(token))