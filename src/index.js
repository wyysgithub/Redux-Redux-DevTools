/**
 * 使用 store 管理状态
 * 分发 action
 */
import store from './store'
import {addCart,updateCart,deleteCart} from "./actions/cart-action";

console.log(store.getState())

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addCart('test',2));
store.dispatch(updateCart('test',5));
store.dispatch(deleteCart('test'));

unsubscribe();
