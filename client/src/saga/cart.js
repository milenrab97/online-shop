/* eslint-disable no-console */
/* eslint-disable no-undef */
import jwtDecode from 'jwt-decode'
import { call, takeLatest, all, put } from 'redux-saga/effects'
import { FETCH_CART, ADD_TO_CART } from '../constants/cart'
import { setCartAction, fetchCartAction } from '../actions/cart'
import http from './../services/request'

export const getUserId = () => {
    const token = localStorage.getItem('token')

    if (!token) return ''

    const decoded = jwtDecode(token)

    return decoded.id
}

export const addToCartAsync = productId => {
    const userId = getUserId()

    return http.post(`/api/users/${userId}/cart`, { productId })
}

export function* addToCartWorker(action) {
    try {
        yield call(addToCartAsync, action.payload.productId)

        yield put(fetchCartAction())
    } catch (e) {
        console.log(e)
    }
}

export function* addToCartWatcher() {
    yield takeLatest(ADD_TO_CART, addToCartWorker)
}

export const fetchCartAsync = () => {
    const userId = getUserId()

    return http.get(`/api/users/${userId}/cart`)
}

export function* fetchCartWorker(action) {
    try {
        const { data } = yield call(fetchCartAsync)
        const normalizedData = data.map(row => row.product[0])

        yield put(setCartAction({ cart: normalizedData }))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchCartWatcher() {
    yield takeLatest(FETCH_CART, fetchCartWorker)
}

export function* cartSaga() {
    yield all([call(fetchCartWatcher), call(addToCartWatcher)])
}
