import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { productsSaga } from './products'
import { cartSaga } from './cart'
import { ordersSaga } from './orders'

export default function* rootSaga() {
    yield all([authSaga(), productsSaga(), cartSaga(), ordersSaga()])
}
