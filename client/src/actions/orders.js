import { PURCHASE, APPROVE_ORDER, DECLINE_ORDER, FETCH_ORDERS, SET_ORDERS } from '../constants/orders'

export const purchaseAction = ({ products }) => ({
    type: PURCHASE,
    payload: { products },
})

export const approveOrder = ({ orderId }) => ({
    type: APPROVE_ORDER,
    payload: { orderId },
})

export const declineOrder = ({ orderId }) => ({
    type: DECLINE_ORDER,
    payload: { orderId },
})

export const fetchOrders = () => ({
    type: FETCH_ORDERS,
    payload: {},
})

export const setOrders = ({ orders }) => ({
    type: SET_ORDERS,
    payload: { orders },
})
