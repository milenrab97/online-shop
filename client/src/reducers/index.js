import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import cart from './cart'

export default combineReducers({
    auth,
    products,
    cart,
})
