/**
 * 存储区
 */
import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART} from '../actions/cart-action';

const initStates = {
    cart: [
        {product: '产品A', quantity: 2},
        {product: '产品B', quantity: 4},
        {product: '产品C', quantity: 3},
    ]
}

export const cartReducer = function (state = initStates, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        default:
            return state
    }
}