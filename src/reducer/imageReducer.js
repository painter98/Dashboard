import { FETCH_POST_FAILURE,FETCH_POST_FROM_API,FETCH_POST_SUCCESS } from "../actions/actionType";

let initialState = { //initial state of state variables
    loading:false,
    error:'',
    data:[]
}

export const ImageReducer = (state=initialState,action) => { //actions needs to be done and the current state

  switch(action.type){
    case FETCH_POST_FROM_API:
        return {
            ...state,loading:true
        }
    case FETCH_POST_SUCCESS:
        return {
            ...state,loading:false,data:action.payload,error:''
        }
    case FETCH_POST_FAILURE:
        return {
            ...state,loading:false,data:[],error:action.payload
        }
    default:
        return state;
  }
}

