import {combineReducers} from 'redux'
import moviesTrendingStore from './movieReducer'

const movieTrending = combineReducers({moviesTrendingStore})

export default movieTrending