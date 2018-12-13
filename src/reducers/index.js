/**
 *  里层index.js
 *  只用来集成各个reducer
 */
import {combineReducers} from 'redux';
import {cartReducer} from './cart-reducer'
import productsReducer from './products-reducer'


const rootReducer = combineReducers({
    cart:cartReducer,
    product:productsReducer
})
export default rootReducer;
