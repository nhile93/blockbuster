import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movieTrending from './rootReducer'

const middleWare = [thunk]
const store = createStore(movieTrending, applyMiddleware(...middleWare))
store.subscribe(()=> console.log(store.getState))

export default store