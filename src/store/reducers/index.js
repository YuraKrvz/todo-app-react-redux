import {combineReducers} from 'redux';
import reducerInc from './reducerInc.js';
import reducerTodos from './reducerTodos.js';



export default combineReducers({
   reducerInc,
   //reducerInc: reducerInc,
   reducerTodos,
   //reducerTodos: reducerTodos,
})