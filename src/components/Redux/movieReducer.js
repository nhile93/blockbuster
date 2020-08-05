import {GET_ALL_MOVIES_TRENDING} from './actionType'

const defaultState = {
  moviesTrending: []
}

export default function moviesTrendingStore(state = defaultState, action) {

  switch(action.type){
    case GET_ALL_MOVIES_TRENDING:
      console.log("GET_ALL_MOVIES_TRENDING =>", action.moviesTrending)
      return {...state, moviesTrending: action.moviesTrending}
    
    default: return state
  }
}