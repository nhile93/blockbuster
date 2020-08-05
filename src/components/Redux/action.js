import axios from 'axios'

import {GET_ALL_MOVIES_TRENDING} from './actionType'

/*===================== API =====================*/
export function fetchMoviesTrending(){
  return function(dispatch){
    let url = "https://api.trakt.tv/movies/popular"
    let headers = {
      'trakt-api-version': 2,
      'Access-Control-Allow-Origin': '*'
    }
    axios.get(url, headers)
    .then(res => {
      console.log("fetch trending movies", res.data)
      dispatch(fetchMoviesTrending_Success)
    })
    .catch(function(error){
      console.log(error)
    })
  }
}
/*===================== API =====================*/


/*=================== Action ===================*/
export function fetchMoviesTrending_Success(moviesTrending){
  return{
    type: GET_ALL_MOVIES_TRENDING,
    moviesTrending
  }
}
/*=================== Action ===================*/