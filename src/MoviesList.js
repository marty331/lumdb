import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const API_KEY = process.env.REACT_APP_MD_KEY;


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
 

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${this.props.match.params.page}`);
      console.log('movie lisst ', res);
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.movies);
    return (
      <MovieGrid>
        {this.state.movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
      </MovieGrid>


    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
