import * as actions from '../actions/showModalAction';

const initialState = {
  showModal:false
}

export const showModalReducer = (state=initialState,action)=>{
  if(action.type === actions.TOGGLE_MODAL){
    return Object.assign({},state,{showModal:!state.showModal});
  }
  return state;
}