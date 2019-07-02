/* eslint-disable no-undef */
/* eslint-disable no-console */
import jwtDecode from 'jwt-decode'
import { call, put, takeLatest, all } from 'redux-saga/effects'
import { LOGIN, LOGOUT } from '../constants/auth'
import { setTokenAction, setUserRole } from '../actions/auth'
import http from './../services/request'

export const loginAsync = user => {
    return http.post('/auth/login', user)
}

export function* loginWorker(action) {
    try {
        const { username, password } = action.payload

        const {
            data: { token },
        } = yield call(loginAsync, { username, password })

        yield put(setTokenAction({ token }))

        const userRole = token ? jwtDecode(token).role : ''

        yield put(setUserRole({ userRole }))
        // eslint-disable-next-line no-undef
        localStorage.setItem('token', token)
    } catch (e) {
        console.log(e)
    }
}

export function* loginWatcher() {
    yield takeLatest(LOGIN, loginWorker)
}

export function* logoutWorker() {
    localStorage.removeItem('token')
}

export function* logoutWatcher() {
    yield takeLatest(LOGOUT, logoutWorker)
}

export function* authSaga() {
    yield all([call(loginWatcher), call(logoutWatcher)])
}
