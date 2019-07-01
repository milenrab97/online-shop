/* eslint-disable no-console */
import { call, takeLatest, all, put } from 'redux-saga/effects'
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS } from '../constants/products'
import { receiveProductsAction, setProductDetailsAction } from '../actions/products'
import http from './../services/request'

export const fetchProductsAsync = () => {
    return http.get('/api/products')
}

export function* fetchProductsWorker(action) {
    try {
        const { data } = yield call(fetchProductsAsync)

        yield put(receiveProductsAction({ products: data }))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, fetchProductsWorker)
}

export const fetchProductDetailsAsync = productId => {
    return http.get(`/api/products/${productId}`)
}

export function* fetchProductDetailsWorker(action) {
    try {
        const { productId } = action.payload
        const { data } = yield call(fetchProductDetailsAsync, productId)

        yield put(setProductDetailsAction({ product: data }))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchProductDetailsWatcher() {
    yield takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetailsWorker)
}

export function* productsSaga() {
    yield all([call(fetchProductsWatcher), call(fetchProductDetailsWatcher)])
}
