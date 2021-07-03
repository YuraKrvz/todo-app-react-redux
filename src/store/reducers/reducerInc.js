import {INCREMENT} from '@store/constants/actionTypes';

const initialState = {count: 0};

const reducerInc = (state = initialState, action) => {
   switch(action.type){
      case INCREMENT: return {
         ...state,
         count: state.count + action.payload,
      }
      default: return state;
   }
}

export default reducerInc;