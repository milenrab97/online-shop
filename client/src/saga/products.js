/* eslint-disable no-undef */
/* eslint-disable no-console */
import { call, takeLatest, all, put } from 'redux-saga/effects'
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS, SUBMIT_COMMENT } from '../constants/products'
import {
    receiveProductsAction,
    setProductDetailsAction,
    setCommentsAction,
    fetchProductDetailsAction,
} from '../actions/products'
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

export const fetchProductCommentsAsync = productId => {
    return http.get(`/api/products/${productId}/comments`)
}

export const fetchProductDetailsAsync = productId => {
    return http.get(`/api/products/${productId}`)
}

export function* fetchProductDetailsWorker(action) {
    try {
        const { productId } = action.payload

        const { data } = yield call(fetchProductDetailsAsync, productId)
        const { data: comments } = yield call(fetchProductCommentsAsync, productId)

        yield put(setProductDetailsAction({ product: data }))
        yield put(setCommentsAction({ comments }))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchProductDetailsWatcher() {
    yield takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetailsWorker)
}

export const submitCommentAsync = ({ productId, description }) => {
    const token = localStorage.getItem('token')

    return http.post(
        `/api/products/${productId}/comments`,
        {
            description,
        },
        { headers: { authorization: token } }
    )
}

export function* submitCommentWorker(action) {
    try {
        const { productId } = action.payload

        yield call(submitCommentAsync, action.payload)

        yield put(fetchProductDetailsAction({ productId }))
    } catch (e) {
        console.log(e)
    }
}

export function* submitCommentWatcher() {
    yield takeLatest(SUBMIT_COMMENT, submitCommentWorker)
}

export function* productsSaga() {
    yield all([call(fetchProductsWatcher), call(fetchProductDetailsWatcher), call(submitCommentWatcher)])
}
