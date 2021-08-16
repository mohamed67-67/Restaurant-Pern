import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RestaurantReducer from './Reducer'
import ReviewsReducer from './ReviewsReducer'

const RootReducer = combineReducers({
    RestaurantReducer,
    ReviewsReducer
})

const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default Store