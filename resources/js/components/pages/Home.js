import React, { Component } from 'react';
import  Banner from '../banner/Banner.js';
import  CategoryList from '../categories/CategoryList.js';
import  MovieList from '../movies/MovieList.js';

export default class Landing extends Component {

      constructor(props) {
            super(props);

            this.state = { 
                  popular_movies: [],
                  upcoming_movies: [],
                  favorite_movies: [],
                  poster: '',
                  title: '',
                  movie_id: 527774,
                  loading: true,
            };
      }

      componentDidMount() {
           axios.get('http://127.0.0.1:8000/api/movies/category/popular')
            .then(res => {
                  this.setState({
                        popular_movies: res.data.data,
                  })
            } )
            .catch((err) => {
                  console.log(err);
            });


             axios.get('http://127.0.0.1:8000/api/movies/category/upcoming')
            .then(res => {
                  this.setState({
                        upcoming_movies: res.data.data,
                  })
            } )
            .catch((err) => {
                  console.log(err);
            })

            // Favorite Movies

            const user_id = localStorage.getItem('user-id');

            if(user_id !== null && user_id !== "" ) {
                   axios.get('http://127.0.0.1:8000/api/movies/user/favorite/'+user_id)
                  .then(res => {
                        this.setState({
                              favorite_movies: res.data,
                        })
                  } )
                  .catch((err) => {
                        console.log(err);
                  })
             }


            axios.get('http://127.0.0.1:8000/api/movies/latest/527774')
            .then(res => {
                  this.setState({
                        poster: 'https://image.tmdb.org/t/p/original'+res.data.poster,
                        title: res.data.title,
                        movie_id: res.data.movie_id
                  })
            } )
            .catch((err) => {
                  console.log(err);
            })

            this.setState({
                        loading: false,
                  })
            
      }

      render() {

            const token = localStorage.getItem('user-token');

            return (

                  <>
                        {
                              this.state.loading == true ? 
                                    <div className="loader">
                                    </div> : 
                        

                                    <div style={{ backgroundImage: `url(${this.state.poster})`, paddingBottom: '100px' }}>
                                          <Banner poster={this.state.poster} title={this.state.title} movie_id={this.state.movie_id}/>

                                          <div className="dark-section container-fluid">
                                                <CategoryList/>

                                                {
                                                      token !== null && token !== "" ?
                                                      <MovieList movies ={this.state.favorite_movies} title="My List" />:
                                                      ""
                                                }

                                                <MovieList movies ={this.state.popular_movies} title="Popular" />

                                                <MovieList movies ={this.state.upcoming_movies} title="Coming Soon" />
                                          </div>

                                    </div>
                        }

                  </>
            
            );
      }
}
