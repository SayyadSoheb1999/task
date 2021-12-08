import {combineReducers,createStore} from 'redux'
import { ItemReducer } from './ItemReducer'

export const ConfigStore=()=>{
    const res = createStore(combineReducers({ItemReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return res;
}