/**
 * 定义 store 集中管理状态
 */
import {createStore} from 'redux';
// 用于redux调试
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/index'

let store = createStore(rootReducer,composeWithDevTools());

export default store;