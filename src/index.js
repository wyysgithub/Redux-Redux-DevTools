/**
 * 使用 store 管理状态
 * 分发 action
 */
import store from './store'
import {addCart,updateCart,deleteCart} from "./actions/cart-action";

/**
 * 集成react
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

// const App = <h1>这是一段定义在index里的话</h1>;

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


//监听状态
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addCart('test',2));
store.dispatch(updateCart('test',5));
store.dispatch(deleteCart('test'));

unsubscribe();
