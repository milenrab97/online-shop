import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { productsSaga } from './products'

export default function* rootSaga() {
    yield all([authSaga(), productsSaga()])
}
