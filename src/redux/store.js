import {createStore, combineReducers} from 'redux';
import { TodoStateReducer } from './reducers';

export default createStore(combineReducers({ TodoStateReducer }), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
