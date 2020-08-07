import React, { Component } from 'react';
import axios from 'axios'

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieItem: []
    }
  }

  componentWillMount = () =>{

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

    this.setState=request.send();
  }

  render() { 
    return (
      <ul className="trending-list">
        {this.state.movieItem.map((item)=>
          <li>{item.movie.title}</li>
        )}
      </ul>
    );
  }
}
 
export default Trending;