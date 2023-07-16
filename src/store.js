import {applyMiddleware,createStore} from 'redux';
import {ImageReducer} from "./reducer/imageReducer";
import thunk from 'redux-thunk';

const store = createStore(ImageReducer,applyMiddleware(thunk));
export default store;