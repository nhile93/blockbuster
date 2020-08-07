import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movieTrendingReducer from './rootReducer'

const middleWare = [thunk]
const store = createStore(movieTrendingReducer, applyMiddleware(...middleWare))
store.subscribe(()=> console.log(store.getState))

export default store