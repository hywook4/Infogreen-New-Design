import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const middleware = [thunk];
const initialState = {};


const store = createStore(combineReducers,
                          initialState,
                          compose(applyMiddleware(...middleware)
                          ));
export default store;
