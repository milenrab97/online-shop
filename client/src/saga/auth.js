import { call, put, takeLatest, all } from 'redux-saga/effects'
import { LOGIN } from '../constants/auth'
import { setTokenAction } from '../actions/auth'
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
        // eslint-disable-next-line no-undef
        localStorage.setItem('token', token)
    } catch (e) {
        console.log(e)
    }
}

export function* loginWatcher() {
    yield takeLatest(LOGIN, loginWorker)
}

export function* authSaga() {
    yield all([call(loginWatcher)])
}
