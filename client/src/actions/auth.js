import { LOGIN, SET_TOKEN, LOGOUT } from '../constants/auth'

export const loginAction = ({ username, password }) => ({
    type: LOGIN,
    payload: { username, password },
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: {},
})

export const setTokenAction = ({ token }) => ({
    type: SET_TOKEN,
    payload: { token },
})
