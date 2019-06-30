import { call, takeLatest, all, put } from 'redux-saga/effects'
import { FETCH_PRODUCTS } from '../constants/products'
import { receiveProductsAction } from '../actions/products'
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

export function* productsSaga() {
    yield all([call(fetchProductsWatcher)])
}
