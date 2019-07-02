import { LOGIN, SET_TOKEN, LOGOUT, SET_USER_ROLE } from '../constants/auth'

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

export const setUserRole = ({ userRole }) => ({
    type: SET_USER_ROLE,
    payload: { userRole },
})
