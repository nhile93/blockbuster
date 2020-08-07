import axios from 'axios'

import {GET_ALL_MOVIES_TRENDING} from './actionType'

/*===================== API =====================*/
export function fetchMoviesTrending(){
  return function(dispatch){
    // let url = "https://api.trakt.tv/movies/popular"
    // let headers = {
    //   'Content-Type': 'application/json',
    //   'trakt-api-version': '2',
    //   'trakt-api-key': '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628'
    // }
    // axios.get(url, headers)
    // .then(res => {
    //   console.log("fetch trending movies", res.data)
    //   dispatch(fetchMoviesTrending_Success)
    // })
    // .catch(function(error){
    //   console.log(error)
    // })

    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.trakt.tv/movies/trending');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('trakt-api-version', '2');
    request.setRequestHeader('trakt-api-key', '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
      }
    };

    request.send();
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