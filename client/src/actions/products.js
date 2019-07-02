import {
    FETCH_PRODUCTS,
    RECEIVE_PRODUCTS,
    FETCH_PRODUCT_DETAILS,
    SET_PRODUCT_DETAILS,
    SET_COMMENTS,
    SUBMIT_COMMENT,
    RESET_CURRENT_PRODUCT,
} from '../constants/products'

export const fetchProductsAction = () => ({
    type: FETCH_PRODUCTS,
    payload: {},
})

export const receiveProductsAction = ({ products }) => ({
    type: RECEIVE_PRODUCTS,
    payload: { products },
})

export const fetchProductDetailsAction = ({ productId }) => ({
    type: FETCH_PRODUCT_DETAILS,
    payload: { productId },
})

export const setProductDetailsAction = ({ product }) => ({
    type: SET_PRODUCT_DETAILS,
    payload: { product },
})

export const setCommentsAction = ({ comments }) => ({
    type: SET_COMMENTS,
    payload: { comments },
})

export const submitCommentAction = ({ description, productId }) => ({
    type: SUBMIT_COMMENT,
    payload: { description, productId },
})

export const resetCurrentProductAction = () => ({
    type: RESET_CURRENT_PRODUCT,
    payload: {},
})
