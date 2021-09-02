import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import getDataReducer from './reducers/user.reducer';

const initialState = {
    getData : {
        data : null,
        loading : false,
        isError : false
    }
}

const reducers = combineReducers({

    getData : getDataReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
