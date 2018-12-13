/**
 * 将所需方法导出，供reducer使用
 * @type {string}
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addCart(product,quantity) {
    return{
        type:ADD_TO_CART,
        payload:{product,quantity}
    }
}
export function updateCart(product,quantity) {
    return{
        type:UPDATE_CART,
        payload:{product,quantity}
    }
}
export function deleteCart(product) {
    return{
        type:DELETE_FROM_CART,
        payload:{product}
    }
}