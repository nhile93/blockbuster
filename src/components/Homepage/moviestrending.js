import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'

import {fetchMoviesTrending} from '../Redux/action'

class MoviesTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount = () =>{
    const {fetchMoviesTrending} = this.props
    fetchMoviesTrending()
  }

  render() { 
    return (
      <ul>
        {this.props.moviesTrendingItems.map((item) =>
          <li>{item.movie.title}</li>
        )}
      </ul>
    );
  }
}
 
const mapStateToProps = state =>({
  moviesTrendingItems: state.moviesTrendingStore.moviesTrending
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchMoviesTrending}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (MoviesTrending);
