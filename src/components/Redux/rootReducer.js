import {combineReducers} from 'redux'
import moviesTrendingStore from './movieReducer'

const movieTrendingReducer = combineReducers({moviesTrendingStore})

export default movieTrendingReducer