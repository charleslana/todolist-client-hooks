import {combineReducers} from 'redux';
import todo from './todo';
import toast from './toast';

const rootReducer = combineReducers({
    todo,
    toast
});

export default rootReducer;