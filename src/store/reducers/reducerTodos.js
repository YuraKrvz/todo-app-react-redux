import { ADD_TODO, REMOVE_TODO, CHANGE_COMPLETED } from "../constants/actionTypes";

const initialState = {
   todos: [],
};

const reducerTodos = (state = initialState, action) => {
   switch(action.type){
      case ADD_TODO: return {
         ...state, 
         todos: [...state.todos, action.payload]
      }
      case REMOVE_TODO: return {
         ...state,
         todos: state.todos.filter(item => item.id !== action.payload),
      }
      case CHANGE_COMPLETED: return {
         ...state,
         todos: state.todos.map(item => {
            if(item.id === action.payload.id){
               item.completed = !action.payload.completed
            }
         return item;
         
         }),
      }
      
      default: return state;
   }
}

export default reducerTodos;