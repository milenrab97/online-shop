/* eslint-disable no-undef */
/* eslint-disable no-console */
import jwtDecode from 'jwt-decode'
import { call, takeLatest, all, put } from 'redux-saga/effects'
import { setOrders } from '../actions/orders'
import { FETCH_ORDERS, PURCHASE } from '../constants/orders'
import http from './../services/request'

export const fetchOrdersAsync = () => {
    return http.get('/api/users/random/orders')
}

export function* fetchOrdersWorker() {
    try {
        const { data } = yield call(fetchOrdersAsync)

        yield put(setOrders({ orders: data }))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchOrdersWatcher() {
    yield takeLatest(FETCH_ORDERS, fetchOrdersWorker)
}

export const purchaseAsync = ({ products }) => {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    const userId = decoded.id

    return http.post(`/api/users/${userId}/orders`, { products })
}

export function* purchaseWorker(action) {
    try {
        yield call(purchaseAsync, action.payload)
    } catch (e) {
        console.log(e)
    }
}

export function* purchaseWatcher() {
    yield takeLatest(PURCHASE, purchaseWorker)
}

export function* ordersSaga() {
    yield all([call(fetchOrdersWatcher), call(purchaseWatcher)])
}
