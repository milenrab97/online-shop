import { SET_ORDERS } from '../constants/orders'

const initialState = {
    orders: [],
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
            }
        default:
            return state
    }
}

export const ordersSelector = state => state.orders.orders

export default ordersReducer
