import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import accountReducer from '../reducers/accountReducer'
import billsReducer from '../reducers/billsReducer'
import customersReducer from '../reducers/customersReducer'
import productsReducer from '../reducers/productsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        account : accountReducer,
        products : productsReducer,
        customers : customersReducer,
        bills : billsReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore