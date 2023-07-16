import { FETCH_POST_FAILURE,FETCH_POST_SUCCESS,FETCH_POST_FROM_API } from "./actionType";

export let fetchApi = () => {
   return {
        type:FETCH_POST_FROM_API
   } 
}

export let fetchSuccess = (data) => {
    return {
        type:FETCH_POST_SUCCESS,
        payload:data
    }
}

export let fetchFailure = (error) => {
    return {
        type:FETCH_POST_FAILURE,
        payload:error
    }
}

export const fetchData = () => { //data fetching using fetch method
    return async (dispatch) => {
        try{
            const response = await fetch('https://reqres.in/api/users?page=2'); 
            const data = await response.json();
            console.log('fetch',data.data);

            dispatch(fetchSuccess(data))
        }
        catch(error){
            dispatch(fetchFailure(error))
        }
    }
}