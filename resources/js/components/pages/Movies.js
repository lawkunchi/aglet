import React, { Component } from 'react';
import axios from 'axios';
import MovieResults from '../movies/MovieResults';
import { Button, TextField, Card } from "@material-ui/core";


export default class Movies extends Component {

      constructor(props) {
            super(props);
            this.onChangeHandler = this.onChangeHandler.bind(this);
            this.state = {
                  movies: [],
                  loading: true,
                  value: ''
            }
      }

      componentDidMount() {
            axios.get('http://127.0.0.1:8000/api/movies/search/adventure')
                  .then(res => {
                    
                        this.setState({
                              movies: res.data,
                              loading: false
                        })
                  } )
                  .catch((err) => {
                        console.log(err);
                  });
      }

      onChangeHandler = async e => {

            let queryString = e.target.value;
            if(e.target.value == "") {
                  queryString = "adventure";
            }

            this.setState({ loading: true });
            axios.get('http://127.0.0.1:8000/api/movies/search/'+queryString)
                  .then(res => {
                    
                        this.setState({
                              movies: res.data
                        })
                  } )
                  .catch((err) => {
                        console.log(err);
                  });

            this.setState({ value: e.target.value });
      };

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
                        {this.state.loading == true ? <div className="loader"></div> : 
                         <div className="row mt-5">
                                { movies.map(movie => {
                                      return <MovieResults  movie={movie} key={movie.id}/>
                                  })}
                         </div>
                         }

                  </div>
          );
      }
}

