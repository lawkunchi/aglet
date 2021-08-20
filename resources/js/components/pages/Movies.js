import React, { Component } from 'react';
import axios from 'axios';
import { search } from '../../utils'
import MovieResults from '../movies/MovieResults';
import { Button, TextField, Card } from "@material-ui/core";


export default class Movies extends Component {

      constructor(props) {
            super(props);
            this.onChangeHandler = this.onChangeHandler.bind(this);
            this.renderMovies = this.renderMovies.bind(this);
            this.state = {
                  movies: [],
                  loading: '',
                  value: ''
            }
      }

      onChangeHandler = async e => {

            this.setState({ loading: true });
            axios.get('http://127.0.0.1:8000/api/movies/search/'+e.target.value)
                  .then(res => {
                    
                        this.setState({
                              movies: res.data,
                              loading: false
                        })
                  } )
                  .catch((err) => {
                        console.log(err);
                  });

            this.setState({ value: e.target.value });
      };

      renderMovies = () => {
            this.setState({
                  preview_class_name: "",
                  movie_id: id,
            })
            console.log("clicked", id);


            let movies = <h1>There's no movies</h1>;

            if (this.state.movies) {
                  movies = "";
                  { movies.map(movie => {
                        <div className="col-2">
                              movies += <Movie  movie={movie} key={movie.id}/>
                        </div>
                  })};
            }

            return movies;
      }

      render() {

            const movies = this.state.movies;

            return (
                  <div className="movie-search container">
                        <div className="movie-search container movie-list w-50 mx-auto">
                              <Card>
                              {/*<input value={this.state.value} onChange={e => this.onChangeHandler(e)} placeholder="Type something to search"/>*/}
                              <TextField id="filled-basic" label="Type a movie name" variant="filled"  value={this.state.value} onChange={e => this.onChangeHandler(e)} />
                             
                               </Card>
                               
                        </div>

                         <div className="row mt-5">
                               { movies.map(movie => {
                                      return <MovieResults  movie={movie} key={movie.id}/>
                                  })}
                               </div>

                  </div>
          );
      }
}

